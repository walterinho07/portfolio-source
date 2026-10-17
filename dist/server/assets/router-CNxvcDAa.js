import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Toaster as Toaster$1, toast } from "sonner";
import * as React from "react";
import { useState, useRef } from "react";
import { X, Sparkles, FileCode2, Braces, Terminal, Check, Copy, TerminalSquare, Code2, Server, Monitor, Layers, MapPin, HelpCircle, ChevronDown, Menu, ArrowRight, CheckCircle2, Loader2, ExternalLink, ChevronRight, Github, Globe, Calendar, Wrench, Briefcase, Mail, MessageCircle, Linkedin } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
const appCss = "/assets/styles-CE_GmMcj.css";
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
function AntigravityBackground() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": "true",
      className: "fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-glow" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[35%] -right-[10%] w-[550px] h-[550px] rounded-full bg-teal-500/10 blur-[140px] animate-float-slow" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[65%] left-[5%] w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-[120px] animate-float-reverse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px] animate-pulse-glow" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.035]",
            style: {
              backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 70% at 50% 35%, black 40%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 35%, black 40%, transparent 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-24 left-[15%] w-1.5 h-1.5 rounded-full bg-primary/40 animate-float-slow shadow-[0_0_10px_var(--primary)]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-80 right-[25%] w-2 h-2 rounded-full bg-cyan-300/30 animate-float-medium shadow-[0_0_12px_cyan]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[55%] left-[8%] w-1 h-1 rounded-full bg-teal-400/40 animate-float-reverse shadow-[0_0_8px_teal]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[75%] right-[12%] w-2 h-2 rounded-full bg-indigo-400/30 animate-float-slow shadow-[0_0_10px_indigo]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[88%] left-[40%] w-1.5 h-1.5 rounded-full bg-primary/40 animate-float-medium shadow-[0_0_10px_var(--primary)]" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.10 0.02 255 / 0.7) 100%)"
            }
          }
        )
      ]
    }
  );
}
function DevTerminalCard() {
  const [activeTab, setActiveTab] = useState("profile");
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -9;
    const rotateY = (x - centerX) / centerX * 9;
    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };
  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };
  const copySnippet = () => {
    setCopied(true);
    navigator.clipboard?.writeText("git clone https://github.com/Walterinho07/walter-portfolio");
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative group w-full max-w-xl mx-auto lg:mx-0", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-cyan-400/30 text-xs font-mono text-cyan-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-float-slow", children: [
      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-cyan-400 animate-ping" }),
      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-cyan-400 -ml-4" }),
      /* @__PURE__ */ jsx("span", { children: "System: Online · Ready" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-400/30 text-xs font-mono text-emerald-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-float-reverse", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-emerald-400" }),
      /* @__PURE__ */ jsx("span", { children: "Full-Stack & Desktop" })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: cardRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: {
          transform: transformStyle || "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)"
        },
        className: "relative rounded-2xl glass-card overflow-hidden border border-white/10 shadow-2xl backdrop-blur-2xl",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10 select-none", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-400/30 shadow-[0_0_8px_rgba(239,68,68,0.4)]" }),
              /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-400/30 shadow-[0_0_8px_rgba(245,158,11,0.4)]" }),
              /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-400/30 shadow-[0_0_8px_rgba(16,185,129,0.4)]" }),
              /* @__PURE__ */ jsx("span", { className: "ml-2 font-mono text-xs text-muted-foreground hidden sm:inline", children: "walter@workspace:~" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 font-mono text-xs", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setActiveTab("profile"),
                  className: `flex items-center gap-1.5 px-3 py-1 rounded-md transition ${activeTab === "profile" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
                  children: [
                    /* @__PURE__ */ jsx(FileCode2, { className: "w-3.5 h-3.5" }),
                    "profile.ts"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setActiveTab("stack"),
                  className: `flex items-center gap-1.5 px-3 py-1 rounded-md transition ${activeTab === "stack" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
                  children: [
                    /* @__PURE__ */ jsx(Braces, { className: "w-3.5 h-3.5" }),
                    "stack.json"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setActiveTab("cli"),
                  className: `flex items-center gap-1.5 px-3 py-1 rounded-md transition ${activeTab === "cli" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
                  children: [
                    /* @__PURE__ */ jsx(Terminal, { className: "w-3.5 h-3.5" }),
                    "cli.sh"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: copySnippet,
                title: "Copia comando",
                className: "text-muted-foreground hover:text-foreground transition p-1",
                children: copied ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ jsx(Copy, { className: "w-3.5 h-3.5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[290px] bg-black/30", children: [
            activeTab === "profile" && /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-slate-300", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-semibold", children: "export const" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-cyan-300", children: "developer" }),
                ":",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "SoftwareEngineer" }),
                " = {"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "name" }),
                ":",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: '"Walter Fida"' }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "role" }),
                ":",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: '"Full Stack & Desktop Developer"' }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "location" }),
                ":",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: '"Calabria, Italy 🇮🇹"' }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "academic" }),
                ":",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: '"Computer Science (3rd Year)"' }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "focus" }),
                ": [",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"Web Apps"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"Desktop (JavaFX)"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"Booking Systems"' }),
                "],"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "openForProjects" }),
                ":",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-cyan-400 font-bold", children: "true" }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "deliverables" }),
                ":",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-teal-300", children: '() => "Clean architecture & real value"' }),
                ","
              ] }),
              /* @__PURE__ */ jsx("p", { children: "};" })
            ] }),
            activeTab === "stack" && /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-slate-300", children: [
              /* @__PURE__ */ jsx("p", { children: "{" }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-cyan-300", children: '"backend"' }),
                ": [",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"Java"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"Spring Boot"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"REST APIs"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"SQL"' }),
                "],"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-cyan-300", children: '"frontend"' }),
                ": [",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"Angular"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"TypeScript"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"React"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"Tailwind CSS"' }),
                "],"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-cyan-300", children: '"desktop"' }),
                ": [",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"JavaFX"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"OSINT Tooling"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"GUI Architecture"' }),
                "],"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "pl-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-cyan-300", children: '"versionControl"' }),
                ": [",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"Git"' }),
                ",",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: '"GitHub"' }),
                "]"
              ] }),
              /* @__PURE__ */ jsx("p", { children: "}" })
            ] }),
            activeTab === "cli" && /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-slate-300", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "$" }),
                " walter check-status --verbose"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-slate-400 pl-2", children: [
                "[OK] Spring Boot & Java backend engines active",
                /* @__PURE__ */ jsx("br", {}),
                "[OK] Angular & TypeScript responsive UIs loaded",
                /* @__PURE__ */ jsx("br", {}),
                "[OK] JavaFX Desktop OSINT modules operational"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "$" }),
                " walter contact --hire"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-cyan-400 pl-2", children: "> Pronto a collaborare per trasformare la tua idea in software solido." }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 pt-1 text-slate-400", children: /* @__PURE__ */ jsx("span", { className: "w-2 h-4 bg-primary inline-block animate-pulse" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 bg-black/50 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-emerald-400 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" }),
                "UTF-8"
              ] }),
              /* @__PURE__ */ jsx("span", { children: "TypeScript 5.8" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "LN 18, COL 1 · Space: 2" })
          ] })
        ]
      }
    )
  ] });
}
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
  { name: "REST APIs", category: "backend" }
];
function BentoAbout() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative px-6 py-28 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3", children: [
          /* @__PURE__ */ jsx(TerminalSquare, { className: "w-3.5 h-3.5" }),
          "01 — Architettura & Mindset"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl font-bold tracking-tight", children: [
          "Ingegneria del software, ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "risultati reali." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed", children: "Nessuna complessità inutile. Costruisco codice solido, manutenibile e orientato alla risoluzione di problemi concreti." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 lg:col-span-2 rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-primary/40 transition duration-500", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition duration-700" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsx(Code2, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Identità" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Walter Fida" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed text-sm sm:text-base", children: [
          "Studente al terzo anno di",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Informatica" }),
          " con una forte vocazione per lo sviluppo full-stack e desktop. Mi dedico all'intero ciclo di vita del software: dall'architettura del database fino alla progettazione di interfacce fluide e reattive."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-cyan-300", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary" }),
            "Approccio pragmatico"
          ] }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("span", { children: "Design patterns collaudati" }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("span", { children: "Codice leggibile" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-teal-400/40 transition duration-500", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mb-5", children: /* @__PURE__ */ jsx(Server, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-teal-400 uppercase tracking-wider", children: "Backend Engine" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mt-1 mb-3", children: "Java & Spring Boot" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "API RESTful scalabili, sicurezza, gestione transazionale del database e integrazione con database relazionali SQL." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-indigo-400/40 transition duration-500", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-5", children: /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-indigo-400 uppercase tracking-wider", children: "Desktop & OSINT" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mt-1 mb-3", children: "JavaFX & Tools" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Applicativi desktop ad alte prestazioni per visualizzazione dati geografici, tool interni e gestionali locali." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 lg:col-span-2 rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-cyan-400/40 transition duration-500", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400", children: /* @__PURE__ */ jsx(Layers, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-cyan-400 uppercase tracking-wider", children: "Frontend & Interattività" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: "Angular, React & TypeScript" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: "Costruisco interfacce utente tipizzate, veloci e accessibili. Gestione dello stato pulita, componenti riutilizzabili e animazioni calibrate per una user experience fluida e piacevole." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: stackList.map((tech) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "font-mono text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:border-primary/40 hover:text-primary transition",
            children: tech.name
          },
          tech.name
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 lg:col-span-2 rounded-2xl glass-card p-7 relative overflow-hidden group hover:border-emerald-400/40 transition duration-500 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-emerald-400 uppercase tracking-wider", children: "Base & Connettività" }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: "Calabria, Italia · Remoto Globale" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
            "Disponibile subito"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: "Supporto attività sul territorio calabrese (B&B, ristorazione, PMI locali) e collaboro da remoto con team digitali e startup su progetti software su misura." })
      ] })
    ] })
  ] }) });
}
const faqItems = [
  {
    question: "Di quali tipologie di software ti occupi principalmente?",
    answer: "Sviluppo sia applicazioni web complete (frontend con Angular/React/TypeScript e backend Spring Boot/Java) sia software desktop ad alte prestazioni in JavaFX (come strumenti OSINT, gestionali o tool di analisi dati). Realizzo inoltre sistemi di prenotazione dedicati e siti web su misura."
  },
  {
    question: "Lavori solo con realtà in Calabria o anche da remoto?",
    answer: "Entrambe le cose: ho base in Calabria e supporto con entusiasmo le attività locali (B&B, ristoranti, professionisti e imprese) che vogliono digitalizzarsi, ma collaboro stabilmente anche da remoto con clienti e team in tutta Italia."
  },
  {
    question: "Come viene gestito lo sviluppo e la consegna del progetto?",
    answer: "Adotto un approccio trasparente e iterativo: partiamo da un'analisi dettagliata dei requisiti, definendo tempistiche chiare e deliverable intermedi. Durante lo sviluppo condivido avanzamenti regolari e demo funzionanti, fino al rilascio in produzione e al collaudo finale."
  },
  {
    question: "Fornisci assistenza e manutenzione dopo il rilascio?",
    answer: "Certamente. Non lascio mai il cliente da solo dopo la consegna. Offro pacchetti di supporto per aggiornamenti, monitoraggio, backup, correzione bug e l'aggiunta di nuove funzionalità nel tempo."
  },
  {
    question: "Come posso richiedere una stima o un preventivo per la mia idea?",
    answer: "Puoi scrivermi direttamente tramite il form contatti qui sotto, inviarmi una mail a info@walterfidadev.it oppure contattarmi su WhatsApp. Rispondo solitamente entro 24 ore con una prima valutazione gratuita e senza impegno."
  }
];
function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "relative px-6 py-28 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-3.5 h-3.5" }),
        "Domande Frequenti"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl font-bold tracking-tight", children: [
        "Tutto ciò che ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "ti serve sapere." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed", children: "Risposte chiare su metodo di lavoro, stack tecnologico e modalità di collaborazione." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqItems.map((item, idx) => {
      const isOpen = openIndex === idx;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `rounded-2xl glass-card transition-all duration-300 overflow-hidden ${isOpen ? "border-primary/40 shadow-[0_0_25px_rgba(34,211,238,0.08)]" : "hover:border-white/20"}`,
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => toggle(idx),
                className: "w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer",
                "aria-expanded": isOpen,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-base sm:text-lg text-foreground", children: item.question }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `shrink-0 w-8 h-8 rounded-full flex items-center justify-center glass border border-white/10 transition-transform duration-300 ${isOpen ? "rotate-180 bg-primary/20 text-primary border-primary/30" : "text-muted-foreground"}`,
                      children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
                    }
                  )
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-6 sm:px-6 pt-0 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-white/5 mt-1 pt-4", children: item.answer })
          ]
        },
        item.question
      );
    }) })
  ] }) });
}
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Walter Fida — Software & Full-Stack Developer | Portfolio" },
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
    type: "Desktop App",
    stack: ["Java", "JavaFX", "OSINT", "CSS"],
    description: "Tool OSINT e geolocalizzazione sviluppato in JavaFX per raccogliere, analizzare e visualizzare intelligence da fonti aperte su mappe interattive.",
    longDescription: "GeoShield è un applicativo desktop incentrato sull'intelligence geospaziale. Permette agli operatori di raccogliere dati da sorgenti pubbliche, normalizzarli e visualizzarli con una dashboard ad alta efficienza costruita interamente in JavaFX con architettura modulare.",
    status: "Completato",
    done: true,
    accentColor: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    images: ["/images/Geoshield1.png", "/images/Geoshield2.png"],
    github: "https://github.com/Walterinho07/GeoShield"
  },
  {
    name: "Afterglow",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "SQL"],
    description: "Piattaforma web completa per discoteche e club: gestione eventi, prenotazione tavoli, liste d'ingresso e interfaccia interattiva.",
    longDescription: "Afterglow digitalizza l'esperienza dei locali notturni. Il backend in Spring Boot gestisce la disponibilità in tempo reale e le prenotazioni, mentre il frontend Angular offre un'interfaccia dark, accattivante e ottimizzata per smartphone.",
    status: "Quasi completato",
    done: true,
    accentColor: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
    images: ["/images/afterglow1.png", "/images/afterglow2.png"],
    github: "https://github.com/Walterinho07/Afterglow"
  },
  {
    name: "B&B Booking System",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "Tailwind CSS"],
    description: "Sistema di prenotazione e gestione per strutture ricettive: calendario disponibilità, preventivi istantanei e pannello proprietario.",
    longDescription: "Soluzione concepita per B&B e case vacanza che desiderano rendersi indipendenti dalle piattaforme di terzi. Include sincronizzazione calendario, gestione camere, notifiche e pannello di controllo completo per i gestori.",
    status: "In sviluppo",
    done: false,
    accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    images: ["/images/BBPAGINA1.png", "/images/bbpagina2.png", "/images/bbpagina3.png"],
    github: "https://github.com/Walterinho07/BB-Booking-System"
  },
  {
    name: "Restaurant Booking & Menu",
    type: "Web App",
    stack: ["Angular", "Spring Boot", "TypeScript", "PostgreSQL"],
    description: "Piattaforma digitale per ristorazione con menù interattivo, prenotazione tavoli con fasce orarie e gestione comande.",
    longDescription: "Applicazione web full-stack studiata per ristoranti e pizzerie: riduce i no-show grazie a conferme automatiche e permette ai clienti di consultare allergeni, piatti del giorno e disponibilità tavoli in tempo reale.",
    status: "In sviluppo",
    done: false,
    accentColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    images: ["/images/BBPAGINA1.png"],
    github: "https://github.com/Walterinho07/Restaurant-Booking"
  }
];
const services = [
  {
    icon: Globe,
    title: "Siti Web & Landing Page Spaziali",
    desc: "Siti ad altissime prestazioni, veloci e responsive, curati nel dettaglio visivo per valorizzare la tua presenza online e convertire i visitatori.",
    highlights: ["Design personalizzato", "SEO & Core Web Vitals", "Micro-interazioni fluide"]
  },
  {
    icon: Code2,
    title: "Web App Full-Stack su Misura",
    desc: "Applicazioni complete frontend + backend: logica di business in Spring Boot, API REST ben documentate e interfacce reattive in Angular o React.",
    highlights: ["Architettura scalabile", "Database SQL relazionali", "Codice tipizzato"]
  },
  {
    icon: Calendar,
    title: "Sistemi di Prenotazione Dedicati",
    desc: "Booking online indipendente per B&B, locali e ristoranti. Riduci le commissioni di portali terzi e gestisci le disponibilità con semplicità.",
    highlights: ["Calendari real-time", "Notifiche automatiche", "Pannello di amministrazione"]
  },
  {
    icon: Monitor,
    title: "Software Desktop in Java & JavaFX",
    desc: "Applicativi gestionali nativi, tool di monitoraggio o strumenti specialistici (es. tool OSINT) progettati per girare in locale con massime performance.",
    highlights: [
      "Interfacce JavaFX fluide",
      "Accesso hardware/file system",
      "Zero lag e alta reattività"
    ]
  },
  {
    icon: Wrench,
    title: "Manutenzione, Supporto & Cloud",
    desc: "Risoluzione bug, aggiornamenti periodici, ottimizzazione delle query e deploy su server o cloud. Sono al tuo fianco anche dopo il rilascio.",
    highlights: ["SLA di intervento rapido", "Backup e sicurezza", "Evolutive su richiesta"]
  },
  {
    icon: Briefcase,
    title: "Consulenza Tecnica & Architettura",
    desc: "Ti guido nella scelta dello stack tecnologico corretto evitando errori architetturali costosi prima ancora di scrivere la prima riga di codice.",
    highlights: ["Analisi di fattibilità", "Scelta dello stack ottimale", "Ottimizzazione costi"]
  }
];
function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Progetti" },
    { href: "#services", label: "Servizi" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contatti" }
  ];
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl rounded-full glass border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] px-5 py-2.5 flex items-center justify-between pointer-events-auto backdrop-blur-xl", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2 font-mono text-sm tracking-tight group", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-primary animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-gradient font-bold group-hover:opacity-80 transition", children: "<WalterFida/dev>" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-muted-foreground", children: links.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          className: "hover:text-foreground hover:text-cyan-300 transition-colors py-1",
          children: link.label
        },
        link.href
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            asChild: true,
            size: "sm",
            className: "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_var(--primary)] text-xs font-semibold px-4",
            children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contattami" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            className: "md:hidden p-1.5 rounded-lg text-muted-foreground hover:text-foreground glass",
            "aria-label": "Toggle menu",
            children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }),
    mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-3 mx-auto max-w-sm rounded-2xl glass-card p-5 border border-white/10 shadow-2xl pointer-events-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-3 font-medium text-sm", children: links.map((link) => /* @__PURE__ */ jsx(
      "a",
      {
        href: link.href,
        onClick: () => setMobileMenuOpen(false),
        className: "px-3 py-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition",
        children: link.label
      },
      link.href
    )) }) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { id: "top", className: "relative pt-36 sm:pt-44 pb-20 px-6 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-8 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 flex flex-col items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/30 text-xs font-mono text-cyan-300 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.15)] animate-float-slow", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-cyan-400" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Software & Full-Stack Developer · Calabria, IT" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground", children: [
        "Trasformo idee in",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient drop-shadow-sm", children: "software che funziona." })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl", children: [
        "Progetto e sviluppo applicazioni web su misura, architetture backend affidabili in",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Java & Spring Boot" }),
        ", interfacce moderne e software desktop nativi in",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "JavaFX" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-4 items-center w-full sm:w-auto", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            className: "rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)] font-semibold text-sm px-6 h-12",
            children: /* @__PURE__ */ jsxs("a", { href: "#projects", className: "flex items-center gap-2", children: [
              "Esplora i miei progetti ",
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
            className: "rounded-xl border-white/15 bg-white/5 hover:bg-white/10 text-foreground text-sm px-6 h-12 glass",
            children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Parliamo del tuo progetto" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-lg font-mono", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl sm:text-3xl font-bold text-foreground", children: "100%" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Codice Pulito & Manutenibile" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl sm:text-3xl font-bold text-primary", children: "Full-Stack" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Front + Back + Desktop" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl sm:text-3xl font-bold text-emerald-400", children: "Attivo" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Disponibile Subito" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 flex justify-center lg:justify-end", children: /* @__PURE__ */ jsx(DevTerminalCard, {}) })
  ] }) }) });
}
function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);
  const openProject = (p) => {
    setSelected(p);
    setActiveImageIndex(0);
    setFullscreenImageIndex(null);
    setOpen(true);
  };
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "relative px-6 py-28 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3", children: [
          /* @__PURE__ */ jsx(Layers, { className: "w-3.5 h-3.5" }),
          "02 — Showcase Progetti"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl font-bold tracking-tight", children: [
          "Cosa ho ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "costruito." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed", children: "Una selezione di progetti reali e tool open source sviluppati con attenzione alle performance, all'architettura e alla user experience." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: projects.map((p) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group relative rounded-3xl glass-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-glow-lg)] flex flex-col justify-between",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-wider text-primary", children: p.type }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-bold tracking-tight mt-1 group-hover:text-cyan-300 transition-colors", children: p.name })
              ] }),
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: `inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${p.done ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300"}`,
                  children: [
                    p.done ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-emerald-400" }) : /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-amber-400" }),
                    p.status
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm sm:text-base leading-relaxed mb-6", children: p.description }),
            p.images && p.images.length > 0 && /* @__PURE__ */ jsxs(
              "div",
              {
                onClick: () => openProject(p),
                className: "cursor-pointer mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black/40 relative group/img aspect-video",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: p.images[0],
                      alt: p.name,
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4", children: /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono text-cyan-300 flex items-center gap-1", children: [
                    "Clicca per aprire la galleria ",
                    /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" })
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: p.stack.map((tech) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300",
                children: tech
              },
              tech
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-white/10 flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => openProject(p),
                className: "font-medium text-primary hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors group/btn",
                children: [
                  "Dettagli completi",
                  /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 transition-transform group-hover/btn:translate-x-1" })
                ]
              }
            ),
            p.github && /* @__PURE__ */ jsxs(
              "a",
              {
                href: p.github,
                target: "_blank",
                rel: "noreferrer",
                className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors font-mono text-xs",
                children: [
                  /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
                  "Sorgente"
                ]
              }
            )
          ] })
        ]
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
        children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-3xl glass-card border border-white/15 bg-slate-950/95 backdrop-blur-2xl text-foreground rounded-3xl p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-wider text-primary", children: selected?.type }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded-full border ${selected?.done ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300"}`,
                  children: selected?.status
                }
              )
            ] }),
            /* @__PURE__ */ jsx(DialogTitle, { className: "text-2xl sm:text-3xl font-bold mt-2", children: selected?.name })
          ] }),
          /* @__PURE__ */ jsx(DialogDescription, { className: "text-muted-foreground text-sm sm:text-base leading-relaxed mt-2", children: selected?.longDescription || selected?.description }),
          selected?.images && selected.images.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-3", children: [
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-white/10 bg-black/60", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: selected.images[activeImageIndex],
                alt: `${selected.name} preview`,
                className: "w-full h-auto max-h-[400px] object-contain mx-auto"
              }
            ) }),
            selected.images.length > 1 && /* @__PURE__ */ jsx("div", { className: "flex gap-2.5 overflow-x-auto pb-1", children: selected.images.map((src, idx) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setActiveImageIndex(idx),
                className: `rounded-xl overflow-hidden border p-0 w-24 h-16 shrink-0 transition ${idx === activeImageIndex ? "border-primary ring-2 ring-primary/30" : "border-white/10 opacity-60 hover:opacity-100"}`,
                children: /* @__PURE__ */ jsx("img", { src, alt: "thumbnail", className: "w-full h-full object-cover" })
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: selected?.stack.map((s) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300",
                children: s
              },
              s
            )) }),
            selected?.github && /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                size: "sm",
                variant: "outline",
                className: "rounded-xl border-white/15 glass hover:bg-white/10",
                children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: selected.github,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 text-xs font-mono",
                    children: [
                      /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
                      " Repository GitHub"
                    ]
                  }
                )
              }
            )
          ] })
        ] })
      }
    )
  ] }) });
}
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "relative px-6 py-28 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
        "03 — Servizi per il tuo Business"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl font-bold tracking-tight", children: [
        "Soluzioni ingegnerizzate per ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "crescere." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed", children: "Dalla digitalizzazione di attività locali calabresi fino a piattaforme scalabili su misura: costruisco software stabile, veloce e senza dipendenze fragili." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-3xl glass-card p-7 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1.5 flex flex-col justify-between group",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-transform", children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg sm:text-xl mb-3 text-foreground group-hover:text-cyan-300 transition-colors", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: s.desc })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-white/5 space-y-1.5", children: s.highlights.map((h) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-slate-300", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
            /* @__PURE__ */ jsx("span", { children: h })
          ] }, h)) })
        ]
      },
      s.title
    )) })
  ] }) });
}
function Contact() {
  const [sending, setSending] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Messaggio inviato con successo! Ti ricontatterò entro 24 ore.");
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
      label: "GitHub Profile",
      value: "@Walterinho07",
      href: "https://github.com/Walterinho07"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative px-6 py-28 border-t border-white/5", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-3", children: [
        /* @__PURE__ */ jsx(Mail, { className: "w-3.5 h-3.5" }),
        "04 — Iniziamo a Collaborare"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-6xl font-bold tracking-tight", children: [
        "Hai un progetto? ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Realizziamolo." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md", children: "Che si tratti di un gestionale desktop, di un booking system per la tua attività o di una nuova web app, scrivimi per una prima consulenza gratuita." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3.5 max-w-md", children: channels.map((c) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group flex items-center justify-between gap-4 rounded-2xl glass-card p-4 hover:border-primary/40 transition-colors",
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: c.href,
                target: "_blank",
                rel: "noreferrer",
                className: "flex items-center gap-4 min-w-0 flex-1",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform", children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-muted-foreground", children: c.label }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm truncate text-foreground group-hover:text-cyan-300 transition-colors", children: c.value })
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
                className: "p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition",
                children: copiedChannel === c.label ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" })
              }
            ) : /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mr-2" })
          ]
        },
        c.label
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit,
        className: "rounded-3xl glass-card p-7 sm:p-9 border border-white/15 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold mb-2", children: "Invia un messaggio diretto" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Compila i campi qui sotto. Rispondo rapidamente a ogni richiesta." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-wider text-muted-foreground", children: "Nome o Azienda" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  required: true,
                  name: "name",
                  placeholder: "Es. Mario Rossi",
                  className: "mt-2 rounded-xl bg-black/40 border-white/10 focus-visible:ring-primary h-11"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-wider text-muted-foreground", children: "Indirizzo Email" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  required: true,
                  type: "email",
                  name: "email",
                  placeholder: "mario@azienda.it",
                  className: "mt-2 rounded-xl bg-black/40 border-white/10 focus-visible:ring-primary h-11"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "font-mono text-xs uppercase tracking-wider text-muted-foreground", children: "Dettagli del Progetto" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  required: true,
                  name: "message",
                  rows: 4,
                  placeholder: "Descrivi brevemente l'idea, le tempistiche o gli obiettivi del software...",
                  className: "mt-2 rounded-xl bg-black/40 border-white/10 focus-visible:ring-primary resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                disabled: sending,
                className: "w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 h-12 shadow-[var(--shadow-glow)] font-semibold mt-2",
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
  return /* @__PURE__ */ jsx("footer", { className: "relative px-6 py-12 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
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
          className: "hover:text-foreground transition",
          children: "GitHub"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/walter-fida-a7749b1bb/",
          target: "_blank",
          rel: "noreferrer",
          className: "hover:text-foreground transition",
          children: "LinkedIn"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "#top", className: "text-primary hover:underline", children: "Torna in cima ↑" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground", children: [
    /* @__PURE__ */ jsx(AntigravityBackground, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
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
