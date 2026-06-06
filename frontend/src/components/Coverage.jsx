import React from "react";
import CoverageAreas from "./coverage/CoverageAreas";
import CoverageSchedule from "./coverage/CoverageSchedule";

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
          <CoverageAreas onBook={onBook} />
          <CoverageSchedule />
        </div>
      </div>
    </section>
  );
}
