import StudentAreaPage from "@/components/students/StudentAreaPage";
import { studentAreas } from "@/data/site";
import { getStudentDownloads } from "@/lib/student-downloads";

export default async function FundamentalPage() {
  const downloads = await getStudentDownloads("ef6-9");

  return (
    <StudentAreaPage
      title="Ens. Fundamental - 6o ao 9o ano"
      description={studentAreas[1].description}
      downloads={downloads}
    />
  );
}
