import { footerContact } from "@/data/site";

export default function ContatoPage() {
  return (
    <main className="container-csf py-16 md:py-24">
      <h1 className="section-title">
        Fale <strong>Conosco</strong>
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#1582b5]">
            Atendimento Administrativo e Secretaria
          </h2>
          <p className="mt-4 leading-7 text-slate-600">{footerContact.hours}</p>
          <p className="mt-6 font-semibold">Telefone</p>
          <p>{footerContact.phone}</p>
          <p className="mt-6 font-semibold">E-mail</p>
          <p>{footerContact.email}</p>
          <p className="mt-6 font-semibold">Trabalhe conosco</p>
          <p>{footerContact.jobs}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#1582b5]">Endereço</h2>
          <p className="mt-4 leading-7 text-slate-600">
            {footerContact.address}
          </p>
        </div>
      </div>
    </main>
  );
}
