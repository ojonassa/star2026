import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/admin/login") return NextResponse.next();
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return NextResponse.redirect(new URL("/admin/login", request.url));
  const response = NextResponse.next();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: { getAll: () => request.cookies.getAll(), setAll: (items) => items.forEach(({ name, value, options }) => response.cookies.set(name, value, options)) },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/admin/login", request.url));
  const { data: admin } = await supabase.from("admin_users").select("must_change_password,active").eq("user_id", user.id).maybeSingle();
  if (!admin?.active) return NextResponse.redirect(new URL("/admin/login", request.url));
  if (admin.must_change_password && request.nextUrl.pathname !== "/admin/alterar-senha") return NextResponse.redirect(new URL("/admin/alterar-senha", request.url));
  if (!admin.must_change_password && request.nextUrl.pathname === "/admin/alterar-senha") return NextResponse.redirect(new URL("/admin", request.url));
  return response;
}

export const config = { matcher: ["/admin/:path*"] };
