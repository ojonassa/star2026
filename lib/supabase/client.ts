"use client";

import { createBrowserClient } from "@supabase/ssr";

import { getSupabasePublicEnvironment } from "./env";

export function createClient() {
  const { url, anonKey } = getSupabasePublicEnvironment();

  return createBrowserClient(url, anonKey);
}
