import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freelance Developer — Web App, Desktop & Booking Systems" },
      { name: "description", content: "Sviluppo web app, software desktop e sistemi di prenotazione per attività locali, B&B, ristoranti e business digitali in Calabria." },
      { property: "og:title", content: "Freelance Developer — Calabria" },
      { property: "og:description", content: "Trasformo idee in software che funziona." },
    ],
  }),
  component: Index,
});

const stack = ["Java", "JavaFX", "Angular", "Spring Boot", "TypeScript", "HTML", "CSS", "SQL", "Git", "GitHub"];

interface Project {
  name: string;
  type: string;
  stack: string[];
  description: string;
  status: string;
  done: boolean;
  images?: string[];
}

const projects: Project[] = [
  {
    name: "GeoShield",
    type: "Desktop App",
    stack: ["Java", "JavaFX"],
    description: "Tool OSINT sviluppato in JavaFX per raccogliere, organizzare e visualizzare informazioni geolocalizzate da fonti pubbliche.",
    status: "Completato",
    done: true,
    images: [
      "/images/Geoshield1.png",
      "/images/Geoshield2.png",
    ],
  },
  {
    name: "Afterglow",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "CSS"],
    description: "Web app per una discoteca che permette agli utenti di prenotare, consultare eventi e interagire con il locale tramite una piattaforma moderna e intuitiva.",
    status: "Quasi completato",
    done: true,
    images: [
      "/images/afterglow1.png",
      "/images/afterglow2.png",

    ],
  },
  {
    name: "B&B Booking System",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "CSS"],
    description: "Sistema di prenotazione per B&B e strutture ricettive con gestione richieste, disponibilità e interfaccia semplice per clienti e proprietari.",
    status: "In sviluppo",
    done: false,
  },
  {
    name: "Restaurant Booking & Menu",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "CSS"],
    description: "Sistema per ristoranti e locali con menù digitale, prenotazione tavoli e gestione richieste.",
    status: "In sviluppo",
    done: false,
    images: [
      "/images/restaurant-1.jpg",
    ],
  },
];

const services = [
  { icon: Globe, title: "Siti web e landing page", desc: "Pagine veloci, curate nei dettagli e pensate per convertire visitatori in clienti." },
  { icon: Code2, title: "Web app personalizzate", desc: "Applicazioni su misura per gestire processi, clienti e dati del tuo business." },
  { icon: Calendar, title: "Sistemi di prenotazione", desc: "Booking online per B&B, ristoranti e locali — semplice per i clienti, completo per te." },
  { icon: Monitor, title: "Software desktop", desc: "Gestionali e tool desktop in Java/JavaFX, costruiti attorno al tuo flusso di lavoro." },
  { icon: Wrench, title: "Supporto e manutenzione", desc: "Aggiornamenti, fix e nuove feature dopo il rilascio. Sono qui anche dopo la consegna." },
  { icon: Briefcase, title: "Consulenza tecnica", desc: "Ti aiuto a scegliere lo stack giusto e a evitare scelte costose all'inizio del progetto." },
];

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Progetti" },
    { href: "#services", label: "Servizi" },
    { href: "#contact", label: "Contatti" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-gradient font-semibold">{"<WalterFida/dev>"}</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <Button asChild size="sm" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="#contact">Contattami</a>
        </Button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, oklch(0.78 0.14 178 / 0.18), transparent), radial-gradient(40% 40% at 90% 30%, oklch(0.72 0.16 160 / 0.12), transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5">Web Developer</Badge>
          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5">Software Developer</Badge>
          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5">Freelance</Badge>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
          Trasformo idee in <span className="text-gradient">software che funziona.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Sviluppo web app, software desktop e sistemi di prenotazione per attività locali e business digitali.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)]">
            <a href="#projects">
              Vedi i miei progetti <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Contattami</a>
          </Button>
        </div>
        <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground font-mono">
          <MapPin className="h-4 w-4 text-primary" />
          Calabria, Italia
          <span className="mx-2">·</span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponibile per progetti
          </span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">01 — About</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Codice pratico, prodotti utili.
          </h2>
        </div>
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sono uno studente di informatica al terzo anno e sviluppo applicazioni web e desktop con un approccio
            pratico e orientato al risultato. Mi interessa creare prodotti utili, semplici da usare e costruiti
            per risolvere problemi reali.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Lavoro indifferentemente su <span className="text-foreground">frontend</span> e{" "}
            <span className="text-foreground">backend</span>: dal design dell'interfaccia fino al database,
            mi occupo dell'intero ciclo di sviluppo.
          </p>
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 rounded-md border border-border bg-secondary/60 text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const openProject = (p: Project) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <section id="projects" className="px-6 py-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">02 — Progetti</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Cosa ho costruito.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Una selezione di progetti completati e in sviluppo, dal desktop alle web app.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted-foreground mb-1">{p.type}</p>
                  <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
                </div>
                <span
                  className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border ${
                    p.done
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-amber-400/30 bg-amber-400/5 text-amber-300"
                  }`}
                >
                  {p.done ? <CheckCircle2 className="h-3 w-3" /> : <Loader2 className="h-3 w-3 animate-spin" />}
                  {p.status}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-4 text-sm">
                <button
                  onClick={() => openProject(p)}
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Dettagli <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a href="#" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" /> Codice
                </a>
              </div>
            </article>
          ))}
        </div>
        <Dialog open={open} onOpenChange={(val) => { if (!val) setSelected(null); setOpen(val); }}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selected?.name}</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p className="text-sm text-muted-foreground mb-4">{selected?.type} — {selected?.status}</p>
            </DialogDescription>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{selected?.description}</p>
              {selected?.images && (
                <div className="mt-4 grid grid-cols-1 gap-3">
                  {selected.images.map((src, i) => (
                    <img key={i} src={src} alt={`${selected.name} screenshot ${i + 1}`} className="w-full rounded-md border object-cover" />
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">03 — Servizi</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Cosa posso fare per te.</h2>
          <p className="mt-4 text-muted-foreground">
            Servizi pensati per attività locali, B&B, ristoranti e piccoli business che vogliono digitalizzarsi
            con qualcosa di solido — non un template.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Messaggio inviato! Ti rispondo a breve.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  const channels = [
    { icon: Mail, label: "Email", value: "walterfida9@gmail.com", href: "mailto:walterfida9@gmail.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "+39 324 605 4939", href: "https://wa.me/3246054939" },
    { icon: Linkedin, label: "LinkedIn", value: "/walterfida/Dev", href: "https://www.linkedin.com/in/walter-fida-a7749b1bb/" },
    { icon: Github, label: "GitHub", value: "@Walterinho07", href: "https://github.com" },
  ];

  return (
    <section id="contact" className="px-6 py-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">04 — Contatti</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hai un progetto in mente?
          </h2>
          <p className="mt-4 text-2xl text-muted-foreground">Parliamone.</p>
          <div className="mt-10 space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono text-muted-foreground">{c.label}</p>
                  <p className="truncate">{c.value}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8 h-fit"
        >
          <div className="space-y-4">
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
              <Input required name="name" placeholder="Mario Rossi" className="mt-2 bg-background/50" />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <Input required type="email" name="email" placeholder="mario@esempio.it" className="mt-2 bg-background/50" />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Messaggio</label>
              <Textarea
                required
                name="message"
                rows={5}
                placeholder="Raccontami il tuo progetto, anche solo a grandi linee."
                className="mt-2 bg-background/50 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Invia messaggio <ArrowRight className="ml-1 h-4 w-4" /></>}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border/50">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} — Freelance Developer, Calabria.</p>
        <p>Costruito con cura. Caffè incluso.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
