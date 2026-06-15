import Link from "next/link";
import { footerContact, quickLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#102a4c] py-14 text-white" id="contato">
      <div className="container-csf grid gap-10 md:grid-cols-[0.8fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-4">
          <img
            src="/csf/logos/LOGOCSF.svg"
            alt="Colégio São Francisco"
            className="h-14 w-auto brightness-0 invert"
          />
          <Link className="font-semibold text-[#79d6ff]" href="/">
            Página Inicial
          </Link>
          <a
            className="font-semibold text-[#79d6ff]"
            href="https://www.csfba.com.br/app/edital-de-matriculas"
          >
            Edital de Matrículas
          </a>
          <a
            className="font-semibold text-[#79d6ff]"
            href="https://www.csfba.com.br/app/edital-filantropia"
          >
            Edital de Filantropia
          </a>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#79d6ff]">Fale Conosco</p>
          <p className="text-[#79d6ff]">Atendimento Administrativo e Secretaria</p>
          <p className="mb-4 mt-1">{footerContact.hours}</p>
          <p className="text-[#79d6ff]">Telefone</p>
          <p className="mb-4 mt-1">{footerContact.phone}</p>
          <p className="text-[#79d6ff]">E-mail</p>
          <p className="mb-4 mt-1">{footerContact.email}</p>
          <p className="text-[#79d6ff]">Trabalhe conosco</p>
          <p className="mt-1">{footerContact.jobs}</p>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#79d6ff]">Endereço</p>
          <p className="mb-8 leading-7">{footerContact.address}</p>
          <p className="mb-4 font-semibold text-[#79d6ff]">Siga nossas redes</p>
          <a href={quickLinks.instagram} aria-label="Instagram CSF">
            <img
              src="/csf/icons/icon_instagram.svg"
              alt=""
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>

      <div className="container-csf mt-14 text-center text-sm text-slate-200">
        <p>COLÉGIO SÃO FRANCISCO - TODOS OS DIREITOS RESERVADOS</p>
        <p className="mt-2 text-xs">Desenvolvido por: Mariel Cana Brasil</p>
      </div>
    </footer>
  );
}
