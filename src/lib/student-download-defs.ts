export const studentCategoryOptions = [
  { value: "calendario", label: "Calendários" },
  { value: "atualidade", label: "Atualidades" },
  { value: "horario", label: "Horários" },
] as const;

export const studentSegmentOptions = [
  { value: "infantil", label: "Infantil / 1o ao 5o ano" },
  { value: "ef6-9", label: "Fundamental II / 6o ao 9o ano" },
  { value: "medio12", label: "Ensino Medio / 1a e 2a serie" },
  { value: "medio3", label: "Ensino Medio / 3a serie" },
] as const;

export type StudentCategory = (typeof studentCategoryOptions)[number]["value"];
export type StudentSegment = (typeof studentSegmentOptions)[number]["value"];
export type StudentSegmentQuery = StudentSegment | "medio";

export type StudentDownload = {
  id: string;
  titulo: string;
  categoria: StudentCategory;
  segmento: StudentSegment | "medio";
  arquivo_url: string;
  created_at?: string;
};

type GoogleDocumentUrl = {
  fileId: string;
  app: "drive" | "document" | "spreadsheets" | "presentation";
};

function getGoogleDocumentUrl(value: string): GoogleDocumentUrl | null {
  try {
    const url = new URL(value);

    if (
      !url.hostname.includes("drive.google.com") &&
      !url.hostname.includes("docs.google.com")
    ) {
      return null;
    }

    const pathnameMatch = url.pathname.match(/\/file\/d\/([^/]+)/);

    if (pathnameMatch?.[1]) {
      return {
        fileId: pathnameMatch[1],
        app: "drive",
      };
    }

    const docsMatch = url.pathname.match(
      /^\/(document|spreadsheets|presentation)\/d\/([^/]+)/,
    );

    if (docsMatch?.[1] && docsMatch[2]) {
      return {
        fileId: docsMatch[2],
        app: docsMatch[1] as GoogleDocumentUrl["app"],
      };
    }

    const id = url.searchParams.get("id");
    return id
      ? {
          fileId: id,
          app: "drive",
        }
      : null;
  } catch {
    return null;
  }
}

export function normalizeDocumentUrlForSave(value: string) {
  const trimmedValue = value.trim();
  const googleDocument = getGoogleDocumentUrl(trimmedValue);

  if (!googleDocument) {
    return trimmedValue;
  }

  return getDocumentDownloadUrl(trimmedValue);
}

export function getDocumentDownloadUrl(value: string) {
  const googleDocument = getGoogleDocumentUrl(value);

  if (!googleDocument) {
    return value;
  }

  if (googleDocument.app === "document") {
    return `https://docs.google.com/document/d/${googleDocument.fileId}/export?format=pdf`;
  }

  if (googleDocument.app === "spreadsheets") {
    return `https://docs.google.com/spreadsheets/d/${googleDocument.fileId}/export?format=pdf`;
  }

  if (googleDocument.app === "presentation") {
    return `https://docs.google.com/presentation/d/${googleDocument.fileId}/export/pdf`;
  }

  return `https://drive.google.com/uc?export=download&id=${googleDocument.fileId}`;
}

export function getDocumentViewUrl(value: string) {
  const googleDocument = getGoogleDocumentUrl(value);

  if (!googleDocument) {
    return value;
  }

  if (googleDocument.app === "document") {
    return `https://docs.google.com/document/d/${googleDocument.fileId}/view`;
  }

  if (googleDocument.app === "spreadsheets") {
    return `https://docs.google.com/spreadsheets/d/${googleDocument.fileId}/view`;
  }

  if (googleDocument.app === "presentation") {
    return `https://docs.google.com/presentation/d/${googleDocument.fileId}/view`;
  }

  return `https://drive.google.com/file/d/${googleDocument.fileId}/view`;
}

export function groupDownloadsByCategory(downloads: StudentDownload[]) {
  return studentCategoryOptions.reduce<Record<StudentCategory, StudentDownload[]>>(
    (groups, category) => {
      groups[category.value] = downloads.filter(
        (download) => download.categoria === category.value,
      );

      return groups;
    },
    {
      calendario: [],
      atualidade: [],
      horario: [],
    },
  );
}
