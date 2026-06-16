import Link from "next/link";
import { requireAdminUser } from "@/lib/auth/admin";
import SignOutButton from "@/components/auth/SignOutButton";

export default async function AdminDashboardPage() {
  const user = await requireAdminUser();

  return (
    <main className="container-csf py-20">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sessao autenticada para {user.email}.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/arquivos"
            className="inline-flex rounded bg-[#0f2f5f] px-5 py-3 font-semibold text-white"
          >
            Gerenciar downloads
          </Link>

          <SignOutButton />
        </div>
      </div>
    </main>
  );
}
