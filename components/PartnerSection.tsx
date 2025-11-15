"use client";
import { useState } from "react";
import Image from "next/image";
import PartnerExpectSection from "@/components/PartnerExpectSection";
import VorteileSection from "./VorteileSection";
import PartnerWerdenSection from "./PartnerWerdenSection";
import ConsultationBanner from "./ConsultationBanner";

export default function PartnerSection() {
  const [active, setActive] = useState("");

  const buttons = [
    { id: "neue", label: "Neue Hypothek" },
    { id: "refi", label: "Refinanzierung" },
    { id: "neubau", label: "Neubau-Finanzierung" },
  ];

  const handleClick = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const top =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* =======================
          SECTION 1: BECOME A PARTNER
      ======================= */}
      <section
        className="relative w-full flex justify-center items-start  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/98.png')",
        }}
      >
        <div className="absolute inset-0"></div>

        <div
          className="relative z-10 w-full max-w-none md:max-w-[1504px] 
          h-auto md:h-[957px] flex flex-col justify-start
          px-0 sm:px-[40px] md:px-[116px] 
          pt-[100px] sm:pt-[140px] md:pt-[180px] 
          gap-[10px] text-[#132219]"
        >
          <div className="flex flex-col w-full  sm:px-0 max-w-full md:max-w-[950px] lg:max-w-[1100px]">
            <h2
              className="text-[36px] sm:text-[56px] md:text-[100px] leading-[110%] font-[500] tracking-[-1px] text-[#132219]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              Werde <br className="sm:hidden" />
              <span className="block md:inline">HYPOTEQ Partner</span>
            </h2>

            <p
              className="mt-[20px] sm:mt-[32px] text-[18px] sm:text-[22px] md:text-[24px] leading-[140%] font-[400] text-[#132219]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
              }}
            >
              Und wachse mit uns.
            </p>

            <p
              className="mt-[20px] sm:mt-[32px] text-[16px] sm:text-[20px] md:text-[24px] leading-[150%] font-normal text-[#132219] max-w-full sm:max-w-[850px]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
              }}
            >
              Du bist Treuhänder:in, Vermögensverwalter:in, Makler:in oder Broker?
              <br className="hidden sm:block" />
              Dann kannst du mit HYPOTEQ dein Angebot um professionelle
              Hypothekenberatung erweitern – ganz ohne eigenen Bankenvertrag.
              <br className="hidden sm:block" />
              Wir liefern dir die Tools, das Netzwerk und den Support, damit du
              deine Kund:innen mit Finanzierungslösungen überzeugst.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-[20px] mt-[50px] sm:mt-[80px]">
              <div className="flex flex-wrap gap-[10px]">
                {buttons.slice(0, 2).map((btn) => {
                  const isActive = active === btn.id;
                  return (
                    <button
                      key={btn.id}
                      onClick={() => handleClick(btn.id)}
                      className={`rounded-[45px] text-[16px] sm:text-[18px] md:text-[20px] font-[600] font-['SF Pro Display']
                      border-2 border-[#132219] px-[18px] sm:px-[24px] py-[6px] sm:py-[8px] transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#CAF476] text-[#132219]"
                          : "bg-transparent text-[#132219] hover:bg-[#CAF476]/60 hover:text-[#132219]"
                      }`}
                    >
                      {btn.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-[10px]">
                {buttons.slice(2).map((btn) => {
                  const isActive = active === btn.id;
                  return (
                    <button
                      key={btn.id}
                      onClick={() => handleClick(btn.id)}
                      className={`rounded-[45px] text-[16px] sm:text-[18px] md:text-[20px] font-[600] font-['SF Pro Display']
                      border-2 border-[#132219] px-[18px] sm:px-[24px] py-[6px] sm:py-[8px] transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#CAF476] text-[#132219]"
                          : "bg-transparent text-[#132219] hover:bg-[#CAF476]/60 hover:text-[#132219]"
                      }`}
                    >
                      {btn.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerExpectSection />
      <VorteileSection />
      <PartnerWerdenSection />
      <div className="mb-[120px] md:mb-[180px]">
        <ConsultationBanner />
      </div>
    </>
  );
}
