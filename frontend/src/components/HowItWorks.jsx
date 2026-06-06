import React, { useState } from "react";
import { steps } from "../mock";
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function HowItWorks({ onBook }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#6399BD]">
            Como funciona?
          </div>
          <h2 className="mt-3 font-serif-display text-4xl md:text-[2.6rem] leading-[1.1] text-[#1f3144] font-semibold">
            O nosso processo simples que descomplica o seu dia a dia.
          </h2>
          <p className="mt-5 text-[#4a6075] leading-relaxed max-w-md">
            Em quatro passos rápidos, marcamos a consulta, alinhamos o orçamento e cuidamos do seu animal em casa.
          </p>
          <button onClick={onBook} className="mt-7 btn-pill btn-primary">
            Agendar consulta <ArrowRight size={16} />
          </button>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {steps.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#6399BD]/40 shadow-[0_18px_40px_-22px_rgba(99,153,189,0.55)]"
                    : "bg-[#FFFBF4] border-[#BCD1D8]/40 hover:border-[#6399BD]/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-5 px-5 md:px-7 py-5 md:py-6 text-left"
                >
                  <span
                    className={`shrink-0 h-12 w-12 rounded-xl flex items-center justify-center font-serif-display font-semibold text-lg transition-colors ${
                      isOpen ? "bg-[#6399BD] text-[#FFFBF4]" : "bg-[#FEEABE] text-[#2a4259]"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span className="flex-1 font-serif-display text-xl md:text-[1.35rem] text-[#1f3144] font-semibold">
                    {s.title}
                  </span>
                  <span className="h-9 w-9 rounded-full bg-[#FFFBF4] border border-[#BCD1D8] flex items-center justify-center text-[#6399BD]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-7 pb-6 -mt-2 pl-[5.25rem] text-[#4a6075] leading-relaxed">
                    {s.desc}
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
