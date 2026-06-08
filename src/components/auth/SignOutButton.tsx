"use client";

import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();

  async function signOut() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/admin");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={signOut}
      className="rounded border border-[#0f2f5f] px-5 py-3 font-semibold text-[#0f2f5f]"
    >
      Sair
    </button>
  );
}
