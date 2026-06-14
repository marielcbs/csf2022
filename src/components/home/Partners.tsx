import { partners } from "@/data/site";

export default function Partners() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-csf">
        <h2 className="section-title mb-12 text-center">
          <strong>Parcerias</strong> e <strong>Diferenciais</strong>
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((item) => (
            <div
              key={item.name}
              className="flex min-h-48 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mb-5 h-16 max-w-40 object-contain"
              />
              <p className="text-lg font-semibold leading-6 text-[#1582b5]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
