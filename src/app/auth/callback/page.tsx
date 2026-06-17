"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const adminEmail = "cap@csfba.com.br";

function getSafeNext(value: string | null) {
  return value?.startsWith("/") ? value : "/admin/dashboard";
}

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("Validando Magic Link...");

  useEffect(() => {
    async function completeLogin() {
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");
      const next = getSafeNext(url.searchParams.get("next"));
      const hashParams = new URLSearchParams(url.hash.replace(/^#/, ""));
      const accessToken = hashParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token");
      const supabase = createSupabaseBrowserClient();

      if (!code && (!accessToken || !refreshToken)) {
        window.location.replace("/admin?error=missing-code");
        return;
      }

      const sessionResponse = code
        ? await supabase.auth.exchangeCodeForSession(code)
        : await supabase.auth.setSession({
            access_token: accessToken ?? "",
            refresh_token: refreshToken ?? "",
          });

      if (sessionResponse.error) {
        window.location.replace("/admin?error=exchange");
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email === adminEmail) {
        window.location.replace(next);
        return;
      }

      await supabase.auth.signOut();
      window.location.replace("/admin?error=unauthorized");
    }

    void completeLogin().catch(() => {
      setMessage("Nao foi possivel validar o Magic Link.");
      window.location.replace("/admin?error=exchange");
    });
  }, []);

  return (
    <main className="container-csf py-20">
      <p className="text-sm text-slate-600">{message}</p>
    </main>
  );
}
