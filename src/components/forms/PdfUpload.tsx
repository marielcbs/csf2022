"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export default function PdfUpload() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("calendario");
  const [segmento, setSegmento] = useState("infantil");
  const [arquivoUrl, setArquivoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    try {
      setLoading(true);

      if (!titulo.trim()) {
        alert("Informe o titulo.");
        return;
      }

      if (!isValidUrl(arquivoUrl.trim())) {
        alert("Informe um link valido do PDF.");
        return;
      }

      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.from("arquivos").insert({
        titulo: titulo.trim(),
        categoria,
        segmento,
        arquivo_url: arquivoUrl.trim(),
      });

      if (error) {
        throw error;
      }

      alert("Link cadastrado com sucesso!");

      setTitulo("");
      setArquivoUrl("");
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error ? error.message : "Erro desconhecido";

      alert(`Erro ao cadastrar link: ${message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4 rounded-xl border p-6">
      <h2 className="text-2xl font-bold">
        Novo PDF
      </h2>

      <input
        type="text"
        placeholder="Titulo"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        className="w-full rounded border p-3"
      />

      <input
        type="url"
        placeholder="Link do PDF no OneDrive"
        value={arquivoUrl}
        onChange={(event) => setArquivoUrl(event.target.value)}
        className="w-full rounded border p-3"
      />

      <select
        value={categoria}
        onChange={(event) => setCategoria(event.target.value)}
        className="w-full rounded border p-3"
      >
        <option value="calendario">
          Calendario
        </option>

        <option value="horario">
          Horario
        </option>

        <option value="atualidade">
          Atualidade
        </option>
      </select>

      <select
        value={segmento}
        onChange={(event) => setSegmento(event.target.value)}
        className="w-full rounded border p-3"
      >
        <option value="infantil">
          Infantil
        </option>

        <option value="ef6-9">
          Fundamental II
        </option>

        <option value="medio">
          Ensino Medio
        </option>
      </select>

      <button
        type="button"
        onClick={handleSave}
        disabled={loading}
        className="rounded bg-[#0f2f5f] px-6 py-3 text-white disabled:opacity-70"
      >
        {loading ? "Salvando..." : "Cadastrar link"}
      </button>
    </div>
  );
}
