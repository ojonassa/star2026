import { AdminShell } from "@/components/admin-shell";
import { createClient } from "@/lib/supabase/server";
export default async function AdminLayout({ children }: { children: React.ReactNode }) { const supabase = await createClient(); const { data: { user } } = await supabase.auth.getUser(); const { data: profile } = user ? await supabase.from("admin_users").select("display_name,team").eq("user_id", user.id).maybeSingle() : { data: null }; return <AdminShell userName={profile?.display_name || user?.email || "Usuário"} team={profile?.team}>{children}</AdminShell>; }
