import "server-only";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";

export type EmailTemplateType = "registration_confirmation" | "course_registration_confirmation" | "event_reminder" | "admin_communication" | "admin_invitation";
export type EmailInput = { to: string; subject: string; text: string; templateType: EmailTemplateType; createdBy?: string | null };
export type EmailResult = { status: "sent" | "failed"; providerMessageId?: string; error?: string };
function fromAddress() { const address = process.env.EMAIL_FROM; if (!address) return null; const name = process.env.EMAIL_FROM_NAME?.trim(); return name ? `${name} <${address}>` : address; }
async function log(input: EmailInput, result: EmailResult) { try { await createAdminClient().from("email_logs").insert({ recipient: input.to, subject: input.subject, template_type: input.templateType, status: result.status, provider_message_id: result.providerMessageId ?? null, error_message: result.error ?? null, sent_at: result.status === "sent" ? new Date().toISOString() : null, created_by: input.createdBy ?? null }); } catch { /* Telemetry must not break delivery. */ } }
export async function sendEmail(input: EmailInput): Promise<EmailResult> { const apiKey = process.env.RESEND_API_KEY; const from = fromAddress(); if (!apiKey || !from) { const result = { status: "failed" as const, error: "EMAIL_NOT_CONFIGURED" }; await log(input, result); return result; } try { const { data, error } = await new Resend(apiKey).emails.send({ from, to: input.to, subject: input.subject, text: input.text }); const result = error ? { status: "failed" as const, error: error.message } : { status: "sent" as const, providerMessageId: data?.id }; await log(input, result); return result; } catch { const result = { status: "failed" as const, error: "RESEND_UNAVAILABLE" }; await log(input, result); return result; } }
export const sendRegistrationConfirmation = (input: Omit<EmailInput, "templateType">) => sendEmail({ ...input, templateType: "registration_confirmation" });
export const sendCourseRegistrationConfirmation = (input: Omit<EmailInput, "templateType">) => sendEmail({ ...input, templateType: "course_registration_confirmation" });
