import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/admin";
import { registrationSchema } from "@/lib/validation/registration";
import { sendRegistrationConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  const parsed = registrationSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ message: "Verifique os campos informados.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });

  try {
    const supabase = createAdminClient();
    const { data: event, error: eventError } = await supabase.from("event_settings").select("id, registrations_open").limit(1).maybeSingle();
    if (eventError || !event) return NextResponse.json({ message: "Inscrições indisponíveis no momento." }, { status: 503 });
    if (!event.registrations_open) return NextResponse.json({ message: "As inscrições estão encerradas." }, { status: 403 });

    const input = parsed.data;
    let { data: participant } = await supabase.from("participants").select("id, full_name, birth_date, email").eq("cpf", input.cpf).maybeSingle();
    if (participant && participant.birth_date !== input.birthDate) {
      return NextResponse.json({ message: "Não foi possível concluir a inscrição com os dados informados." }, { status: 409 });
    }
    if (!participant) {
      const { data: created, error: participantError } = await supabase.from("participants").insert({ full_name: input.fullName, cpf: input.cpf, birth_date: input.birthDate, email: input.email, phone: input.phone || null, institution: input.institution || null, city: input.city || null, privacy_acknowledged_at: new Date().toISOString() }).select("id, full_name, birth_date, email").single();
      if (participantError || !created) throw participantError;
      participant = created;
    }

    if (!participant) throw new Error("PARTICIPANT_UNAVAILABLE");
    const { error: registrationError } = await supabase.from("event_registrations").upsert({ event_id: event.id, participant_id: participant.id, status: "active", cancelled_at: null }, { onConflict: "event_id,participant_id", ignoreDuplicates: true });
    if (registrationError) throw registrationError;
    void sendRegistrationConfirmation({ to: participant.email, subject: "Inscri\u00e7\u00e3o confirmada", text: `Ol\u00e1, ${participant.full_name}. Sua inscri\u00e7\u00e3o no evento foi confirmada.` });

    return NextResponse.json({ message: "Inscrição confirmada com sucesso.", participantName: participant.full_name });
  } catch {
    return NextResponse.json({ message: "Não foi possível concluir a inscrição. Tente novamente." }, { status: 500 });
  }
}
