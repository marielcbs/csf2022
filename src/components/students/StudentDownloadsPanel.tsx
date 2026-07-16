"use client";

import { useState } from "react";
import {
  getDocumentDownloadUrl,
  getDocumentViewUrl,
  groupDownloadsByCategory,
  studentCategoryOptions,
  type StudentCategory,
  type StudentDownload,
} from "@/lib/student-download-defs";

type Props = {
  downloads: StudentDownload[];
};

export default function StudentDownloadsPanel({ downloads }: Props) {
  const [activeCategory, setActiveCategory] = useState<StudentCategory>(
    studentCategoryOptions[0].value,
  );
  const groupedDownloads = groupDownloadsByCategory(downloads);
 const activeDownloads = [...groupedDownloads[activeCategory]].sort(
  (a, b) =>
    new Date(b.created_at ?? 0).getTime() -
    new Date(a.created_at ?? 0).getTime()
);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {studentCategoryOptions.map((item) => {
          const isActive = item.value === activeCategory;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setActiveCategory(item.value)}
              className={
                isActive
                  ? "rounded-full bg-[#1582b5] px-4 py-2 text-sm font-bold uppercase text-white"
                  : "rounded-full bg-sky-50 px-4 py-2 text-sm font-bold uppercase text-[#1582b5]"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        {activeDownloads.length > 0 ? (
          activeDownloads.map((document) => (
            <div
              key={document.id}
              className="grid gap-4 border-b border-slate-100 p-5 last:border-b-0 md:grid-cols-[1fr_auto]"
            >
              <p className="font-semibold text-slate-700">{document.titulo}</p>
              <div className="flex gap-2">
                {document.arquivo_url ? (
                  <>
                    <a
                      href={getDocumentDownloadUrl(document.arquivo_url)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-slate-100 px-3 py-1 text-sm font-bold uppercase text-slate-600 transition hover:bg-sky-50 hover:text-[#1582b5]"
                    >
                      download
                    </a>
                    <a
                      href={getDocumentViewUrl(document.arquivo_url)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-slate-100 px-3 py-1 text-sm font-bold uppercase text-slate-600 transition hover:bg-sky-50 hover:text-[#1582b5]"
                    >
                      ver
                    </a>
                  </>
                ) : (
                  <>
                    <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-bold uppercase text-slate-400">
                      download
                    </span>
                    <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-bold uppercase text-slate-400">
                      ver
                    </span>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-5 text-sm text-slate-500">
            Nenhum arquivo disponivel nesta categoria.
          </div>
        )}
      </div>
    </>
  );
}
