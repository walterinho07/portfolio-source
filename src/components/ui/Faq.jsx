import React from 'react';

const faqItems = [
  {
    question: 'Di cosa ti occupi?',
    answer: 'Sviluppo siti web e applicazioni moderne con un focus su design responsivo, performance e accessibilità.',
  },
  {
    question: 'Come posso contattarti?',
    answer: 'Puoi inviarmi un messaggio tramite la sezione contatti del portfolio oppure scrivermi via email se presente nel footer.',
  },
  {
    question: 'Quali tecnologie usi?',
    answer: 'Lavoro principalmente con JavaScript, React, HTML, CSS e librerie correlate per creare esperienze web dinamiche.',
  },
  {
    question: 'Posso richiedere un preventivo?',
    answer: 'Sì, contattami con i dettagli del progetto e ti risponderò con una stima dei tempi e dei costi.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="px-6 py-16 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Domande frequenti</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Qui trovi le risposte ai dubbi più comuni sull&apos;approccio ai progetti, alle tempistiche e al mio modo di lavorare.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 transition hover:border-cyan-400"
            >
              <summary className="cursor-pointer text-lg font-medium text-slate-100">
                {item.question}
              </summary>
              <p className="mt-3 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
