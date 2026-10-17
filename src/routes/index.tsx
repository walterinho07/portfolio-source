import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  MapPin,
  Code2,
  Monitor,
  Globe,
  Wrench,
  Calendar,
  Briefcase,
  CheckCircle2,
  Loader2,
  ExternalLink,
  ChevronRight,
  Copy,
  Check,
  Menu,
  X,
  Layers,
  Sparkles,
  Database,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { AntigravityBackground } from "@/components/ui/AntigravityBackground";
import { DevTerminalCard } from "@/components/ui/DevTerminalCard";
import { BentoAbout } from "@/components/ui/BentoAbout";
import Faq from "@/components/ui/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Walter Fida — Software & Full-Stack Developer | Portfolio" },
      {
        name: "description",
        content:
          "Sviluppo web app moderne, software desktop in JavaFX e architetture scalabili per aziende, B&B e attività digitali in Calabria e da remoto.",
      },
      { property: "og:title", content: "Walter Fida — Software & Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Software developer specializzato in Java, Spring Boot, Angular, TypeScript e JavaFX.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

interface Project {
  name: string;
  type: string;
  stack: string[];
  description: string;
  longDescription?: string;
  status: string;
  done: boolean;
  accentColor: string;
  images?: string[];
  github?: string;
}

const projects: Project[] = [
  {
    name: "GeoShield",
    type: "Desktop App",
    stack: ["Java", "JavaFX", "OSINT", "CSS"],
    description:
      "Tool OSINT e geolocalizzazione sviluppato in JavaFX per raccogliere, analizzare e visualizzare intelligence da fonti aperte su mappe interattive.",
    longDescription:
      "GeoShield è un applicativo desktop incentrato sull'intelligence geospaziale. Permette agli operatori di raccogliere dati da sorgenti pubbliche, normalizzarli e visualizzarli con una dashboard ad alta efficienza costruita interamente in JavaFX con architettura modulare.",
    status: "Completato",
    done: true,
    accentColor: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    images: ["/images/Geoshield1.png", "/images/Geoshield2.png"],
    github: "https://github.com/Walterinho07/GeoShield",
  },
  {
    name: "Afterglow",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "SQL"],
    description:
      "Piattaforma web completa per discoteche e club: gestione eventi, prenotazione tavoli, liste d'ingresso e interfaccia interattiva.",
    longDescription:
      "Afterglow digitalizza l'esperienza dei locali notturni. Il backend in Spring Boot gestisce la disponibilità in tempo reale e le prenotazioni, mentre il frontend Angular offre un'interfaccia dark, accattivante e ottimizzata per smartphone.",
    status: "Quasi completato",
    done: true,
    accentColor: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
    images: ["/images/afterglow1.png", "/images/afterglow2.png"],
    github: "https://github.com/Walterinho07/Afterglow",
  },
  {
    name: "B&B Booking System",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "Tailwind CSS"],
    description:
      "Sistema di prenotazione e gestione per strutture ricettive: calendario disponibilità, preventivi istantanei e pannello proprietario.",
    longDescription:
      "Soluzione concepita per B&B e case vacanza che desiderano rendersi indipendenti dalle piattaforme di terzi. Include sincronizzazione calendario, gestione camere, notifiche e pannello di controllo completo per i gestori.",
    status: "In sviluppo",
    done: false,
    accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    images: ["/images/BBPAGINA1.png", "/images/bbpagina2.png", "/images/bbpagina3.png"],
    github: "https://github.com/Walterinho07/BB-Booking-System",
  },
  {
    name: "Restaurant Booking & Menu",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "PostgreSQL"],
    description:
      "Piattaforma digitale per ristorazione con menù interattivo, prenotazione tavoli con fasce orarie e gestione comande.",
    longDescription:
      "Applicazione web full-stack studiata per ristoranti e pizzerie: riduce i no-show grazie a conferme automatiche e permette ai clienti di consultare allergeni, piatti del giorno e disponibilità tavoli in tempo reale.",
    status: "In sviluppo",
    done: false,
    accentColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    images: ["/images/BBPAGINA1.png"],
    github: "https://github.com/Walterinho07/Restaurant-Booking",
  },
];

const services = [
  {
    icon: Globe,
    title: "Siti Web & Landing Page Spaziali",
    desc: "Siti ad altissime prestazioni, veloci e responsive, curati nel dettaglio visivo per valorizzare la tua presenza online e convertire i visitatori.",
    highlights: ["Design personalizzato", "SEO & Core Web Vitals", "Micro-interazioni fluide"],
  },
  {
    icon: Code2,
    title: "Web App Full-Stack su Misura",
    desc: "Applicazioni complete frontend + backend: logica di business in Spring Boot, API REST ben documentate e interfacce reattive in Angular o React.",
    highlights: ["Architettura scalabile", "Database SQL relazionali", "Codice tipizzato"],
  },
  {
    icon: Calendar,
    title: "Sistemi di Prenotazione Dedicati",
    desc: "Booking online indipendente per B&B, locali e ristoranti. Riduci le commissioni di portali terzi e gestisci le disponibilità con semplicità.",
    highlights: ["Calendari real-time", "Notifiche automatiche", "Pannello di amministrazione"],
  },
  {
    icon: Monitor,
    title: "Software Desktop in Java & JavaFX",
    desc: "Applicativi gestionali nativi, tool di monitoraggio o strumenti specialistici (es. tool OSINT) progettati per girare in locale con massime performance.",
    highlights: [
      "Interfacce JavaFX fluide",
      "Accesso hardware/file system",
      "Zero lag e alta reattività",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenzione, Supporto & Cloud",
    desc: "Risoluzione bug, aggiornamenti periodici, ottimizzazione delle query e deploy su server o cloud. Sono al tuo fianco anche dopo il rilascio.",
    highlights: ["SLA di intervento rapido", "Backup e sicurezza", "Evolutive su richiesta"],
  },
  {
    icon: Briefcase,
    title: "Consulenza Tecnica & Architettura",
    desc: "Ti guido nella scelta dello stack tecnologico corretto evitando errori architetturali costosi prima ancora di scrivere la prima riga di codice.",
    highlights: ["Analisi di fattibilità", "Scelta dello stack ottimale", "Ottimizzazione costi"],
  },
];

/* =========================================================================
   1. NAVIGATION BAR (Floating Antigravity Island Dock)
   ========================================================================= */
function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Progetti" },
    { href: "#services", label: "Servizi" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contatti" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl rounded-full glass border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] px-5 py-2.5 flex items-center justify-between pointer-events-auto backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight group">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-gradient font-bold group-hover:opacity-80 transition">
            {"<WalterFida/dev>"}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-muted-foreground">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground hover:text-cyan-300 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_var(--primary)] text-xs font-semibold px-4"
          >
            <a href="#contact">Contattami</a>
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-muted-foreground hover:text-foreground glass"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-auto max-w-sm rounded-2xl glass-card p-5 border border-white/10 shadow-2xl pointer-events-auto">
          <nav className="flex flex-col gap-3 font-medium text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* =========================================================================
   2. HERO SECTION (Spatial 2-Column with 3D DevTerminalCard)
   ========================================================================= */
function Hero() {
  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/30 text-xs font-mono text-cyan-300 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.15)] animate-float-slow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>Software & Full-Stack Developer · Calabria, IT</span>
            </div>

            {/* Main Punchy Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground">
              Trasformo idee in{" "}
              <span className="text-gradient drop-shadow-sm">software che funziona.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Progetto e sviluppo applicazioni web su misura, architetture backend affidabili in{" "}
              <span className="text-foreground font-medium">Java & Spring Boot</span>, interfacce
              moderne e software desktop nativi in{" "}
              <span className="text-foreground font-medium">JavaFX</span>.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap gap-4 items-center w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)] font-semibold text-sm px-6 h-12"
              >
                <a href="#projects" className="flex items-center gap-2">
                  Esplora i miei progetti <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/15 bg-white/5 hover:bg-white/10 text-foreground text-sm px-6 h-12 glass"
              >
                <a href="#contact">Parliamo del tuo progetto</a>
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-lg font-mono">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground mt-0.5">Codice Pulito & Manutenibile</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">Full-Stack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Front + Back + Desktop</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400">Attivo</p>
                <p className="text-xs text-muted-foreground mt-0.5">Disponibile Subito</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D DevTerminalCard */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DevTerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. PROJECTS SECTION (Spatial 3D Holo Cards & Gallery Modal)
   ========================================================================= */
function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);

  const openProject = (p: Project) => {
    setSelected(p);
    setActiveImageIndex(0);
    setFullscreenImageIndex(null);
    setOpen(true);
  };

  return (
    <section id="projects" className="relative px-6 py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3">
              <Layers className="w-3.5 h-3.5" />
              02 — Showcase Progetti
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Cosa ho <span className="text-gradient">costruito.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
            Una selezione di progetti reali e tool open source sviluppati con attenzione alle
            performance, all'architettura e alla user experience.
          </p>
        </div>

        {/* 3D Perspective Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-3xl glass-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-glow-lg)] flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-primary">
                      {p.type}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 group-hover:text-cyan-300 transition-colors">
                      {p.name}
                    </h3>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${
                      p.done
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                        : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                    }`}
                  >
                    {p.done ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-400" />
                    )}
                    {p.status}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Image Preview Thumbnail (if exists) */}
                {p.images && p.images.length > 0 && (
                  <div
                    onClick={() => openProject(p)}
                    className="cursor-pointer mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black/40 relative group/img aspect-video"
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs font-mono text-cyan-300 flex items-center gap-1">
                        Clicca per aprire la galleria <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm">
                <button
                  type="button"
                  onClick={() => openProject(p)}
                  className="font-medium text-primary hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors group/btn"
                >
                  Dettagli completi
                  <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors font-mono text-xs"
                  >
                    <Github className="h-4 w-4" />
                    Sorgente
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog
          open={open}
          onOpenChange={(val) => {
            if (!val) setSelected(null);
            setOpen(val);
          }}
        >
          <DialogContent className="max-w-3xl glass-card border border-white/15 bg-slate-950/95 backdrop-blur-2xl text-foreground rounded-3xl p-6 sm:p-8">
            <DialogHeader>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {selected?.type}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                    selected?.done
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                      : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                  }`}
                >
                  {selected?.status}
                </span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-bold mt-2">
                {selected?.name}
              </DialogTitle>
            </DialogHeader>

            <DialogDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-2">
              {selected?.longDescription || selected?.description}
            </DialogDescription>

            {/* Screenshots Gallery */}
            {selected?.images && selected.images.length > 0 && (
              <div className="mt-6 space-y-3">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <img
                    src={selected.images[activeImageIndex]}
                    alt={`${selected.name} preview`}
                    className="w-full h-auto max-h-[400px] object-contain mx-auto"
                  />
                </div>

                {/* Thumbnails */}
                {selected.images.length > 1 && (
                  <div className="flex gap-2.5 overflow-x-auto pb-1">
                    {selected.images.map((src, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`rounded-xl overflow-hidden border p-0 w-24 h-16 shrink-0 transition ${
                          idx === activeImageIndex
                            ? "border-primary ring-2 ring-primary/30"
                            : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Stack list & GitHub in Modal */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selected?.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {selected?.github && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="rounded-xl border-white/15 glass hover:bg-white/10"
                >
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono"
                  >
                    <Github className="h-4 w-4" /> Repository GitHub
                  </a>
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

/* =========================================================================
   4. SERVICES SECTION (Modular Antigravity Cards)
   ========================================================================= */
function Services() {
  return (
    <section id="services" className="relative px-6 py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            03 — Servizi per il tuo Business
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Soluzioni ingegnerizzate per <span className="text-gradient">crescere.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Dalla digitalizzazione di attività locali calabresi fino a piattaforme scalabili su
            misura: costruisco software stabile, veloce e senza dipendenze fragili.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl glass-card p-7 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-foreground group-hover:text-cyan-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              </div>

              {/* Highlights pills */}
              <div className="pt-4 border-t border-white/5 space-y-1.5">
                {s.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. CONTACT SECTION (Interactive Glass Communication Hub)
   ========================================================================= */
function Contact() {
  const [sending, setSending] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Messaggio inviato con successo! Ti ricontatterò entro 24 ore.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedChannel(label);
    toast.success(`${label} copiata negli appunti!`);
    setTimeout(() => setCopiedChannel(null), 2000);
  };

  const channels = [
    {
      icon: Mail,
      label: "Email Diretta",
      value: "info@walterfidadev.it",
      copyValue: "info@walterfidadev.it",
      href: "mailto:info@walterfidadev.it",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Rapido",
      value: "+39 327 279 1266",
      copyValue: "+393272791266",
      href: "https://wa.me/393272791266",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Walter Fida",
      href: "https://www.linkedin.com/in/walter-fida-a7749b1bb/",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "@Walterinho07",
      href: "https://github.com/Walterinho07",
    },
  ];

  return (
    <section id="contact" className="relative px-6 py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3">
              <Mail className="w-3.5 h-3.5" />
              04 — Iniziamo a Collaborare
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Hai un progetto? <br />
              <span className="text-gradient">Realizziamolo.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              Che si tratti di un gestionale desktop, di un booking system per la tua attività o di
              una nuova web app, scrivimi per una prima consulenza gratuita.
            </p>

            {/* Communication Cards */}
            <div className="mt-10 space-y-3.5 max-w-md">
              {channels.map((c) => (
                <div
                  key={c.label}
                  className="group flex items-center justify-between gap-4 rounded-2xl glass-card p-4 hover:border-primary/40 transition-colors"
                >
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 min-w-0 flex-1"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-muted-foreground">{c.label}</p>
                      <p className="font-semibold text-sm truncate text-foreground group-hover:text-cyan-300 transition-colors">
                        {c.value}
                      </p>
                    </div>
                  </a>

                  {c.copyValue ? (
                    <button
                      type="button"
                      onClick={() => copyToClipboard(c.copyValue!, c.label)}
                      title="Copia negli appunti"
                      className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition"
                    >
                      {copiedChannel === c.label ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  ) : (
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mr-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl glass-card p-7 sm:p-9 border border-white/15 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold mb-2">Invia un messaggio diretto</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Compila i campi qui sotto. Rispondo rapidamente a ogni richiesta.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Nome o Azienda
                  </label>
                  <Input
                    required
                    name="name"
                    placeholder="Es. Mario Rossi"
                    className="mt-2 rounded-xl bg-black/40 border-white/10 focus-visible:ring-primary h-11"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Indirizzo Email
                  </label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="mario@azienda.it"
                    className="mt-2 rounded-xl bg-black/40 border-white/10 focus-visible:ring-primary h-11"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Dettagli del Progetto
                  </label>
                  <Textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Descrivi brevemente l'idea, le tempistiche o gli obiettivi del software..."
                    className="mt-2 rounded-xl bg-black/40 border-white/10 focus-visible:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 h-12 shadow-[var(--shadow-glow)] font-semibold mt-2"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Invio in corso...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Invia messaggio <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6. FOOTER
   ========================================================================= */
function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>© {new Date().getFullYear()} Walter Fida · Software & Full-Stack Developer</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Walterinho07"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/walter-fida-a7749b1bb/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            LinkedIn
          </a>
          <a href="#top" className="text-primary hover:underline">
            Torna in cima ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================================
   MAIN INDEX COMPONENT
   ========================================================================= */
export default function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      {/* Zero-G Antigravity Ambient Canvas */}
      <AntigravityBackground />

      {/* Floating Island Dock Navigation */}
      <Nav />

      {/* Page Sections */}
      <main>
        <Hero />
        <BentoAbout />
        <Projects />
        <Services />
        <Faq />
        <Contact />
      </main>

      {/* Developer Footer */}
      <Footer />
    </div>
  );
}
