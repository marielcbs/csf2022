const historyText = [
  "No dia 19 de dezembro de 1949, a convite do Revmo. Frei Egídio de Elcito, Custódio Provincial dos Capuchinhos da Bahia e Sergipe, desembarcaram no Rio de Janeiro, vindas da Itália, seis irmãs da Congregação das Religiosas Franciscanas Imaculatinas.",
  "Após uma passagem de poucos dias em Salvador, acolhidas pelas Irmãs Sacramentinas, seguiram para Jaguaquara, dando início ao 1º trabalho missionário no Brasil.",
  "Aos 4 de outubro de 1951, realizou-se a sessão solene da instalação do Colégio São Francisco a funcionar numa casa doada à Ordem Capuchinha pela viúva Sra. Auta Pinto. A partir dessa data, inicia-se a história do Colégio São Francisco que começou a funcionar com um orfanato e uma escola primária",
  "1967 As Irmãs cumpriram sua missão educativa com o curso de Magistério de 1967 até 1988 e o Ensino Fundamental até 1990, quando o prédio foi alugado ao Governo Municipal e depois ao Governo do Estado.",
  "Após uma parada de seis anos o CSF voltou com a mesma filosofia de trabalho, adaptando-se às mudanças educacionais, centradas na busca da qualidade e modernidade de ensino",
  "A missão educativa do CSF alicerçada nos valores cristãos é preocupar-se com o desenvolvimento integral dos alunos, priorizando a formação ética e desenvolvimento da autonomia intelectual e do pensamento crítico.",
  "A escola faz parte do mundo, por isso a proposta pedagógica do CSF está voltada para realização do ser humano pleno em todo o seu potencial, capaz de interagir neste mundo que o cerca. Os princípios norteadores da prática pedagógica do CSF reforçam a aprendizagem significativa e estabelece a sua organização em torno de quatro aprendizagens fundamentais que se situam ao longo da vida com pilares do conhecimento: Aprender a conhecer, Aprender a fazer, Aprender a conviver, Aprender a ser.",
];

export default function HistoriaPage() {
  return (
    <main>
      <section className="bg-[#0f2f5f] py-20 text-white">
        <div className="container-csf">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#5bc4ff]">
            Nossa História
          </p>
          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Colégio São Francisco
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-sky-50">
            A trajetória do CSF preservada a partir do texto histórico oficial
            do colégio.
          </p>
        </div>
      </section>

      <section className="container-csf py-16">
        <article className="mx-auto max-w-4xl">
          <h2 className="section-title">
            Nossa <strong>História</strong>
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700">
            {historyText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
