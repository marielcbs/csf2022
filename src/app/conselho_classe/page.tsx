type Turma = {
  nome: string;
  preencherLink: string;
  resultadoLink: string;
};

type Segmento = {
  titulo: string;
  turmas: Turma[];
};

const segmentos: Segmento[] = [
  {
    titulo: "Ensino Fundamental - 6º ao 9º ano",
    turmas: [
      {
        nome: "6º Ano A",
        preencherLink: "https://forms.cloud.microsoft/r/JLJrU6LYmg",
        resultadoLink: "#",
      },
      {
        nome: "6º Ano B",
        preencherLink: "https://forms.cloud.microsoft/r/L1QhjGTJJx",
        resultadoLink: "#",
      },
      {
        nome: "7º Ano A",
        preencherLink: "https://forms.cloud.microsoft/r/cgEqNxP6B3",
        resultadoLink: "#",
      },
      {
        nome: "7º Ano B",
        preencherLink: "https://forms.cloud.microsoft/r/W87QC2jvet",
        resultadoLink: "#",
      },
      {
        nome: "8º Ano A",
        preencherLink: "https://forms.cloud.microsoft/r/ZdeU8f0geT",
        resultadoLink: "#",
      },
      {
        nome: "8º Ano B",
        preencherLink: "https://forms.cloud.microsoft/r/r6tajJ6Dqw",
        resultadoLink: "#",
      },
      {
        nome: "9º Ano A",
        preencherLink: "https://forms.cloud.microsoft/r/Hr3a2Aeu9Z",
        resultadoLink: "#",
      },
      {
        nome: "9º Ano B",
        preencherLink: "https://forms.cloud.microsoft/r/1jfKBMC8jm",
        resultadoLink: "#",
      },
    ],
  },
  {
    titulo: "Ensino Médio - 1ª a 3ª Série",
    turmas: [
      {
        nome: "1ª Série A",
        preencherLink: "https://forms.cloud.microsoft/r/jnqjZJh4nf",
        resultadoLink: "#",
      },
      {
        nome: "1ª Série B",
        preencherLink: "https://forms.cloud.microsoft/r/mZvWjKp9yP",
        resultadoLink: "#",
      },
      {
        nome: "2ª Série A",
        preencherLink: "https://forms.cloud.microsoft/r/ebs2WXqypY",
        resultadoLink: "#",
      },
      {
        nome: "3ª Série A",
        preencherLink: "https://forms.cloud.microsoft/r/jnryHWYSCT",
        resultadoLink: "#",
      },
    ],
  },
];

export default function ConselhoDeClassePage() {
  return (
    <main
      className="rounded-xl px-6 py-10 md:px-8"
      style={{ backgroundColor: "#eef3f9", color: "#1a2b3c" }}
    >
      <div className="mx-auto max-w-4xl">
        <p
          className="mb-2 text-[13px] font-bold uppercase tracking-[2px]"
          style={{ color: "#1c73b8" }}
        >
          Pedagógico
        </p>

        <h1
          className="mb-4 text-[40px] font-extrabold leading-[1.15]"
          style={{ color: "#0e5390" }}
        >
          Lista de Formulário
          <br />
          Conselho de Classe
        </h1>

        <p
          className="mb-7 max-w-[1080px] text-base leading-[1.6]"
          style={{ color: "#5b6b7c" }}
        >
          Atenção, professores: os formulários do Conselho de Classe (2ª
          Unidade) já estão liberados para preenchimento.
          <br />
          Lembre-se de que é importante estar logado com seu e-mail
          corporativo para acessar.
        </p>

        <div
          className="overflow-hidden rounded-[10px] border"
          style={{ backgroundColor: "#ffffff", borderColor: "#e1e8f0" }}
        >
          {segmentos.map((segmento) => (
            <div key={segmento.titulo}>
              <div
                className="border-b px-[22px] py-[18px] text-[15px] font-bold"
                style={{
                  color: "#0e5390",
                  borderColor: "#e1e8f0",
                  backgroundColor: "#f7fafd",
                }}
              >
                {segmento.titulo}
              </div>

              {segmento.turmas.map((turma, turmaIndex) => {
                const isLastInSegmento =
                  turmaIndex === segmento.turmas.length - 1;

                return (
                  <div
                    key={turma.nome}
                    className="flex items-center justify-between px-[22px] py-4"
                    style={
                      isLastInSegmento
                        ? undefined
                        : { borderBottom: "1px solid #e1e8f0" }
                    }
                  >
                    <span
                      className="text-[15px] font-semibold"
                      style={{ color: "#1a2b3c" }}
                    >
                      {turma.nome}
                    </span>
                    <div>
                      <a
                        href={turma.preencherLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-2.5 inline-block rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-[.3px] no-underline"
                        style={{
                          borderColor: "#e1e8f0",
                          backgroundColor: "#f2f6fa",
                          color: "#1a2b3c",
                        }}
                      >
                        Preencher
                      </a>
                      <a
                        href={turma.resultadoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-[.3px] no-underline"
                        style={{
                          borderColor: "#1c73b8",
                          backgroundColor: "#1c73b8",
                          color: "#ffffff",
                        }}
                      >
                        Resultado
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div
          className="mt-6 text-center text-xs"
          style={{ color: "#5b6b7c" }}
        >
          Conselho de Classe - 2026
        </div>
      </div>
    </main>
  );
}
