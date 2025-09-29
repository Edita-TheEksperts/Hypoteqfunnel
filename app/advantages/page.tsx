import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Benefits from "@/components/Benefits";
import YourBenefits from "@/components/YourBenefits";

export default function AdvantagesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Benefits />
      <YourBenefits />
      <Footer />
    </main>
  );
}
