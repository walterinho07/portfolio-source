import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Server,
  Monitor,
  MapPin,
  Sparkles,
  TerminalSquare,
  Layers,
  Activity,
  CheckCircle,
} from "lucide-react";

const stackList = [
  "Java",
  "Spring Boot",
  "JavaFX",
  "Angular",
  "TypeScript",
  "React",
  "SQL & PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "Git & GitHub",
];

/* -------------------------------------------------------------------------
   Spatial Bento Tile with 3D Mouse Tilt & Specular Shine
   ------------------------------------------------------------------------- */
function SpatialBentoTile({
  children,
  className = "",
  delay = "0ms",
  isVisible = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  isVisible?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.16,
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
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
        transitionDelay: delay,
      }}
      className={`relative rounded-3xl apple-card overflow-hidden group hover:border-white/35 transition-all duration-700 ease-out shadow-2xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-30 hidden lg:block"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(circle 300px at ${spotlight.x}% ${spotlight.y}%, rgba(255, 255, 255, 0.25), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}

export function BentoAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 py-28 border-t border-white/5 scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full apple-glass text-xs font-mono text-zinc-300 mb-3 border border-white/10 shadow-sm">
              <TerminalSquare className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>01 — Architettura & Metodo</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Ingegneria essenziale, <span className="text-gradient">risultati concreti.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
            Nessun sovraccarico. Progetto codice solido, manutenibile e orientato alla risoluzione
            di problemi reali.
          </p>
        </div>

        {/* Animated Bento Grid with 3D Spatial Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Bento Tile 1: Main Philosophy (Spans 2 cols) */}
          <SpatialBentoTile
            className="md:col-span-2 lg:col-span-2 p-7 sm:p-8"
            delay="100ms"
            isVisible={isVisible}
          >
            {/* Subtle Specular Horizon Shine */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-zinc-100 shadow-md group-hover:bg-white/10 group-hover:scale-105 transition-all">
                  <Code2 className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                    Profilo Professionale
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">Walter Fida</h3>
                </div>
              </div>

              {/* Pulsing Live Badge */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Active Dev</span>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-6">
              Studente al terzo anno di <span className="text-white font-medium">Informatica</span>{" "}
              con una forte vocazione per lo sviluppo full-stack e desktop. Mi occupo dell'intero
              ciclo di vita del software: dalla modellazione del database e delle API backend fino
              alla progettazione di interfacce web reattive e applicativi nativi fluidi.
            </p>

            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-200">
                <Sparkles
                  className="w-3.5 h-3.5 text-sky-400 animate-spin"
                  style={{ animationDuration: "6s" }}
                />
                Approccio pragmatico
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Design patterns
              </span>
              <span>·</span>
              <span>Codice leggibile & documentato</span>
            </div>
          </SpatialBentoTile>

          {/* Bento Tile 2: Backend Architecture */}
          <SpatialBentoTile className="p-7" delay="200ms" isVisible={isVisible}>
            <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 mb-5 group-hover:scale-105 group-hover:border-sky-400/30 transition-all">
              <Server className="w-5 h-5 text-sky-400" />
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
              Backend Platform
            </span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">Java & Spring Boot</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              Architetture robuste, logica di business transazionale, gestione sicura delle sessioni
              e database relazionali SQL.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-sky-400">
              <Activity className="w-3 h-3" />
              <span>High Throughput</span>
            </div>
          </SpatialBentoTile>

          {/* Bento Tile 3: Desktop Systems */}
          <SpatialBentoTile className="p-7" delay="300ms" isVisible={isVisible}>
            <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 mb-5 group-hover:scale-105 group-hover:border-emerald-400/30 transition-all">
              <Monitor className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
              Desktop & OSINT
            </span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">JavaFX & Tools</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              Applicativi desktop nativi ad alte prestazioni per analisi geospaziale da fonti aperte
              e software gestionali locali.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Native Execution</span>
            </div>
          </SpatialBentoTile>

          {/* Bento Tile 4: Frontend & Typography (Spans 2 cols) */}
          <SpatialBentoTile
            className="md:col-span-2 lg:col-span-2 p-7"
            delay="400ms"
            isVisible={isVisible}
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:scale-105 transition-all">
                <Layers className="w-5 h-5 text-zinc-100" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                  Interfacce Utente Reattive
                </span>
                <h3 className="text-lg font-bold text-white">Angular, React & TypeScript</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
              Applicazioni web tipizzate con cura dei dettagli, animazioni a 60 FPS, accessibilità e
              performance elevate.
            </p>
            <div className="flex flex-wrap gap-2">
              {stackList.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpatialBentoTile>

          {/* Bento Tile 5: Location & Availability (Spans 2 cols) */}
          <SpatialBentoTile
            className="md:col-span-2 lg:col-span-2 p-7 flex flex-col justify-between"
            delay="500ms"
            isVisible={isVisible}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:scale-105 transition-all">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                    Base Operativa
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Calabria, Italia · Remoto Globale
                  </h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponibile subito
              </span>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Supporto attività locali e aziende su tutto il territorio nazionale con sviluppo
              dedicato da remoto, comunicazione costante e deliverable chiari.
            </p>
          </SpatialBentoTile>
        </div>
      </div>
    </section>
  );
}
