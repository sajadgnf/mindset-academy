import Image from "next/image";
import FloatSymbols from "./floatSymbols";
import HeroContent from "./content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-primary via-secondary to-secondary">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          priority
          src="/landing/background.webp"
          className="object-cover opacity-40"
          alt="Mathematical formulas background"
        />
      </div>

      <FloatSymbols />
      <HeroContent />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-10" />
    </section>
  );
}
