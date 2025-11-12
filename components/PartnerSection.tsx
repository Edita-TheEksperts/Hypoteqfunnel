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
        className="relative w-full flex justify-center items-start bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/98.png')", 
        }}
      >
        <div className="absolute inset-0"></div>

   <div
  className="relative z-10 w-full max-w-[1504px] h-[957px] flex flex-col justify-start 
  px-[24px] md:px-[116px] pt-[140px] md:pt-[180px] gap-[10px] text-[#132219]"
>
  <div className="flex flex-col max-w-[900px] md:max-w-[950px] lg:max-w-[1100px]">
    <h2
      className="text-[48px] md:text-[100px] leading-[100%] font-[500] tracking-[-1px] text-[#132219]"
      style={{ fontFamily: '"SF Pro Display", sans-serif' }}
    >
      Werde <br/>
      <span className="block md:inline">HYPOTEQ Partner</span>
    </h2>

    <p
      className="mt-[32px] text-[24px] leading-[140%] font-[400] text-[#132219]"
      style={{
        fontFamily: '"SF Pro Display", sans-serif',
        fontStyle: "normal",
      }}
    >
      Und wachse mit uns.
    </p>

    <p
      className="mt-[32px] text-[24px] leading-[140%] font-normal text-[#132219] max-w-[850px]"
      style={{
        fontFamily: '"SF Pro Display", sans-serif',
        fontWeight: 400,
        fontStyle: "normal",
      }}
    >
      Du bist Treuhänder:in, Vermögensverwalter:in, Makler:in oder Broker? <br/> Dann kannst du mit
      HYPOTEQ dein Angebot um professionelle Hypothekenberatung erweitern – ganz ohne eigenen
      Bankenvertrag. <br/> Wir liefern dir die Tools, das Netzwerk und den Support, damit du <br/> deine
      Kund:innen mit Finanzierungslösungen überzeugst.
    </p>

    {/* Buttons */}
    <div className="flex flex-col gap-[24px] mt-[80px]">
      <div className="flex flex-wrap gap-[10px]">
        {buttons.slice(0, 2).map((btn) => {
          const isActive = active === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => handleClick(btn.id)}
              className={`rounded-[45px] text-[20px] font-[600] font-['SF Pro Display']
                border-2 border-[#132219] px-[24px] py-[8px] transition-all duration-300
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
              className={`rounded-[45px] text-[20px] font-[600] font-['SF Pro Display']
                border-2 border-[#132219] px-[24px] py-[8px] transition-all duration-300
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
<div className="mb-[180px]">
  <ConsultationBanner />
</div>
    </>
  );
}
