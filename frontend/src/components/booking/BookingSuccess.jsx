import React from "react";
import { Check } from "lucide-react";

export default function BookingSuccess({ name, onClose }) {
  const firstName = name ? name.split(" ")[0] : "";
  return (
    <div className="p-10 text-center">
      <div className="h-16 w-16 rounded-2xl bg-[#6399BD] mx-auto flex items-center justify-center">
        <Check className="text-[#FFFBF4]" size={32} />
      </div>
      <h3 className="mt-5 font-serif-display text-3xl text-[#1f3144] font-semibold">Pedido recebido</h3>
      <p className="mt-3 text-[#4a6075] max-w-md mx-auto">
        Obrigado{firstName ? `, ${firstName}` : ""}! A nossa equipa vai analisar o seu pedido e responder com um pré-orçamento. Até já.
      </p>
      <button onClick={onClose} className="mt-7 btn-pill btn-primary">Fechar</button>
    </div>
  );
}
