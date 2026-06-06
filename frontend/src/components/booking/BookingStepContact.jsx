import React from "react";
import Field from "./Field";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { brand } from "../../mock";

export default function BookingStepContact({ form, set }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Field label="Nome e apelido *">
        <Input value={form.name} onChange={(e) => set("name", e.target.value)} className="bg-white border-[#BCD1D8]/50" />
      </Field>
      <Field label="Email *">
        <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="bg-white border-[#BCD1D8]/50" />
      </Field>
      <Field label="Telefone *">
        <Input value={form.phone} onChange={(e) => set("phone", e.target.value)} className="bg-white border-[#BCD1D8]/50" />
      </Field>
      <Field label="Concelho *">
        <Select value={form.area} onValueChange={(v) => set("area", v)}>
          <SelectTrigger className="bg-white border-[#BCD1D8]/50"><SelectValue placeholder="Escolha o concelho" /></SelectTrigger>
          <SelectContent>
            {brand.areas.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Morada" className="sm:col-span-2">
        <Input value={form.address} onChange={(e) => set("address", e.target.value)} className="bg-white border-[#BCD1D8]/50" />
      </Field>
      <Field label="Código postal">
        <Input value={form.postal} onChange={(e) => set("postal", e.target.value)} className="bg-white border-[#BCD1D8]/50" />
      </Field>
    </div>
  );
}
