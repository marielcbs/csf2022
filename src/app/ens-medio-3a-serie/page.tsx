import StudentAreaPage from "@/components/students/StudentAreaPage";
import { studentAreas } from "@/data/site";
import { getStudentDownloads } from "@/lib/student-downloads";

export default async function MedioTerceiraPage() {
  const downloads = await getStudentDownloads("medio3");

  return (
    <StudentAreaPage
      title="Ens. Medio - 3ª serie"
      description={studentAreas[3].description}
      downloads={downloads}
    />
  );
}
