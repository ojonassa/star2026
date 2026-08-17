function requiredPublicEnvironment(value: string | undefined, name: string): string {
  if (!value) throw new Error(`Variável de ambiente obrigatória ausente: ${name}`);
  return value;
}

export function getSupabasePublicEnvironment() {
  return {
    url: requiredPublicEnvironment(process.env.NEXT_PUBLIC_SUPABASE_URL, "NEXT_PUBLIC_SUPABASE_URL"),
    anonKey: requiredPublicEnvironment(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, "NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  };
}
