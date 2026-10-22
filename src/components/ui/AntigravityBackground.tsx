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

      {/* 3D Gyroscope Orbital Rings (Rotating in 3D Space) */}
      <div className="absolute top-[18%] right-[18%] w-80 h-80 perspective-stage-1200 opacity-25 pointer-events-none">
        <div className="w-full h-full rounded-full border border-sky-400/30 animate-gyro-1 shadow-[0_0_25px_rgba(56,189,248,0.15)]" />
      </div>
      <div className="absolute top-[55%] left-[10%] w-96 h-96 perspective-stage-1200 opacity-20 pointer-events-none">
        <div className="w-full h-full rounded-full border border-indigo-400/25 animate-gyro-2 shadow-[0_0_30px_rgba(129,140,248,0.12)]" />
      </div>

      {/* 3D Floating Liquid Chrome Mercury Spheres */}
      <div
        className="absolute top-[28%] right-[12%] w-20 h-20 rounded-full border border-white/35 bg-gradient-to-br from-white/30 via-slate-400/15 to-transparent shadow-[0_20px_45px_rgba(0,0,0,0.85),inset_0_2px_5px_rgba(255,255,255,0.6)] backdrop-blur-md animate-chrome-pulse pointer-events-none"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-[22%] left-[8%] w-28 h-28 rounded-full border border-white/25 bg-gradient-to-br from-white/20 via-zinc-400/10 to-transparent shadow-[0_25px_50px_rgba(0,0,0,0.9),inset_0_2px_6px_rgba(255,255,255,0.4)] backdrop-blur-md animate-float-slow pointer-events-none"
        style={{ animationDuration: "11s" }}
      />

      {/* Weightless Floating Frosted Glass Lenses */}
      <div
        className="absolute top-28 left-[8%] w-32 h-32 rounded-full border border-white/[0.08] bg-white/[0.015] backdrop-blur-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] animate-float-slow"
        style={{ animationDuration: "14s" }}
      />
      <div
        className="absolute top-[42%] right-[7%] w-44 h-44 rounded-full border border-white/[0.06] bg-white/[0.01] backdrop-blur-[8px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] animate-float-reverse"
        style={{ animationDuration: "16s" }}
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
