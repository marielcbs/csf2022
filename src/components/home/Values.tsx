import { values } from "@/data/site";

export default function Values() {
  return (
    <section className="bg-[#eef7fc] py-16 md:py-24" id="valores">
      <div className="container-csf">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0d8cc4]">
              Nossos valores
            </p>
            <h2 className="section-title mt-3">
              Um jeito franciscano de aprender e conviver
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A rotina escolar combina conhecimento, cuidado e presença para
              formar estudantes preparados para pensar, dialogar e agir com
              responsabilidade.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((valor) => (
              <div
                key={valor.title}
                className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200/70"
              >
                <img
                  src={valor.image}
                  alt=""
                  className="mb-5 h-14 w-14 object-contain"
                />
                <h3 className="text-xl font-black uppercase text-[#102a4c]">
                  {valor.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
