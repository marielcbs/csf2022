import { parceiros } from "@/data/parceiros";

export default function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="container-csf">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#0f2f5f]">
          Nossos Diferenciais
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {parceiros.map((item) => (
            <div
              key={item}
              className="rounded-xl border p-6 text-center shadow-sm transition hover:shadow-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
