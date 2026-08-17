import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { isValidCpf, normalizeCpf } from "@/lib/validation/cpf";
const schema = z.object({ token: z.string().min(20), cpf: z.string().transform(normalizeCpf).refine(isValidCpf), birthDate: z.string().date() });
const messages: Record<string, string> = { checked_in: "Presença confirmada.", already_checked_in: "Sua presença já foi registrada hoje.", invalid_token: "Check-in indisponível ou inválido.", participant_not_found: "CPF ou data de nascimento não encontrados.", registration_required: "É necessário ter uma inscrição ativa no evento." };
export async function POST(request: Request) { const input = schema.safeParse(await request.json().catch(() => null)); if (!input.success) return NextResponse.json({ message: "Dados inválidos." }, { status: 400 }); try { const { data, error } = await createAdminClient().rpc("perform_checkin", { p_token: input.data.token, p_cpf: input.data.cpf, p_birth_date: input.data.birthDate }); if (error) throw error; return NextResponse.json({ message: messages[data] ?? "Não foi possível registrar presença." }, { status: data === "checked_in" || data === "already_checked_in" ? 200 : 403 }); } catch { return NextResponse.json({ message: "Não foi possível registrar presença." }, { status: 500 }); } }
