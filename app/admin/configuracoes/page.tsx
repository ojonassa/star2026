import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/services/admin-auth";
import SettingsForm from "./settings-form";
export default async function Settings() { const { supabase } = await requireAdmin(); const { data } = await supabase.from("event_settings").select("name,subtitle,venue,primary_color,secondary_color,accent_color,certificate_min_attendance_percent,logo_url,hero_image_url").limit(1).single(); if (!data) redirect("/admin"); return <main className="mx-auto max-w-2xl p-6"><h1 className="text-2xl font-bold">Configurações institucionais</h1><p className="mt-2 text-slate-600">Cores, identidade visual, logo e hero refletem na página pública.</p><SettingsForm settings={data}/></main>; }
