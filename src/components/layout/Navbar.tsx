"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { quickLinks, studentAreas } from "@/data/site";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "O Colégio", href: "/o-colegio" },
  { title: "Nossa História", href: "/historia" },
  { title: "A Congregação", href: "/a-congregacao" },
  { title: "Contato", href: "/#contato" },
];

const studentLinks = [
  { title: "Ed. Infantil / EF - 1º ao 5º ANO", href: studentAreas[0].href },
  { title: "Ens. Fund - 6º ao 9º ANO", href: studentAreas[1].href },
  { title: "Ens. Médio - 1ª e 2º série", href: studentAreas[2].href },
  { title: "Ens. Médio - 3º série", href: studentAreas[3].href },
  { title: "Boletim e Agenda", href: quickLinks.boletim },
  { title: "Portal COC", href: quickLinks.coc },
  { title: "Programa PLENO", href: quickLinks.pleno },
  { title: "HINO - CSF", href: quickLinks.hino },
];

const teacherLinks = [
  { title: "Boletim e Agenda", href: quickLinks.boletim },
  { title: "Email", href: quickLinks.outlook },
  { title: "Portal COC", href: quickLinks.coc },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<"aluno" | "professor" | null>(
    null,
  );
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
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="container-csf flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center"
          aria-label="CSF"
        >
          <img
            src="/csf/logos/LOGOCSF.svg"
            alt="Colégio São Francisco"
            className="hidden h-14 w-auto sm:block"
          />
          <img
            src="/csf/logos/LOGOCSFm.svg"
            alt="Colégio São Francisco"
            className="h-12 w-auto sm:hidden"
          />
        </Link>

        <div
          ref={dropdownRef}
          className="hidden min-w-0 items-center justify-end lg:flex"
        >
          <nav
            className="flex min-h-12 min-w-0 items-center overflow-visible rounded-lg bg-white px-3"
            aria-label="Principal"
          >
            <div className="flex min-w-0 items-center">
              {menuItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.title}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="ml-16 flex items-center">
            <AccountDropdown
              title="Aluno"
              icon="/csf/icons/icon_aluno.svg"
              links={studentLinks}
              isOpen={openDropdown === "aluno"}
              onOpen={() => setOpenDropdown("aluno")}
              onToggle={() =>
                setOpenDropdown((current) =>
                  current === "aluno" ? null : "aluno",
                )
              }
              onClose={() => setOpenDropdown(null)}
              widthClassName="w-[218px]"
            />
            <AccountDropdown
              title="Professor"
              icon="/csf/icons/icon_professor.svg"
              links={teacherLinks}
              isOpen={openDropdown === "professor"}
              onOpen={() => setOpenDropdown("professor")}
              onToggle={() =>
                setOpenDropdown((current) =>
                  current === "professor" ? null : "professor",
                )
              }
              onClose={() => setOpenDropdown(null)}
              widthClassName="w-36"
            />
          </div>

          <Link
            href="/aplicativos"
            className="ml-2 inline-flex h-12 items-center justify-center rounded-md bg-[#42c400] px-6 text-base font-extrabold text-white transition hover:bg-[#37ad00]"
          >
            Aplicativos
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#079ee3] text-white shadow-sm"
            aria-label="Abrir menu"
            onClick={() => setOpenPanel("menu")}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-[#079ee3]/20 bg-[#079ee3] md:hidden">
        <button
          type="button"
          className="flex h-14 items-center justify-center gap-2 text-sm font-bold uppercase text-white"
          onClick={() => setOpenPanel("aluno")}
        >
          <img
            src="/csf/icons/icon_aluno.svg"
            alt=""
            className="h-5 w-5 brightness-0 invert"
          />
          Aluno
        </button>
        <button
          type="button"
          className="flex h-14 items-center justify-center gap-2 border-l border-white/20 text-sm font-bold uppercase text-white"
          onClick={() => setOpenPanel("professor")}
        >
          <img
            src="/csf/icons/icon_professor.svg"
            alt=""
            className="h-5 w-5 brightness-0 invert"
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
      className="flex h-12 items-center whitespace-nowrap px-4 text-sm font-bold text-[#25364d] transition hover:text-[#1280e1]"
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
              menuItems.map((item) => (
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
                {studentLinks.map((item) => (
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
                {teacherLinks.map((item) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountDropdown({
  title,
  icon,
  links,
  isOpen,
  onOpen,
  onToggle,
  onClose,
  widthClassName,
}: {
  title: string;
  icon: string;
  links: { title: string; href: string }[];
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
  widthClassName: string;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className="inline-flex h-12 items-center gap-2 bg-[#079ee3] px-5 text-base font-bold uppercase text-white transition hover:bg-[#0588c5]"
        onClick={onToggle}
      >
        <img className="h-5 w-5 brightness-0 invert" src={icon} alt="" />
        {title}
      </button>
      <div
        className={`absolute left-0 top-full z-50 ${widthClassName} bg-[#f2f2f2] py-2 shadow-xl transition ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {links.map((item) => (
          <DropdownLink key={item.href} href={item.href} onClick={onClose}>
            {item.title}
          </DropdownLink>
        ))}
      </div>
    </div>
  );
}

function DropdownLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  const className =
    "block px-5 py-4 text-sm font-medium text-[#2475df] transition hover:bg-white hover:text-[#0d8cc4]";

  if (href.startsWith("http")) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} onClick={onClick}>
      {children}
    </Link>
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
