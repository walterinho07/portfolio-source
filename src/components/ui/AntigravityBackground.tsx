import React from "react";

export function AntigravityBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* Dynamic ambient gradient meshes (Zero-G Orbs) */}
      <div className="absolute -top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-glow" />
      <div className="absolute top-[35%] -right-[10%] w-[550px] h-[550px] rounded-full bg-teal-500/10 blur-[140px] animate-float-slow" />
      <div className="absolute top-[65%] left-[5%] w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-[120px] animate-float-reverse" />
      <div className="absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px] animate-pulse-glow" />

      {/* Cyber Isometric Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 35%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle floating coordinate markers / zero-gravity micro particles */}
      <div className="absolute top-24 left-[15%] w-1.5 h-1.5 rounded-full bg-primary/40 animate-float-slow shadow-[0_0_10px_var(--primary)]" />
      <div className="absolute top-80 right-[25%] w-2 h-2 rounded-full bg-cyan-300/30 animate-float-medium shadow-[0_0_12px_cyan]" />
      <div className="absolute top-[55%] left-[8%] w-1 h-1 rounded-full bg-teal-400/40 animate-float-reverse shadow-[0_0_8px_teal]" />
      <div className="absolute top-[75%] right-[12%] w-2 h-2 rounded-full bg-indigo-400/30 animate-float-slow shadow-[0_0_10px_indigo]" />
      <div className="absolute top-[88%] left-[40%] w-1.5 h-1.5 rounded-full bg-primary/40 animate-float-medium shadow-[0_0_10px_var(--primary)]" />

      {/* Radial vignette mask for depth focus */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, oklch(0.10 0.02 255 / 0.7) 100%)",
        }}
      />
    </div>
  );
}
