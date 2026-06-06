import React from "react";
import { trustItems } from "../mock";
import { ArrowRight } from "lucide-react";

export default function Trust({ onBook }) {
  return (
    <section className="py-20 md:py-28 bg-[#BCD1D8]/20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#6399BD]">Confiança</div>
          <h2 className="mt-3 font-serif-display text-4xl md:text-[2.85rem] leading-[1.08] text-[#1f3144] font-semibold">
            O que sustenta cada consulta.
          </h2>
          <button onClick={onBook} className="mt-7 btn-pill btn-primary">
            Agendar Consulta <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {trustItems.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group bg-white rounded-2xl p-7 border border-[#BCD1D8]/40 hover:border-[#6399BD]/40 hover:shadow-[0_18px_40px_-22px_rgba(99,153,189,0.45)] transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-[#FEEABE]/60 group-hover:bg-[#FEEABE] flex items-center justify-center transition-colors">
                  <Icon className="text-[#6399BD]" size={22} />
                </div>
                <h3 className="mt-5 font-serif-display text-xl text-[#1f3144] font-semibold">{t.title}</h3>
                <p className="mt-2 text-[#4a6075] text-[0.95rem] leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
