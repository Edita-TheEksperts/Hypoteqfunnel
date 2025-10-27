import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import MortgageCalculator from "../components/MortgageCalculator";
import BestChoices from "@/components/BestChoices";
import Footer from "@/components/layout/Footer";
import MortgageGuide from "@/components/ui/MortgageGuide";
import HomeEvaluation from "../components/HomeEvaluation";
import HowItWorks from "@/components/HowItWorks";



export default function Home() {
  return (
        <main className="min-h-screen">
      <Header />
      <Hero />
      <MortgageCalculator />
      <HomeEvaluation />
      <BestChoices />
      <HowItWorks />
      <MortgageGuide />
      <Footer />
    </main>
  );
}
