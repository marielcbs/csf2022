import StudentAreaPage from "@/components/students/StudentAreaPage";
import { studentAreas } from "@/data/site";
import { getStudentDownloads } from "@/lib/student-downloads";

export default async function MedioPrimeiraSegundaPage() {
  const downloads = await getStudentDownloads("medio12");

  return (
    <StudentAreaPage
      title="Ens. Medio - 1a e 2a serie"
      description={studentAreas[2].description}
      downloads={downloads}
    />
  );
}
