import React from "react";
import { ArrowRight, PawPrint, Phone } from "lucide-react";
import { brand } from "../mock";

export default function Hero({ onBook }) {
  return (
    <section id="inicio" className="relative pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-[#BCD1D8]/40 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#FEEABE]/50 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 paper-grain opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEEABE]/70 border border-[#FEEABE] mb-6">
            <PawPrint size={14} className="text-[#6399BD]" />
            <span className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#2a4259]">
              Veterinário ao domicílio
            </span>
          </div>

          <h1 className="font-serif-display text-[2.6rem] sm:text-5xl lg:text-[3.85rem] leading-[1.05] text-[#1f3144] font-semibold">
            Cuidamos do seu animal <span className="text-[#6399BD]">onde ele se sente em casa.</span>
          </h1>

          <p className="mt-6 text-[1.05rem] text-[#4a6075] max-w-xl leading-relaxed">
            Uma experiência veterinária personalizada, realizada no ambiente onde o seu animal se sente mais seguro. Consultas e vacinação ao domicílio em Sintra, Oeiras, Cascais e arredores.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onBook} className="btn-pill btn-primary">
              Agendar Consulta
              <ArrowRight size={18} />
            </button>
            <a href={`tel:${brand.phoneRaw}`} className="btn-pill btn-outline">
              <Phone size={16} /> {brand.phone}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80",
                "https://images.pexels.com/photos/7469231/pexels-photo-7469231.jpeg?w=80",
                "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?w=80",
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-[#FFFBF4] object-cover" />
              ))}
            </div>
            <div className="text-sm text-[#4a6075]">
              <div className="font-semibold text-[#1f3144]">Tutores satisfeitos</div>
              <div className="text-xs">Consultas com tempo e dedicação</div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-25px_rgba(99,153,189,0.45)]">
            <img
              src="https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?w=1200&auto=format&fit=crop&q=80"
              alt="Veterinário cuidando de gato em casa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f3144]/30 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#FFFBF4] rounded-2xl shadow-[0_18px_40px_-15px_rgba(31,49,68,0.25)] p-4 flex items-center gap-3 animate-float">
            <div className="h-12 w-12 rounded-xl bg-[#FEEABE] flex items-center justify-center">
              <PawPrint className="text-[#6399BD]" size={22} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#6399BD] font-semibold">Confiança</div>
              <div className="text-sm font-semibold text-[#1f3144]">Inscritos na OMV</div>
            </div>
          </div>

          <div className="absolute -top-3 right-2 sm:right-6 bg-[#6399BD] text-[#FFFBF4] rounded-2xl shadow-[0_18px_40px_-15px_rgba(99,153,189,0.6)] px-4 py-3 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="text-[0.65rem] uppercase tracking-[0.18em] opacity-80">Resposta</div>
            <div className="text-sm font-semibold">no próprio dia</div>
          </div>
        </div>
      </div>
    </section>
  );
}
