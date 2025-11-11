"use client";
import { useState } from "react";
import Image from "next/image";
import PartnerExpectSection from "@/components/PartnerExpectSection";

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
          backgroundImage: "url('/images/98.png')", // background si në Figma
        }}
      >
        {/* Overlay për errësim të sfondit */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 w-full max-w-[1504px] h-[957px] flex flex-col justify-start 
          px-[24px] md:px-[116px] pt-[140px] md:pt-[180px] gap-[10px] text-[#132219]">
          <div className="flex flex-col max-w-[650px]">
            <h2
              className="text-[48px] md:text-[72px] leading-[100%] font-[500] tracking-[-0.72px]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              Werde <br /> HYPOTEQ Partner
            </h2>

            <p
              className="mt-[32px] text-[24px] leading-[140%] font-normal text-[#132219]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              Egal ob Hauskauf, Refinanzierung oder Neubau – der Weg zu deinem
              Eigenheim muss nicht kompliziert sein. Unsere smarte Plattform
              vergleicht Angebote von unseren Finanzierungspartnern, damit du nur
              das siehst, was wirklich zählt. <br />
              Ob du deine erste Hypothek suchst, eine bestehende optimieren willst
              oder ein Bauprojekt finanzierst – wir bringen Klarheit und
              Transparenz in jeden Schritt.
            </p>

            <div className="flex flex-col gap-[24px] mt-[80px]">
        
              <div className="flex flex-wrap gap-[10px]">
                {buttons.slice(0, 2).map((btn) => {
                  const isActive = active === btn.id;
                  return (
                    <button
                      key={btn.id}
                      onClick={() => handleClick(btn.id)}
                      className={`rounded-[45px] text-[20px] font-[600] font-['SF Pro Display']
                        border-2 border-[#132219]  px-[24px] py-[8px] transition-all duration-300
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
              <div className="flex">
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


      {/* =======================
          SECTION 3: YOUR ADVANTAGES
      ======================= */}
      <section className="w-full bg-[#132219] text-[#CAF476] px-6 sm:px-10 md:px-[60px] lg:px-[117px] py-[52px] flex flex-col justify-center font-sfpro">
        <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[60px] sm:gap-[75px]">
          <h2 className="text-[#CAF476] text-[32px] sm:text-[40px] md:text-[48px] font-[500] leading-[100%] tracking-[-0.48px] text-left">
            Your advantages with HYPOTEQ
          </h2>

          <div className="w-full flex flex-wrap justify-center lg:justify-between items-start gap-[40px] sm:gap-[60px]">
            {[
              {
                icon: "/images/partner11.svg",
                text: "Partner portal with case tracking and analysis",
              },
              {
                icon: "/images/partner22.svg",
                text: "Lender marketplace with up-to-date criteria",
              },
              {
                icon: "/images/partner33.svg",
                text: "Marketing toolkit & white-label materials",
              },
              {
                icon: "/images/partner44.svg",
                text: "Priority support and training",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left w-full sm:w-[180px] flex-shrink-0"
              >
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={64}
                  height={64}
                  className="mb-[24px] sm:mb-[38px]"
                />
                <p className="text-[#CAF476] opacity-80 text-[18px] sm:text-[20px] font-[400] leading-[140%] tracking-[-0.2px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
