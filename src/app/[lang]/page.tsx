import { Courses } from "@/components/landing/courses";
import { CTA } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/landing/navigation";
import { Stats } from "@/components/landing/stars";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Courses />
      <Testimonials />
      <CTA />
    </main>
  );
}
