import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "../hooks/use-toast";
import { brand, services } from "../mock";
import { ArrowRight, ArrowLeft, Check, PawPrint } from "lucide-react";

export default function BookingModal({ open, onOpenChange }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", area: "", address: "", postal: "",
    pet: "", petType: "cao", service: "consulta", notes: "",
  });
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    // Mock submission – stored locally
    const list = JSON.parse(localStorage.getItem("ari_bookings") || "[]");
    list.push({ ...form, ts: Date.now() });
    localStorage.setItem("ari_bookings", JSON.stringify(list));
    setDone(true);
    toast({ title: "Pedido enviado!", description: "Entraremos em contacto em breve." });
  };

  const reset = () => {
    setStep(1); setDone(false);
    setForm({ name: "", email: "", phone: "", area: "", address: "", postal: "", pet: "", petType: "cao", service: "consulta", notes: "" });
  };

  const close = (v) => { onOpenChange(v); if (!v) setTimeout(reset, 250); };

  const canNext1 = form.name && form.email && form.phone && form.area;

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-w-2xl bg-[#FFFBF4] border-[#BCD1D8]/50 p-0 overflow-hidden">
        {done ? (
          <div className="p-10 text-center">
            <div className="h-16 w-16 rounded-2xl bg-[#6399BD] mx-auto flex items-center justify-center">
              <Check className="text-[#FFFBF4]" size={32} />
            </div>
            <h3 className="mt-5 font-serif-display text-3xl text-[#1f3144] font-semibold">Pedido recebido</h3>
            <p className="mt-3 text-[#4a6075] max-w-md mx-auto">
              Obrigado, {form.name.split(" ")[0]}! A nossa equipa vai analisar o seu pedido e responder com um pré-orçamento. Até já.
            </p>
            <button onClick={() => close(false)} className="mt-7 btn-pill btn-primary">Fechar</button>
          </div>
        ) : (
          <div>
            <DialogHeader className="px-7 pt-7 pb-3 border-b border-[#BCD1D8]/40">
              <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#6399BD]">
                <PawPrint size={14} /> Passo {step} de 2
              </div>
              <DialogTitle className="font-serif-display text-2xl text-[#1f3144] font-semibold">
                {step === 1 ? "Os seus dados" : "Sobre o seu animal"}
              </DialogTitle>
            </DialogHeader>

            <div className="px-7 py-6 max-h-[65vh] overflow-y-auto">
              {step === 1 ? (
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
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome do animal">
                    <Input value={form.pet} onChange={(e) => set("pet", e.target.value)} className="bg-white border-[#BCD1D8]/50" />
                  </Field>
                  <Field label="Espécie">
                    <Select value={form.petType} onValueChange={(v) => set("petType", v)}>
                      <SelectTrigger className="bg-white border-[#BCD1D8]/50"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cao">Cão</SelectItem>
                        <SelectItem value="gato">Gato</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
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
              )}
            </div>

            <div className="px-7 py-5 border-t border-[#BCD1D8]/40 flex items-center justify-between bg-[#FEEABE]/20">
              {step === 2 ? (
                <button onClick={() => setStep(1)} className="btn-pill btn-outline">
                  <ArrowLeft size={16} /> Voltar
                </button>
              ) : <div />}
              {step === 1 ? (
                <button onClick={() => canNext1 && setStep(2)} disabled={!canNext1} className={`btn-pill ${canNext1 ? "btn-primary" : "btn-outline opacity-50 cursor-not-allowed"}`}>
                  Próximo <ArrowRight size={16} />
                </button>
              ) : (
                <button onClick={submit} className="btn-pill btn-primary">
                  Enviar pedido <Check size={16} />
                </button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <Label className="text-xs uppercase tracking-wider text-[#6399BD] font-semibold">{label}</Label>
      {children}
    </div>
  );
}
