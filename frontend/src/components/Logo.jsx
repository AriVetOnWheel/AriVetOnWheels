import React from "react";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative h-10 w-10 rounded-2xl bg-[#6399BD] flex items-center justify-center shadow-[0_6px_16px_-6px_rgba(99,153,189,0.7)]">
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          {/* House outline */}
          <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-4.5v-5a3 3 0 0 0-6 0v5H4a1 1 0 0 1-1-1v-8.5z" fill="#FFFBF4"/>
          {/* Paw inside */}
          <circle cx="9.2" cy="10.8" r="1.05" fill="#6399BD"/>
          <circle cx="14.8" cy="10.8" r="1.05" fill="#6399BD"/>
          <circle cx="7.5" cy="13" r="0.85" fill="#6399BD"/>
          <circle cx="16.5" cy="13" r="0.85" fill="#6399BD"/>
          <path d="M12 13.6c1.9 0 2.9 1.6 2.9 2.6 0 1-0.9 1.6-2.9 1.6s-2.9-0.6-2.9-1.6c0-1 1-2.6 2.9-2.6z" fill="#6399BD"/>
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-serif-display text-[1.15rem] font-semibold text-[#1f3144] tracking-tight">Ari Vet</div>
        <div className="text-[0.62rem] uppercase tracking-[0.18em] text-[#6399BD] font-medium -mt-0.5">On Wheels</div>
      </div>
    </div>
  );
}
