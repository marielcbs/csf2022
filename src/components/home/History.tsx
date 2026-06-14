import Link from "next/link";

export default function History() {
  return (
    <section className="bg-[#0f2f5f] py-24 text-white">
      <div className="container-csf text-center">
        <h2 className="mb-4 text-5xl font-black uppercase">
          74 anos de história
        </h2>
        <p className="mx-auto max-w-3xl text-lg uppercase tracking-[0.2em] text-sky-100">
          Desde 04 de outubro de 1951
        </p>
        <Link
          href="/historia"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold uppercase text-[#0f2f5f] transition hover:bg-sky-50"
        >
          Nossa história
        </Link>
      </div>
    </section>
  );
}
