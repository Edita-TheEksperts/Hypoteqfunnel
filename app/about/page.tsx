import AboutContent from "@/components/AboutContent";
import ConsultationBanner from "@/components/ConsultationBanner";
import JoinOurTeam from "@/components/JoinOurTeam";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PartnersSection from "@/components/PartnersSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
        <Header />
      <AboutContent />
      <StatsSection />
      <TeamSection />
      <PartnersSection />
      |<JoinOurTeam />
      <ConsultationBanner />
      <Footer />
    </main>
  );
}
