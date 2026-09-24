import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import GrowthCTA from "@/components/GrowthCTA";
import BuiltForTeams from "@/components/BuiltForTeams";
import Pricing from "@/components/Pricing";
import WhoWeAre from "@/components/who-we-are";
import GlobalReach from "@/components/GlobalReach";
import RemoteSupport from "@/components/RemoteSupport";

export default function Home() {
  return (
    <>
      <Hero />
       <About />
       <Pricing />
      <Stats />
      <Services />
      <WhoWeAre />
       <CTA />
      <Work />
       <GrowthCTA />
      {/* <BuiltForTeams />      */}
      <Testimonials />
      <FAQ />
      <GlobalReach />
      <RemoteSupport />
    </>
  );
}
