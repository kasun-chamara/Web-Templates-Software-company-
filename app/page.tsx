import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import BuiltForTeams from "@/components/BuiltForTeams";

export default function Home() {
  return (
    <>
      <Hero />
       <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <CTA />
      <BuiltForTeams />
    </>
  );
}
