export default function Hero() {
  return (
    <section className="relative h-[80vh]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">
            Colégio São Francisco
          </h1>

          <p className="text-xl">
            74 anos formando gerações.
          </p>
        </div>
      </div>
    </section>
  );
}