import StudentDownloadsPanel from "@/components/students/StudentDownloadsPanel";
import type { StudentSegmentQuery } from "@/lib/student-download-defs";
import { getStudentDownloads } from "@/lib/student-downloads";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SegmentoPage({ params }: Props) {
  const { slug } = await params;
  const downloads = await getStudentDownloads(slug as StudentSegmentQuery);

  const nomes: Record<string, string> = {
    infantil: "Educacao Infantil e Fundamental I",
    "ef6-9": "Fundamental II",
    medio: "Ensino Medio",
    medio12: "Ensino Medio - 1a e 2a serie",
    medio3: "Ensino Medio - 3a serie",
  };

  return (
    <main className="container-csf py-20">
      <h1 className="mb-10 text-4xl font-bold">
        {nomes[slug] ?? "Segmento"}
      </h1>

      <StudentDownloadsPanel downloads={downloads} />
    </main>
  );
}
