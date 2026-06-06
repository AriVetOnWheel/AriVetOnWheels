import React from "react";
import { brand } from "../mock";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export default function Coverage({ onBook }) {
  return (
    <section id="cobertura" className="py-20 md:py-28 bg-[#FEEABE]/30 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#BCD1D8]/40 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#6399BD]">
            Onde estamos
          </div>
          <h2 className="mt-3 font-serif-display text-4xl md:text-[2.85rem] leading-[1.08] text-[#1f3144] font-semibold">
            Área de cobertura
          </h2>
          <p className="mt-4 text-[#4a6075] leading-relaxed">
            Visitas domiciliárias em toda a região de Lisboa Norte e Península de Setúbal.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {/* Areas card */}
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

          {/* Map illustration card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#BCD1D8]/40 shadow-[0_22px_50px_-30px_rgba(31,49,68,0.25)] relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-[#FEEABE] flex items-center justify-center">
                <Clock className="text-[#6399BD]" size={22} />
              </div>
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[#6399BD] font-semibold">Horário</div>
                <div className="font-serif-display text-xl text-[#1f3144] font-semibold">Serviços ao domicílio</div>
              </div>
            </div>
            <div className="mt-6 divide-y divide-[#BCD1D8]/30">
              {[
                { l: "Segunda a Sexta", v: "9:00 — 20:30" },
                { l: "Sábado", v: "9:30 — 18:00" },
                { l: "Domingos e Feriados", v: "Encerrado" },
              ].map((h) => (
                <div key={h.l} className="flex items-center justify-between py-3.5">
                  <span className="text-[#4a6075]">{h.l}</span>
                  <span className="font-semibold text-[#1f3144]">{h.v}</span>
                </div>
              ))}
            </div>

            {/* Decorative map pin layout */}
            <div className="mt-6 relative h-24 rounded-2xl bg-gradient-to-br from-[#BCD1D8]/40 to-[#FEEABE]/40 overflow-hidden">
              <div className="absolute inset-0 paper-grain opacity-50" />
              {brand.areas.map((a, i) => (
                <div
                  key={a}
                  className="absolute flex items-center gap-1.5"
                  style={{
                    top: `${20 + (i % 3) * 22}%`,
                    left: `${10 + i * 14}%`,
                  }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6399BD] ring-4 ring-[#6399BD]/20" />
                  <span className="text-[0.7rem] font-semibold text-[#2a4259]">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
