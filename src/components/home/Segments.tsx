import Link from "next/link";
import { studentAreas } from "@/data/site";

export default function Segments() {
  return (
    <section className="py-16 md:py-20" id="segmentos">
      <div className="container-csf">
        <h2 className="section-title mb-12 text-center">
          Segmentos de <strong>Ensino</strong>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {studentAreas.map((segmento) => (
            <Link
              key={segmento.href}
              href={segmento.href}
              className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1582b5]">
                {segmento.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {segmento.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
