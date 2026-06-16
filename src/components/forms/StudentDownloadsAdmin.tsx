"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  normalizeDocumentUrlForSave,
  studentCategoryOptions,
  studentSegmentOptions,
  type StudentCategory,
  type StudentDownload,
  type StudentSegment,
} from "@/lib/student-download-defs";

type FormState = {
  titulo: string;
  categoria: StudentCategory;
  segmento: StudentSegment;
  arquivoUrl: string;
};

const initialFormState: FormState = {
  titulo: "",
  categoria: "calendario",
  segmento: "infantil",
  arquivoUrl: "",
};

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export default function StudentDownloadsAdmin() {
  const [items, setItems] = useState<StudentDownload[]>([]);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(true);
  const [message, setMessage] = useState("");

  const fetchItems = useCallback(async () => {
    const supabase = createSupabaseBrowserClient();
    return supabase
      .from("arquivos")
      .select("id,titulo,categoria,segmento,arquivo_url")
      .in(
        "segmento",
        studentSegmentOptions.map((option) => option.value),
      );
  }, []);

  const loadItems = useCallback(async () => {
    setLoadingList(true);
    setMessage("");

    const { data, error } = await fetchItems();

    if (error) {
      setItems([]);
      setMessage(`Erro ao carregar links: ${error.message}`);
      setLoadingList(false);
      return;
    }

    setItems((data as StudentDownload[]) ?? []);
    setLoadingList(false);
  }, [fetchItems]);

  useEffect(() => {
    void fetchItems().then(({ data, error }) => {
      if (error) {
        setItems([]);
        setMessage(`Erro ao carregar links: ${error.message}`);
        setLoadingList(false);
        return;
      }

      setItems((data as StudentDownload[]) ?? []);
      setLoadingList(false);
    });
  }, [fetchItems]);

  function resetForm() {
    setForm(initialFormState);
    setEditingId(null);
  }

  async function handleSubmit() {
    setMessage("");

    if (!form.titulo.trim()) {
      setMessage("Informe o titulo.");
      return;
    }

    if (!isValidUrl(form.arquivoUrl.trim())) {
      setMessage("Informe um link valido.");
      return;
    }

    setLoading(true);

    const supabase = createSupabaseBrowserClient();
    const payload = {
      titulo: form.titulo.trim(),
      categoria: form.categoria,
      segmento: form.segmento,
      arquivo_url: normalizeDocumentUrlForSave(form.arquivoUrl),
    };

    const response = editingId
      ? await supabase.from("arquivos").update(payload).eq("id", editingId)
      : await supabase.from("arquivos").insert(payload);

    setLoading(false);

    if (response.error) {
      setMessage(`Erro ao salvar link: ${response.error.message}`);
      return;
    }

    setMessage(
      editingId
        ? "Link atualizado com sucesso."
        : "Link cadastrado com sucesso.",
    );
    resetForm();
    await loadItems();
  }

  function handleEdit(item: StudentDownload) {
    setEditingId(item.id);
    setForm({
      titulo: item.titulo,
      categoria: item.categoria,
      segmento:
        item.segmento === "medio" ? "medio12" : (item.segmento as StudentSegment),
      arquivoUrl: item.arquivo_url,
    });
    setMessage("");
  }

  async function handleDelete(id: string) {
    const shouldDelete = window.confirm("Deseja excluir este link?");

    if (!shouldDelete) {
      return;
    }

    setLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.from("arquivos").delete().eq("id", id);

    setLoading(false);

    if (error) {
      setMessage(`Erro ao excluir link: ${error.message}`);
      return;
    }

    if (editingId === id) {
      resetForm();
    }

    setMessage("Link removido com sucesso.");
    await loadItems();
  }

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Downloads por segmento
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Cadastre, edite e remova links de calendarios, atualidades e horarios.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Titulo do documento"
            value={form.titulo}
            onChange={(event) =>
              setForm((current) => ({ ...current, titulo: event.target.value }))
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />

          <input
            type="url"
            placeholder="Cole o link do Google Drive ou do PDF"
            value={form.arquivoUrl}
            onChange={(event) =>
              setForm((current) => ({ ...current, arquivoUrl: event.target.value }))
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />

          <select
            value={form.categoria}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                categoria: event.target.value as StudentCategory,
              }))
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          >
            {studentCategoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={form.segmento}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                segmento: event.target.value as StudentSegment,
              }))
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          >
            {studentSegmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-lg bg-[#0f2f5f] px-5 py-3 font-semibold text-white disabled:opacity-70"
          >
            {loading ? "Salvando..." : editingId ? "Atualizar link" : "Cadastrar link"}
          </button>

          {editingId ? (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700"
            >
              Cancelar edicao
            </button>
          ) : null}
        </div>

        {message ? (
          <p className="mt-4 text-sm text-slate-700">{message}</p>
        ) : null}

        <p className="mt-3 text-sm text-slate-500">
          Links comuns do Google Drive sao convertidos automaticamente para download.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Links cadastrados
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Esta lista alimenta as paginas de downloads do site.
            </p>
          </div>

          <button
            type="button"
            onClick={loadItems}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Atualizar lista
          </button>
        </div>

        {loadingList ? (
          <p className="text-sm text-slate-500">Carregando links...</p>
        ) : null}

        {!loadingList && items.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhum link cadastrado.</p>
        ) : null}

        {!loadingList && items.length > 0 ? (
          <div className="space-y-3">
            {items.map((item) => {
              const segmentLabel =
                studentSegmentOptions.find((option) => option.value === item.segmento)
                  ?.label ?? item.segmento;
              const categoryLabel =
                studentCategoryOptions.find((option) => option.value === item.categoria)
                  ?.label ?? item.categoria;

              return (
                <div
                  key={item.id}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <p className="font-semibold text-slate-900">{item.titulo}</p>
                      <p className="text-sm text-slate-600">
                        {segmentLabel} - {categoryLabel}
                      </p>
                      <a
                        href={item.arquivo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="break-all text-sm text-[#1582b5] underline"
                      >
                        {item.arquivo_url}
                      </a>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
