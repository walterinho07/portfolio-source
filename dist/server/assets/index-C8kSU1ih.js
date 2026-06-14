import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { X, ArrowRight, MapPin, CheckCircle2, Loader2, Github, Globe, Code2, Calendar, Monitor, Wrench, Briefcase, Mail, MessageCircle, Linkedin } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { toast } from "sonner";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const stack = ["Java", "JavaFX", "Angular", "Spring Boot", "TypeScript", "HTML", "CSS", "SQL", "Git", "GitHub"];
const projects = [{
  name: "GeoShield",
  type: "Desktop App",
  stack: ["Java", "JavaFX"],
  description: "Tool OSINT sviluppato in JavaFX per raccogliere, organizzare e visualizzare informazioni geolocalizzate da fonti pubbliche.",
  status: "Completato",
  done: true,
  images: ["/images/Geoshield1.png", "/images/Geoshield2.png"]
}, {
  name: "Afterglow",
  type: "Web App",
  stack: ["Angular", "Spring Boot", "TypeScript", "CSS"],
  description: "Web app per una discoteca che permette agli utenti di prenotare, consultare eventi e interagire con il locale tramite una piattaforma moderna e intuitiva.",
  status: "Quasi completato",
  done: true,
  images: ["/images/afterglow1.png", "/images/afterglow2.png"]
}, {
  name: "B&B Booking System",
  type: "Web App",
  stack: ["Angular", "Spring Boot", "TypeScript", "CSS"],
  description: "Sistema di prenotazione per B&B e strutture ricettive con gestione richieste, disponibilità e interfaccia semplice per clienti e proprietari.",
  status: "In sviluppo",
  done: false
}, {
  name: "Restaurant Booking & Menu",
  type: "Web App",
  stack: ["Angular", "Spring Boot", "TypeScript", "CSS"],
  description: "Sistema per ristoranti e locali con menù digitale, prenotazione tavoli e gestione richieste.",
  status: "In sviluppo",
  done: false,
  images: ["/images/restaurant-1.jpg"]
}];
const services = [{
  icon: Globe,
  title: "Siti web e landing page",
  desc: "Pagine veloci, curate nei dettagli e pensate per convertire visitatori in clienti."
}, {
  icon: Code2,
  title: "Web app personalizzate",
  desc: "Applicazioni su misura per gestire processi, clienti e dati del tuo business."
}, {
  icon: Calendar,
  title: "Sistemi di prenotazione",
  desc: "Booking online per B&B, ristoranti e locali — semplice per i clienti, completo per te."
}, {
  icon: Monitor,
  title: "Software desktop",
  desc: "Gestionali e tool desktop in Java/JavaFX, costruiti attorno al tuo flusso di lavoro."
}, {
  icon: Wrench,
  title: "Supporto e manutenzione",
  desc: "Aggiornamenti, fix e nuove feature dopo il rilascio. Sono qui anche dopo la consegna."
}, {
  icon: Briefcase,
  title: "Consulenza tecnica",
  desc: "Ti aiuto a scegliere lo stack giusto e a evitare scelte costose all'inizio del progetto."
}];
function Nav() {
  const links = [{
    href: "#about",
    label: "About"
  }, {
    href: "#projects",
    label: "Progetti"
  }, {
    href: "#services",
    label: "Servizi"
  }, {
    href: "#contact",
    label: "Contatti"
  }];
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-50 glass", children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto max-w-6xl px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("a", { href: "#top", className: "font-mono text-sm tracking-tight", children: /* @__PURE__ */ jsx("span", { className: "text-gradient font-semibold", children: "<WalterFida/dev>" }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, className: "hover:text-foreground transition-colors", children: l.label }, l.href)) }),
    /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "default", className: "bg-primary text-primary-foreground hover:bg-primary/90", children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contattami" }) })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative pt-36 pb-24 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 -z-10 opacity-60", style: {
      background: "radial-gradient(60% 50% at 20% 10%, oklch(0.78 0.14 178 / 0.18), transparent), radial-gradient(40% 40% at 90% 30%, oklch(0.72 0.16 160 / 0.12), transparent)"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "border-primary/40 text-primary bg-primary/5", children: "Web Developer" }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "border-primary/40 text-primary bg-primary/5", children: "Software Developer" }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "border-primary/40 text-primary bg-primary/5", children: "Freelance" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl", children: [
        "Trasformo idee in ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "software che funziona." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "Sviluppo web app, software desktop e sistemi di prenotazione per attività locali e business digitali." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxs("a", { href: "#projects", children: [
          "Vedi i miei progetti ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contattami" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center gap-2 text-sm text-muted-foreground font-mono", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-primary" }),
        "Calabria, Italia",
        /* @__PURE__ */ jsx("span", { className: "mx-2", children: "·" }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
          ] }),
          "Disponibile per progetti"
        ] })
      ] })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "px-6 py-24 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary mb-3", children: "01 — About" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight", children: "Codice pratico, prodotti utili." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Sono uno studente di informatica al terzo anno e sviluppo applicazioni web e desktop con un approccio pratico e orientato al risultato. Mi interessa creare prodotti utili, semplici da usare e costruiti per risolvere problemi reali." }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: [
        "Lavoro indifferentemente su ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "frontend" }),
        " e",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "backend" }),
        ": dal design dell'interfaccia fino al database, mi occupo dell'intero ciclo di sviluppo."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3", children: "Stack" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: stack.map((t) => /* @__PURE__ */ jsx("span", { className: "font-mono text-xs px-3 py-1.5 rounded-md border border-border bg-secondary/60 text-secondary-foreground", children: t }, t)) })
      ] })
    ] })
  ] }) });
}
function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const openProject = (p) => {
    setSelected(p);
    setOpen(true);
  };
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "px-6 py-24 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary mb-3", children: "02 — Progetti" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight", children: "Cosa ho costruito." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md", children: "Una selezione di progetti completati e in sviluppo, dal desktop alle web app." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: projects.map((p) => /* @__PURE__ */ jsxs("article", { className: "group relative rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-mono text-xs text-muted-foreground mb-1", children: p.type }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold tracking-tight", children: p.name })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: `shrink-0 inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border ${p.done ? "border-primary/40 bg-primary/10 text-primary" : "border-amber-400/30 bg-amber-400/5 text-amber-300"}`, children: [
          p.done ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }),
          p.status
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: p.description }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: p.stack.map((s) => /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground", children: s }, s)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-5 border-t border-border/60 flex items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => openProject(p), className: "text-primary hover:underline inline-flex items-center gap-1", children: [
          "Dettagli ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#", className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Github, { className: "h-3.5 w-3.5" }),
          " Codice"
        ] })
      ] })
    ] }, p.name)) }),
    /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (val) => {
      if (!val) setSelected(null);
      setOpen(val);
    }, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: selected?.name }) }),
      /* @__PURE__ */ jsx(DialogDescription, { children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
        selected?.type,
        " — ",
        selected?.status
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: selected?.description }),
        selected?.images && /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-1 gap-3", children: selected.images.map((src, i) => /* @__PURE__ */ jsx("img", { src, alt: `${selected.name} screenshot ${i + 1}`, className: "w-full rounded-md border object-cover" }, i)) })
      ] })
    ] }) })
  ] }) });
}
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "px-6 py-24 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary mb-3", children: "03 — Servizi" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight", children: "Cosa posso fare per te." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Servizi pensati per attività locali, B&B, ristoranti e piccoli business che vogliono digitalizzarsi con qualcosa di solido — non un template." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: services.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-2", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
    ] }, s.title)) })
  ] }) });
}
function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Messaggio inviato! Ti rispondo a breve.");
      e.target.reset();
    }, 700);
  };
  const channels = [{
    icon: Mail,
    label: "Email",
    value: "walterfida9@gmail.com",
    href: "mailto:walterfida9@gmail.com"
  }, {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+39 324 605 4939",
    href: "https://wa.me/3246054939"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/walterfida/Dev",
    href: "https://www.linkedin.com/in/walter-fida-a7749b1bb/"
  }, {
    icon: Github,
    label: "GitHub",
    value: "@Walterinho07",
    href: "https://github.com"
  }];
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "px-6 py-24 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary mb-3", children: "04 — Contatti" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight", children: "Hai un progetto in mente?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-2xl text-muted-foreground", children: "Parliamone." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3", children: channels.map((c) => /* @__PURE__ */ jsxs("a", { href: c.href, target: "_blank", rel: "noreferrer", className: "group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsx("p", { className: "truncate", children: c.value })
        ] }),
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" })
      ] }, c.label)) })
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit, className: "rounded-2xl border border-border bg-card p-6 sm:p-8 h-fit", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Nome" }),
        /* @__PURE__ */ jsx(Input, { required: true, name: "name", placeholder: "Mario Rossi", className: "mt-2 bg-background/50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }),
        /* @__PURE__ */ jsx(Input, { required: true, type: "email", name: "email", placeholder: "mario@esempio.it", className: "mt-2 bg-background/50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Messaggio" }),
        /* @__PURE__ */ jsx(Textarea, { required: true, name: "message", rows: 5, placeholder: "Raccontami il tuo progetto, anche solo a grandi linee.", className: "mt-2 bg-background/50 resize-none" })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", disabled: sending, className: "w-full bg-primary text-primary-foreground hover:bg-primary/90", size: "lg", children: sending ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        "Invia messaggio ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] }) })
    ] }) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "px-6 py-10 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground font-mono", children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " — Freelance Developer, Calabria."
    ] }),
    /* @__PURE__ */ jsx("p", { children: "Costruito con cura. Caffè incluso." })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
