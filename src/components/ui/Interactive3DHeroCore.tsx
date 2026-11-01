import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Rotate3d, Eye, Box, RefreshCw } from "lucide-react";

export function Interactive3DHeroCore() {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mode, setMode] = useState<"metal" | "wireframe" | "emerald">("metal");
  const [shape, setShape] = useState<"torus" | "sphere" | "knot">("knot");
  const [isInteracting, setIsInteracting] = useState(false);

  // References for live manipulation without triggering full react re-render
  const stateRef = useRef({
    mode: "metal",
    shape: "knot",
    isDragging: false,
    prevMousePos: { x: 0, y: 0 },
    rotationVelocity: { x: 0, y: 0 },
    targetRotation: { x: 0.2, y: 0.4 },
    currentRotation: { x: 0.2, y: 0.4 },
  });

  useEffect(() => {
    stateRef.current.mode = mode;
    stateRef.current.shape = shape;
  }, [mode, shape]);

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current || !mountRef.current) {
      return;
    }

    const mount = mountRef.current;
    const canvas = canvasRef.current;

    let animId: number;
    let isComponentVisible = true;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();

    const width = mount.clientWidth || 360;
    const height = mount.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;

    // 2. Geometries
    const knotGeo = new THREE.TorusKnotGeometry(1.4, 0.45, 120, 24, 2, 3);
    const sphereGeo = new THREE.IcosahedronGeometry(1.65, 8);
    const torusGeo = new THREE.TorusGeometry(1.6, 0.5, 32, 100);

    // 3. Materials
    const metalMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xdbe3ea),
      metalness: 0.95,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 1.0,
      wireframe: false,
    });

    const emeraldMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x34d399),
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      emissive: new THREE.Color(0x064e3b),
      emissiveIntensity: 0.2,
      wireframe: false,
    });

    const wireMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
    });

    // Main 3D Mesh
    const mainMesh = new THREE.Mesh(knotGeo, metalMat);
    scene.add(mainMesh);

    // Orbital Gyroscope Rings
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.025, 16, 90);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.8, 0.02, 16, 90);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Orbiting Satellite Beacon Spheres
    const beaconGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const beaconMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const beacon1 = new THREE.Mesh(beaconGeo, beaconMat1);
    scene.add(beacon1);

    const beaconMat2 = new THREE.MeshBasicMaterial({ color: 0x34d399 });
    const beacon2 = new THREE.Mesh(beaconGeo, beaconMat2);
    scene.add(beacon2);

    // Orbiting Lights to create dynamic liquid specular reflections
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.4);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x38bdf8, 4.5, 20);
    light1.position.set(4, 4, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x818cf8, 4.0, 20);
    light2.position.set(-4, -4, 4);
    scene.add(light2);

    const light3 = new THREE.PointLight(0x34d399, 3.0, 18);
    light3.position.set(0, 5, -3);
    scene.add(light3);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(2, 6, 6);
    scene.add(dirLight);

    // 4. Pointer Drag & Interaction Handlers
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      stateRef.current.isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      stateRef.current.prevMousePos = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!stateRef.current.isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - stateRef.current.prevMousePos.x;
      const deltaY = clientY - stateRef.current.prevMousePos.y;

      stateRef.current.targetRotation.y += deltaX * 0.008;
      stateRef.current.targetRotation.x += deltaY * 0.008;

      stateRef.current.prevMousePos = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      stateRef.current.isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const mountEl = mount;
    mountEl.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    mountEl.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    const handleResize = () => {
      if (!mount || !renderer || !camera) return;
      const w = mount.clientWidth || 360;
      const h = mount.clientHeight || 360;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);
    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      isComponentVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // 5. Animation Render Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isComponentVisible) return;

      const time = clock.getElapsedTime();
      const state = stateRef.current;

      // Update geometry dynamically if changed
      if (state.shape === "knot" && mainMesh.geometry !== knotGeo) {
        mainMesh.geometry = knotGeo;
      } else if (state.shape === "sphere" && mainMesh.geometry !== sphereGeo) {
        mainMesh.geometry = sphereGeo;
      } else if (state.shape === "torus" && mainMesh.geometry !== torusGeo) {
        mainMesh.geometry = torusGeo;
      }

      // Update material dynamically if changed
      if (state.mode === "metal" && mainMesh.material !== metalMat) {
        mainMesh.material = metalMat;
      } else if (state.mode === "emerald" && mainMesh.material !== emeraldMat) {
        mainMesh.material = emeraldMat;
      } else if (state.mode === "wireframe" && mainMesh.material !== wireMat) {
        mainMesh.material = wireMat;
      }

      // Smooth Rotation Lerp (Damping)
      if (!state.isDragging) {
        state.targetRotation.y += 0.006;
        state.targetRotation.x = 0.2 + Math.sin(time * 0.5) * 0.15;
      }

      state.currentRotation.x += (state.targetRotation.x - state.currentRotation.x) * 0.08;
      state.currentRotation.y += (state.targetRotation.y - state.currentRotation.y) * 0.08;

      mainMesh.rotation.x = state.currentRotation.x;
      mainMesh.rotation.y = state.currentRotation.y;

      // Gyroscopic Rings Motion
      ring1.rotation.x = Math.PI / 3 + time * 0.25;
      ring1.rotation.y = time * 0.18;

      ring2.rotation.y = Math.PI / 4 - time * 0.22;
      ring2.rotation.z = time * 0.15;

      // Orbiting Beacons
      beacon1.position.set(
        Math.sin(time * 1.5) * 2.4,
        Math.cos(time * 1.5) * 2.4,
        Math.sin(time * 2.0) * 0.5,
      );
      beacon2.position.set(
        Math.cos(time * 1.2) * 2.8,
        Math.sin(time * 0.8) * 0.8,
        Math.sin(time * 1.2) * 2.8,
      );

      // Orbiting Lights for gleaming liquid metal reflections
      light1.position.x = Math.sin(time * 0.8) * 5;
      light1.position.y = Math.cos(time * 0.6) * 5;

      light2.position.x = Math.cos(time * 0.7) * 5;
      light2.position.y = Math.sin(time * 0.9) * 5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      mountEl.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      mountEl.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);

      knotGeo.dispose();
      sphereGeo.dispose();
      torusGeo.dispose();
      metalMat.dispose();
      emeraldMat.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      beaconGeo.dispose();
      beaconMat1.dispose();
      beaconMat2.dispose();
      renderer.dispose();
    };
  }, []);

  const resetRotation = () => {
    stateRef.current.targetRotation = { x: 0.2, y: 0.4 };
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl apple-card border border-white/20 p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
      {/* Specular Ambient Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-emerald-500/15 blur-2xl opacity-60 pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between gap-2 pb-3 mb-2 border-b border-white/10 text-xs font-mono select-none">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
          </span>
          <span className="text-white font-semibold">WebGL 3D Core</span>
          <span className="text-zinc-600">·</span>
          <span className="text-sky-300 hidden sm:inline">Three.js Engine</span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
          <span
            className={`px-2 py-0.5 rounded-full border transition-all ${
              isInteracting
                ? "bg-sky-500/20 text-sky-300 border-sky-400/40"
                : "bg-white/5 border-white/10 text-zinc-400"
            }`}
          >
            {isInteracting ? "Interazione 3D" : "Trascina per ruotare"}
          </span>
          <button
            type="button"
            onClick={resetRotation}
            title="Ripristina rotazione"
            className="p-1 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* WebGL Canvas Interactive Viewport */}
      <div
        ref={mountRef}
        className="relative w-full aspect-square max-h-[340px] sm:max-h-[380px] cursor-grab active:cursor-grabbing select-none flex items-center justify-center overflow-hidden"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Subtle Watermark Overlay */}
        <div className="absolute bottom-2 left-3 pointer-events-none text-[10px] font-mono text-zinc-600">
          3D Specular Canvas · Realtime 60FPS
        </div>
      </div>

      {/* Interactive Controls Pill Bar */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        {/* Geometry Selector */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => setShape("knot")}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              shape === "knot"
                ? "bg-white/20 text-white font-medium shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Rotate3d className="w-3 h-3 text-sky-400" />
            <span>Knot</span>
          </button>
          <button
            type="button"
            onClick={() => setShape("sphere")}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              shape === "sphere"
                ? "bg-white/20 text-white font-medium shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Sfera</span>
          </button>
          <button
            type="button"
            onClick={() => setShape("torus")}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              shape === "torus"
                ? "bg-white/20 text-white font-medium shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Box className="w-3 h-3 text-indigo-400" />
            <span>Torus</span>
          </button>
        </div>

        {/* Shading Material Selector */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => setMode("metal")}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
              mode === "metal"
                ? "bg-white/20 text-white font-medium shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Titanio
          </button>
          <button
            type="button"
            onClick={() => setMode("emerald")}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
              mode === "emerald"
                ? "bg-emerald-500/30 text-emerald-300 font-medium shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Smeraldo
          </button>
          <button
            type="button"
            onClick={() => setMode("wireframe")}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1 ${
              mode === "wireframe"
                ? "bg-sky-500/30 text-sky-300 font-medium shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Mesh</span>
          </button>
        </div>
      </div>
    </div>
  );
}
