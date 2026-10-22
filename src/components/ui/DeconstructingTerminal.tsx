import React, { useState, useEffect, useRef } from "react";
import {
  Server,
  Layers,
  Terminal,
  FileCode2,
  Shield,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Cpu,
  Database,
  Globe,
  Radio,
  Play,
  ArrowRight,
} from "lucide-react";

/* -------------------------------------------------------------------------
   Interactive 3D Spatial Tilt Card Component
   Tracks cursor relative to card center and applies real-time rotateX/rotateY
   and dynamic specular spotlight reflection
   ------------------------------------------------------------------------- */
function SpatialCard({
  children,
  className = "",
  baseTransform = "",
  isMobile = false,
}: {
  children: React.ReactNode;
  className?: string;
  baseTransform?: string;
  isMobile?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7; // max 7 deg tilt
    const rotateY = ((x - centerX) / centerX) * 7;

    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={
        isMobile
          ? undefined
          : {
              transform: `${baseTransform} rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transformStyle: "preserve-3d",
            }
      }
    >
      {/* Dynamic Specular Spotlight Sheen */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(circle 320px at ${spotlight.x}% ${spotlight.y}%, rgba(255, 255, 255, 0.35), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

/* =========================================================================
   MAIN DECONSTRUCTING TERMINAL WORKSTATION
   ========================================================================= */
export function DeconstructingTerminal() {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "cli">("profile");
  const [copied, setCopied] = useState(false);
  const [isDeconstructed, setIsDeconstructed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [apiSimulating, setApiSimulating] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile view to adjust 3D rotations for smaller viewports
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth scroll tracking with generous hysteresis to prevent layout jumping
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // When top of section reaches middle of viewport, smooth deconstruct
          if (rect.top < windowHeight * 0.45 && rect.bottom > windowHeight * 0.25) {
            setIsDeconstructed(true);
          } else if (rect.top > windowHeight * 0.75) {
            setIsDeconstructed(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copySnippet = () => {
    setCopied(true);
    navigator.clipboard?.writeText("git clone https://github.com/walterinho07/portfolio-source");
    setTimeout(() => setCopied(false), 2000);
  };

  const simulateApiTest = () => {
    setApiSimulating(true);
    setApiResponse(null);
    setTimeout(() => {
      setApiSimulating(false);
      setApiResponse("200 OK · 14ms · PostgreSQL Pool: 8/10 active connections");
    }, 600);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 transition-all duration-700 overflow-visible"
    >
      {/* =========================================================================
          TOP CONTROL BAR & DYNAMIC TELEMETRY CAPSULE
          ========================================================================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-10 px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shadow-inner">
            <Cpu className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <span className="font-semibold text-white">Architettura Software</span>
              <span className="text-zinc-600">/</span>
              <span className="text-sky-400">
                {isDeconstructed ? "Vista Decomposta 3D Spaziale" : "Terminale Monolitico"}
              </span>
            </div>
            <p className="text-[11px] font-mono text-zinc-500">
              {isDeconstructed
                ? "Moduli distribuiti in 3D: Backend, Frontend & Desktop Nativo"
                : "Scorri in basso o usa il toggle per decomporre l'architettura"}
            </p>
          </div>
        </div>

        {/* Interactive Mode Toggle Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsDeconstructed(!isDeconstructed)}
            className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full apple-glass text-zinc-200 hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-lg active:scale-95 border border-white/15"
          >
            {isDeconstructed ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Compatta Terminale</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Decomponi Vista 3D Spaziale</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* =========================================================================
          PERSPECTIVE STAGE (Full-Width Cinematic Canvas)
          ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 perspective-stage-1200">
        {!isDeconstructed ? (
          /* ==============================================================
             STATE A: COMPACT MONOLITHIC 3D TERMINAL (Xcode / macOS Style)
             ============================================================== */
          <div className="relative max-w-3xl mx-auto transition-all duration-700 ease-out">
            {/* Ambient 3D Volumetric Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-sky-500/10 via-white/5 to-transparent blur-3xl opacity-60" />

            {/* Floating 3D Satellite Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass border border-white/15 text-xs font-mono text-zinc-200 shadow-2xl animate-float-slow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Stack Runtime Operational</span>
            </div>

            <SpatialCard
              isMobile={isMobile}
              baseTransform="perspective(1200px) rotateX(2deg) translateY(0px)"
              className="relative rounded-3xl apple-card border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/70 border-b border-white/10 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                  <span className="ml-2 font-mono text-xs text-zinc-400 hidden sm:inline">
                    walter@developer-studio: ~ (v21.0.4)
                  </span>
                </div>

                {/* Interactive Tabs */}
                <div className="flex items-center gap-1.5 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl transition cursor-pointer ${
                      activeTab === "profile"
                        ? "bg-white/15 text-white font-medium border border-white/10"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <FileCode2 className="w-3.5 h-3.5 text-sky-400" />
                    developer.ts
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("stack")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl transition cursor-pointer ${
                      activeTab === "stack"
                        ? "bg-white/15 text-white font-medium border border-white/10"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    stack.json
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("cli")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl transition cursor-pointer ${
                      activeTab === "cli"
                        ? "bg-white/15 text-white font-medium border border-white/10"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    bash
                  </button>
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={copySnippet}
                  title="Copia comando git"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Code Canvas Area */}
              <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm bg-black/60 min-h-[290px] leading-relaxed">
                {activeTab === "profile" && (
                  <div className="space-y-2 text-zinc-300">
                    <p>
                      <span className="text-zinc-500">// Walter Fida - Developer Identity</span>
                    </p>
                    <p>
                      <span className="text-sky-400 font-semibold">export const</span>{" "}
                      <span className="text-white font-semibold">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">fullName</span>:{" "}
                      <span className="text-emerald-300">"Walter Fida"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">specialization</span>:{" "}
                      <span className="text-emerald-300">
                        "Full-Stack Web & Desktop Java Applications"
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">coreTechnologies</span>: [
                      <span className="text-sky-300">"Java"</span>,{" "}
                      <span className="text-sky-300">"Spring Boot 3"</span>,{" "}
                      <span className="text-indigo-300">"Angular"</span>,{" "}
                      <span className="text-emerald-300">"JavaFX"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">location</span>:{" "}
                      <span className="text-zinc-200">"Calabria, IT · Remote Available"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">approach</span>:{" "}
                      <span className="text-sky-300">
                        "Clean Architecture, Modular & Robust Code"
                      </span>
                      ,
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-1.5 text-zinc-300">
                    <p>&#123;</p>
                    <p className="pl-4">
                      <span className="text-sky-400">"backendModule"</span>: &#123;
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"runtime"</span>:{" "}
                      <span className="text-zinc-200">"Java 21 LTS"</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"framework"</span>:{" "}
                      <span className="text-zinc-200">"Spring Boot 3 + Spring Security"</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"storage"</span>:{" "}
                      <span className="text-zinc-200">"PostgreSQL / Hibernate ORM"</span>
                    </p>
                    <p className="pl-4">&#125;,</p>
                    <p className="pl-4">
                      <span className="text-indigo-400">"frontendModule"</span>: &#123;
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"ecosystem"</span>: [
                      <span className="text-zinc-200">"Angular"</span>,{" "}
                      <span className="text-zinc-200">"TypeScript"</span>,{" "}
                      <span className="text-zinc-200">"React"</span>],
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"performance"</span>:{" "}
                      <span className="text-emerald-300">"60 FPS Butter-Smooth"</span>
                    </p>
                    <p className="pl-4">&#125;,</p>
                    <p className="pl-4">
                      <span className="text-emerald-400">"desktopPlatform"</span>: &#123;
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"gui"</span>:{" "}
                      <span className="text-zinc-200">"JavaFX Desktop Native"</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"specialization"</span>:{" "}
                      <span className="text-zinc-200">"GeoShield OSINT Intelligence"</span>
                    </p>
                    <p className="pl-4">&#125;</p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === "cli" && (
                  <div className="space-y-2 text-zinc-300">
                    <div>
                      <span className="text-sky-400 font-semibold">$</span> studio run
                      --verify-architecture
                    </div>
                    <div className="text-zinc-400 pl-3">
                      ✓ Spring Boot 3 microservices online [port 8080]
                      <br />
                      ✓ TypeScript client strict compilation: 0 errors
                      <br />✓ JavaFX native engine initialized (GeoShield OSINT ready)
                    </div>
                    <div className="pt-2 text-emerald-400 pl-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      &gt; Architettura software attiva e collaudata.
                    </div>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-5 py-3 bg-zinc-950/80 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Clean Architecture
                  </span>
                  <span className="hidden sm:inline text-zinc-600">·</span>
                  <span className="hidden sm:inline text-zinc-400">TypeScript / Java 21</span>
                </div>
                <div className="flex items-center gap-2 text-sky-400">
                  <span>Scorri verso il basso per espandere in 3D</span>
                  <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                </div>
              </div>
            </SpatialCard>
          </div>
        ) : (
          /* ==============================================================
             STATE B: FULL-WIDTH CINEMATIC 3D EXPLODED ARCHITECTURE
             Spans across the entire screen (max-w-7xl) with 3D perspective,
             dynamic mouse tilt, holographic data connectors and live tests.
             ============================================================== */
          <div className="relative transition-all duration-700 ease-out">
            {/* Holographic Laser Data-Bus Line (Connecting the 3 modules across desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-[2px] bg-gradient-to-r from-sky-500/40 via-indigo-500/60 to-emerald-500/40 pointer-events-none z-0">
              <div className="absolute inset-0 bg-white/20 blur-[2px] animate-pulse" />
              {/* Animated Data Packets Traveling */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-400 blur-[2px] shadow-[0_0_15px_#38bdf8] animate-float-slow"
                style={{ left: "25%" }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-400 blur-[2px] shadow-[0_0_15px_#34d399] animate-float-reverse"
                style={{ right: "25%" }}
              />
            </div>

            {/* The 3 Deconstructed Spatial Modules */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch relative z-10">
              {/* --------------------------------------------------------
                  MODULE 01: BACKEND CORE (Isometric Left Tilt)
                  -------------------------------------------------------- */}
              <SpatialCard
                isMobile={isMobile}
                baseTransform="perspective(1200px) rotateY(6deg) rotateX(2deg) translateZ(20px)"
                className="rounded-3xl apple-card p-7 sm:p-8 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between hover:border-sky-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-inner">
                      <Server className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                      MOD-01 // BACKEND
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                    Java & Spring Boot Core
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Backend robusto per gestire logica di business complessa, transazioni ACID,
                    sicurezza JWT e persistenza SQL scalabile senza fragilità.
                  </p>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 font-mono text-xs mb-6">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-sky-400" /> Database
                      </span>
                      <span className="text-white font-medium">PostgreSQL / SQL</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5 text-emerald-400" /> Endpoint
                      </span>
                      <span className="text-sky-300 font-medium">RESTful JSON APIs</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-indigo-400" /> Autenticazione
                      </span>
                      <span className="text-white font-medium">Spring Security 6</span>
                    </div>
                  </div>
                </div>

                {/* Interactive API Tester */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={simulateApiTest}
                    disabled={apiSimulating}
                    className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 hover:text-white flex items-center justify-center gap-2 transition cursor-pointer active:scale-95"
                  >
                    <Play
                      className={`w-3.5 h-3.5 text-sky-400 ${apiSimulating ? "animate-spin" : ""}`}
                    />
                    <span>{apiSimulating ? "Esecuzione test..." : "Testa API Ping / Health"}</span>
                  </button>
                  {apiResponse && (
                    <p className="mt-2 text-[11px] font-mono text-emerald-400 text-center animate-fade-in">
                      {apiResponse}
                    </p>
                  )}
                </div>
              </SpatialCard>

              {/* --------------------------------------------------------
                  MODULE 02: INTERFACE STUDIO (Center Foreground Elevation)
                  -------------------------------------------------------- */}
              <SpatialCard
                isMobile={isMobile}
                baseTransform="perspective(1200px) translateZ(60px) scale(1.02)"
                className="rounded-3xl apple-card p-7 sm:p-8 border border-white/25 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] flex flex-col justify-between hover:border-white/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-white shadow-inner">
                      <Layers className="w-6 h-6 text-indigo-300" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-300 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      MOD-02 // FRONTEND STUDIO
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                    Angular & React Frontends
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Interfacce web dinamiche, reattive e tipizzate. Architettura a componenti,
                    gestione avanzata dello stato e fluidità a 60 FPS senza compromessi.
                  </p>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 font-mono text-xs mb-6">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-indigo-400" /> Frameworks
                      </span>
                      <span className="text-white font-medium">Angular 18 & React 19</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <FileCode2 className="w-3.5 h-3.5 text-sky-400" /> Tipizzazione
                      </span>
                      <span className="text-sky-300 font-medium">TypeScript Strict Mode</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5 text-emerald-400" /> UI / Styling
                      </span>
                      <span className="text-emerald-300 font-medium">Tailwind CSS + Glass 3D</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Reactive Store Synced
                  </span>
                  <span>SSR Ready</span>
                </div>
              </SpatialCard>

              {/* --------------------------------------------------------
                  MODULE 03: NATIVE INTELLIGENCE (Isometric Right Tilt)
                  -------------------------------------------------------- */}
              <SpatialCard
                isMobile={isMobile}
                baseTransform="perspective(1200px) rotateY(-6deg) rotateX(2deg) translateZ(20px)"
                className="rounded-3xl apple-card p-7 sm:p-8 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between hover:border-emerald-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-inner">
                      <Shield className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      MOD-03 // DESKTOP NATIVE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                    JavaFX & OSINT Systems
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Software applicativo nativo ad alte prestazioni: GeoShield OSINT, applicativi di
                    intelligence geospaziale e gestionali locali a bassissimo consumo.
                  </p>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 font-mono text-xs mb-6">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Ambiente
                      </span>
                      <span className="text-white font-medium">JavaFX Desktop Platform</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-sky-400" /> Focus
                      </span>
                      <span className="text-emerald-300 font-medium">GeoShield OSINT Tool</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5 text-indigo-400" /> Esecuzione
                      </span>
                      <span className="text-white font-medium">Offline Native Speed</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-sky-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    Hardware Acceleration
                  </span>
                  <span>Zero Web Overhead</span>
                </div>
              </SpatialCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
