import React from "react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-25px_rgba(31,49,68,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1000&auto=format&fit=crop&q=80"
              alt="Veterinária"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 md:-left-6 bg-[#6399BD] text-[#FFFBF4] rounded-2xl p-5 shadow-[0_18px_40px_-15px_rgba(99,153,189,0.6)] max-w-[220px]">
            <div className="font-serif-display text-3xl font-semibold leading-none">100%</div>
            <div className="text-xs mt-1 opacity-90">Dedicação a cada consulta, sem agendas sobrepostas.</div>
          </div>
          <div className="absolute -top-4 right-2 md:right-6 bg-[#FEEABE] rounded-2xl p-4 shadow-md">
            <div className="text-[0.65rem] uppercase tracking-[0.18em] text-[#6399BD] font-semibold">OMV</div>
            <div className="text-sm font-semibold text-[#1f3144]">Certificado</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#6399BD]">Sobre nós</div>
          <h2 className="mt-3 font-serif-display text-4xl md:text-[2.85rem] leading-[1.08] text-[#1f3144] font-semibold">
            A Ari Vet On Wheels nasceu para aproximar a medicina veterinária de casa.
          </h2>
          <div className="mt-6 space-y-4 text-[#4a6075] leading-relaxed text-[1.02rem]">
            <p>
              Acreditamos que cada animal merece ser cuidado num ambiente onde se sente seguro. É por isso que levamos até si todo o cuidado, a tranquilidade e a atenção de uma consulta veterinária — sem transportadora, sem filas, sem stress.
            </p>
            <p>
              Atendemos cães e gatos em Sintra, Oeiras, Cascais, Moita, Montijo e Alcochete, com tempo dedicado e acompanhamento personalizado para cada família.
            </p>
          </div>
          <a href="#contactos" className="mt-7 inline-flex btn-pill btn-outline">
            Saber mais <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
