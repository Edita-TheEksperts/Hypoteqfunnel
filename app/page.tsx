import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import MortgageCalculator from "../components/MortgageCalculator";
import BestChoices from "@/components/BestChoices";
import Advantages from "@/components/Advantages";
import FinanceForm from "@/components/ui/FinanceForm";
import Footer from "@/components/layout/Footer";
import MortgageGuide from "@/components/ui/MortgageGuide";

export default function Home() {
  return (
        <main className="min-h-screen">
      <Header />
      <Hero />
      <MortgageCalculator />
      <BestChoices />
      <Advantages />
      <FinanceForm />
      <MortgageGuide />
      <Footer />
    </main>
  );
}
