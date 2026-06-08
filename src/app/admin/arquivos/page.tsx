import PdfUpload from "@/components/forms/PdfUpload";
import { requireAdminUser } from "@/lib/auth/admin";

export default async function ArquivosPage() {
  await requireAdminUser();

  return (
    <main className="container-csf py-20">
      <PdfUpload />
    </main>
  );
}
