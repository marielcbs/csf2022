"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { quickLinks, studentAreas } from "@/data/site";

const collegeItems = [
  { title: "O Colégio", href: "/o-colegio" },
  { title: "Nossa História", href: "/historia" },
  { title: "A Congregação", href: "/a-congregacao" },
  { title: "Segmentos", href: "/#segmentos" },
  { title: "Fale conosco", href: "/#contato" },
];

const studentExtraLinks = [
  { title: "Boletim e Agenda", href: quickLinks.boletim },
  { title: "Portal COC", href: quickLinks.coc },
  { title: "Programa PLENO", href: quickLinks.pleno },
  { title: "HINO - CSF", href: quickLinks.hino },
];

export default function Navbar() {
  const [isCollegeOpen, setIsCollegeOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<
    "menu" | "aluno" | "professor" | null
  >(null);
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur">
      <div className="container-csf flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="CSF">
          <img
            src="/csf/logos/LOGOCSF.svg"
            alt="Colégio São Francisco"
            className="hidden h-12 w-auto sm:block"
          />
          <img
            src="/csf/logos/LOGOCSFm.svg"
            alt="Colégio São Francisco"
            className="h-12 w-auto sm:hidden"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-white p-1 shadow-sm lg:flex"
          aria-label="Principal"
        >
          <NavLink href="/">Home</NavLink>
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsCollegeOpen(true)}
            onMouseLeave={() => setIsCollegeOpen(false)}
          >
            <button
              type="button"
              className="h-10 rounded-lg px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-[#0d8cc4]"
              onClick={() => setIsCollegeOpen((current) => !current)}
            >
              O Colégio
            </button>
            <div
              className={`absolute left-0 top-full mt-3 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-2xl transition ${
                isCollegeOpen
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              {collegeItems.map((item) => (
                <Link
                  key={item.href}
                  className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#eef7fc] hover:text-[#0d8cc4]"
                  href={item.href}
                  onClick={() => setIsCollegeOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <NavLink href="/historia">História</NavLink>
          <NavLink href="/a-congregacao">Congregação</NavLink>
          <NavLink href="/#contato">Contato</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-11 items-center gap-2 rounded-lg px-3 text-sm font-extrabold text-slate-700 transition hover:bg-slate-100 hover:text-[#0d8cc4] md:inline-flex"
            onClick={() => setOpenPanel("aluno")}
          >
            <img src="/csf/icons/icon_aluno.svg" alt="" className="h-5 w-5" />
            Aluno
          </button>
          <button
            type="button"
            className="hidden h-11 items-center gap-2 rounded-lg px-3 text-sm font-extrabold text-slate-700 transition hover:bg-slate-100 hover:text-[#0d8cc4] md:inline-flex"
            onClick={() => setOpenPanel("professor")}
          >
            <img
              src="/csf/icons/icon_professor.svg"
              alt=""
              className="h-5 w-5"
            />
            Professor
          </button>
          <Link
            href="/aplicativos"
            className="loom-button hidden bg-[#42c400] text-white hover:bg-[#37ad00] sm:inline-flex"
          >
            Aplicativos
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpenPanel("menu")}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-slate-100 md:hidden">
        <button
          type="button"
          className="flex h-14 items-center justify-center gap-2 text-sm font-bold uppercase text-slate-700"
          onClick={() => setOpenPanel("aluno")}
        >
          <img src="/csf/icons/icon_aluno.svg" alt="" className="h-5 w-5" />
          Aluno
        </button>
        <button
          type="button"
          className="flex h-14 items-center justify-center gap-2 text-sm font-bold uppercase text-slate-700"
          onClick={() => setOpenPanel("professor")}
        >
          <img
            src="/csf/icons/icon_professor.svg"
            alt=""
            className="h-5 w-5"
          />
          Professor
        </button>
      </div>

      <OverlayPanel openPanel={openPanel} setOpenPanel={setOpenPanel} />
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className="flex h-10 items-center rounded-lg px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-[#0d8cc4]"
      href={href}
    >
      {children}
    </Link>
  );
}

function OverlayPanel({
  openPanel,
  setOpenPanel,
}: {
  openPanel: "menu" | "aluno" | "professor" | null;
  setOpenPanel: (panel: "menu" | "aluno" | "professor" | null) => void;
}) {
  const isOpen = openPanel !== null;
  const title =
    openPanel === "aluno"
      ? "Área do Aluno"
      : openPanel === "professor"
        ? "Área do Professor"
        : "Menu";

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#102a4c]/96 text-white transition ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        className="absolute right-6 top-6 text-5xl font-light"
        aria-label="Fechar menu"
        onClick={() => setOpenPanel(null)}
      >
        ×
      </button>
      <div className="container-csf flex min-h-screen items-center justify-center py-24">
        <div className="w-full max-w-3xl text-center">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.25em] text-[#79d6ff]">
            {title}
          </p>
          <div className="grid gap-4 text-2xl font-semibold md:text-3xl">
            {openPanel === "menu" &&
              collegeItems.map((item) => (
                <OverlayLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenPanel(null)}
                >
                  {item.title}
                </OverlayLink>
              ))}
            {openPanel === "aluno" && (
              <>
                {studentAreas.map((item) => (
                  <OverlayLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenPanel(null)}
                  >
                    {item.title}
                  </OverlayLink>
                ))}
                {studentExtraLinks.map((item) => (
                  <OverlayLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenPanel(null)}
                  >
                    {item.title}
                  </OverlayLink>
                ))}
              </>
            )}
            {openPanel === "professor" && (
              <>
                <OverlayLink
                  href={quickLinks.boletim}
                  onClick={() => setOpenPanel(null)}
                >
                  Boletim e Agenda
                </OverlayLink>
                <OverlayLink
                  href={quickLinks.outlook}
                  onClick={() => setOpenPanel(null)}
                >
                  Email
                </OverlayLink>
                <OverlayLink
                  href={quickLinks.coc}
                  onClick={() => setOpenPanel(null)}
                >
                  Portal COC
                </OverlayLink>
                <OverlayLink
                  href={quickLinks.pleno}
                  onClick={() => setOpenPanel(null)}
                >
                  Programa PLENO
                </OverlayLink>
                <OverlayLink
                  href={quickLinks.hino}
                  onClick={() => setOpenPanel(null)}
                >
                  HINO - CSF
                </OverlayLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function OverlayLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
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
