import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import EarningModel from "@/components/sections/EarningModel";
import Benefits from "@/components/sections/Benefits";
import PartnerForm from "@/components/sections/PartnerForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <EarningModel />
        <Benefits />
        <PartnerForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
