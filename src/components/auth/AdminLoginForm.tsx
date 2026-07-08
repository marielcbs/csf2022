"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const adminEmail = "cap@csfba.com.br";
const errorMessages: Record<string, string> = {
  "missing-code": "O link recebido.",
  exchange: "Indisponível no momento.",
  unauthorized: "Entre em contato com setor responsável.",
};

export default function AdminLoginForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(adminEmail);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const error = searchParams.get("error");
  const visibleMessage =
    message || (error ? errorMessages[error] || "Erro de autenticacao." : "");

  async function login() {
    setMessage("");

    if (email.trim().toLowerCase() !== adminEmail) {
      setMessage("Nao autorizado.");
      return;
    }

    setLoading(true);

    const next = searchParams.get("next") || "/admin/dashboard";
    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: adminEmail,
      options: {
        emailRedirectTo: redirectTo,
        shouldCreateUser: false,
      },
    });

    setLoading(false);

    if (error) {
      setMessage(`Acesso Solicitado: ${error.message}`);
      return;
    }

    setMessage("Obrigado!");
  }

  return (
    <div className="max-w-md space-y-5 rounded border p-6">
      <div>
        <h1 className="text-3xl font-bold">
          Painel Administrativo
        </h1>
     </div>

      <input
        type="email"
        value=""
        onChange={(event) => setEmail(event.target.value)}
        className="w-full rounded border p-3"
        placeholder="insira sua credencial"
      />

      <button
        onClick={login}
        disabled={loading}
        className="w-full rounded bg-[#0f2f5f] px-4 py-3 font-semibold text-white disabled:opacity-70"
      >
        {loading ? "Enviando..." : "Solicitar Acesso"}
      </button>

      {visibleMessage ? (
        <p className="text-sm text-gray-700">{visibleMessage}</p>
      ) : null}
    </div>
  );
}
