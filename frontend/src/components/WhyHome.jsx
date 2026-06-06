import React from "react";
import { reasons } from "../mock";
import { ArrowRight } from "lucide-react";

export default function WhyHome({ onBook }) {
  return (
    <section className="py-20 md:py-28 bg-[#BCD1D8]/20 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#6399BD]">Porquê em casa</div>
          <h2 className="mt-3 font-serif-display text-4xl md:text-[2.85rem] leading-[1.08] text-[#1f3144] font-semibold">
            Uma forma diferente de fazer medicina veterinária.
          </h2>
          <button onClick={onBook} className="mt-7 btn-pill btn-outline">
            Agendar consulta <ArrowRight size={16} />
          </button>
        </div>

        <div className="space-y-20 md:space-y-28">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div className="aspect-[5/4] rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-25px_rgba(31,49,68,0.35)]">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-3 md:right-6 h-20 w-20 rounded-2xl bg-[#FEEABE] hidden md:block" />
              </div>
              <div>
                <div className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#6399BD]">
                  {r.eyebrow}
                </div>
                <h3 className="mt-3 font-serif-display text-3xl md:text-[2.3rem] leading-[1.1] text-[#1f3144] font-semibold">
                  {r.title}
                </h3>
                <p className="mt-4 text-[#4a6075] text-[1.02rem] leading-relaxed">{r.desc}</p>
                <button onClick={onBook} className="mt-6 btn-pill btn-outline">
                  Agendar consulta <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
