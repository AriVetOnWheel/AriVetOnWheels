import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { toast } from "../hooks/use-toast";
import useBookingForm from "../hooks/useBookingForm";
import BookingStepContact from "./booking/BookingStepContact";
import BookingStepPet from "./booking/BookingStepPet";
import BookingSuccess from "./booking/BookingSuccess";
import { ArrowRight, ArrowLeft, Check, PawPrint } from "lucide-react";

export default function BookingModal({ open, onOpenChange }) {
  const { form, set, step, setStep, done, submit, reset, canNextStep1 } = useBookingForm();

  const close = (v) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 250);
  };

  const handleSubmit = () => {
    submit();
    toast({ title: "Pedido enviado!", description: "Entraremos em contacto em breve." });
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-w-2xl bg-[#FFFBF4] border-[#BCD1D8]/50 p-0 overflow-hidden">
        {done ? (
          <BookingSuccess name={form.name} onClose={() => close(false)} />
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
                <BookingStepContact form={form} set={set} />
              ) : (
                <BookingStepPet form={form} set={set} />
              )}
            </div>

            <BookingActions
              step={step}
              canNext={canNextStep1}
              onBack={() => setStep(1)}
              onNext={() => canNextStep1 && setStep(2)}
              onSubmit={handleSubmit}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function BookingActions({ step, canNext, onBack, onNext, onSubmit }) {
  return (
    <div className="px-7 py-5 border-t border-[#BCD1D8]/40 flex items-center justify-between bg-[#FEEABE]/20">
      {step === 2 ? (
        <button onClick={onBack} className="btn-pill btn-outline">
          <ArrowLeft size={16} /> Voltar
        </button>
      ) : <div />}
      {step === 1 ? (
        <button
          onClick={onNext}
          disabled={!canNext}
          className={`btn-pill ${canNext ? "btn-primary" : "btn-outline opacity-50 cursor-not-allowed"}`}
        >
          Próximo <ArrowRight size={16} />
        </button>
      ) : (
        <button onClick={onSubmit} className="btn-pill btn-primary">
          Enviar pedido <Check size={16} />
        </button>
      )}
    </div>
  );
}
