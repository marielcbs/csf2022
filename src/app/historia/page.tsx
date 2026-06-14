const timeline = [
  {
    year: "1949",
    text: "Em 19 de dezembro, chegam ao Brasil seis irmãs da Congregação das Religiosas Franciscanas Imaculatinas.",
  },
  {
    year: "1951",
    text: "Em 4 de outubro, acontece a instalação oficial do Colégio São Francisco em prédio doado por Auta Pinto.",
  },
  {
    year: "1967",
    text: "Período de expansão com cursos de Magistério, fortalecendo a presença educacional do CSF.",
  },
  {
    year: "1999",
    text: "Retomada das atividades após seis anos, reafirmando o compromisso com Alagoinhas e região.",
  },
];

export default function HistoriaPage() {
  return (
    <main>
      <section className="bg-[#0f2f5f] py-20 text-white">
        <div className="container-csf">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#5bc4ff]">
            História do CSF
          </p>
          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Colégio São Francisco
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-sky-50">
            Desde 1951, o CSF constrói uma trajetória de formação integral,
            compromisso cristão, acolhimento e excelência em educação.
          </p>
        </div>
      </section>

      <section className="container-csf py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {timeline.map((item) => (
            <article
              key={item.year}
              className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-4xl font-black text-[#1582b5]">{item.year}</p>
              <p className="mt-5 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-csf max-w-4xl">
          <h2 className="section-title">
            Missão <strong>Educativa</strong>
          </h2>
          <p className="mt-6 text-lg leading-9 text-slate-700">
            O CSF mantém sua filosofia baseada em valores cristãos,
            priorizando o desenvolvimento integral do aluno, a formação ética e
            cidadã, a autonomia intelectual e o pensamento crítico. Sua missão
            dialoga com os quatro pilares da educação: aprender a conhecer,
            fazer, conviver e ser.
          </p>
        </div>
      </section>
    </main>
  );
}
