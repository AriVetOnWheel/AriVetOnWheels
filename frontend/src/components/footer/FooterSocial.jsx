import React from "react";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { brand } from "../../mock";

const socials = [
  { id: "ig", href: brand.instagram, label: "Instagram", Icon: Instagram, external: true },
  { id: "wa", href: brand.whatsapp, label: "WhatsApp", Icon: MessageCircle, external: true },
  { id: "tel", href: `tel:${brand.phoneRaw}`, label: "Telefone", Icon: Phone, external: false },
];

export default function FooterSocial() {
  return (
    <div className="mt-7 flex gap-3">
      {socials.map(({ id, href, label, Icon, external }) => (
        <a
          key={id}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          aria-label={label}
          className="h-11 w-11 rounded-full bg-[#FFFBF4]/10 hover:bg-[#6399BD] flex items-center justify-center transition-colors"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
