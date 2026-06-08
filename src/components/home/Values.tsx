import { valores } from "@/data/valores";

export default function Values() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-csf">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#0f2f5f]">
          Valores Franciscanos
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {valores.map((valor) => (
            <div
              key={valor}
              className="rounded-xl bg-white p-8 text-center shadow"
            >
              <h3 className="font-semibold text-xl">
                {valor}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}