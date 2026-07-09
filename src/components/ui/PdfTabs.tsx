"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type Arquivo = {
  id: string | number;
  titulo: string;
  arquivo_url: string;
};

const tabs = [
  {
    label: "Calendários",
    value: "calendario",
  },
  {
    label: "Horários",
    value: "horario",
  },
  {
    label: "Atualidades",
    value: "atualidade",
  },
];

type Props = {
  segmento: string;
};

export default function PdfTabs({ segmento }: Props) {
  const [active, setActive] = useState(tabs[0]);
  const [arquivos, setArquivos] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadArquivos() {
      setLoading(true);
      setErrorMessage("");

      const supabase = createSupabaseBrowserClient();
      const { data, error } = await supabase
        .from("arquivos")
        .select("id,titulo,arquivo_url")
        .eq("segmento", segmento)
        .eq("categoria", active.value);

      if (ignore) {
        return;
      }

      if (error) {
        setArquivos([]);
        setErrorMessage(error.message);
      } else {
        setArquivos(data ?? []);
      }

      setLoading(false);
    }

    loadArquivos();

    return () => {
      ignore = true;
    };
  }, [active.value, segmento]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActive(tab)}
            className={`rounded-lg px-4 py-2 ${
              active.value === tab.value
                ? "bg-[#0f2f5f] text-white"
                : "border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="mb-4 text-xl font-semibold">
          {active.label}
        </h3>

        {loading ? (
          <p>Carregando arquivos...</p>
        ) : null}

        {!loading && errorMessage ? (
          <p className="text-red-700">
            Erro ao carregar arquivos: {errorMessage}
          </p>
        ) : null}

        {!loading && !errorMessage && arquivos.length === 0 ? (
          <p>Nenhum arquivo disponivel.</p>
        ) : null}

        {!loading && !errorMessage && arquivos.length > 0 ? (
          <ul className="space-y-3">
            {arquivos.map((arquivo) => (
              <li key={arquivo.id}>
                <a
                  href={arquivo.arquivo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#0f2f5f] underline-offset-4 hover:underline"
                >
                  {arquivo.titulo}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
