import StudentAreaPage from "@/components/students/StudentAreaPage";
import { studentAreas, studentDocuments } from "@/data/site";

export default function InfantilFundamentalPage() {
  return (
    <StudentAreaPage
      title="Ed. Infantil - G5 / Ens. Fundamental - 1º ao 5º ano"
      description={studentAreas[0].description}
      documents={studentDocuments.infantil}
    />
  );
}
