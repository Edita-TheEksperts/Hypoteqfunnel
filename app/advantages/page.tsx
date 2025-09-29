import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Benefits from "@/components/Benefits"; // ✅ kontrollo path

export default function AdvantagesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Benefits />
      <Footer />
    </main>
  );
}
