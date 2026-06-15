import Link from "next/link";
import { studentAreas } from "@/data/site";

export default function Segments() {
  return (
    <section className="bg-[#f8fbff] py-16 md:py-24" id="segmentos">
      <div className="container-csf">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0d8cc4]">
            Jornada escolar
          </p>
          <h2 className="section-title mt-3">
            Segmentos de <strong>ensino</strong>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {studentAreas.map((segmento) => (
            <Link
              key={segmento.href}
              href={segmento.href}
              className="group rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#0d8cc4]/40 hover:shadow-xl"
            >
              <p className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7fc] text-lg font-black text-[#0d8cc4]">
                {segmento.shortTitle.charAt(0)}
              </p>
              <h3 className="text-2xl font-black text-[#102a4c]">
                {segmento.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {segmento.description}
              </p>
              <span className="mt-6 inline-flex font-extrabold text-[#0d8cc4] transition group-hover:translate-x-1">
                Saiba mais
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
