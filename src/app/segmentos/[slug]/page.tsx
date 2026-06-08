import PdfTabs from "@/components/ui/PdfTabs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SegmentoPage({ params }: Props) {
  const { slug } = await params;

  const nomes: Record<string, string> = {
    infantil: "Educacao Infantil e Fundamental I",
    "ef6-9": "Fundamental II",
    medio: "Ensino Medio",
  };

  return (
    <main className="container-csf py-20">
      <h1 className="mb-10 text-4xl font-bold">
        {nomes[slug] ?? "Segmento"}
      </h1>

      <PdfTabs segmento={slug} />
    </main>
  );
}
