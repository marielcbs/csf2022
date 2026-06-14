import Link from "next/link";
import { footerContact, quickLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0f2f5f] py-14 text-white" id="contato">
      <div className="container-csf grid gap-10 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Link className="font-semibold text-[#5bc4ff]" href="/">
            Página Inicial
          </Link>
          <a
            className="font-semibold text-[#5bc4ff]"
            href="https://www.csfba.com.br/app/edital-de-matriculas"
          >
            Edital de Matrículas
          </a>
          <a
            className="font-semibold text-[#5bc4ff]"
            href="https://www.csfba.com.br/app/edital-filantropia"
          >
            Edital de Filantropia
          </a>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#5bc4ff]">Fale Conosco</p>
          <p className="text-[#5bc4ff]">Atendimento Administrativo e Secretaria</p>
          <p className="mb-4 mt-1">{footerContact.hours}</p>
          <p className="text-[#5bc4ff]">Telefone</p>
          <p className="mb-4 mt-1">{footerContact.phone}</p>
          <p className="text-[#5bc4ff]">E-mail</p>
          <p className="mb-4 mt-1">{footerContact.email}</p>
          <p className="text-[#5bc4ff]">Trabalhe conosco</p>
          <p className="mt-1">{footerContact.jobs}</p>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#5bc4ff]">Endereço</p>
          <p className="mb-8 leading-7">{footerContact.address}</p>
          <p className="mb-4 font-semibold text-[#5bc4ff]">Siga nossas redes</p>
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
