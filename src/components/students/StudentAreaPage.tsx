import { quickLinks } from "@/data/site";

export default function StudentAreaPage({
  title,
  description,
  documents,
}: {
  title: string;
  description: string;
  documents: string[];
}) {
  return (
    <main>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-csf">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#1582b5]">
            Área do Aluno
          </p>
          <h1 className="section-title mt-4">
            <strong>{title}</strong>
          </h1>
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

      <section className="container-csf py-16">
        <div className="mb-8 flex flex-wrap gap-3">
          {["Calendários", "Atualidades", "Horários"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold uppercase text-[#1582b5]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          {documents.map((document) => (
            <div
              key={document}
              className="grid gap-4 border-b border-slate-100 p-5 last:border-b-0 md:grid-cols-[1fr_auto]"
            >
              <p className="font-semibold text-slate-700">{document}</p>
              <div className="flex gap-2">
                <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-bold uppercase text-slate-600">
                  download
                </span>
                <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-bold uppercase text-slate-600">
                  ver
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
