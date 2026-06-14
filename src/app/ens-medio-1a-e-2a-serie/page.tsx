import StudentAreaPage from "@/components/students/StudentAreaPage";
import { studentAreas, studentDocuments } from "@/data/site";

export default function MedioPrimeiraSegundaPage() {
  return (
    <StudentAreaPage
      title="Ens. Médio - 1ª e 2ª série"
      description={studentAreas[2].description}
      documents={studentDocuments.medio12}
    />
  );
}
