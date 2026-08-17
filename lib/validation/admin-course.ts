import { z } from "zod";

export const adminCourseSchema = z.object({
  title: z.string().trim().min(3, "Informe o título.").max(160),
  slug: z.string().trim().regex(/^[a-z0-9-]+$/, "Use somente minúsculas, números e hífens no slug."),
  description: z.string().trim().min(10, "Informe uma descrição com ao menos 10 caracteres.").max(3000),
  instructor_name: z.string().trim().min(3, "Informe o ministrante.").max(160),
  instructor_bio: z.string().max(3000).nullable(),
  image_url: z.string().max(500).nullable(),
  capacity: z.number().int("Informe uma capacidade inteira.").min(1, "Informe uma capacidade maior que zero."),
  status: z.enum(["draft", "published", "cancelled"]),
  starts_at: z.string().datetime("Informe uma data e hora inicial válidas.").nullable(),
  ends_at: z.string().datetime("Informe uma data e hora final válidas.").nullable(),
  room: z.string().trim().max(120).nullable(),
}).superRefine((value, context) => {
  if ((value.starts_at && !value.ends_at) || (!value.starts_at && value.ends_at)) context.addIssue({ code: "custom", path: [value.starts_at ? "ends_at" : "starts_at"], message: "Informe os dois horários." });
  if (value.starts_at && value.ends_at && new Date(value.ends_at) <= new Date(value.starts_at)) context.addIssue({ code: "custom", path: ["ends_at"], message: "O horário final deve ser posterior ao inicial." });
});

export const courseFieldErrors = (error: z.ZodError) => Object.fromEntries(Object.entries(error.flatten().fieldErrors).map(([key, messages]) => [key, messages?.[0] ?? "Valor inválido."]));
