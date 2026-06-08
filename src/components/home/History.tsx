import Link from "next/link";

export default function History() {
  return (
    <section className="bg-[#0f2f5f] py-24 text-white">
      <div className="container-csf text-center">
        <h2 className="mb-6 text-5xl font-bold">
          74 anos de história
        </h2>

        <p className="mx-auto max-w-3xl text-xl">
          Formando gerações e construindo
          um legado de excelência em educação.
        </p>

        <Link
          href="/historia"
          className="mt-8 inline-block rounded-lg bg-[#d4af37] px-8 py-4 font-semibold text-black"
        >
          Conheça Nossa História
        </Link>
      </div>
    </section>
  );
}