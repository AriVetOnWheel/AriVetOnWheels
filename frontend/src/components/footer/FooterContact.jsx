import React from "react";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { brand } from "../../mock";

const contacts = [
  { id: "phone", Icon: Phone, label: brand.phone, href: `tel:${brand.phoneRaw}` },
  { id: "wa", Icon: MessageCircle, label: "WhatsApp", href: brand.whatsapp, external: true },
  { id: "ig", Icon: Instagram, label: "@arivetonwheels", href: brand.instagram, external: true },
  { id: "mail", Icon: Mail, label: brand.email, href: `mailto:${brand.email}` },
];

export default function FooterContact() {
  return (
    <div>
      <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[#BCD1D8] font-semibold">Contactos</div>
      <ul className="mt-5 space-y-3.5 text-sm">
        {contacts.map(({ id, Icon, label, href, external }) => (
          <li key={id} className="flex items-start gap-3">
            <Icon size={16} className="text-[#FEEABE] shrink-0 mt-0.5" />
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="hover:text-[#FEEABE] transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
