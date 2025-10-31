import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import MortgageCalculator from "@/components/MortgageCalculator";
import BestChoices from "@/components/BestChoices";
import Footer from "@/components/layout/Footer";
import MortgageGuide from "@/components/ui/MortgageGuide";
import HomeEvaluation from "../components/HomeEvaluation";
import HowItWorks from "@/components/HowItWorks";
import YourAdvantages from "@/components/YourAdvantages";
import Testimonials from "@/components/Testimonials";
import ConsultationBanner from "@/components/ConsultationBanner";
import StartProcessBanner from "@/components/StartProcessBanner";

export default function Home() {
  return (
    <main className="overflow-visible">
      <Header />

        <Hero />
        <MortgageCalculator />
        <HomeEvaluation />
        <BestChoices />
        <HowItWorks />
        <YourAdvantages />
        <StartProcessBanner/>
        <Testimonials />
        <MortgageGuide/>
        <ConsultationBanner />


      {/* ✅ Spacing para Footer: 100 mobile / 200 desktop */}
      <div className="mt-[100px] md:mt-[200px]">
        <Footer />
      </div>
    </main>
  );
}
