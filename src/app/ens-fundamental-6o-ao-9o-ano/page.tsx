import StudentAreaPage from "@/components/students/StudentAreaPage";
import { studentAreas, studentDocuments } from "@/data/site";

export default function FundamentalPage() {
  return (
    <StudentAreaPage
      title="Ens. Fundamental - 6º ao 9º ano"
      description={studentAreas[1].description}
      documents={studentDocuments.fundamental}
    />
  );
}
