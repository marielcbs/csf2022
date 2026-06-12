"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const collegeItems = [
  {
    title: "Nossa História",
    description: "Conheça a trajetória da instituição",
    href: "/historia",
  },
  {
    title: "A Congregação",
    description: "Saiba sobre os valores franciscanos",
    href: "/o-colegio",
  },
  {
    title: "Estrutura",
    description: "Conheça nossas instalações",
    href: "/o-colegio#estrutura",
  },
  {
    title: "Eventos",
    description: "Webinars e agenda do colégio",
    href: "/o-colegio#eventos",
  },
  {
    title: "Contato",
    description: "Fale conosco",
    href: "/contato",
  },
];

const studentLinks = [
  "Ed. Infantil / EF - 1º ao 5º ano",
  "Ens. Fund - 6º ao 9º ano",
  "Ens. Médio - 1ª e 2ª série",
  "Ens. Médio - 3ª série",
];

export default function Navbar() {
  const [isCollegeOpen, setIsCollegeOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCollegeOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="border-b border-slate-100">
        <div className="container-csf flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-4" aria-label="CSF">
            <span className="flex h-14 w-20 items-center justify-center rounded-md border border-slate-200 bg-white text-2xl font-black tracking-normal text-[#0f2f5f] shadow-sm">
              CSF
            </span>
            <span className="h-10 w-px bg-slate-300" aria-hidden="true" />
            <span className="flex flex-col leading-none">
              <span className="text-[10px] font-semibold uppercase tracking-normal text-slate-500">
                Plataforma de Educação
              </span>
              <span className="text-2xl font-black tracking-normal text-[#18a64a]">
                COC
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href="https://web.prodados.net.br/ProWeb/SaoFrancisco/Login.aspx?ReturnUrl=%2fProWeb%2fSaoFrancisco"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-slate-700 transition-colors hover:text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              <UserIcon />
              Aluno
            </a>
            <a
              href="https://www.outlook.com/csfba.com.br"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-slate-700 transition-colors hover:text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              <CapIcon />
              Professor
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
            aria-label="Abrir menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="container-csf flex h-14 items-center justify-between gap-6">
          <nav className="flex items-center gap-8" aria-label="Menu principal">
            <Link
              href="/"
              className="text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsCollegeOpen(true)}
              onMouseLeave={() => setIsCollegeOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-slate-700 transition-colors hover:text-blue-600"
                aria-haspopup="menu"
                aria-expanded={isCollegeOpen}
                onClick={() => setIsCollegeOpen((isOpen) => !isOpen)}
              >
                O Colégio
                <ChevronIcon isOpen={isCollegeOpen} />
              </button>

              <div
                className={`absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl bg-[#1e2d3d] p-6 shadow-2xl transition-all duration-200 ${
                  isCollegeOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-1 pointer-events-none opacity-0"
                }`}
                role="menu"
              >
                {collegeItems.map((item, index) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 transition-colors hover:bg-slate-700/30 ${
                      index < collegeItems.length - 1
                        ? "border-b border-slate-700/50"
                        : ""
                    }`}
                    role="menuitem"
                    onClick={() => setIsCollegeOpen(false)}
                  >
                    <span className="block font-semibold text-white">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-slate-400">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/historia"
              className="text-slate-700 transition-colors hover:text-blue-600"
            >
              Nossa História
            </Link>
            <Link
              href="/o-colegio"
              className="text-slate-700 transition-colors hover:text-blue-600"
            >
              A Congregação
            </Link>
            <Link
              href="/contato"
              className="text-slate-700 transition-colors hover:text-blue-600"
            >
              Contato
            </Link>
          </nav>

          <a
            href="https://csfba.com.br/app/aplicativos/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#22c55e] px-5 text-sm font-semibold uppercase tracking-normal text-white shadow-sm transition-colors hover:bg-green-500"
          >
            Aplicativos
          </a>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-slate-950/40 transition-opacity duration-200 md:hidden ${
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileOpen(false)}
      >
        <aside
          className={`ml-auto h-full w-[min(86vw,360px)] bg-white shadow-2xl transition-transform duration-200 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Menu mobile"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
            <span className="font-bold text-[#0f2f5f]">CSF</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
              aria-label="Fechar menu"
              onClick={() => setIsMobileOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="space-y-1 px-5 py-5" aria-label="Menu principal">
            <MobileLink href="/" onClick={() => setIsMobileOpen(false)}>
              Home
            </MobileLink>
            {collegeItems.map((item) => (
              <MobileLink
                key={item.title}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.title}
              </MobileLink>
            ))}
            <a
              href="https://csfba.com.br/app/aplicativos/"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#22c55e] px-4 py-3 text-sm font-semibold uppercase tracking-normal text-white"
            >
              Aplicativos
            </a>
          </nav>

          <div className="border-t border-slate-100 px-5 py-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-slate-500">
              Acesso rápido
            </p>
            <div className="grid gap-2">
              <a
                href="https://web.prodados.net.br/ProWeb/SaoFrancisco/Login.aspx?ReturnUrl=%2fProWeb%2fSaoFrancisco"
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                target="_blank"
                rel="noreferrer"
              >
                <UserIcon />
                Aluno
              </a>
              <a
                href="https://www.outlook.com/csfba.com.br"
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                target="_blank"
                rel="noreferrer"
              >
                <CapIcon />
                Professor
              </a>
              {studentLinks.map((item) => (
                <span
                  key={item}
                  className="rounded-lg px-3 py-1 text-sm text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 10-10-5-10 5 10 5 10-5Z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
