import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Di quali tipologie di software ti occupi principalmente?",
    answer:
      "Sviluppo sia applicazioni web complete (frontend con Angular/React/TypeScript e backend Spring Boot/Java) sia software desktop ad alte prestazioni in JavaFX (come strumenti OSINT, gestionali o tool di analisi dati). Realizzo inoltre sistemi di prenotazione dedicati e siti web su misura.",
  },
  {
    question: "Lavori solo con realtà in Calabria o anche da remoto?",
    answer:
      "Entrambe le cose: ho base in Calabria e supporto con entusiasmo le attività locali (B&B, ristoranti, professionisti e imprese) che vogliono digitalizzarsi, ma collaboro stabilmente anche da remoto con clienti e team in tutta Italia.",
  },
  {
    question: "Come viene gestito lo sviluppo e la consegna del progetto?",
    answer:
      "Adotto un approccio trasparente e iterativo: partiamo da un'analisi dettagliata dei requisiti, definendo tempistiche chiare e deliverable intermedi. Durante lo sviluppo condivido avanzamenti regolari e demo funzionanti, fino al rilascio in produzione e al collaudo finale.",
  },
  {
    question: "Fornisci assistenza e manutenzione dopo il rilascio?",
    answer:
      "Certamente. Non lascio mai il cliente da solo dopo la consegna. Offro pacchetti di supporto per aggiornamenti, monitoraggio, backup, correzione bug e l'aggiunta di nuove funzionalità nel tempo.",
  },
  {
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
    <section id="faq" className="relative px-6 py-28 border-t border-white/5">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full apple-glass text-xs font-mono text-zinc-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-300" />
            Domande Frequenti
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Tutto ciò che <span className="text-gradient">ti serve sapere.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed">
            Risposte chiare su metodo di lavoro, stack tecnologico e modalità di collaborazione.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-2xl apple-card transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-white/20 shadow-xl" : "hover:border-white/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center apple-glass transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white/10 text-white" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-white/5 mt-1 pt-4">
                    {item.answer}
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
