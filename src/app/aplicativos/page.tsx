import Link from "next/link";

export default function AplicativosPage() {
  return (
    <main className="container-csf py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="section-title">
          <strong>Aplicativos</strong>
        </h1>
        <p className="mt-6 text-xl leading-8 text-slate-700">
          Baixe o nosso aplicativo para ter acesso aos Boletim On-line e Diário de Classe.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        <AppCard
          title="Boletim e Agenda"
          description="Acesso ao ambiente ProWeb."
          image="/csf/icons/icon_aluno.svg"
          href="https://web.prodados.net.br/ProWeb/SaoFrancisco/Login.aspx?ReturnUrl=%2fProWeb%2fSaoFrancisco"
        />
      </div>
    </main>
  );
}

function AppCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      target="_blank"
    >
      <img src={image} alt="" className="mb-6 h-16 max-w-44 object-contain" />
      <h2 className="text-2xl font-bold text-[#1582b5]">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </Link>
  );
}
