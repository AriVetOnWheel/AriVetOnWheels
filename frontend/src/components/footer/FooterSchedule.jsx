import React from "react";
import { MapPin } from "lucide-react";
import { brand } from "../../mock";

const schedule = [
  { id: "weekdays", label: "Segunda a Sexta", value: "9:00 — 20:30" },
  { id: "saturday", label: "Sábado", value: "9:30 — 18:00" },
  { id: "sundays", label: "Dom. e Feriados", value: "Encerrado" },
];

export default function FooterSchedule() {
  return (
    <div>
      <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[#BCD1D8] font-semibold">Horário</div>
      <ul className="mt-5 space-y-2.5 text-sm">
        {schedule.map((s) => (
          <li key={s.id} className="flex justify-between">
            <span className="text-[#BCD1D8]">{s.label}</span>
            <span>{s.value}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 text-[0.7rem] uppercase tracking-[0.22em] text-[#BCD1D8] font-semibold">Áreas</div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {brand.areas.map((a) => (
          <span key={a} className="px-2.5 py-1 rounded-full bg-[#FFFBF4]/10 text-[0.72rem]">
            <MapPin size={11} className="inline -mt-0.5 mr-1 text-[#FEEABE]" />
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}
