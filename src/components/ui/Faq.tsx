import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

interface FaqItem {
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    tag: "Architettura & Stack",
    icon: Layers,
    question: "Di quali tipologie di software ti occupi principalmente?",
    answer:
      "Sviluppo sia applicazioni web complete (frontend reattivo in Angular o React e backend solido in Spring Boot/Java con PostgreSQL) sia software desktop ad alte prestazioni in JavaFX (come strumenti OSINT, gestionali o tool di analisi dati). Realizzo inoltre sistemi di prenotazione dedicati e piattaforme su misura.",
  },
  {
    tag: "Operatività & Remoto",
    icon: Zap,
    question: "Lavori solo con realtà in Calabria o anche da remoto?",
    answer:
      "Entrambe le cose: ho base in Calabria e supporto con entusiasmo le attività locali (B&B, ristoranti, professionisti e PMI) che desiderano digitalizzarsi senza intermediari costosi, ma collaboro stabilmente anche da remoto con clienti e team in tutta Italia.",
  },
  {
    tag: "Metodologia & Rilascio",
    icon: ShieldCheck,
    question: "Come viene gestito lo sviluppo e la consegna del progetto?",
    answer:
      "Adotto un approccio trasparente e iterativo: partiamo da un'analisi dettagliata dei requisiti, definendo tempistiche chiare e deliverable intermedi. Durante lo sviluppo condivido avanzamenti regolari e demo funzionanti, fino al rilascio in produzione e al collaudo finale.",
  },
  {
    tag: "Assistenza Post-Lancio",
    icon: Sparkles,
    question: "Fornisci assistenza e manutenzione dopo il rilascio?",
    answer:
      "Certamente. Non lascio mai il cliente da solo dopo la consegna. Offro pacchetti di supporto per aggiornamenti, monitoraggio, backup, correzione bug e l'aggiunta di nuove funzionalità nel tempo.",
  },
  {
    tag: "Preventivo & Consulenza",
    icon: HelpCircle,
    question: "Come posso richiedere una stima o un preventivo per la mia idea?",
    answer:
      "Puoi scrivermi direttamente tramite il form contatti qui sotto, inviarmi una mail a info@walterfidadev.it oppure contattarmi su WhatsApp. Rispondo solitamente entro 24 ore con una prima valutazione gratuita e senza impegno.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative px-6 py-32 border-t border-white/10 overflow-hidden">
      {/* =========================================================================
          LIQUID METAL 3D AMBIENT BACKGROUND
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        {/* Liquid Mercury Blob 1 (Top Left Fluid Flow) */}
        <div
          className="absolute -top-[10%] -left-[10%] w-[550px] h-[550px] rounded-full blur-[100px] animate-mercury-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(148,163,184,0.08) 50%, transparent 80%)",
            animationDuration: "12s",
          }}
        />

        {/* Liquid Chrome Ripple (Center Right Fluid Flow) */}
        <div
          className="absolute top-[30%] -right-[15%] w-[650px] h-[650px] rounded-full blur-[120px] animate-mercury-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(226,232,240,0.14) 0%, rgba(56,189,248,0.06) 40%, transparent 75%)",
            animationDuration: "16s",
            animationDelay: "-4s",
          }}
        />

        {/* Molten Metal Wave Ribbon (Diagonal Flow) */}
        <div
          className="absolute inset-0 opacity-[0.06] animate-liquid-flow"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.8) 25%, transparent 50%, rgba(255,255,255,0.6) 75%, transparent 100%)",
          }}
        />

        {/* Floating 3D Mercury Spheres / Chrome Drops */}
        <div
          className="absolute top-20 right-[18%] w-16 h-16 rounded-full border border-white/30 bg-gradient-to-br from-white/25 via-zinc-400/10 to-transparent shadow-[0_15px_30px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.5)] backdrop-blur-md animate-float-slow"
          style={{ animationDuration: "9s" }}
        />
        <div
          className="absolute bottom-24 left-[14%] w-24 h-24 rounded-full border border-white/20 bg-gradient-to-br from-white/20 via-slate-400/10 to-transparent shadow-[0_20px_40px_rgba(0,0,0,0.7),inset_0_2px_6px_rgba(255,255,255,0.4)] backdrop-blur-md animate-float-reverse"
          style={{ animationDuration: "13s" }}
        />
        <div
          className="absolute top-[55%] left-[6%] w-10 h-10 rounded-full border border-white/25 bg-gradient-to-br from-white/20 via-zinc-400/10 to-transparent shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_1.5px_3px_rgba(255,255,255,0.5)] backdrop-blur-sm animate-float-medium"
          style={{ animationDuration: "7s" }}
        />
      </div>

      <div className="mx-auto max-w-4xl relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-metal-card text-xs font-mono text-zinc-300 mb-4 shadow-lg border border-white/25">
            <Sparkles className="w-3.5 h-3.5 text-zinc-100" />
            <span>Domande Frequenti & Risposte</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Tutto ciò che <span className="text-gradient">ti serve sapere.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed">
            Risposte trasparenti su architettura software, modalità di collaborazione e tempi di
            consegna.
          </p>
        </div>

        {/* Liquid Metal 3D Accordion Cards */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            const ItemIcon = item.icon;

            return (
              <div
                key={item.question}
                className={`relative rounded-3xl transition-all duration-500 overflow-hidden group ${
                  isOpen
                    ? "liquid-metal-card-active scale-[1.01]"
                    : "liquid-metal-card hover:border-white/30"
                }`}
              >
                {/* Specular Chrome Shimmer Reflection on Hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full duration-1000" />

                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-7 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-white/20 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                          : "bg-white/5 border-white/10 text-zinc-400 group-hover:text-white"
                      }`}
                    >
                      <ItemIcon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="font-bold text-base sm:text-lg text-white leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  {/* 3D Chrome Chevron Button */}
                  <div
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-white text-zinc-950 border-white shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
                        : "bg-white/5 border-white/15 text-zinc-400 group-hover:text-white group-hover:border-white/30"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-8 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/10 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
