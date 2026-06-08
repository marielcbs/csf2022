import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const adminEmail = "cap@csfba.com.br";

export async function requireAdminUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.email !== adminEmail) {
    redirect("/admin");
  }

  return user;
}
