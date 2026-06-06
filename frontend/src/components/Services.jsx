import React from "react";
import { services } from "../mock";
import { ArrowRight } from "lucide-react";

export default function Services({ onBook }) {
  return (
    <section id="servicos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#6399BD]">
            Nossos Serviços
          </div>
          <h2 className="mt-3 font-serif-display text-4xl md:text-[2.85rem] leading-[1.08] text-[#1f3144] font-semibold">
            Serviço de veterinária em sua casa
          </h2>
          <p className="mt-4 text-[#4a6075] text-[1.02rem] leading-relaxed">
            Marque uma consulta ao domicílio para cães e gatos — todos os cuidados no conforto da sua casa, sem deslocações nem stress.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="group relative bg-white rounded-3xl p-7 md:p-9 border border-[#BCD1D8]/40 hover:border-[#6399BD]/40 hover:shadow-[0_22px_50px_-25px_rgba(99,153,189,0.45)] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-[#FEEABE]/60 group-hover:bg-[#FEEABE] flex items-center justify-center transition-colors">
                    <Icon className="text-[#6399BD]" size={26} />
                  </div>
                  <ArrowRight className="text-[#BCD1D8] group-hover:text-[#6399BD] group-hover:translate-x-1 transition-all" size={22} />
                </div>
                <h3 className="mt-6 font-serif-display text-2xl text-[#1f3144] font-semibold">{s.title}</h3>
                <p className="mt-3 text-[#4a6075] leading-relaxed">{s.desc}</p>
              </div>
            );
          })}

          {/* Coming soon card */}
          <div className="sm:col-span-2 relative bg-gradient-to-br from-[#BCD1D8]/40 to-[#FEEABE]/40 rounded-3xl p-7 md:p-9 border border-[#BCD1D8]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <div className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#6399BD]">Em breve</div>
              <h3 className="mt-2 font-serif-display text-2xl text-[#1f3144] font-semibold">
                Mais serviços a chegar
              </h3>
              <p className="mt-2 text-[#4a6075] max-w-xl">
                Estamos a preparar novos cuidados ao domicílio. Entre em contacto para saber como podemos ajudar já hoje.
              </p>
            </div>
            <button onClick={onBook} className="btn-pill btn-primary shrink-0">
              Agendar Consulta
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
