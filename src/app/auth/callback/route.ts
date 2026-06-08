import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const adminEmail = "cap@csfba.com.br";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const nextParam = requestUrl.searchParams.get("next");
  const next = nextParam?.startsWith("/") ? nextParam : "/admin/dashboard";

  if (!code) {
    return NextResponse.redirect(
      new URL("/admin?error=missing-code", requestUrl.origin),
    );
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL("/admin?error=exchange", requestUrl.origin),
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.email === adminEmail) {
    return NextResponse.redirect(new URL(next, requestUrl.origin));
  }

  await supabase.auth.signOut();

  return NextResponse.redirect(
    new URL("/admin?error=unauthorized", requestUrl.origin),
  );
}
