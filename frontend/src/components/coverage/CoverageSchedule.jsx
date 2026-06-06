import React from "react";
import { brand } from "../../mock";
import { Clock } from "lucide-react";

const hours = [
  { id: "weekdays", label: "Segunda a Sexta", value: "9:00 — 20:30" },
  { id: "saturday", label: "Sábado", value: "9:30 — 18:00" },
  { id: "sundays", label: "Domingos e Feriados", value: "Encerrado" },
];

export default function CoverageSchedule() {
  return (
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
        {hours.map((h) => (
          <div key={h.id} className="flex items-center justify-between py-3.5">
            <span className="text-[#4a6075]">{h.label}</span>
            <span className="font-semibold text-[#1f3144]">{h.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 relative h-24 rounded-2xl bg-gradient-to-br from-[#BCD1D8]/40 to-[#FEEABE]/40 overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-50" />
        {brand.areas.map((a, i) => (
          <div
            key={a}
            className="absolute flex items-center gap-1.5"
            style={{ top: `${20 + (i % 3) * 22}%`, left: `${10 + i * 14}%` }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#6399BD] ring-4 ring-[#6399BD]/20" />
            <span className="text-[0.7rem] font-semibold text-[#2a4259]">{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
