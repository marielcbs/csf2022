import StudentDownloadsAdmin from "@/components/forms/StudentDownloadsAdmin";
import { requireAdminUser } from "@/lib/auth/admin";

export default async function ArquivosPage() {
  await requireAdminUser();

  return (
    <main className="container-csf py-20">
      <StudentDownloadsAdmin />
    </main>
  );
}
