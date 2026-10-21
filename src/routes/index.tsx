import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { DeconstructingTerminal } from "@/components/ui/DeconstructingTerminal";
import { BentoAbout } from "@/components/ui/BentoAbout";
import Faq from "@/components/ui/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Walter Fida — Software & Full-Stack Developer" },
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
  images?: string[];
  github?: string;
}

const projects: Project[] = [
  {
    name: "GeoShield",
    type: "Desktop Application",
    stack: ["Java", "JavaFX", "OSINT", "CSS"],
    description:
      "Tool OSINT e geolocalizzazione sviluppato in JavaFX per raccogliere, analizzare e visualizzare intelligence da fonti aperte su mappe interattive.",
    longDescription:
      "GeoShield è un applicativo desktop nativo incentrato sull'intelligence geospaziale. Permette agli operatori di raccogliere dati da sorgenti pubbliche, normalizzarli e visualizzarli con una dashboard ad alta efficienza costruita interamente in JavaFX con architettura modulare.",
    status: "Completato",
    done: true,
    images: ["/images/Geoshield1.png", "/images/Geoshield2.png"],
    github: "https://github.com/Walterinho07/GeoShield",
  },
  {
    name: "Afterglow",
    type: "Web Application",
    stack: ["Angular", "Spring Boot", "TypeScript", "SQL"],
    description:
      "Piattaforma web completa per discoteche e club: gestione eventi, prenotazione tavoli, liste d'ingresso e interfaccia interattiva.",
    longDescription:
      "Afterglow digitalizza l'esperienza dei locali notturni. Il backend in Spring Boot gestisce la disponibilità in tempo reale e le prenotazioni, mentre il frontend Angular offre un'interfaccia dark, accattivante e ottimizzata per smartphone.",
    status: "Quasi completato",
    done: true,
    images: ["/images/afterglow1.png", "/images/afterglow2.png"],
    github: "https://github.com/Walterinho07/Afterglow",
  },
  {
    name: "B&B Booking System",
    type: "Web Application",
    stack: ["Angular", "Spring Boot", "TypeScript", "Tailwind CSS"],
    description:
      "Sistema di prenotazione e gestione per strutture ricettive: calendario disponibilità, preventivi istantanei e pannello proprietario.",
    longDescription:
      "Soluzione concepita per B&B e case vacanza che desiderano rendersi indipendenti dalle piattaforme di terzi. Include sincronizzazione calendario, gestione camere, notifiche e pannello di controllo completo per i gestori.",
    status: "In sviluppo",
    done: false,
    images: ["/images/BBPAGINA1.png", "/images/bbpagina2.png", "/images/bbpagina3.png"],
    github: "https://github.com/Walterinho07/BB-Booking-System",
  },
  {
    name: "Restaurant Booking & Menu",
    type: "Web Application",
    stack: ["Angular", "Spring Boot", "TypeScript", "PostgreSQL"],
    description:
      "Piattaforma digitale per ristorazione con menù interattivo, prenotazione tavoli con fasce orarie e gestione comande.",
    longDescription:
      "Applicazione web full-stack studiata per ristoranti e pizzerie: riduce i no-show grazie a conferme automatiche e permette ai clienti di consultare allergeni, piatti del giorno e disponibilità tavoli in tempo reale.",
    status: "In sviluppo",
    done: false,
    images: ["/images/BBPAGINA1.png"],
    github: "https://github.com/Walterinho07/Restaurant-Booking",
  },
];

const services = [
  {
    icon: Globe,
    title: "Siti Web & Piattaforme Digitali",
    desc: "Siti ad altissime prestazioni, veloci e responsive, curati nel dettaglio visivo per valorizzare la tua presenza online e convertire i visitatori.",
    highlights: ["Design minimale & rifinito", "SEO & Core Web Vitals", "Interazioni fluide"],
  },
  {
    icon: Code2,
    title: "Web App Full-Stack su Misura",
    desc: "Applicazioni complete frontend + backend: logica di business in Spring Boot, API REST ben documentate e interfacce reattive in Angular o React.",
    highlights: ["Architettura scalabile", "Database SQL relazionali", "Codice tipizzato"],
  },
  {
    icon: Calendar,
    title: "Sistemi di Prenotazione Indipendenti",
    desc: "Booking online proprietario per B&B, locali e ristoranti. Riduci le commissioni di portali terzi e gestisci le disponibilità con semplicità.",
    highlights: ["Calendari real-time", "Notifiche automatiche", "Pannello di controllo"],
  },
  {
    icon: Monitor,
    title: "Software Desktop in Java & JavaFX",
    desc: "Applicativi gestionali nativi, tool di monitoraggio o strumenti specialistici (es. tool OSINT) progettati per girare in locale con massime performance.",
    highlights: [
      "Interfacce JavaFX fluide",
      "Accesso hardware locale",
      "Zero overhead del browser",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenzione & Supporto Tecnico",
    desc: "Risoluzione bug, aggiornamenti periodici, ottimizzazione delle query e deploy su server o cloud. Sono al tuo fianco anche dopo il rilascio.",
    highlights: ["Intervento rapido", "Backup e stabilità", "Sviluppi evolutivi"],
  },
  {
    icon: Briefcase,
    title: "Consulenza Architetturale",
    desc: "Ti guido nella scelta dello stack tecnologico corretto evitando errori architetturali costosi prima ancora di scrivere la prima riga di codice.",
    highlights: ["Analisi di fattibilità", "Stack tecnologico ottimale", "Efficienza nei costi"],
  },
];

/* =========================================================================
   1. NAVIGATION BAR (Full-Width Sticky Header with Reading Progress Bar)
   ========================================================================= */
function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#architecture", label: "Architettura" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Progetti" },
    { href: "#services", label: "Servizi" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contatti" },
  ];

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full bg-[#0a0a0c]/90 backdrop-blur-3xl border-b border-white/10 shadow-2xl transition-all">
      {/* Scroll Reading Progress Bar along the bottom edge */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 transition-all duration-150 ease-out z-10"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto max-w-6xl px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-sm tracking-tight group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="font-bold text-white tracking-wide group-hover:text-zinc-300 transition">
            Walter Fida
          </span>
          <span className="text-zinc-500 font-mono text-xs hidden sm:inline">&lt;dev/&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-medium text-zinc-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-semibold px-5 h-9 shadow-sm transition active:scale-95"
          >
            <a href="#contact">Contattami</a>
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0c0c10]/95 backdrop-blur-3xl px-6 py-4 shadow-2xl">
          <nav className="flex flex-col gap-2 font-medium text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/10 text-zinc-300 hover:text-white transition"
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
   2. HERO SECTION
   ========================================================================= */
function Hero() {
  return (
    <section id="top" className="relative pt-16 sm:pt-24 pb-20 px-6 overflow-hidden scroll-mt-28">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
        {/* Apple Precision Status Capsule */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full apple-glass text-xs font-mono text-zinc-300 mb-8 border border-white/10 shadow-xl animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Software & Full-Stack Developer</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400">Calabria, IT</span>
        </div>

        {/* Apple Style Monolithic Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl">
          Codice essenziale. <br />
          <span className="text-gradient">Software che funziona.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Sviluppo web app ad alte prestazioni, backend robusti in{" "}
          <span className="text-white font-medium">Java & Spring Boot</span> e applicativi desktop
          nativi in <span className="text-white font-medium">JavaFX</span>.
        </p>

        {/* Minimal CTAs */}
        <div className="mt-8 flex flex-wrap gap-3.5 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-medium text-sm px-7 h-11 transition shadow-lg active:scale-95"
          >
            <a href="#projects" className="flex items-center gap-2">
              Esplora i progetti <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full apple-glass border-white/10 hover:bg-white/10 text-white font-medium text-sm px-7 h-11 transition active:scale-95"
          >
            <a href="#contact">Parliamo del tuo progetto</a>
          </Button>
        </div>

        {/* Specifications Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            100% Architettura Pulita
          </span>
          <span className="text-zinc-700">|</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Full-Stack + Desktop Native
          </span>
          <span className="text-zinc-700">|</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Disponibilità Immediata
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. ARCHITECTURE SECTION (Deconstructing Terminal on Scroll)
   ========================================================================= */
function ArchitectureSection() {
  return (
    <section id="architecture" className="relative px-6 py-12 border-t border-white/5 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <DeconstructingTerminal />
      </div>
    </section>
  );
}

/* =========================================================================
   4. INDIVIDUAL SCROLL-REVEALED PROJECT CARD
   ========================================================================= */
function ScrollProjectCard({
  project,
  index,
  total,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  onOpen: (p: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15, // Only triggers when this specific card enters the viewport!
        rootMargin: "0px 0px -40px 0px",
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group relative rounded-3xl apple-card p-7 sm:p-8 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-between hover:border-white/35 hover:-translate-y-2 shadow-2xl ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 blur-none"
          : "opacity-0 translate-y-24 scale-[0.93] blur-sm"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider">
                [{`0${index + 1}`} / {`0${total}`}]
              </span>
              <span className="text-zinc-600">·</span>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                {project.type}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              {project.name}
            </h3>
          </div>

          {/* Status Indicator */}
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${
              project.done
                ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-400"
                : "border-amber-500/25 bg-amber-500/10 text-amber-300"
            }`}
          >
            {project.done ? (
              <CheckCircle2 className="h-3.5 w-3.5" />
            ) : (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            )}
            {project.status}
          </span>
        </div>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Screenshot Frame with Micro-Zoom */}
        {project.images && project.images.length > 0 && (
          <div
            onClick={() => onOpen(project)}
            className="cursor-pointer mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black/60 relative group/img aspect-video"
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-mono text-zinc-200 flex items-center gap-1.5 bg-black/70 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-lg">
                Esplora screenshot <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 group-hover:border-white/25 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-5 border-t border-white/10 flex items-center justify-between text-sm">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="font-medium text-white hover:text-zinc-300 inline-flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
        >
          Dettagli progetto
          <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white inline-flex items-center gap-1.5 transition-colors font-mono text-xs"
          >
            <Github className="h-4 w-4" />
            Codice GitHub
          </a>
        )}
      </div>
    </article>
  );
}

/* =========================================================================
   5. PROJECTS SECTION CONTAINER
   ========================================================================= */
function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openProject = (p: Project) => {
    setSelected(p);
    setActiveImageIndex(0);
    setOpen(true);
  };

  return (
    <section id="projects" className="relative px-6 py-28 border-t border-white/5 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass text-xs font-mono text-zinc-400 mb-3 border border-white/10">
              <Layers className="w-3.5 h-3.5 text-zinc-300" />
              02 — Showcase Progetti
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Cosa ho <span className="text-gradient">costruito.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
            Una selezione di progetti reali sviluppati con cura per architettura, velocità e design.
            I progetti si svelano singolarmente durante lo scorrimento verso il basso.
          </p>
        </div>

        {/* Project Cards (Individually Scroll-Revealed) */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <ScrollProjectCard
              key={p.name}
              project={p}
              index={idx}
              total={projects.length}
              onOpen={openProject}
            />
          ))}
        </div>

        {/* Modal Gallery Dialog */}
        <Dialog
          open={open}
          onOpenChange={(val) => {
            if (!val) setSelected(null);
            setOpen(val);
          }}
        >
          <DialogContent className="max-w-3xl apple-card border border-white/15 bg-zinc-950/95 backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-8">
            <DialogHeader>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  {selected?.type}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-zinc-300">
                  {selected?.status}
                </span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-bold mt-2">
                {selected?.name}
              </DialogTitle>
            </DialogHeader>

            <DialogDescription className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-2">
              {selected?.longDescription || selected?.description}
            </DialogDescription>

            {/* Screenshots */}
            {selected?.images && selected.images.length > 0 && (
              <div className="mt-6 space-y-3">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <img
                    src={selected.images[activeImageIndex]}
                    alt={`${selected.name} preview`}
                    className="w-full h-auto max-h-[380px] object-contain mx-auto"
                  />
                </div>

                {selected.images.length > 1 && (
                  <div className="flex gap-2.5 overflow-x-auto pb-1">
                    {selected.images.map((src, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`rounded-xl overflow-hidden border p-0 w-24 h-16 shrink-0 transition ${
                          idx === activeImageIndex
                            ? "border-white ring-2 ring-white/20"
                            : "border-white/10 opacity-50 hover:opacity-100"
                        }`}
                      >
                        <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Modal Bottom Footer */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selected?.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
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
                  className="rounded-xl apple-glass border-white/15 hover:bg-white/10"
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
   6. SERVICES & CAPABILITIES
   ========================================================================= */
function Services() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative px-6 py-28 border-t border-white/5 scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 max-w-2xl transition-all duration-700 ease-out ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass text-xs font-mono text-zinc-400 mb-3 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            03 — Servizi & Competenze
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Soluzioni progettate per <span className="text-gradient">durare.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Dalla digitalizzazione di attività locali fino ad architetture scalabili: sviluppo
            software stabile, veloce e senza dipendenze fragili.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className={`rounded-3xl apple-card p-7 transition-all duration-700 ease-out hover:border-white/25 hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg ${
                isRevealed
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-[0.98]"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg mb-2.5 text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1.5">
                {s.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
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
   7. CONTACT SECTION (Apple Minimal Communication Hub)
   ========================================================================= */
function Contact() {
  const [sending, setSending] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Messaggio inviato con successo! Ti risponderò entro 24 ore.");
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
      label: "GitHub",
      value: "@Walterinho07",
      href: "https://github.com/Walterinho07",
    },
  ];

  return (
    <section id="contact" className="relative px-6 py-28 border-t border-white/5 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass text-xs font-mono text-zinc-400 mb-3 border border-white/10">
              <Mail className="w-3.5 h-3.5 text-zinc-300" />
              04 — Iniziamo a Collaborare
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Hai un progetto? <br />
              <span className="text-gradient">Parliamone.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-md">
              Che si tratti di un gestionale desktop, di un sistema di prenotazione o di una nuova
              web app, scrivimi per una prima valutazione senza impegno.
            </p>

            <div className="mt-10 space-y-3 max-w-md">
              {channels.map((c) => (
                <div
                  key={c.label}
                  className="group flex items-center justify-between gap-4 rounded-2xl apple-card p-4 hover:border-white/20 transition-all"
                >
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 min-w-0 flex-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-200 flex items-center justify-center shrink-0">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-zinc-500">{c.label}</p>
                      <p className="font-semibold text-sm truncate text-white group-hover:text-zinc-300 transition-colors">
                        {c.value}
                      </p>
                    </div>
                  </a>

                  {c.copyValue ? (
                    <button
                      type="button"
                      onClick={() => copyToClipboard(c.copyValue!, c.label)}
                      title="Copia negli appunti"
                      className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      {copiedChannel === c.label ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  ) : (
                    <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors shrink-0 mr-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl apple-card p-7 sm:p-9 border border-white/10 shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Invia un messaggio diretto
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Compila i campi qui sotto. Rispondo rapidamente a ogni richiesta.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Nome o Azienda
                  </label>
                  <Input
                    required
                    name="name"
                    placeholder="Mario Rossi"
                    className="mt-2 rounded-xl bg-white/[0.03] border-white/10 focus-visible:ring-white/20 h-11 text-white placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Indirizzo Email
                  </label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="mario@azienda.it"
                    className="mt-2 rounded-xl bg-white/[0.03] border-white/10 focus-visible:ring-white/20 h-11 text-white placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Dettagli del Progetto
                  </label>
                  <Textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Descrivi brevemente l'idea, le tempistiche o gli obiettivi del software..."
                    className="mt-2 rounded-xl bg-white/[0.03] border-white/10 focus-visible:ring-white/20 resize-none text-white placeholder:text-zinc-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 h-12 font-medium mt-2 transition active:scale-95 shadow-lg cursor-pointer"
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
   8. FOOTER
   ========================================================================= */
function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>© {new Date().getFullYear()} Walter Fida · Software & Full-Stack Developer</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Walterinho07"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/walter-fida-a7749b1bb/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a href="#top" className="text-white hover:underline">
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
    <div className="relative min-h-screen bg-[#0a0a0c] text-white selection:bg-white/20 selection:text-white">
      {/* Floating Lenses & Ambient Apple Space */}
      <AntigravityBackground />

      {/* Solid Sticky Navigation Header */}
      <Nav />

      {/* Page Sections */}
      <main>
        <Hero />
        <ArchitectureSection />
        <BentoAbout />
        <Projects />
        <Services />
        <Faq />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
