import { studentDocuments } from "@/data/site";
import {
  type StudentDownload,
  type StudentSegment,
  type StudentSegmentQuery,
} from "@/lib/student-download-defs";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type LegacyDocument =
  | string
  | {
      title: string;
      href: string;
    };

const fallbackDocuments: Record<StudentSegment, LegacyDocument[]> = {
  infantil: studentDocuments.infantil,
  "ef6-9": studentDocuments.fundamental,
  medio12: studentDocuments.medio12,
  medio3: studentDocuments.medio3,
};

function isStudentSegment(value: string): value is StudentSegment {
  return value in fallbackDocuments;
}

function inferCategory(title: string): StudentDownload["categoria"] {
  const normalized = title.toLowerCase();

  if (normalized.includes("atualidade")) {
    return "atualidade";
  }

  if (normalized.includes("hor")) {
    return "horario";
  }

  return "calendario";
}

function normalizeLegacyDocument(
  document: LegacyDocument,
  segmento: StudentSegment,
  index: number,
): StudentDownload {
  if (typeof document === "string") {
    return {
      id: `fallback-${segmento}-${index}`,
      titulo: document,
      categoria: inferCategory(document),
      segmento,
      arquivo_url: "",
    };
  }

  return {
    id: `fallback-${segmento}-${index}`,
    titulo: document.title,
    categoria: inferCategory(document.title),
    segmento,
    arquivo_url: document.href,
  };
}

function getFallbackDownloads(segmento: StudentSegmentQuery): StudentDownload[] {
  if (segmento === "medio") {
    const medio12Downloads = fallbackDocuments.medio12.map((document, index) =>
      normalizeLegacyDocument(document, "medio12", index),
    );
    const medio3Downloads = fallbackDocuments.medio3.map((document, index) =>
      normalizeLegacyDocument(document, "medio3", index + medio12Downloads.length),
    );

    return [...medio12Downloads, ...medio3Downloads];
  }

  if (!isStudentSegment(segmento)) {
    return [];
  }

  return fallbackDocuments[segmento].map((document, index) =>
    normalizeLegacyDocument(document, segmento, index),
  );
}

function getSegmentQueryValues(segmento: StudentSegmentQuery) {
  if (segmento === "medio") {
    return ["medio", "medio12", "medio3"];
  }

  return [segmento];
}

export async function getStudentDownloads(segmento: StudentSegmentQuery) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("arquivos")
      .select("id,titulo,categoria,segmento,arquivo_url")
      .in("segmento", getSegmentQueryValues(segmento));

    if (error || !data || data.length === 0) {
      return getFallbackDownloads(segmento);
    }

    return data as StudentDownload[];
  } catch {
    return getFallbackDownloads(segmento);
  }
}
