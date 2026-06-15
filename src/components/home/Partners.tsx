import { partners } from "@/data/site";

export default function Partners() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container-csf">
        <p className="mb-8 text-center text-sm font-extrabold uppercase tracking-[0.2em] text-slate-500">
          Parceiros e serviços que ampliam a experiência escolar
        </p>

        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {partners.map((item) => (
            <div
              key={item.name}
              className="flex min-h-36 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-[#0d8cc4]/30 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mb-4 h-12 max-w-32 object-contain"
              />
              <p className="text-sm font-bold leading-5 text-[#102a4c]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
