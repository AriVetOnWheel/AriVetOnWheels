import React from "react";
import { brand } from "../../mock";
import { MapPin, ArrowRight } from "lucide-react";

export default function CoverageAreas({ onBook }) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#BCD1D8]/40 shadow-[0_22px_50px_-30px_rgba(31,49,68,0.25)]">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-[#6399BD] flex items-center justify-center">
          <MapPin className="text-[#FFFBF4]" size={22} />
        </div>
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[#6399BD] font-semibold">Concelhos</div>
          <div className="font-serif-display text-xl text-[#1f3144] font-semibold">Atendemos em</div>
        </div>
      </div>
      <div className="mt-7 flex flex-wrap gap-2.5">
        {brand.areas.map((a) => (
          <span
            key={a}
            className="px-4 py-2 rounded-full bg-[#FEEABE]/60 border border-[#FEEABE] text-[#2a4259] font-medium text-sm"
          >
            {a}
          </span>
        ))}
      </div>
      <p className="mt-7 text-[#4a6075] text-sm leading-relaxed">
        Não sabe se estamos na sua zona? Contacte-nos — vamos confirmar disponibilidade e responder rapidamente.
      </p>
      <button onClick={onBook} className="mt-6 btn-pill btn-primary">
        Verificar disponibilidade <ArrowRight size={16} />
      </button>
    </div>
  );
}
