import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-band overflow-hidden bg-[#f8fbff]">
      <div className="container-csf flex min-h-[min(86vh,860px)] flex-col items-center justify-center gap-10 pb-14 pt-16 text-center md:pt-20">
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#0d8cc4]">
            Desde 04 de outubro de 1951
          </p>
          <h1 className="text-5xl font-black leading-[0.98] text-[#102a4c] md:text-7xl lg:text-8xl">
            Colégio São Francisco
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Educação orientada por valores franciscanos, parceria educacional
            COC e formação integral para cada etapa da vida escolar em
            Alagoinhas.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#segmentos"
              className="loom-button bg-[#102a4c] text-white shadow-xl shadow-[#102a4c]/20 hover:bg-[#173b6b]"
            >
              Conheça os segmentos
            </Link>
            <Link
              href="/#contato"
              className="loom-button border border-slate-300 bg-white text-[#102a4c] hover:bg-slate-50"
            >
              Fale com a secretaria
            </Link>
          </div>
        </div>

        <div className="media-shell relative w-full max-w-6xl overflow-hidden bg-slate-950">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[16/9] w-full object-cover"
          >
            <source src="/csf/videos/05csf.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute left-4 top-4 rounded-lg bg-white/92 px-4 py-3 text-left shadow-lg backdrop-blur md:left-6 md:top-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0d8cc4]">
              CSF em movimento
            </p>
            <p className="mt-1 text-sm font-bold text-[#102a4c]">
              Formação humana, acadêmica e socioemocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
