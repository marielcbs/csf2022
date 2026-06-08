"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

function slugFileName(fileName: string) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export default function PdfUpload() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("calendario");
  const [segmento, setSegmento] = useState("infantil");

  const [arquivo, setArquivo] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function handleUpload() {
    try {
      setLoading(true);

      if (!arquivo) {
        alert("Selecione um PDF");
        return;
      }

      if (
        arquivo.type !==
        "application/pdf"
      ) {
        alert("Somente PDF");
        return;
      }

      const nomeArquivo =
        `${Date.now()}-${slugFileName(arquivo.name)}`;

      const caminho =
        `${segmento}/${nomeArquivo}`;
      const supabase = createSupabaseBrowserClient();

      const { error: uploadError } =
        await supabase.storage
          .from("arquivos-escolares")
          .upload(caminho, arquivo);

      if (uploadError)
        throw uploadError;

      const { data } =
        supabase.storage
          .from("arquivos-escolares")
          .getPublicUrl(caminho);

      const publicUrl =
        data.publicUrl;

      const { error: dbError } =
        await supabase
          .from("arquivos")
          .insert({
            titulo,
            categoria,
            segmento,
            arquivo_url: publicUrl,
          });

      if (dbError)
        throw dbError;

      alert(
        "Arquivo enviado com sucesso!"
      );

      setTitulo("");
      setArquivo(null);
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : "Erro desconhecido";

      alert(`Erro ao enviar arquivo: ${message}`);
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
        placeholder="Título"
        value={titulo}
        onChange={(e) =>
          setTitulo(e.target.value)
        }
        className="w-full rounded border p-3"
      />

      <select
        value={categoria}
        onChange={(e) =>
          setCategoria(e.target.value)
        }
        className="w-full rounded border p-3"
      >
        <option value="calendario">
          Calendário
        </option>

        <option value="horario">
          Horário
        </option>

        <option value="atualidade">
          Atualidade
        </option>
      </select>

      <select
        value={segmento}
        onChange={(e) =>
          setSegmento(e.target.value)
        }
        className="w-full rounded border p-3"
      >
        <option value="infantil">
          Infantil
        </option>

        <option value="ef6-9">
          Fundamental II
        </option>

        <option value="medio">
          Ensino Médio
        </option>
      </select>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setArquivo(
            e.target.files?.[0] || null
          )
        }
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="rounded bg-[#0f2f5f] px-6 py-3 text-white"
      >
        {loading
          ? "Enviando..."
          : "Enviar PDF"}
      </button>
    </div>
  );
}
