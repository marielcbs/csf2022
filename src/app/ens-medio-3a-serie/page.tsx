import StudentAreaPage from "@/components/students/StudentAreaPage";
import { studentAreas, studentDocuments } from "@/data/site";

export default function MedioTerceiraPage() {
  return (
    <StudentAreaPage
      title="Ens. Médio - 3ª série"
      description={studentAreas[3].description}
      documents={studentDocuments.medio3}
    />
  );
}
