import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Toaster as Toaster$1, toast } from "sonner";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { X, Cpu, Minimize2, Maximize2, FileCode2, Layers, Terminal, Check, Copy, ArrowRight, Server, Database, Radio, Shield, Play, Globe, TerminalSquare, Code2, Sparkles, CheckCircle, Activity, Monitor, MapPin, Zap, ShieldCheck, HelpCircle, ChevronDown, Menu, Github, Calendar, Wrench, Briefcase, Mail, MessageCircle, Linkedin, Loader2, CheckCircle2, ExternalLink, ChevronRight } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
const appCss = "/assets/styles-BE6I2g_m.css";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Portfolio — Freelance Developer in Calabria" },
      {
        name: "description",
        content: "Sviluppo web app, software desktop e sistemi di prenotazione per attività locali e business digitali."
      },
      { property: "og:title", content: "Portfolio — Freelance Developer" },
      {
        property: "og:description",
        content: "Web app, software desktop e sistemi di prenotazione per attività locali."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "it", className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
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
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg max-h-[92vh] overflow-y-auto custom-scrollbar translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-2xl",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/25 text-white/80 hover:text-white backdrop-blur-xl shadow-lg transition-all duration-200 active:scale-90 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Chiudi" })
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
function AntigravityBackground() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": "true",
      className: "fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#0a0a0c]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-slate-400/[0.04] blur-[140px] animate-lens-drift" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full bg-sky-500/[0.035] blur-[150px] animate-float-slow" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[65%] left-[5%] w-[500px] h-[500px] rounded-full bg-zinc-300/[0.03] blur-[130px] animate-float-reverse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[15%] right-[20%] w-[700px] h-[700px] rounded-full bg-slate-500/[0.03] blur-[160px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[18%] right-[18%] w-80 h-80 perspective-stage-1200 opacity-25 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full border border-sky-400/30 animate-gyro-1 shadow-[0_0_25px_rgba(56,189,248,0.15)]" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[55%] left-[10%] w-96 h-96 perspective-stage-1200 opacity-20 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full border border-indigo-400/25 animate-gyro-2 shadow-[0_0_30px_rgba(129,140,248,0.12)]" }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-[28%] right-[12%] w-20 h-20 rounded-full border border-white/35 bg-gradient-to-br from-white/30 via-slate-400/15 to-transparent shadow-[0_20px_45px_rgba(0,0,0,0.85),inset_0_2px_5px_rgba(255,255,255,0.6)] backdrop-blur-md animate-chrome-pulse pointer-events-none",
            style: { animationDuration: "8s" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-[22%] left-[8%] w-28 h-28 rounded-full border border-white/25 bg-gradient-to-br from-white/20 via-zinc-400/10 to-transparent shadow-[0_25px_50px_rgba(0,0,0,0.9),inset_0_2px_6px_rgba(255,255,255,0.4)] backdrop-blur-md animate-float-slow pointer-events-none",
            style: { animationDuration: "11s" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-28 left-[8%] w-32 h-32 rounded-full border border-white/[0.08] bg-white/[0.015] backdrop-blur-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] animate-float-slow",
            style: { animationDuration: "14s" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-[42%] right-[7%] w-44 h-44 rounded-full border border-white/[0.06] bg-white/[0.01] backdrop-blur-[8px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] animate-float-reverse",
            style: { animationDuration: "16s" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse 90% 70% at 50% 15%, transparent 20%, #0a0a0c 90%)"
            }
          }
        )
      ]
    }
  );
}
function SpatialCard({
  children,
  className = "",
  baseTransform = "",
  isMobile = false
}) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -7;
    const rotateY = (x - centerX) / centerX * 7;
    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({
      x: x / rect.width * 100,
      y: y / rect.height * 100,
      opacity: 0.18
    });
  };
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      className: `relative transition-transform duration-200 ease-out will-change-transform ${className}`,
      style: isMobile ? void 0 : {
        transform: `${baseTransform} rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d"
      },
      children: [
        !isMobile && /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-30",
            style: {
              opacity: spotlight.opacity,
              background: `radial-gradient(circle 320px at ${spotlight.x}% ${spotlight.y}%, rgba(255, 255, 255, 0.35), transparent 70%)`
            }
          }
        ),
        children
      ]
    }
  );
}
function DeconstructingTerminal() {
  const [activeTab, setActiveTab] = useState("profile");
  const [copied, setCopied] = useState(false);
  const [isDeconstructed, setIsDeconstructed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [apiSimulating, setApiSimulating] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
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
    setTimeout(() => setCopied(false), 2e3);
  };
  const simulateApiTest = () => {
    setApiSimulating(true);
    setApiResponse(null);
    setTimeout(() => {
      setApiSimulating(false);
      setApiResponse("200 OK · 14ms · PostgreSQL Pool: 8/10 active connections");
    }, 600);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: "relative w-full py-16 sm:py-24 transition-all duration-700 overflow-visible",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-10 px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shadow-inner", children: /* @__PURE__ */ jsx(Cpu, { className: "w-4 h-4 animate-pulse" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-zinc-300", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: "Architettura Software" }),
                /* @__PURE__ */ jsx("span", { className: "text-zinc-600", children: "/" }),
                /* @__PURE__ */ jsx("span", { className: "text-sky-400", children: isDeconstructed ? "Vista Decomposta 3D Spaziale" : "Terminale Monolitico" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-mono text-zinc-500", children: isDeconstructed ? "Moduli distribuiti in 3D: Backend, Frontend & Desktop Nativo" : "Scorri in basso o usa il toggle per decomporre l'architettura" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsDeconstructed(!isDeconstructed),
              className: "inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full apple-glass text-zinc-200 hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-lg active:scale-95 border border-white/15",
              children: isDeconstructed ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Minimize2, { className: "w-3.5 h-3.5 text-sky-400" }),
                /* @__PURE__ */ jsx("span", { children: "Compatta Terminale" })
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Maximize2, { className: "w-3.5 h-3.5 text-sky-400" }),
                /* @__PURE__ */ jsx("span", { children: "Decomponi Vista 3D Spaziale" })
              ] })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 perspective-stage-1200", children: !isDeconstructed ? (
          /* ==============================================================
             STATE A: COMPACT MONOLITHIC 3D TERMINAL (Xcode / macOS Style)
             ============================================================== */
          /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto transition-all duration-700 ease-out", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-2 rounded-3xl bg-gradient-to-b from-sky-500/10 via-white/5 to-transparent blur-3xl opacity-60" }),
            /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass border border-white/15 text-xs font-mono text-zinc-200 shadow-2xl animate-float-slow", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Full-Stack Runtime Operational" })
            ] }),
            /* @__PURE__ */ jsxs(
              SpatialCard,
              {
                isMobile,
                baseTransform: "perspective(1200px) rotateX(2deg) translateY(0px)",
                className: "relative rounded-3xl apple-card border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-3.5 bg-zinc-950/70 border-b border-white/10 select-none", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" }),
                      /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" }),
                      /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" }),
                      /* @__PURE__ */ jsx("span", { className: "ml-2 font-mono text-xs text-zinc-400 hidden sm:inline", children: "walter@developer-studio: ~ (v21.0.4)" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 font-mono text-xs", children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => setActiveTab("profile"),
                          className: `flex items-center gap-1.5 px-3 py-1 rounded-xl transition cursor-pointer ${activeTab === "profile" ? "bg-white/15 text-white font-medium border border-white/10" : "text-zinc-400 hover:text-white"}`,
                          children: [
                            /* @__PURE__ */ jsx(FileCode2, { className: "w-3.5 h-3.5 text-sky-400" }),
                            "developer.ts"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => setActiveTab("stack"),
                          className: `flex items-center gap-1.5 px-3 py-1 rounded-xl transition cursor-pointer ${activeTab === "stack" ? "bg-white/15 text-white font-medium border border-white/10" : "text-zinc-400 hover:text-white"}`,
                          children: [
                            /* @__PURE__ */ jsx(Layers, { className: "w-3.5 h-3.5 text-indigo-400" }),
                            "stack.json"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => setActiveTab("cli"),
                          className: `flex items-center gap-1.5 px-3 py-1 rounded-xl transition cursor-pointer ${activeTab === "cli" ? "bg-white/15 text-white font-medium border border-white/10" : "text-zinc-400 hover:text-white"}`,
                          children: [
                            /* @__PURE__ */ jsx(Terminal, { className: "w-3.5 h-3.5 text-emerald-400" }),
                            "bash"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: copySnippet,
                        title: "Copia comando git",
                        className: "p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition cursor-pointer",
                        children: copied ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 font-mono text-xs sm:text-sm bg-black/60 min-h-[290px] leading-relaxed", children: [
                    activeTab === "profile" && /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-zinc-300", children: [
                      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("span", { className: "text-zinc-500", children: "// Walter Fida - Developer Identity" }) }),
                      /* @__PURE__ */ jsxs("p", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sky-400 font-semibold", children: "export const" }),
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "developer" }),
                        " = {"
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "fullName" }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: '"Walter Fida"' }),
                        ","
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "specialization" }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: '"Full-Stack Web & Desktop Java Applications"' }),
                        ","
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "coreTechnologies" }),
                        ": [",
                        /* @__PURE__ */ jsx("span", { className: "text-sky-300", children: '"Java"' }),
                        ",",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-sky-300", children: '"Spring Boot 3"' }),
                        ",",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-indigo-300", children: '"Angular"' }),
                        ",",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: '"JavaFX"' }),
                        "],"
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "location" }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"Calabria, IT · Remote Available"' }),
                        ","
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "approach" }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-sky-300", children: '"Clean Architecture, Modular & Robust Code"' }),
                        ","
                      ] }),
                      /* @__PURE__ */ jsx("p", { children: "};" })
                    ] }),
                    activeTab === "stack" && /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 text-zinc-300", children: [
                      /* @__PURE__ */ jsx("p", { children: "{" }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sky-400", children: '"backendModule"' }),
                        ": {"
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-8", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: '"runtime"' }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"Java 21 LTS"' }),
                        ","
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-8", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: '"framework"' }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"Spring Boot 3 + Spring Security"' }),
                        ","
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-8", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: '"storage"' }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"PostgreSQL / Hibernate ORM"' })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "pl-4", children: "}," }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-indigo-400", children: '"frontendModule"' }),
                        ": {"
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-8", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: '"ecosystem"' }),
                        ": [",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"Angular"' }),
                        ",",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"TypeScript"' }),
                        ",",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"React"' }),
                        "],"
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-8", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: '"performance"' }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: '"60 FPS Butter-Smooth"' })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "pl-4", children: "}," }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: '"desktopPlatform"' }),
                        ": {"
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-8", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: '"gui"' }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"JavaFX Desktop Native"' }),
                        ","
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "pl-8", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: '"specialization"' }),
                        ":",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-zinc-200", children: '"GeoShield OSINT Intelligence"' })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "pl-4", children: "}" }),
                      /* @__PURE__ */ jsx("p", { children: "}" })
                    ] }),
                    activeTab === "cli" && /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-zinc-300", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sky-400 font-semibold", children: "$" }),
                        " studio run --verify-architecture"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-zinc-400 pl-3", children: [
                        "✓ Spring Boot 3 microservices online [port 8080]",
                        /* @__PURE__ */ jsx("br", {}),
                        "✓ TypeScript client strict compilation: 0 errors",
                        /* @__PURE__ */ jsx("br", {}),
                        "✓ JavaFX native engine initialized (GeoShield OSINT ready)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "pt-2 text-emerald-400 pl-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping" }),
                        "> Architettura software attiva e collaudata."
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "px-5 py-3 bg-zinc-950/80 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-emerald-400", children: [
                        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" }),
                        "Clean Architecture"
                      ] }),
                      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-zinc-600", children: "·" }),
                      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-zinc-400", children: "TypeScript / Java 21" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sky-400", children: [
                      /* @__PURE__ */ jsx("span", { children: "Scorri verso il basso per espandere in 3D" }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 animate-pulse" })
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ) : (
          /* ==============================================================
             STATE B: FULL-WIDTH CINEMATIC 3D EXPLODED ARCHITECTURE
             Spans across the entire screen (max-w-7xl) with 3D perspective,
             dynamic mouse tilt, holographic data connectors and live tests.
             ============================================================== */
          /* @__PURE__ */ jsxs("div", { className: "relative transition-all duration-700 ease-out", children: [
            /* @__PURE__ */ jsxs("div", { className: "hidden lg:block absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-[2px] bg-gradient-to-r from-sky-500/40 via-indigo-500/60 to-emerald-500/40 pointer-events-none z-0", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/20 blur-[2px] animate-pulse" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-400 blur-[2px] shadow-[0_0_15px_#38bdf8] animate-float-slow",
                  style: { left: "25%" }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-400 blur-[2px] shadow-[0_0_15px_#34d399] animate-float-reverse",
                  style: { right: "25%" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch relative z-10", children: [
              /* @__PURE__ */ jsxs(
                SpatialCard,
                {
                  isMobile,
                  baseTransform: "perspective(1200px) rotateY(6deg) rotateX(2deg) translateZ(20px)",
                  className: "rounded-3xl apple-card p-7 sm:p-8 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between hover:border-sky-400/40 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-inner", children: /* @__PURE__ */ jsx(Server, { className: "w-6 h-6" }) }),
                        /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20", children: "MOD-01 // BACKEND" })
                      ] }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight", children: "Java & Spring Boot Core" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6", children: "Backend robusto per gestire logica di business complessa, transazioni ACID, sicurezza JWT e persistenza SQL scalabile senza fragilità." }),
                      /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 font-mono text-xs mb-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(Database, { className: "w-3.5 h-3.5 text-sky-400" }),
                            " Database"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "PostgreSQL / SQL" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(Radio, { className: "w-3.5 h-3.5 text-emerald-400" }),
                            " Endpoint"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-sky-300 font-medium", children: "RESTful JSON APIs" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(Shield, { className: "w-3.5 h-3.5 text-indigo-400" }),
                            " Autenticazione"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Spring Security 6" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-white/10", children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: simulateApiTest,
                          disabled: apiSimulating,
                          className: "w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 hover:text-white flex items-center justify-center gap-2 transition cursor-pointer active:scale-95",
                          children: [
                            /* @__PURE__ */ jsx(
                              Play,
                              {
                                className: `w-3.5 h-3.5 text-sky-400 ${apiSimulating ? "animate-spin" : ""}`
                              }
                            ),
                            /* @__PURE__ */ jsx("span", { children: apiSimulating ? "Esecuzione test..." : "Testa API Ping / Health" })
                          ]
                        }
                      ),
                      apiResponse && /* @__PURE__ */ jsx("p", { className: "mt-2 text-[11px] font-mono text-emerald-400 text-center animate-fade-in", children: apiResponse })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                SpatialCard,
                {
                  isMobile,
                  baseTransform: "perspective(1200px) translateZ(60px) scale(1.02)",
                  className: "rounded-3xl apple-card p-7 sm:p-8 border border-white/25 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] flex flex-col justify-between hover:border-white/40 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-white shadow-inner", children: /* @__PURE__ */ jsx(Layers, { className: "w-6 h-6 text-indigo-300" }) }),
                        /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] uppercase tracking-wider text-indigo-300 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20", children: "MOD-02 // FRONTEND STUDIO" })
                      ] }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight", children: "Angular & React Frontends" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6", children: "Interfacce web dinamiche, reattive e tipizzate. Architettura a componenti, gestione avanzata dello stato e fluidità a 60 FPS senza compromessi." }),
                      /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 font-mono text-xs mb-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5 text-indigo-400" }),
                            " Frameworks"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Angular 18 & React 19" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(FileCode2, { className: "w-3.5 h-3.5 text-sky-400" }),
                            " Tipizzazione"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-sky-300 font-medium", children: "TypeScript Strict Mode" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(Radio, { className: "w-3.5 h-3.5 text-emerald-400" }),
                            " UI / Styling"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-emerald-300 font-medium", children: "Tailwind CSS + Glass 3D" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400", children: [
                      /* @__PURE__ */ jsxs("span", { className: "text-emerald-400 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400" }),
                        "Reactive Store Synced"
                      ] }),
                      /* @__PURE__ */ jsx("span", { children: "SSR Ready" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                SpatialCard,
                {
                  isMobile,
                  baseTransform: "perspective(1200px) rotateY(-6deg) rotateX(2deg) translateZ(20px)",
                  className: "rounded-3xl apple-card p-7 sm:p-8 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between hover:border-emerald-400/40 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-inner", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }) }),
                        /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20", children: "MOD-03 // DESKTOP NATIVE" })
                      ] }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight", children: "JavaFX & OSINT Systems" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6", children: "Software applicativo nativo ad alte prestazioni: GeoShield OSINT, applicativi di intelligence geospaziale e gestionali locali a bassissimo consumo." }),
                      /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 font-mono text-xs mb-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(Cpu, { className: "w-3.5 h-3.5 text-emerald-400" }),
                            " Ambiente"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "JavaFX Desktop Platform" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(Shield, { className: "w-3.5 h-3.5 text-sky-400" }),
                            " Focus"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-emerald-300 font-medium", children: "GeoShield OSINT Tool" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-zinc-300", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-zinc-500 flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsx(Radio, { className: "w-3.5 h-3.5 text-indigo-400" }),
                            " Esecuzione"
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Offline Native Speed" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400", children: [
                      /* @__PURE__ */ jsxs("span", { className: "text-sky-400 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-sky-400" }),
                        "Hardware Acceleration"
                      ] }),
                      /* @__PURE__ */ jsx("span", { children: "Zero Web Overhead" })
                    ] })
                  ]
                }
              )
            ] })
          ] })
        ) })
      ]
    }
  );
}
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
  "Git & GitHub"
];
function SpatialBentoTile({
  children,
  className = "",
  delay = "0ms",
  isVisible = false
}) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -5;
    const rotateY = (x - centerX) / centerX * 5;
    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({
      x: x / rect.width * 100,
      y: y / rect.height * 100,
      opacity: 0.16
    });
  };
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: {
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
        transitionDelay: delay
      },
      className: `relative rounded-3xl apple-card overflow-hidden group hover:border-white/35 transition-all duration-700 ease-out shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-30 hidden lg:block",
            style: {
              opacity: spotlight.opacity,
              background: `radial-gradient(circle 300px at ${spotlight.x}% ${spotlight.y}%, rgba(255, 255, 255, 0.25), transparent 70%)`
            }
          }
        ),
        children
      ]
    }
  );
}
function BentoAbout() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "about",
      ref: sectionRef,
      className: "relative px-6 py-28 border-t border-white/5 scroll-mt-28",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full apple-glass text-xs font-mono text-zinc-300 mb-3 border border-white/10 shadow-sm", children: [
                  /* @__PURE__ */ jsx(TerminalSquare, { className: "w-3.5 h-3.5 text-sky-400 animate-pulse" }),
                  /* @__PURE__ */ jsx("span", { children: "01 — Architettura & Metodo" })
                ] }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-white", children: [
                  "Ingegneria essenziale, ",
                  /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "risultati concreti." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed", children: "Nessun sovraccarico. Progetto codice solido, manutenibile e orientato alla risoluzione di problemi reali." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5", children: [
          /* @__PURE__ */ jsxs(
            SpatialBentoTile,
            {
              className: "md:col-span-2 lg:col-span-2 p-7 sm:p-8",
              delay: "100ms",
              isVisible,
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3.5", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-zinc-100 shadow-md group-hover:bg-white/10 group-hover:scale-105 transition-all", children: /* @__PURE__ */ jsx(Code2, { className: "w-5 h-5 text-sky-400" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-zinc-500 uppercase tracking-wider block", children: "Profilo Professionale" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white tracking-tight", children: "Walter Fida" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300", children: [
                    /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
                      /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-400" })
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: "Active Dev" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-zinc-300 leading-relaxed text-sm sm:text-base mb-6", children: [
                  "Studente al terzo anno di ",
                  /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Informatica" }),
                  " ",
                  "con una forte vocazione per lo sviluppo full-stack e desktop. Mi occupo dell'intero ciclo di vita del software: dalla modellazione del database e delle API backend fino alla progettazione di interfacce web reattive e applicativi nativi fluidi."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-5 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-zinc-200", children: [
                    /* @__PURE__ */ jsx(
                      Sparkles,
                      {
                        className: "w-3.5 h-3.5 text-sky-400 animate-spin",
                        style: { animationDuration: "6s" }
                      }
                    ),
                    "Approccio pragmatico"
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-zinc-300", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5 text-emerald-400" }),
                    " Design patterns"
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsx("span", { children: "Codice leggibile & documentato" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(SpatialBentoTile, { className: "p-7", delay: "200ms", isVisible, children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 mb-5 group-hover:scale-105 group-hover:border-sky-400/30 transition-all", children: /* @__PURE__ */ jsx(Server, { className: "w-5 h-5 text-sky-400" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-zinc-500 uppercase tracking-wider block", children: "Backend Platform" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mt-1 mb-2", children: "Java & Spring Boot" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4", children: "Architetture robuste, logica di business transazionale, gestione sicura delle sessioni e database relazionali SQL." }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 text-[11px] font-mono text-sky-400", children: [
              /* @__PURE__ */ jsx(Activity, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsx("span", { children: "High Throughput" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(SpatialBentoTile, { className: "p-7", delay: "300ms", isVisible, children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 mb-5 group-hover:scale-105 group-hover:border-emerald-400/30 transition-all", children: /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5 text-emerald-400" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-zinc-500 uppercase tracking-wider block", children: "Desktop & OSINT" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mt-1 mb-2", children: "JavaFX & Tools" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4", children: "Applicativi desktop nativi ad alte prestazioni per analisi geospaziale da fonti aperte e software gestionali locali." }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" }),
              /* @__PURE__ */ jsx("span", { children: "Native Execution" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            SpatialBentoTile,
            {
              className: "md:col-span-2 lg:col-span-2 p-7",
              delay: "400ms",
              isVisible,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3.5 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:scale-105 transition-all", children: /* @__PURE__ */ jsx(Layers, { className: "w-5 h-5 text-zinc-100" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-zinc-500 uppercase tracking-wider block", children: "Interfacce Utente Reattive" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Angular, React & TypeScript" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5", children: "Applicazioni web tipizzate con cura dei dettagli, animazioni a 60 FPS, accessibilità e performance elevate." }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: stackList.map((tech) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "font-mono text-xs px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition duration-200 cursor-default",
                    children: tech
                  },
                  tech
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            SpatialBentoTile,
            {
              className: "md:col-span-2 lg:col-span-2 p-7 flex flex-col justify-between",
              delay: "500ms",
              isVisible,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3.5", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:scale-105 transition-all", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-emerald-400" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-zinc-500 uppercase tracking-wider block", children: "Base Operativa" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Calabria, Italia · Remoto Globale" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono shadow-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                    "Disponibile subito"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed", children: "Supporto attività locali e aziende su tutto il territorio nazionale con sviluppo dedicato da remoto, comunicazione costante e deliverable chiari." })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const faqItems = [
  {
    tag: "Architettura & Stack",
    icon: Layers,
    question: "Di quali tipologie di software ti occupi principalmente?",
    answer: "Sviluppo sia applicazioni web complete (frontend reattivo in Angular o React e backend solido in Spring Boot/Java con PostgreSQL) sia software desktop ad alte prestazioni in JavaFX (come strumenti OSINT, gestionali o tool di analisi dati). Realizzo inoltre sistemi di prenotazione dedicati e piattaforme su misura."
  },
  {
    tag: "Operatività & Remoto",
    icon: Zap,
    question: "Lavori solo con realtà in Calabria o anche da remoto?",
    answer: "Entrambe le cose: ho base in Calabria e supporto con entusiasmo le attività locali (B&B, ristoranti, professionisti e PMI) che desiderano digitalizzarsi senza intermediari costosi, ma collaboro stabilmente anche da remoto con clienti e team in tutta Italia."
  },
  {
    tag: "Metodologia & Rilascio",
    icon: ShieldCheck,
    question: "Come viene gestito lo sviluppo e la consegna del progetto?",
    answer: "Adotto un approccio trasparente e iterativo: partiamo da un'analisi dettagliata dei requisiti, definendo tempistiche chiare e deliverable intermedi. Durante lo sviluppo condivido avanzamenti regolari e demo funzionanti, fino al rilascio in produzione e al collaudo finale."
  },
  {
    tag: "Assistenza Post-Lancio",
    icon: Sparkles,
    question: "Fornisci assistenza e manutenzione dopo il rilascio?",
    answer: "Certamente. Non lascio mai il cliente da solo dopo la consegna. Offro pacchetti di supporto per aggiornamenti, monitoraggio, backup, correzione bug e l'aggiunta di nuove funzionalità nel tempo."
  },
  {
    tag: "Preventivo & Consulenza",
    icon: HelpCircle,
    question: "Come posso richiedere una stima o un preventivo per la mia idea?",
    answer: "Puoi scrivermi direttamente tramite il form contatti qui sotto, inviarmi una mail a info@walterfidadev.it oppure contattarmi su WhatsApp. Rispondo solitamente entro 24 ore con una prima valutazione gratuita e senza impegno."
  }
];
function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return /* @__PURE__ */ jsxs("section", { id: "faq", className: "relative px-6 py-32 border-t border-white/10 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute -top-[10%] -left-[10%] w-[550px] h-[550px] rounded-full blur-[100px] animate-mercury-blob",
          style: {
            background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(148,163,184,0.08) 50%, transparent 80%)",
            animationDuration: "12s"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-[30%] -right-[15%] w-[650px] h-[650px] rounded-full blur-[120px] animate-mercury-blob",
          style: {
            background: "radial-gradient(circle, rgba(226,232,240,0.14) 0%, rgba(56,189,248,0.06) 40%, transparent 75%)",
            animationDuration: "16s",
            animationDelay: "-4s"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.06] animate-liquid-flow",
          style: {
            backgroundImage: "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.8) 25%, transparent 50%, rgba(255,255,255,0.6) 75%, transparent 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-20 right-[18%] w-16 h-16 rounded-full border border-white/30 bg-gradient-to-br from-white/25 via-zinc-400/10 to-transparent shadow-[0_15px_30px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.5)] backdrop-blur-md animate-float-slow",
          style: { animationDuration: "9s" }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute bottom-24 left-[14%] w-24 h-24 rounded-full border border-white/20 bg-gradient-to-br from-white/20 via-slate-400/10 to-transparent shadow-[0_20px_40px_rgba(0,0,0,0.7),inset_0_2px_6px_rgba(255,255,255,0.4)] backdrop-blur-md animate-float-reverse",
          style: { animationDuration: "13s" }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-[55%] left-[6%] w-10 h-10 rounded-full border border-white/25 bg-gradient-to-br from-white/20 via-zinc-400/10 to-transparent shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_1.5px_3px_rgba(255,255,255,0.5)] backdrop-blur-sm animate-float-medium",
          style: { animationDuration: "7s" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-metal-card text-xs font-mono text-zinc-300 mb-4 shadow-lg border border-white/25", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-zinc-100" }),
          /* @__PURE__ */ jsx("span", { children: "Domande Frequenti & Risposte" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-white", children: [
          "Tutto ciò che ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "ti serve sapere." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed", children: "Risposte trasparenti su architettura software, modalità di collaborazione e tempi di consegna." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqItems.map((item, idx) => {
        const isOpen = openIndex === idx;
        const ItemIcon = item.icon;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `relative rounded-3xl transition-all duration-500 overflow-hidden group ${isOpen ? "liquid-metal-card-active scale-[1.01]" : "liquid-metal-card hover:border-white/30"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full duration-1000" }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => toggle(idx),
                  className: "w-full flex items-center justify-between gap-4 p-5 sm:p-7 text-left cursor-pointer",
                  "aria-expanded": isOpen,
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 min-w-0", children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? "bg-white/20 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "bg-white/5 border-white/10 text-zinc-400 group-hover:text-white"}`,
                          children: /* @__PURE__ */ jsx(ItemIcon, { className: "w-5 h-5" })
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-1", children: item.tag }),
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-base sm:text-lg text-white leading-snug", children: item.question })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "rotate-180 bg-white text-zinc-950 border-white shadow-[0_4px_12px_rgba(255,255,255,0.4)]" : "bg-white/5 border-white/15 text-zinc-400 group-hover:text-white group-hover:border-white/30"}`,
                        children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsx("div", { className: "px-6 pb-7 sm:px-8 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/10 mt-1", children: /* @__PURE__ */ jsx("p", { className: "pt-3", children: item.answer }) })
            ]
          },
          item.question
        );
      }) })
    ] })
  ] });
}
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Walter Fida — Software & Full-Stack Developer" },
      {
        name: "description",
        content: "Sviluppo web app moderne, software desktop in JavaFX e architetture scalabili per aziende, B&B e attività digitali in Calabria e da remoto."
      },
      { property: "og:title", content: "Walter Fida — Software & Full-Stack Developer" },
      {
        property: "og:description",
        content: "Software developer specializzato in Java, Spring Boot, Angular, TypeScript e JavaFX."
      },
      { property: "og:type", content: "website" }
    ]
  }),
  component: Index
});
const projects = [
  {
    name: "GeoShield",
    type: "Desktop Application",
    stack: ["Java", "JavaFX", "OSINT", "CSS"],
    description: "Tool OSINT e geolocalizzazione sviluppato in JavaFX per raccogliere, analizzare e visualizzare intelligence da fonti aperte su mappe interattive.",
    longDescription: "GeoShield è un applicativo desktop nativo incentrato sull'intelligence geospaziale. Permette agli operatori di raccogliere dati da sorgenti pubbliche, normalizzarli e visualizzarli con una dashboard ad alta efficienza costruita interamente in JavaFX con architettura modulare.",
    status: "Completato",
    done: true,
    images: ["/images/Geoshield1.png", "/images/Geoshield2.png"],
    github: "https://github.com/Walterinho07/GeoShield"
  },
  {
    name: "Afterglow",
    type: "Web Application",
    stack: ["Angular", "Spring Boot", "TypeScript", "SQL"],
    description: "Piattaforma web completa per discoteche e club: gestione eventi, prenotazione tavoli, liste d'ingresso e interfaccia interattiva.",
    longDescription: "Afterglow digitalizza l'esperienza dei locali notturni. Il backend in Spring Boot gestisce la disponibilità in tempo reale e le prenotazioni, mentre il frontend Angular offre un'interfaccia dark, accattivante e ottimizzata per smartphone.",
    status: "Quasi completato",
    done: true,
    images: ["/images/afterglow1.png", "/images/afterglow2.png"],
    github: "https://github.com/Walterinho07/Afterglow"
  },
  {
    name: "B&B Booking System",
    type: "Web Application",
    stack: ["Angular", "Spring Boot", "TypeScript", "Tailwind CSS"],
    description: "Sistema di prenotazione e gestione per strutture ricettive: calendario disponibilità, preventivi istantanei e pannello proprietario.",
    longDescription: "Soluzione concepita per B&B e case vacanza che desiderano rendersi indipendenti dalle piattaforme di terzi. Include sincronizzazione calendario, gestione camere, notifiche e pannello di controllo completo per i gestori.",
    status: "In sviluppo",
    done: false,
    images: ["/images/BBPAGINA1.png", "/images/bbpagina2.png", "/images/bbpagina3.png"],
    github: "https://github.com/Walterinho07/BB-Booking-System"
  },
  {
    name: "Restaurant Booking & Menu",
    type: "Web Application",
    stack: ["Angular", "Spring Boot", "TypeScript", "PostgreSQL"],
    description: "Piattaforma digitale per ristorazione con menù interattivo, prenotazione tavoli con fasce orarie e gestione comande.",
    longDescription: "Applicazione web full-stack studiata per ristoranti e pizzerie: riduce i no-show grazie a conferme automatiche e permette ai clienti di consultare allergeni, piatti del giorno e disponibilità tavoli in tempo reale.",
    status: "In sviluppo",
    done: false,
    images: ["/images/BBPAGINA1.png"],
    github: "https://github.com/Walterinho07/Restaurant-Booking"
  }
];
const services = [
  {
    icon: Globe,
    title: "Siti Web & Piattaforme Digitali",
    desc: "Siti ad altissime prestazioni, veloci e responsive, curati nel dettaglio visivo per valorizzare la tua presenza online e convertire i visitatori.",
    highlights: ["Design minimale & rifinito", "SEO & Core Web Vitals", "Interazioni fluide"]
  },
  {
    icon: Code2,
    title: "Web App Full-Stack su Misura",
    desc: "Applicazioni complete frontend + backend: logica di business in Spring Boot, API REST ben documentate e interfacce reattive in Angular o React.",
    highlights: ["Architettura scalabile", "Database SQL relazionali", "Codice tipizzato"]
  },
  {
    icon: Calendar,
    title: "Sistemi di Prenotazione Indipendenti",
    desc: "Booking online proprietario per B&B, locali e ristoranti. Riduci le commissioni di portali terzi e gestisci le disponibilità con semplicità.",
    highlights: ["Calendari real-time", "Notifiche automatiche", "Pannello di controllo"]
  },
  {
    icon: Monitor,
    title: "Software Desktop in Java & JavaFX",
    desc: "Applicativi gestionali nativi, tool di monitoraggio o strumenti specialistici (es. tool OSINT) progettati per girare in locale con massime performance.",
    highlights: [
      "Interfacce JavaFX fluide",
      "Accesso hardware locale",
      "Zero overhead del browser"
    ]
  },
  {
    icon: Wrench,
    title: "Manutenzione & Supporto Tecnico",
    desc: "Risoluzione bug, aggiornamenti periodici, ottimizzazione delle query e deploy su server o cloud. Sono al tuo fianco anche dopo il rilascio.",
    highlights: ["Intervento rapido", "Backup e stabilità", "Sviluppi evolutivi"]
  },
  {
    icon: Briefcase,
    title: "Consulenza Architetturale",
    desc: "Ti guido nella scelta dello stack tecnologico corretto evitando errori architetturali costosi prima ancora di scrivere la prima riga di codice.",
    highlights: ["Analisi di fattibilità", "Stack tecnologico ottimale", "Efficienza nei costi"]
  }
];
const navLinks = [
  { href: "#architecture", label: "Architettura" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Progetti" },
  { href: "#services", label: "Servizi" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contatti" }
];
function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Home");
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight * 100);
      }
      const sections = ["contact", "faq", "services", "projects", "about", "architecture", "top"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            const found = navLinks.find((l) => l.href === `#${id}`);
            setActiveSection(found ? found.label : "Home");
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: percentage * totalHeight,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 inset-x-0 z-50 w-full bg-[#0a0a0c]/90 backdrop-blur-3xl border-b border-white/10 shadow-2xl transition-all select-none", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: handleTrackClick,
        title: "Clicca per scorrere rapidamente",
        className: "absolute bottom-0 inset-x-0 h-[3px] bg-white/[0.04] cursor-pointer group/track",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "relative h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 transition-all duration-150 ease-out group-hover/track:brightness-125",
            style: { width: `${scrollProgress}%` },
            children: /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white animate-progress-orb shadow-[0_0_12px_#38bdf8,0_0_24px_#818cf8]" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 h-16 sm:h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2.5 font-mono text-sm tracking-tight group", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-white tracking-wide group-hover:text-zinc-300 transition", children: "Walter Fida" }),
        /* @__PURE__ */ jsx("span", { className: "text-zinc-500 font-mono text-xs hidden sm:inline", children: "<dev/>" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2 px-3 py-1 rounded-full apple-glass border border-white/10 text-xs font-mono text-zinc-300", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: activeSection }),
        /* @__PURE__ */ jsx("span", { className: "text-zinc-600", children: "·" }),
        /* @__PURE__ */ jsxs("span", { className: "text-sky-300 font-semibold", children: [
          Math.round(scrollProgress),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8 text-xs lg:text-sm font-medium text-zinc-400", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: link.href,
          className: `hover:text-white transition-colors py-1 relative group ${activeSection === link.label ? "text-white font-semibold" : ""}`,
          children: [
            link.label,
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `absolute bottom-0 left-0 h-[1.5px] bg-white transition-all duration-300 ${activeSection === link.label ? "w-full bg-sky-400" : "w-0 group-hover:w-full"}`
              }
            )
          ]
        },
        link.href
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            asChild: true,
            size: "sm",
            className: "rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-semibold px-5 h-9 shadow-sm transition active:scale-95",
            children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contattami" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            className: "md:hidden p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 border border-white/10",
            "aria-label": "Toggle menu",
            children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }),
    mobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden border-t border-white/10 bg-[#0c0c10]/95 backdrop-blur-3xl px-6 py-4 shadow-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "pb-3 mb-3 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Sezione: ",
          activeSection
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-sky-400 font-bold", children: [
          Math.round(scrollProgress),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-2 font-medium text-sm", children: navLinks.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          onClick: () => setMobileMenuOpen(false),
          className: `px-3.5 py-2.5 rounded-xl transition ${activeSection === link.label ? "bg-white/15 text-white font-semibold" : "hover:bg-white/10 text-zinc-300 hover:text-white"}`,
          children: link.label
        },
        link.href
      )) })
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { id: "top", className: "relative pt-16 sm:pt-24 pb-20 px-6 overflow-hidden scroll-mt-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full apple-glass text-xs font-mono text-zinc-300 mb-8 border border-white/10 shadow-xl animate-float-slow", children: [
      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
      /* @__PURE__ */ jsx("span", { children: "Software & Full-Stack Developer" }),
      /* @__PURE__ */ jsx("span", { className: "text-zinc-600", children: "·" }),
      /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "Calabria, IT" })
    ] }),
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl", children: [
      "Codice essenziale. ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Software che funziona." })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed", children: [
      "Sviluppo web app ad alte prestazioni, backend robusti in",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Java & Spring Boot" }),
      " e applicativi desktop nativi in ",
      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "JavaFX" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3.5 justify-center", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          asChild: true,
          size: "lg",
          className: "rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-medium text-sm px-7 h-11 transition shadow-lg active:scale-95",
          children: /* @__PURE__ */ jsxs("a", { href: "#projects", className: "flex items-center gap-2", children: [
            "Esplora i progetti ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          asChild: true,
          size: "lg",
          variant: "outline",
          className: "rounded-full apple-glass border-white/10 hover:bg-white/10 text-white font-medium text-sm px-7 h-11 transition active:scale-95",
          children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Parliamo del tuo progetto" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white/40" }),
        "100% Architettura Pulita"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-zinc-700", children: "|" }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-sky-400" }),
        "Full-Stack + Desktop Native"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-zinc-700", children: "|" }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400" }),
        "Disponibilità Immediata"
      ] })
    ] })
  ] }) });
}
function ArchitectureSection() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "architecture",
      className: "relative px-4 sm:px-6 py-20 sm:py-28 border-t border-white/5 scroll-mt-28 overflow-visible",
      children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl w-full", children: /* @__PURE__ */ jsx(DeconstructingTerminal, {}) })
    }
  );
}
function ScrollProjectCard({
  project,
  index,
  total,
  onOpen
}) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        // Only triggers when this specific card enters the viewport!
        rootMargin: "0px 0px -40px 0px"
      }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -6;
    const rotateY = (x - centerX) / centerX * 6;
    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({
      x: x / rect.width * 100,
      y: y / rect.height * 100,
      opacity: 0.18
    });
  };
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: {
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d"
      },
      className: `group relative rounded-3xl apple-card p-7 sm:p-8 transition-all duration-700 ease-out flex flex-col justify-between hover:border-white/40 shadow-2xl ${isVisible ? "opacity-100 translate-y-0 scale-100 blur-none" : "opacity-0 translate-y-24 scale-[0.93] blur-sm"}`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-30 hidden lg:block",
            style: {
              opacity: spotlight.opacity,
              background: `radial-gradient(circle 350px at ${spotlight.x}% ${spotlight.y}%, rgba(255, 255, 255, 0.3), transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-sky-400 font-semibold tracking-wider", children: [
                  "[",
                  `0${index + 1}`,
                  " / ",
                  `0${total}`,
                  "]"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-zinc-600", children: "·" }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-wider text-zinc-400", children: project.type })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors", children: project.name })
            ] }),
            /* @__PURE__ */ jsxs(
              "span",
              {
                className: `inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${project.done ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-400" : "border-amber-500/25 bg-amber-500/10 text-amber-300"}`,
                children: [
                  project.done ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }),
                  project.status
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-zinc-400 text-sm sm:text-base leading-relaxed mb-6", children: project.description }),
          project.images && project.images.length > 0 && /* @__PURE__ */ jsxs(
            "div",
            {
              onClick: () => onOpen(project),
              className: "cursor-pointer mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black/60 relative group/img aspect-video shadow-xl transition-all duration-300 group-hover:border-white/30",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.images[0],
                    alt: project.name,
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4", children: /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono text-zinc-200 flex items-center gap-1.5 bg-black/70 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-lg", children: [
                  "Esplora screenshot ",
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.stack.map((tech) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-mono text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 group-hover:border-white/25 transition-colors",
              children: tech
            },
            tech
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-5 border-t border-white/10 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => onOpen(project),
              className: "font-medium text-white hover:text-zinc-300 inline-flex items-center gap-1.5 transition-colors group/btn cursor-pointer",
              children: [
                "Dettagli progetto",
                /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 transition-transform group-hover/btn:translate-x-1" })
              ]
            }
          ),
          project.github && /* @__PURE__ */ jsxs(
            "a",
            {
              href: project.github,
              target: "_blank",
              rel: "noreferrer",
              className: "text-zinc-400 hover:text-white inline-flex items-center gap-1.5 transition-colors font-mono text-xs",
              children: [
                /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
                "Codice GitHub"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const openProject = (p) => {
    setSelected(p);
    setActiveImageIndex(0);
    setOpen(true);
  };
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "relative px-6 py-28 border-t border-white/5 scroll-mt-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass text-xs font-mono text-zinc-400 mb-3 border border-white/10", children: [
          /* @__PURE__ */ jsx(Layers, { className: "w-3.5 h-3.5 text-zinc-300" }),
          "02 — Showcase Progetti"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl font-bold tracking-tight text-white", children: [
          "Cosa ho ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "costruito." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed", children: "Una selezione di progetti reali sviluppati con cura per architettura, velocità e design. I progetti si svelano singolarmente durante lo scorrimento verso il basso." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: projects.map((p, idx) => /* @__PURE__ */ jsx(
      ScrollProjectCard,
      {
        project: p,
        index: idx,
        total: projects.length,
        onOpen: openProject
      },
      p.name
    )) }),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        open,
        onOpenChange: (val) => {
          if (!val) setSelected(null);
          setOpen(val);
        },
        children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-4xl w-[95vw] sm:w-[90vw] max-h-[88vh] overflow-hidden flex flex-col liquid-metal-modal text-white rounded-3xl p-0 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.95)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute -top-[15%] -left-[15%] w-[450px] h-[450px] rounded-full blur-[90px] animate-mercury-blob",
                style: {
                  background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(148,163,184,0.08) 50%, transparent 80%)",
                  animationDuration: "10s"
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute -bottom-[20%] -right-[15%] w-[500px] h-[500px] rounded-full blur-[100px] animate-mercury-blob",
                style: {
                  background: "radial-gradient(circle, rgba(226,232,240,0.16) 0%, rgba(56,189,248,0.08) 40%, transparent 75%)",
                  animationDuration: "14s",
                  animationDelay: "-3s"
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 opacity-[0.05] animate-liquid-flow",
                style: {
                  backgroundImage: "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.8) 25%, transparent 50%, rgba(255,255,255,0.6) 75%, transparent 100%)"
                }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-12 right-20 w-12 h-12 rounded-full border border-white/30 bg-gradient-to-br from-white/25 via-zinc-400/10 to-transparent shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.5)] backdrop-blur-md animate-float-slow pointer-events-none" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setOpen(false),
              className: "absolute top-4 right-4 sm:top-5 sm:right-5 z-50 flex items-center justify-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 text-white backdrop-blur-2xl shadow-xl transition-all duration-200 active:scale-90 cursor-pointer focus:outline-none",
              "aria-label": "Chiudi modale",
              children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-white" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative p-6 sm:p-8 md:p-10 overflow-y-auto custom-scrollbar flex-1 space-y-6", children: [
            /* @__PURE__ */ jsxs(DialogHeader, { className: "text-left space-y-2 pr-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20", children: selected?.type }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-mono px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-zinc-300", children: selected?.status })
              ] }),
              /* @__PURE__ */ jsx(DialogTitle, { className: "text-2xl sm:text-4xl font-bold tracking-tight text-white", children: selected?.name }),
              /* @__PURE__ */ jsx(DialogDescription, { className: "text-zinc-300 text-sm sm:text-base leading-relaxed mt-2", children: selected?.longDescription || selected?.description })
            ] }),
            selected?.images && selected.images.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-2xl relative aspect-video max-h-[380px] flex items-center justify-center", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: selected.images[activeImageIndex],
                  alt: `${selected.name} preview`,
                  className: "w-full h-full object-contain mx-auto transition-all duration-500"
                }
              ) }),
              selected.images.length > 1 && /* @__PURE__ */ jsx("div", { className: "flex gap-2.5 overflow-x-auto pb-1 custom-scrollbar", children: selected.images.map((src, idx) => /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveImageIndex(idx),
                  className: `rounded-xl overflow-hidden border p-0 w-24 h-16 shrink-0 transition cursor-pointer ${idx === activeImageIndex ? "border-sky-400 ring-2 ring-sky-400/30 scale-105" : "border-white/10 opacity-60 hover:opacity-100"}`,
                  children: /* @__PURE__ */ jsx("img", { src, alt: "thumbnail", className: "w-full h-full object-cover" })
                },
                idx
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: selected?.stack.map((s) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "font-mono text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/15 text-zinc-200",
                  children: s
                },
                s
              )) }),
              selected?.github && /* @__PURE__ */ jsx(
                Button,
                {
                  asChild: true,
                  size: "sm",
                  className: "rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-medium text-xs px-5 h-9 shadow-lg transition active:scale-95 cursor-pointer",
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: selected.github,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
                        " Vedi Codice GitHub"
                      ]
                    }
                  )
                }
              )
            ] })
          ] })
        ] })
      }
    )
  ] }) });
}
function Services() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "services",
      ref: sectionRef,
      className: "relative px-6 py-28 border-t border-white/5 scroll-mt-28",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `mb-16 max-w-2xl transition-all duration-700 ease-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass text-xs font-mono text-zinc-400 mb-3 border border-white/10", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-zinc-300" }),
                "03 — Servizi & Competenze"
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl font-bold tracking-tight text-white", children: [
                "Soluzioni progettate per ",
                /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "durare." })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed", children: "Dalla digitalizzazione di attività locali fino ad architetture scalabili: sviluppo software stabile, veloce e senza dipendenze fragili." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `rounded-3xl apple-card p-7 transition-all duration-700 ease-out hover:border-white/25 hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg ${isRevealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"}`,
            style: { transitionDelay: `${idx * 100}ms` },
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/10 transition-all", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2.5 text-white", children: s.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6", children: s.desc })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-white/5 space-y-1.5", children: s.highlights.map((h) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-zinc-300", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white/40" }),
                /* @__PURE__ */ jsx("span", { children: h })
              ] }, h)) })
            ]
          },
          s.title
        )) })
      ] })
    }
  );
}
function Contact() {
  const [sending, setSending] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Messaggio inviato con successo! Ti risponderò entro 24 ore.");
      e.target.reset();
    }, 800);
  };
  const copyToClipboard = (text, label) => {
    navigator.clipboard?.writeText(text);
    setCopiedChannel(label);
    toast.success(`${label} copiata negli appunti!`);
    setTimeout(() => setCopiedChannel(null), 2e3);
  };
  const channels = [
    {
      icon: Mail,
      label: "Email Diretta",
      value: "info@walterfidadev.it",
      copyValue: "info@walterfidadev.it",
      href: "mailto:info@walterfidadev.it"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Rapido",
      value: "+39 327 279 1266",
      copyValue: "+393272791266",
      href: "https://wa.me/393272791266"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Walter Fida",
      href: "https://www.linkedin.com/in/walter-fida-a7749b1bb/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Walterinho07",
      href: "https://github.com/Walterinho07"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative px-6 py-28 border-t border-white/5 scroll-mt-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass text-xs font-mono text-zinc-400 mb-3 border border-white/10", children: [
        /* @__PURE__ */ jsx(Mail, { className: "w-3.5 h-3.5 text-zinc-300" }),
        "04 — Iniziamo a Collaborare"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-6xl font-bold tracking-tight text-white", children: [
        "Hai un progetto? ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Parliamone." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-md", children: "Che si tratti di un gestionale desktop, di un sistema di prenotazione o di una nuova web app, scrivimi per una prima valutazione senza impegno." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3 max-w-md", children: channels.map((c) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group flex items-center justify-between gap-4 rounded-2xl apple-card p-4 hover:border-white/20 transition-all",
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: c.href,
                target: "_blank",
                rel: "noreferrer",
                className: "flex items-center gap-3.5 min-w-0 flex-1",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-200 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-zinc-500", children: c.label }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm truncate text-white group-hover:text-zinc-300 transition-colors", children: c.value })
                  ] })
                ]
              }
            ),
            c.copyValue ? /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => copyToClipboard(c.copyValue, c.label),
                title: "Copia negli appunti",
                className: "p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer",
                children: copiedChannel === c.label ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" })
              }
            ) : /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-zinc-500 group-hover:text-white transition-colors shrink-0 mr-2" })
          ]
        },
        c.label
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit,
        className: "rounded-3xl apple-card p-7 sm:p-9 border border-white/10 shadow-2xl",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold text-white mb-2", children: "Invia un messaggio diretto" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-400 mb-6", children: "Compila i campi qui sotto. Rispondo rapidamente a ogni richiesta." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-wider text-zinc-400", children: "Nome o Azienda" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  required: true,
                  name: "name",
                  placeholder: "Mario Rossi",
                  className: "mt-2 rounded-xl bg-white/[0.03] border-white/10 focus-visible:ring-white/20 h-11 text-white placeholder:text-zinc-600"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-wider text-zinc-400", children: "Indirizzo Email" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  required: true,
                  type: "email",
                  name: "email",
                  placeholder: "mario@azienda.it",
                  className: "mt-2 rounded-xl bg-white/[0.03] border-white/10 focus-visible:ring-white/20 h-11 text-white placeholder:text-zinc-600"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-wider text-zinc-400", children: "Dettagli del Progetto" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  required: true,
                  name: "message",
                  rows: 4,
                  placeholder: "Descrivi brevemente l'idea, le tempistiche o gli obiettivi del software...",
                  className: "mt-2 rounded-xl bg-white/[0.03] border-white/10 focus-visible:ring-white/20 resize-none text-white placeholder:text-zinc-600"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                disabled: sending,
                className: "w-full rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 h-12 font-medium mt-2 transition active:scale-95 shadow-lg cursor-pointer",
                children: sending ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
                  " Invio in corso..."
                ] }) : /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  "Invia messaggio ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ] })
              }
            )
          ] })
        ]
      }
    ) })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative px-6 py-12 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Walter Fida · Software & Full-Stack Developer"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/Walterinho07",
          target: "_blank",
          rel: "noreferrer",
          className: "hover:text-white transition",
          children: "GitHub"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/walter-fida-a7749b1bb/",
          target: "_blank",
          rel: "noreferrer",
          className: "hover:text-white transition",
          children: "LinkedIn"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "#top", className: "text-white hover:underline", children: "Torna in cima ↑" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen bg-[#0a0a0c] text-white selection:bg-white/20 selection:text-white", children: [
    /* @__PURE__ */ jsx(AntigravityBackground, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(ArchitectureSection, {}),
      /* @__PURE__ */ jsx(BentoAbout, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Faq, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
