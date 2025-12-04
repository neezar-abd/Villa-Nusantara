import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Gallery from "@/components/landing/Gallery";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";
import PromoBanner from "@/components/landing/PromoBanner";
import StatsCounter from "@/components/landing/StatsCounter";
import LocationMap from "@/components/landing/LocationMap";
import FAQ from "@/components/landing/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <Features />
      <PromoBanner />
      <Gallery />
      <LocationMap />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
}
