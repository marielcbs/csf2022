import Link from "next/link";

const segmentos = [
  {
    nome: "Educação Infantil e Fundamental I",
    slug: "infantil",
  },
  {
    nome: "Fundamental II",
    slug: "ef6-9",
  },
  {
    nome: "Ensino Médio",
    slug: "medio",
  },
];

export default function Segments() {
  return (
    <section className="py-20">
      <div className="container-csf">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#0f2f5f]">
          Segmentos de Ensino
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {segmentos.map((segmento) => (
            <Link
              key={segmento.slug}
              href={`/segmentos/${segmento.slug}`}
              className="rounded-xl border p-10 shadow-sm transition hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold">
                {segmento.nome}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}