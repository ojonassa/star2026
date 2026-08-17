import { z } from "zod";

import { isValidCpf, normalizeCpf } from "./cpf";

export const registrationSchema = z.object({
  fullName: z.string().trim().min(3, "Informe seu nome completo.").max(150),
  cpf: z.string().transform(normalizeCpf).refine(isValidCpf, "Informe um CPF válido."),
  birthDate: z.string().refine((value) => {
    const date = new Date(`${value}T12:00:00`);
    return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(date.getTime()) && date <= new Date();
  }, "Informe uma data de nascimento válida e não futura."),
  email: z.string().trim().email("Informe um e-mail válido.").max(254).transform((value) => value.toLowerCase()),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  institution: z.string().trim().max(120).optional().or(z.literal("")),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  privacyAcknowledged: z.literal(true, { errorMap: () => ({ message: "É necessário reconhecer o aviso de privacidade." }) }),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
