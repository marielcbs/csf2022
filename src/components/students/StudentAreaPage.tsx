import { quickLinks } from "@/data/site";
import type { StudentDownload } from "@/lib/student-download-defs";
import StudentDownloadsPanel from "@/components/students/StudentDownloadsPanel";

export default function StudentAreaPage({
  title,
  description,
  downloads,
}: {
  title: string;
  description: string;
  downloads: StudentDownload[];
}) {
  return (
    <main>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-csf">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#1582b5]">
            Área do Aluno
          </p>
          <h2 className="section-title mt-3">
            <strong>{title}</strong>
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-700">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={quickLinks.boletim}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-lg bg-[#1582b5] px-5 text-sm font-bold uppercase text-white"
            >
              Boletim e Agenda
            </a>
            <a
              href={quickLinks.coc}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-lg border border-[#1582b5] px-5 text-sm font-bold uppercase text-[#1582b5]"
            >
              Portal COC
            </a>
          </div>
        </div>
      </section>

      <section className="container-csf py-8">
        <StudentDownloadsPanel downloads={downloads} />
      </section>
    </main>
  );
}
