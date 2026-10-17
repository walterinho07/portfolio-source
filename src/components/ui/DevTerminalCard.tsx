import React, { useState, useRef } from "react";
import { Terminal, FileCode2, Braces, Sparkles, Check, Copy } from "lucide-react";

export function DevTerminalCard() {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "cli">("profile");
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  const copySnippet = () => {
    setCopied(true);
    navigator.clipboard?.writeText("git clone https://github.com/Walterinho07/walter-portfolio");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group w-full max-w-xl mx-auto lg:mx-0">
      {/* Floating Spatial Glow Aura */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse-glow" />

      {/* Floating Satellites (Antigravity Floating Pods) */}
      <div className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-cyan-400/30 text-xs font-mono text-cyan-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-float-slow">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-4" />
        <span>System: Online · Ready</span>
      </div>

      <div className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-400/30 text-xs font-mono text-emerald-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-float-reverse">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>Full-Stack & Desktop</span>
      </div>

      {/* 3D Glass Container with interactive tilt */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle || "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
        }}
        className="relative rounded-2xl glass-card overflow-hidden border border-white/10 shadow-2xl backdrop-blur-2xl"
      >
        {/* Top Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10 select-none">
          {/* macOS / Linux style dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-400/30 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-400/30 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-400/30 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            <span className="ml-2 font-mono text-xs text-muted-foreground hidden sm:inline">
              walter@workspace:~
            </span>
          </div>

          {/* Interactive Tabs */}
          <div className="flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
                activeTab === "profile"
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              profile.ts
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
                activeTab === "stack"
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Braces className="w-3.5 h-3.5" />
              stack.json
            </button>
            <button
              onClick={() => setActiveTab("cli")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
                activeTab === "cli"
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              cli.sh
            </button>
          </div>

          <button
            onClick={copySnippet}
            title="Copia comando"
            className="text-muted-foreground hover:text-foreground transition p-1"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Code / Terminal Content Area */}
        <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[290px] bg-black/30">
          {activeTab === "profile" && (
            <div className="space-y-1 text-slate-300">
              <p>
                <span className="text-indigo-400 font-semibold">export const</span>{" "}
                <span className="text-cyan-300">developer</span>:{" "}
                <span className="text-teal-400">SoftwareEngineer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-slate-400">name</span>:{" "}
                <span className="text-emerald-300">"Walter Fida"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">role</span>:{" "}
                <span className="text-emerald-300">"Full Stack & Desktop Developer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">location</span>:{" "}
                <span className="text-emerald-300">"Calabria, Italy 🇮🇹"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">academic</span>:{" "}
                <span className="text-emerald-300">"Computer Science (3rd Year)"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">focus</span>: [
                <span className="text-amber-300">"Web Apps"</span>,{" "}
                <span className="text-amber-300">"Desktop (JavaFX)"</span>,{" "}
                <span className="text-amber-300">"Booking Systems"</span>],
              </p>
              <p className="pl-4">
                <span className="text-slate-400">openForProjects</span>:{" "}
                <span className="text-cyan-400 font-bold">true</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">deliverables</span>:{" "}
                <span className="text-teal-300">() =&gt; "Clean architecture & real value"</span>,
              </p>
              <p>&#125;;</p>
            </div>
          )}

          {activeTab === "stack" && (
            <div className="space-y-1 text-slate-300">
              <p>&#123;</p>
              <p className="pl-4">
                <span className="text-cyan-300">"backend"</span>: [
                <span className="text-amber-300">"Java"</span>,{" "}
                <span className="text-amber-300">"Spring Boot"</span>,{" "}
                <span className="text-amber-300">"REST APIs"</span>,{" "}
                <span className="text-amber-300">"SQL"</span>],
              </p>
              <p className="pl-4">
                <span className="text-cyan-300">"frontend"</span>: [
                <span className="text-amber-300">"Angular"</span>,{" "}
                <span className="text-amber-300">"TypeScript"</span>,{" "}
                <span className="text-amber-300">"React"</span>,{" "}
                <span className="text-amber-300">"Tailwind CSS"</span>],
              </p>
              <p className="pl-4">
                <span className="text-cyan-300">"desktop"</span>: [
                <span className="text-amber-300">"JavaFX"</span>,{" "}
                <span className="text-amber-300">"OSINT Tooling"</span>,{" "}
                <span className="text-amber-300">"GUI Architecture"</span>],
              </p>
              <p className="pl-4">
                <span className="text-cyan-300">"versionControl"</span>: [
                <span className="text-amber-300">"Git"</span>,{" "}
                <span className="text-amber-300">"GitHub"</span>]
              </p>
              <p>&#125;</p>
            </div>
          )}

          {activeTab === "cli" && (
            <div className="space-y-2 text-slate-300">
              <div>
                <span className="text-emerald-400">$</span> walter check-status --verbose
              </div>
              <div className="text-slate-400 pl-2">
                [OK] Spring Boot & Java backend engines active
                <br />
                [OK] Angular & TypeScript responsive UIs loaded
                <br />
                [OK] JavaFX Desktop OSINT modules operational
              </div>
              <div className="pt-2">
                <span className="text-emerald-400">$</span> walter contact --hire
              </div>
              <div className="text-cyan-400 pl-2">
                &gt; Pronto a collaborare per trasformare la tua idea in software solido.
              </div>
              <div className="flex items-center gap-1.5 pt-1 text-slate-400">
                <span className="w-2 h-4 bg-primary inline-block animate-pulse" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status Bar */}
        <div className="px-4 py-2 bg-black/50 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              UTF-8
            </span>
            <span>TypeScript 5.8</span>
          </div>
          <span className="text-slate-400">LN 18, COL 1 · Space: 2</span>
        </div>
      </div>
    </div>
  );
}
