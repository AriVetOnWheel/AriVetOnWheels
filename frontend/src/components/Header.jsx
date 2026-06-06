import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#cobertura", label: "Onde Estamos" },
  { href: "#contactos", label: "Contactos" },
];

export default function Header({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFBF4]/85 backdrop-blur-md border-b border-[#BCD1D8]/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-24 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.92rem] font-medium text-[#2a4259] hover:text-[#6399BD] transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#6399BD] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onBook} className="btn-pill btn-primary hidden sm:inline-flex">
            Agendar Consulta
          </button>
          <button
            className="lg:hidden h-10 w-10 rounded-full bg-[#BCD1D8]/40 flex items-center justify-center text-[#2a4259]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#FFFBF4] border-t border-[#BCD1D8]/40 px-5 py-6 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-[#2a4259] font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); onBook(); }} className="btn-pill btn-primary w-full justify-center mt-2">
            Agendar Consulta
          </button>
        </div>
      )}
    </header>
  );
}
