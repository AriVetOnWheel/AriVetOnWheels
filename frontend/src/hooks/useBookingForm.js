import { useState, useCallback } from "react";

const initial = {
  name: "", email: "", phone: "", area: "", address: "", postal: "",
  pet: "", petType: "cao", service: "consulta", notes: "",
};

export default function useBookingForm() {
  const [form, setForm] = useState(initial);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const set = useCallback((k, v) => setForm((f) => ({ ...f, [k]: v })), []);

  const canNextStep1 = Boolean(form.name && form.email && form.phone && form.area);

  const submit = useCallback(() => {
    const list = JSON.parse(localStorage.getItem("ari_bookings") || "[]");
    list.push({ ...form, ts: Date.now() });
    localStorage.setItem("ari_bookings", JSON.stringify(list));
    setDone(true);
  }, [form]);

  const reset = useCallback(() => {
    setStep(1);
    setDone(false);
    setForm(initial);
  }, []);

  return { form, set, step, setStep, done, submit, reset, canNextStep1 };
}
