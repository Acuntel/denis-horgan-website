import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedListings from "@/components/FeaturedListings";
import Neighborhoods from "@/components/Neighborhoods";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedListings />
      <Neighborhoods />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
