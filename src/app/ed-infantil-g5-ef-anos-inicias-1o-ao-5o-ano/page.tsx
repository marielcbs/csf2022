import StudentAreaPage from "@/components/students/StudentAreaPage";
import { studentAreas } from "@/data/site";
import { getStudentDownloads } from "@/lib/student-downloads";

export default async function InfantilFundamentalPage() {
  const downloads = await getStudentDownloads("infantil");

  return (
    <StudentAreaPage
      title="Ed. Infantil - G5 / Ens. Fundamental - 1o ao 5o ano"
      description={studentAreas[0].description}
      downloads={downloads}
    />
  );
}
