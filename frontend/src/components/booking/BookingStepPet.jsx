import React from "react";
import Field from "./Field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { services } from "../../mock";

const speciesOptions = [
  { id: "cao", label: "Cão" },
  { id: "gato", label: "Gato" },
  { id: "outro", label: "Outro" },
];

export default function BookingStepPet({ form, set }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Field label="Nome do animal">
        <Input value={form.pet} onChange={(e) => set("pet", e.target.value)} className="bg-white border-[#BCD1D8]/50" />
      </Field>
      <Field label="Espécie">
        <Select value={form.petType} onValueChange={(v) => set("petType", v)}>
          <SelectTrigger className="bg-white border-[#BCD1D8]/50"><SelectValue /></SelectTrigger>
          <SelectContent>
            {speciesOptions.map((o) => <SelectItem key={o.id} value={o.id}>{o.label}</SelectItem>)}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Serviço pretendido" className="sm:col-span-2">
        <Select value={form.service} onValueChange={(v) => set("service", v)}>
          <SelectTrigger className="bg-white border-[#BCD1D8]/50"><SelectValue /></SelectTrigger>
          <SelectContent>
            {services.map((s) => <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>)}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Notas adicionais" className="sm:col-span-2">
        <Textarea rows={4} value={form.notes} onChange={(e) => set("notes", e.target.value)} className="bg-white border-[#BCD1D8]/50" placeholder="Conte-nos um pouco sobre o seu animal..." />
      </Field>
    </div>
  );
}
