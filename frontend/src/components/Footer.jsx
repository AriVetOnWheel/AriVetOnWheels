import React from "react";
import Logo from "./Logo";
import FooterSocial from "./footer/FooterSocial";
import FooterContact from "./footer/FooterContact";
import FooterSchedule from "./footer/FooterSchedule";
import { brand } from "../mock";
import { MessageCircle } from "lucide-react";

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
            <FooterSocial />
          </div>

          <div className="md:col-span-3">
            <FooterContact />
          </div>

          <div className="md:col-span-4">
            <FooterSchedule />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#FFFBF4]/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#BCD1D8]">
          <div>© {new Date().getFullYear()} Ari Vet On Wheels. Todos os direitos reservados.</div>
          <div>Veterinário ao domicílio · Lisboa & Península de Setúbal</div>
        </div>
      </div>

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
