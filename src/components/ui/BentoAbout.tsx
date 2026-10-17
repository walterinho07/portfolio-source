import React from "react";
import {
  Code2,
  Server,
  Monitor,
  MapPin,
  Sparkles,
  TerminalSquare,
  Layers,
  Cpu,
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

export function BentoAbout() {
  return (
    <section id="about" className="relative px-6 py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass text-xs font-mono text-zinc-400 mb-3">
              <TerminalSquare className="w-3.5 h-3.5 text-zinc-300" />
              01 — Architettura & Metodo
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Ingegneria essenziale, <span className="text-gradient">risultati concreti.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
            Nessun sovraccarico. Progetto codice solido, manutenibile e orientato alla risoluzione
            di problemi reali.
          </p>
        </div>

        {/* Apple Style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Bento Tile 1: Main Philosophy (Spans 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl apple-card p-7 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Profilo Professionale
                </span>
                <h3 className="text-xl font-bold text-white">Walter Fida</h3>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              Studente al terzo anno di <span className="text-white font-medium">Informatica</span>{" "}
              con una forte vocazione per lo sviluppo full-stack e desktop. Mi occupo dell'intero
              ciclo di vita del software: dalla modellazione del database e delle API backend fino
              alla progettazione di interfacce web e applicativi nativi fluidi.
            </p>
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-200">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                Approccio pragmatico
              </span>
              <span>·</span>
              <span>Design patterns</span>
              <span>·</span>
              <span>Codice leggibile</span>
            </div>
          </div>

          {/* Bento Tile 2: Backend Architecture */}
          <div className="rounded-2xl apple-card p-7 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 mb-5">
              <Server className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Backend Platform
            </span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">Java & Spring Boot</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Architetture robuste, logica di business transazionale, gestione sicura delle sessioni
              e database relazionali SQL.
            </p>
          </div>

          {/* Bento Tile 3: Desktop Systems */}
          <div className="rounded-2xl apple-card p-7 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 mb-5">
              <Monitor className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Desktop & OSINT
            </span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">JavaFX & Tools</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Applicativi desktop ad alte prestazioni per analisi geospaziale da fonti aperte e
              software gestionali locali.
            </p>
          </div>

          {/* Bento Tile 4: Frontend & Typography (Spans 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl apple-card p-7 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Interfacce Utente
                </span>
                <h3 className="text-lg font-bold text-white">Angular, React & TypeScript</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
              Applicazioni web tipizzate con cura maniacale per i dettagli, performance e
              accessibilità.
            </p>
            <div className="flex flex-wrap gap-2">
              {stackList.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-white/25 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Tile 5: Location & Availability (Spans 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl apple-card p-7 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Base Operativa
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Calabria, Italia · Remoto Globale
                  </h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponibile per progetti
              </span>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Supporto attività locali e aziende su tutto il territorio nazionale con sviluppo
              dedicato da remoto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
