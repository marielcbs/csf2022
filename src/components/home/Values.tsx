import { values } from "@/data/site";

export default function Values() {
  return (
    <section className="bg-slate-50 py-16 md:py-20" id="valores">
      <div className="container-csf">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1582b5]">
            Nossos valores
          </p>
          <h2 className="section-title mt-3">
            Para guiar a nossa jornada, priorizamos estes valores
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {values.map((valor) => (
            <div
              key={valor.title}
              className="rounded-lg bg-white p-7 text-center shadow-sm"
            >
              <img
                src={valor.image}
                alt=""
                className="mx-auto mb-5 h-16 w-16 object-contain"
              />
              <h3 className="text-xl font-black uppercase text-[#1582b5]">
                {valor.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {valor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
