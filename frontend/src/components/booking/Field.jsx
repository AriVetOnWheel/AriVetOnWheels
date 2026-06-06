import React from "react";
import { Label } from "../ui/label";

export default function Field({ label, children, className = "" }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <Label className="text-xs uppercase tracking-wider text-[#6399BD] font-semibold">{label}</Label>
      {children}
    </div>
  );
}
