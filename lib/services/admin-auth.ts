import "server-only";
import { createClient } from "@/lib/supabase/server";
export async function requireAdmin() { const supabase = await createClient(); const { data: { user } } = await supabase.auth.getUser(); if (!user) throw new Error("UNAUTHORIZED"); const { data: admin } = await supabase.from("admin_users").select("user_id,role,active,display_name,team").eq("user_id", user.id).eq("active", true).maybeSingle(); if (!admin) throw new Error("FORBIDDEN"); return { supabase, admin, user }; }
