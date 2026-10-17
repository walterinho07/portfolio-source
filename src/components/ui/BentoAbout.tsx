import React from "react";
import {
  Code2,
  Server,
  Monitor,
  Cpu,
  MapPin,
  Sparkles,
  TerminalSquare,
  Layers,
} from "lucide-react";

const stackList = [
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "JavaFX", category: "desktop" },
  { name: "Angular", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "SQL", category: "database" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "REST APIs", category: "backend" },
];

export function BentoAbout() {
  return (
    <section id="about" className="relative px-6 py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3">
              <TerminalSquare className="w-3.5 h-3.5" />
              01 — Architettura & Mindset
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Ingegneria del software, <span className="text-gradient">risultati reali.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
            Nessuna complessità inutile. Costruisco codice solido, manutenibile e orientato alla
            risoluzione di problemi concreti.
          </p>
        </div>

        {/* Spatial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Bento Tile 1: Main Philosophy (2 cols on md/lg) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-primary/40 transition duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition duration-700" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Identità
                </span>
                <h3 className="text-xl font-bold">Walter Fida</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Studente al terzo anno di{" "}
              <span className="text-foreground font-medium">Informatica</span> con una forte
              vocazione per lo sviluppo full-stack e desktop. Mi dedico all'intero ciclo di vita del
              software: dall'architettura del database fino alla progettazione di interfacce fluide
              e reattive.
            </p>
            <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Approccio pragmatico
              </span>
              <span>·</span>
              <span>Design patterns collaudati</span>
              <span>·</span>
              <span>Codice leggibile</span>
            </div>
          </div>

          {/* Bento Tile 2: Backend & Logic */}
          <div className="rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-teal-400/40 transition duration-500">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mb-5">
              <Server className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
              Backend Engine
            </span>
            <h3 className="text-lg font-bold mt-1 mb-3">Java & Spring Boot</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              API RESTful scalabili, sicurezza, gestione transazionale del database e integrazione
              con database relazionali SQL.
            </p>
          </div>

          {/* Bento Tile 3: Desktop Systems */}
          <div className="rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-indigo-400/40 transition duration-500">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-5">
              <Monitor className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
              Desktop & OSINT
            </span>
            <h3 className="text-lg font-bold mt-1 mb-3">JavaFX & Tools</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Applicativi desktop ad alte prestazioni per visualizzazione dati geografici, tool
              interni e gestionali locali.
            </p>
          </div>

          {/* Bento Tile 4: Frontend Mastery & Modern Web (Spans 2 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-cyan-400/40 transition duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Frontend & Interattività
                  </span>
                  <h3 className="text-lg font-bold">Angular, React & TypeScript</h3>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Costruisco interfacce utente tipizzate, veloci e accessibili. Gestione dello stato
              pulita, componenti riutilizzabili e animazioni calibrate per una user experience
              fluida e piacevole.
            </p>
            <div className="flex flex-wrap gap-2">
              {stackList.map((tech) => (
                <span
                  key={tech.name}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:border-primary/40 hover:text-primary transition"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Tile 5: Location & Availability (Spans 2 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-emerald-400/40 transition duration-500 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Base & Connettività
                  </span>
                  <h3 className="text-lg font-bold">Calabria, Italia · Remoto Globale</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponibile subito
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Supporto attività sul territorio calabrese (B&B, ristorazione, PMI locali) e collaboro
              da remoto con team digitali e startup su progetti software su misura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
