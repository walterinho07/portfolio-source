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
  ArrowDown,
} from "lucide-react";

export function DeconstructingTerminal() {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "cli">("profile");
  const [copied, setCopied] = useState(false);
  const [isDeconstructed, setIsDeconstructed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile view to disable heavy 3D transforms on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll position of the section to trigger smooth decomposition
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress between when section enters and reaches center
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

      if (progress > 0.45 && !isDeconstructed) {
        setIsDeconstructed(true);
      } else if (progress < 0.2 && isDeconstructed) {
        setIsDeconstructed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDeconstructed]);

  const copySnippet = () => {
    setCopied(true);
    navigator.clipboard?.writeText("git clone https://github.com/Walterinho07/walter-portfolio");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={containerRef} className="relative w-full py-8 sm:py-12 transition-all duration-700">
      {/* Interactive Control Pill (Apple Minimal Dynamic Island Style) */}
      <div className="flex flex-wrap items-center justify-between gap-3 max-w-xl mx-auto mb-6 px-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>Architettura Software</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-500">
            {isDeconstructed ? "Vista Decomposta (Exploded)" : "Terminale Compatto"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsDeconstructed(!isDeconstructed)}
          className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full apple-glass text-zinc-300 hover:text-white hover:border-white/25 transition-all cursor-pointer shadow-sm active:scale-95"
        >
          {isDeconstructed ? (
            <>
              <Minimize2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Compatta Terminale</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Decomponi Vista 3D</span>
            </>
          )}
        </button>
      </div>

      {/* Main Perspective Container */}
      <div className="md:perspective-1400 w-full max-w-5xl mx-auto">
        {!isDeconstructed ? (
          /* ==============================================================
             STATE A: COMPACT MONOLITHIC APPLE TERMINAL
             ============================================================== */
          <div className="relative max-w-2xl mx-auto group px-2 sm:px-0">
            {/* Soft Titanium Reflected Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-2xl opacity-40 group-hover:opacity-60 transition duration-700" />

            {/* Apple Floating Satellite Pods */}
            <div className="hidden sm:flex absolute -top-4 -right-3 z-20 items-center gap-2 px-3 py-1 rounded-full apple-glass border border-white/10 text-[11px] font-mono text-zinc-300 shadow-xl animate-float-slow">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Core Engine Active</span>
            </div>

            <div className="relative rounded-2xl apple-card overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              {/* macOS Window Title Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-zinc-950/60 border-b border-white/10 select-none">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]/90 border border-[#ff5f56]/30 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]/90 border border-[#ffbd2e]/30 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]/90 border border-[#27c93f]/30 inline-block" />
                  <span className="ml-1.5 font-mono text-[11px] text-zinc-400 hidden md:inline">
                    walter@developer-studio: ~
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 font-mono text-xs overflow-x-auto py-0.5">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs whitespace-nowrap transition ${
                      activeTab === "profile"
                        ? "bg-white/10 text-white font-medium"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <FileCode2 className="w-3.5 h-3.5 text-sky-400" />
                    developer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs whitespace-nowrap transition ${
                      activeTab === "stack"
                        ? "bg-white/10 text-white font-medium"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-zinc-300" />
                    stack.json
                  </button>
                  <button
                    onClick={() => setActiveTab("cli")}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs whitespace-nowrap transition ${
                      activeTab === "cli"
                        ? "bg-white/10 text-white font-medium"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    status.sh
                  </button>
                </div>

                <button
                  onClick={copySnippet}
                  title="Copia negli appunti"
                  className="text-zinc-400 hover:text-white transition p-1 shrink-0 ml-1"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Code Surface */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[260px] sm:min-h-[290px] bg-black/40">
                {activeTab === "profile" && (
                  <div className="space-y-1.5 text-zinc-300">
                    <p>
                      <span className="text-zinc-500">// Walter Fida — Software Architecture</span>
                    </p>
                    <p>
                      <span className="text-sky-400 font-semibold">export const</span>{" "}
                      <span className="text-white font-semibold">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">fullName</span>:{" "}
                      <span className="text-zinc-200">"Walter Fida"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">focus</span>:{" "}
                      <span className="text-zinc-200">"Full-Stack & Desktop Applications"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">coreTechnologies</span>: [
                      <span className="text-sky-300">"Java"</span>,{" "}
                      <span className="text-sky-300">"Spring Boot"</span>,{" "}
                      <span className="text-zinc-300">"Angular"</span>,{" "}
                      <span className="text-zinc-300">"JavaFX"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">degree</span>:{" "}
                      <span className="text-zinc-200">"Computer Science (3rd Year)"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">approach</span>:{" "}
                      <span className="text-emerald-300">"Modular, robust, production-ready"</span>,
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-1.5 text-zinc-300">
                    <p>&#123;</p>
                    <p className="pl-4">
                      <span className="text-sky-400">"backendEngine"</span>: &#123;
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"framework"</span>:{" "}
                      <span className="text-zinc-200">"Spring Boot 3"</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"languages"</span>: [
                      <span className="text-zinc-200">"Java"</span>,{" "}
                      <span className="text-zinc-200">"SQL"</span>],
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">"features"</span>:{" "}
                      <span className="text-zinc-200">"REST APIs, Security, ORM"</span>
                    </p>
                    <p className="pl-4">&#125;,</p>
                    <p className="pl-4">
                      <span className="text-sky-400">"frontendSystems"</span>: [
                      <span className="text-zinc-200">"Angular"</span>,{" "}
                      <span className="text-zinc-200">"TypeScript"</span>,{" "}
                      <span className="text-zinc-200">"React"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-400">"desktopPlatform"</span>:{" "}
                      <span className="text-zinc-200">"JavaFX Native Solutions"</span>
                    </p>
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
                      ✓ Spring Boot services healthy
                      <br />
                      ✓ Angular & TypeScript client assets bundle-optimized
                      <br />✓ JavaFX runtime validated (GeoShield OSINT engine ready)
                    </div>
                    <div className="pt-2 text-emerald-400 pl-3">
                      &gt; All software modules operational.
                    </div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-3 sm:px-4 py-2.5 bg-zinc-950/80 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Clean Architecture
                  </span>
                  <span className="hidden sm:inline">TypeScript · UTF-8</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <span className="hidden sm:inline">Scorri verso il basso per decomporre</span>
                  <span className="sm:hidden">Scorri ↓</span>
                  <ArrowDown className="w-3 h-3 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ==============================================================
             STATE B: DECONSTRUCTED / EXPLODED 3D VIEW (Mobile-Optimized)
             ============================================================== */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 transition-all duration-700 px-2 sm:px-0">
            {/* Card 1: Backend Core Module */}
            <div
              className="relative rounded-2xl apple-card p-6 border border-white/10 shadow-2xl transition-all duration-500 hover:border-sky-400/40 hover:-translate-y-1.5"
              style={
                isMobile
                  ? undefined
                  : {
                      transform:
                        "perspective(1000px) rotateY(-4deg) rotateX(2deg) translateZ(30px)",
                    }
              }
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                  <Server className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  MOD-01 // BACKEND
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Java & Spring Boot Core</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                Architettura a microservizi e monolite modulare. Gestione delle transazioni dati,
                sicurezza JWT e persistenza SQL scalabile per piattaforme affidabili.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs font-mono text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Framework</span>
                  <span className="text-white font-medium">Spring Boot 3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Lingua Base</span>
                  <span className="text-white font-medium">Java 21 LTS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Integrazione</span>
                  <span className="text-sky-400 font-medium">RESTful APIs</span>
                </div>
              </div>
            </div>

            {/* Card 2: Interface Studio Module (Centerpiece) */}
            <div
              className="relative rounded-2xl apple-card p-6 border border-white/15 shadow-2xl transition-all duration-500 hover:border-white/30 hover:-translate-y-1.5"
              style={
                isMobile
                  ? undefined
                  : {
                      transform: "perspective(1000px) translateZ(60px) scale(1.02)",
                    }
              }
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-300 px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                  MOD-02 // FRONTEND
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Angular & TypeScript Studio</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                Interfacce utente tipizzate, reattive e fluide. Stato applicativo pulito, design ad
                alta usabilità e componenti riutilizzabili per web app enterprise.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs font-mono text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">UI Stack</span>
                  <span className="text-white font-medium">Angular & React</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Tipizzazione</span>
                  <span className="text-white font-medium">TypeScript Strict</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Esperienza</span>
                  <span className="text-emerald-400 font-medium">60 FPS Smooth</span>
                </div>
              </div>
            </div>

            {/* Card 3: Desktop & Intelligence Module */}
            <div
              className="relative rounded-2xl apple-card p-6 border border-white/10 shadow-2xl transition-all duration-500 hover:border-emerald-400/40 hover:-translate-y-1.5"
              style={
                isMobile
                  ? undefined
                  : {
                      transform: "perspective(1000px) rotateY(4deg) rotateX(2deg) translateZ(30px)",
                    }
              }
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  MOD-03 // NATIVE
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">JavaFX Desktop Systems</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                Software nativo per analisi geospaziale OSINT e gestionali locali. Esecuzione
                diretta senza overhead del browser con accesso efficiente alle risorse di sistema.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs font-mono text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">GUI Tooling</span>
                  <span className="text-white font-medium">JavaFX Platform</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Specializzazione</span>
                  <span className="text-white font-medium">OSINT Tool GeoShield</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Esecuzione</span>
                  <span className="text-emerald-400 font-medium">Offline Native</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
