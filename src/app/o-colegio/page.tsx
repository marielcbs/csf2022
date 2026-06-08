import Values from "@/components/home/Values";

export default function OColegioPage() {
  return (
    <main>
      <section className="container-csf py-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold text-[#0f2f5f]">
            O Colegio
          </h1>

          <p className="text-lg leading-8">
            Uma instituicao de ensino orientada por valores franciscanos,
            dedicada ao desenvolvimento integral dos estudantes.
          </p>
        </div>
      </section>

      <Values />
    </main>
  );
}
