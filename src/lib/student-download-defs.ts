export const studentCategoryOptions = [
  { value: "calendario", label: "Calendarios" },
  { value: "atualidade", label: "Atualidades" },
  { value: "horario", label: "Horarios" },
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
};

function getGoogleDriveFileId(value: string) {
  try {
    const url = new URL(value);

    if (!url.hostname.includes("drive.google.com")) {
      return null;
    }

    const pathnameMatch = url.pathname.match(/\/file\/d\/([^/]+)/);

    if (pathnameMatch?.[1]) {
      return pathnameMatch[1];
    }

    const id = url.searchParams.get("id");
    return id || null;
  } catch {
    return null;
  }
}

export function normalizeDocumentUrlForSave(value: string) {
  const trimmedValue = value.trim();
  const googleDriveFileId = getGoogleDriveFileId(trimmedValue);

  if (!googleDriveFileId) {
    return trimmedValue;
  }

  return `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
}

export function getDocumentDownloadUrl(value: string) {
  return normalizeDocumentUrlForSave(value);
}

export function getDocumentViewUrl(value: string) {
  const googleDriveFileId = getGoogleDriveFileId(value);

  if (!googleDriveFileId) {
    return value;
  }

  return `https://drive.google.com/file/d/${googleDriveFileId}/view`;
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
