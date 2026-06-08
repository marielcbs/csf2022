import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-csf flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-[#0f2f5f]"
        >
          CSF
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/">Início</Link>
          <Link href="/o-colegio">O Colégio</Link>
          <Link href="/historia">História</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}