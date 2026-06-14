import Values from "@/components/home/Values";

const features = [
  {
    title: "Desafio Educacional",
    text: "O enorme desafio da educação é buscar pontos de interlocução com a velocidade das transformações, ampliando campos de conhecimento e encontrando novos caminhos para o mundo.",
  },
  {
    title: "Parceria Institucional",
    text: "O CSF acompanha as mudanças da sociedade sem abrir mão de sua missão educativa, alicerçada em princípios cristãos e na formação de educandos engajados.",
  },
  {
    title: "Material Didático",
    text: "O COC organiza seu material em eixos temáticos que favorecem interdisciplinaridade, contextualização e continuidade do aprendizado.",
  },
  {
    title: "Tecnologia Educacional",
    text: "Livro eletrônico, recursos digitais, leituras complementares e plataformas ampliam a motivação e a experiência de aprendizagem.",
  },
  {
    title: "Hábitos de Estudo",
    text: "Os conteúdos são trabalhados em aula e consolidados por tarefas, estimulando desde cedo o estudo diário.",
  },
  {
    title: "Plataforma Digital",
    text: "A parceria com o Sistema COC conecta escola, estudantes e famílias por meio de soluções educacionais digitais.",
  },
];

export default function OColegioPage() {
  return (
    <main>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-csf">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#1582b5]">
            CSF e COC - Parceria Educacional
          </p>
          <h1 className="section-title mt-4">
            O <strong>Colégio</strong>
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-700">
            Uma instituição social que une missão educativa, princípios cristãos
            e tecnologia aplicada à educação para transformar positivamente o
            processo de ensino-aprendizagem.
          </p>
        </div>
      </section>

      <section className="container-csf py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#1582b5]">
                {feature.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Values />
    </main>
  );
}
