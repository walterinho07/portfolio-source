import React from "react";

export function AntigravityBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#0a0a0c]"
    >
      {/* Subtle Volumetric Light Pools (Apple Pro Space Gray / Titanium Glow) */}
      <div className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-slate-400/[0.04] blur-[140px] animate-lens-drift" />
      <div className="absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full bg-sky-500/[0.035] blur-[150px] animate-float-slow" />
      <div className="absolute top-[65%] left-[5%] w-[500px] h-[500px] rounded-full bg-zinc-300/[0.03] blur-[130px] animate-float-reverse" />
      <div className="absolute -bottom-[15%] right-[20%] w-[700px] h-[700px] rounded-full bg-slate-500/[0.03] blur-[160px]" />

      {/* Weightless Floating Frosted Glass Lenses (Apple Aesthetic) */}
      <div
        className="absolute top-28 left-[8%] w-32 h-32 rounded-full border border-white/[0.08] bg-white/[0.015] backdrop-blur-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] animate-float-slow"
        style={{ animationDuration: "14s" }}
      />
      <div
        className="absolute top-[42%] right-[7%] w-48 h-48 rounded-full border border-white/[0.06] bg-white/[0.01] backdrop-blur-[8px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] animate-float-reverse"
        style={{ animationDuration: "16s" }}
      />
      <div
        className="absolute top-[75%] left-[12%] w-24 h-24 rounded-full border border-white/[0.07] bg-white/[0.015] backdrop-blur-[5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] animate-float-medium"
        style={{ animationDuration: "11s" }}
      />

      {/* Floating Precision Orbital Rings */}
      <div
        className="absolute top-[20%] right-[22%] w-72 h-72 rounded-full border border-white/[0.04] animate-float-slow pointer-events-none"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute top-[60%] left-[25%] w-96 h-96 rounded-full border border-white/[0.03] animate-float-reverse pointer-events-none"
        style={{ animationDuration: "24s" }}
      />

      {/* Subtle Specular Horizon Gradient Mask */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 15%, transparent 20%, #0a0a0c 90%)",
        }}
      />
    </div>
  );
}
