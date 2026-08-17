import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getSupabasePublicEnvironment } from "./env";

/**
 * Privileged client for trusted server-side handlers only.
 * Never import this module from Client Components or expose its key to users.
 */
export function createAdminClient() {
  const { url } = getSupabasePublicEnvironment();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) throw new Error("Variável de ambiente obrigatória ausente: SUPABASE_SERVICE_ROLE_KEY");

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
