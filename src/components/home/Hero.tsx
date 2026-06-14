export default function Hero() {
  return (
    <section className="hero-band relative overflow-hidden bg-slate-950">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/csf/videos/05csf.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f5f]/75 via-[#0f2f5f]/25 to-transparent" />

      <div className="container-csf relative z-10 flex min-h-[min(68vh,680px)] items-center py-20">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]">
            Desde 04 de outubro de 1951
          </p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Colégio São Francisco
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8">
            Educação orientada por valores franciscanos, parceria educacional
            COC e formação integral em Alagoinhas.
          </p>
        </div>
      </div>
    </section>
  );
}
