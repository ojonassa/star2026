"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { registrationSchema, type RegistrationInput } from "@/lib/validation/registration";

type FormValues = Omit<RegistrationInput, "privacyAcknowledged"> & { privacyAcknowledged: boolean };

export default function RegistrationPage() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormValues>({ defaultValues: { privacyAcknowledged: false } });
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const onSubmit = async (values: FormValues) => {
    setResult(null);
    const validated = registrationSchema.safeParse(values);
    if (!validated.success) { validated.error.issues.forEach((issue) => setError(issue.path[0] as keyof FormValues, { message: issue.message })); return; }
    const response = await fetch("/api/registrations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(validated.data) });
    const data = await response.json().catch(() => ({ message: "Resposta inválida do servidor." }));
    if (!response.ok) { setResult({ type: "error", message: data.message }); return; }
    setResult({ type: "success", message: data.message });
  };
  const fields: Array<[keyof Omit<FormValues, "privacyAcknowledged">, string, string, boolean]> = [["fullName", "Nome completo", "text", true], ["cpf", "CPF", "text", true], ["birthDate", "Data de nascimento", "date", true], ["email", "E-mail", "email", true], ["phone", "Telefone/WhatsApp", "tel", false], ["institution", "Instituição/curso", "text", false], ["city", "Cidade", "text", false]];
  return <main className="mx-auto min-h-screen max-w-2xl px-4 py-10 sm:px-6"><Link className="text-blue-700 hover:underline" href="/">Voltar ao início</Link><h1 className="mt-7 text-3xl font-bold">Inscrição geral</h1><p className="mt-2 text-slate-600">Preencha seus dados para participar do evento.</p><form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>{fields.map(([name, label, type, required]) => <label key={name} className="block font-medium">{label}{required && " *"}<input type={type} {...register(name)} aria-invalid={!!errors[name]} className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2" />{errors[name] && <span className="mt-1 block text-sm text-red-700">{errors[name]?.message}</span>}</label>)}<label className="flex gap-3 text-sm"><input type="checkbox" {...register("privacyAcknowledged")} /><span>Li e estou ciente do tratamento dos meus dados para inscrição, presença e certificados.</span></label>{errors.privacyAcknowledged && <p className="text-sm text-red-700">{errors.privacyAcknowledged.message}</p>}{result && <p role="status" className={result.type === "success" ? "text-green-700" : "text-red-700"}>{result.message}</p>}<button disabled={isSubmitting} className="rounded-md bg-blue-700 px-5 py-3 font-semibold text-white disabled:opacity-60">{isSubmitting ? "Enviando…" : "Confirmar inscrição"}</button></form></main>;
}
