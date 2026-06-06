import React from "react";
import Logo from "./Logo";
import { brand } from "../mock";
import { Phone, Mail, Instagram, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contactos" className="bg-[#1f3144] text-[#FFFBF4] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="bg-[#FFFBF4] inline-flex rounded-2xl px-4 py-3">
              <Logo variant="large" />
            </div>
            <p className="mt-5 text-[#BCD1D8] leading-relaxed max-w-md">
              Veterinários ao domicílio em Sintra, Oeiras, Cascais, Moita, Montijo e Alcochete. Cuidamos do seu animal onde ele se sente em casa.
            </p>
            <div className="mt-7 flex gap-3">
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="h-11 w-11 rounded-full bg-[#FFFBF4]/10 hover:bg-[#6399BD] flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="h-11 w-11 rounded-full bg-[#FFFBF4]/10 hover:bg-[#6399BD] flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href={`tel:${brand.phoneRaw}`} className="h-11 w-11 rounded-full bg-[#FFFBF4]/10 hover:bg-[#6399BD] flex items-center justify-center transition-colors" aria-label="Telefone">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[#BCD1D8] font-semibold">Contactos</div>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#FEEABE] shrink-0 mt-0.5" />
                <a href={`tel:${brand.phoneRaw}`} className="hover:text-[#FEEABE] transition-colors">{brand.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-[#FEEABE] shrink-0 mt-0.5" />
                <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#FEEABE] transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={16} className="text-[#FEEABE] shrink-0 mt-0.5" />
                <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-[#FEEABE] transition-colors">@arivetonwheels</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#FEEABE] shrink-0 mt-0.5" />
                <a href={`mailto:${brand.email}`} className="hover:text-[#FEEABE] transition-colors">{brand.email}</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[#BCD1D8] font-semibold">Horário</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex justify-between"><span className="text-[#BCD1D8]">Segunda a Sexta</span><span>9:00 — 20:30</span></li>
              <li className="flex justify-between"><span className="text-[#BCD1D8]">Sábado</span><span>9:30 — 18:00</span></li>
              <li className="flex justify-between"><span className="text-[#BCD1D8]">Dom. e Feriados</span><span>Encerrado</span></li>
            </ul>
            <div className="mt-7 text-[0.7rem] uppercase tracking-[0.22em] text-[#BCD1D8] font-semibold">Áreas</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {brand.areas.map((a) => (
                <span key={a} className="px-2.5 py-1 rounded-full bg-[#FFFBF4]/10 text-[0.72rem]">
                  <MapPin size={11} className="inline -mt-0.5 mr-1 text-[#FEEABE]" />{a}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#FFFBF4]/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#BCD1D8]">
          <div>© {new Date().getFullYear()} Ari Vet On Wheels. Todos os direitos reservados.</div>
          <div>Veterinário ao domicílio · Lisboa & Península de Setúbal</div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </footer>
  );
}
