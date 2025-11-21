"use client";
import { useState } from "react";
import PartnerExpectSection from "@/components/PartnerExpectSection";
import VorteileSection from "./VorteileSection";
import PartnerWerdenSection from "./PartnerWerdenSection";
import ConsultationBanner from "./ConsultationBanner";

export default function PartnerSection() {
  const [active, setActive] = useState("");

  const buttons = [
    { id: "neue", label: "Was dich bei uns erwartet" },
    { id: "refi", label: "Deine Vorteile auf einen Blick:" },
    { id: "neubau", label: "FAQ" },
    { id: "partner", label: "Partner werden" },
  ];

const handleClick = (id: string) => {
  setActive(id);

  // If Neubau → Scroll to FAQ
  if (id === "neubau") {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      const offset = 120;
      const top =
        faqSection.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    return;
  }

  // Normal scroll for others
  const section = document.getElementById(id);
  if (section) {
    const offset = 120;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};


  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden font-sfpro">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: "url('/images/98.png')" }}
        />

        <div className="
            relative z-10 w-full h-auto md:h-[957px]
            flex flex-col justify-start
            px-[20px] sm:px-[116px]
            pt-[90px] sm:pt-[110px] md:pt-[110px]
            text-[#132219] max-w-[1579px] mx-auto
          "
        >
          <h2 className="text-[36px] sm:text-[56px] md:text-[100px] font-[500] leading-[110%] tracking-[-1px]">
            Werde <br/> <br className="sm:hidden" />
            <span className="block md:inline">HYPOTEQ Partner</span>
          </h2>

          <p className="mt-[16px] sm:mt-[24px] text-[18px] sm:text-[22px] md:text-[24px] leading-[140%]">
            Und wachse mit uns.
          </p>

          <p className="mt-[20px] sm:mt-[32px] text-[16px] sm:text-[20px] md:text-[24px] leading-[150%] max-w-full sm:max-w-[850px]">
            Du bist Treuhänder:in, Vermögensverwalter:in, Makler:in oder Broker?
            <br className="hidden sm:block" />
            Dann kannst du mit HYPOTEQ dein Angebot um professionelle
            Hypothekenberatung erweitern – ganz ohne eigenen Bankenvertrag.
            <br className="hidden sm:block" />
            Wir liefern dir die Tools, das Netzwerk und den Support, damit du
            deine Kund:innen mit Finanzierungslösungen überzeugst.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-[20px] mt-[40px] sm:mt-[70px]">
            <div className="flex flex-wrap gap-[10px]">
              {buttons.slice(0, 2).map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleClick(btn.id)}
                  className={`
                    rounded-[45px] text-[16px] sm:text-[18px] md:text-[20px]
                    font-[600] border-2 border-[#132219]
                    px-[18px] sm:px-[24px] py-[6px] sm:py-[8px]
                    transition-all duration-300
                    ${
                      active === btn.id
                        ? "bg-[#CAF476] text-[#132219]"
                        : "bg-transparent hover:bg-[#CAF476]/60"
                    }
                  `}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-[10px]">
              {buttons.slice(2).map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleClick(btn.id)}
                  className={`
                    rounded-[45px] text-[16px] sm:text-[18px] md:text-[20px]
                    font-[600] border-2 border-[#132219]
                    px-[18px] sm:px-[24px] py-[6px] sm:py-[8px]
                    transition-all duration-300
                    ${
                      active === btn.id
                        ? "bg-[#CAF476] text-[#132219]"
                        : "bg-transparent hover:bg-[#CAF476]/60"
                    }
                  `}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
<div id="neue">
  <PartnerExpectSection />
</div>

<div id="refi">
  <VorteileSection />
</div>

<div id="partner">
  <PartnerWerdenSection />
</div>


      <div className="mb-[200px] md:mb-[180px]">
        <ConsultationBanner />
      </div>
    </>
  );
}
 