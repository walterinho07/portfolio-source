import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function WebGLAntigravityCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current || !containerRef.current) {
      return;
    }

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    let animationFrameId: number;
    let isVisible = true;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // 2. High-Tech Liquid Metal Mesh (Torus Knot Core)
    const coreGeometry = new THREE.TorusKnotGeometry(2.3, 0.65, 140, 32, 2, 3);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xdce3eb),
      metalness: 0.94,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      wireframe: false,
    });

    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    // Position slightly down and towards background
    coreMesh.position.set(0, 0.5, 0);
    scene.add(coreMesh);

    // 3. Concentric 3D Gyroscopic Rings (Titanium Orbitals)
    const ring1Geo = new THREE.TorusGeometry(4.3, 0.035, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(5.2, 0.025, 16, 140);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // 4. Antigravity Particle Constellation Field
    const particleCount = 1100;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0x34d399), // Emerald
      new THREE.Color(0xffffff), // Specular White
    ];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      // Spread across a deep 3D volume
      particlePositions[idx] = (Math.random() - 0.5) * 45;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 45;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 35;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particleColors[idx] = c.r;
      particleColors[idx + 1] = c.g;
      particleColors[idx + 2] = c.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    // Create a circular glowing sprite texture procedurally for particles
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = 32;
    spriteCanvas.height = 32;
    const ctx = spriteCanvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.3, "rgba(255, 255, 255, 0.7)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(spriteCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Dynamic Volumetric Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x38bdf8, 3.5, 35);
    light1.position.set(6, 6, 8);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x818cf8, 3.0, 35);
    light2.position.set(-6, -5, 6);
    scene.add(light2);

    const light3 = new THREE.PointLight(0x34d399, 2.2, 30);
    light3.position.set(0, 8, -4);
    scene.add(light3);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(0, 10, 10);
    scene.add(dirLight);

    // 6. Interaction State (Mouse & Scroll)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress = window.scrollY / maxScroll;
      }
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 7. Render Loop with Smooth Damping (Lerp)
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (Damping)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Core Liquid Metal Rotation
        coreMesh.rotation.x = elapsedTime * 0.25 + mouse.y * 0.35;
        coreMesh.rotation.y = elapsedTime * 0.35 + mouse.x * 0.45;
        coreMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.2;

        // Shift position with scroll to give depth across sections
        coreMesh.position.y = 0.5 - scrollProgress * 5.0;
        coreMesh.position.z = Math.sin(scrollProgress * Math.PI) * 1.5;

        // Gyroscopic Rings Rotation
        ring1.rotation.x = Math.PI / 3 + elapsedTime * 0.15 + mouse.y * 0.2;
        ring1.rotation.y = elapsedTime * 0.2 + mouse.x * 0.2;
        ring1.position.y = coreMesh.position.y;

        ring2.rotation.y = Math.PI / 4 - elapsedTime * 0.18 + mouse.x * 0.15;
        ring2.rotation.z = elapsedTime * 0.12 - mouse.y * 0.15;
        ring2.position.y = coreMesh.position.y;

        // Particle field floating motion
        particles.rotation.y = elapsedTime * 0.03 + mouse.x * 0.1;
        particles.rotation.x = mouse.y * 0.08;

        // Orbiting Lights to create dynamic liquid specular gleams
        light1.position.x = Math.sin(elapsedTime * 0.6) * 10 + mouse.x * 3;
        light1.position.y = Math.cos(elapsedTime * 0.5) * 8 + mouse.y * 3;
        light1.position.z = 8 + Math.sin(elapsedTime * 0.4) * 4;

        light2.position.x = Math.cos(elapsedTime * 0.5) * 10 - mouse.x * 3;
        light2.position.y = Math.sin(elapsedTime * 0.7) * 8 - mouse.y * 3;

        light3.position.x = Math.sin(elapsedTime * 0.4) * 8;
        light3.position.y = Math.cos(elapsedTime * 0.6) * 9;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup GPU memory on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      coreGeometry.dispose();
      coreMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 transition-opacity duration-1000"
      />
    </div>
  );
}
