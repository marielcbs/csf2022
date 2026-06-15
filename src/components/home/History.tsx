import Link from "next/link";

export default function History() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-csf">
        <div className="grid overflow-hidden rounded-lg bg-[#102a4c] text-white shadow-2xl shadow-[#102a4c]/20 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#79d6ff]">
              Desde 1951
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              74 anos de história em Alagoinhas
            </h2>
            <p className="mt-6 text-lg leading-8 text-sky-100">
              Uma trajetória dedicada à educação integral, à espiritualidade
              franciscana e ao acompanhamento próximo de famílias e estudantes.
            </p>
            <Link
              href="/historia"
              className="loom-button mt-8 w-fit bg-white text-[#102a4c] hover:bg-sky-50"
            >
              Nossa história
            </Link>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full min-h-80 w-full object-cover"
          >
            <source src="/csf/videos/05csf.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
