"use client";
import { useState } from "react";

export default function AboutSection() {
  const [active, setActive] = useState("mission"); 

  const buttons = [
    { id: "mission", label: "Our mission" },
    { id: "partners", label: "Our Partners" },
    { id: "team", label: "The Team" },
  ];

  return (
    <section
      className="relative w-full h-screen flex items-start justify-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/about-home.png')" }}
    >
      <div className="absolute inset-0"></div>

      <div
        className="
        relative z-10 max-w-[1200px] pl-[100px] pt-[180px] flex flex-col gap-[32px]
        text-[#132219]
        max-lg:pl-[40px] max-md:pl-[20px] max-md:pt-[140px] max-sm:pt-[120px]
        max-md:items-center max-md:text-center
      "
      >
        <div className="flex flex-col max-w-[600px] max-sm:max-w-full">

          {/* Title */}
          <div className="flex flex-col gap-[24px]">
            <h2
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "72px",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "-0.72px",
              }}
              className="text-[#132219] max-md:text-[48px] max-sm:text-[36px]"
            >
              About Us
            </h2>

            <p className="text-[24px] font-light leading-[1.4] text-[#132219] max-sm:text-[18px]">
              Clarity, technology, and real experts—built around you.
            </p>
          </div>

          {/* Description */}
          <div className="mt-[95px] max-md:mt-[40px]">
            <p className="text-[24px] font-light leading-[1.4] text-[#132219] max-sm:text-[18px]">
              Home financing shouldn’t feel mysterious. We turn complex terms into
              plain language, surface the few numbers that actually matter, and
              keep everything in one clear dashboard. You stay in control while our
              team handles the legwork behind the scenes.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-[10px] mt-[32px] max-md:justify-center">
            {buttons.map((btn) => {
              const isActive = active === btn.id;

              return (
                <button
                  key={btn.id}
                  onClick={() => setActive(btn.id)}
                  className={`
                    border border-[#132219] rounded-[45px] font-semibold text-[20px] 
                    transition-all duration-300 px-[24px] py-[8px]
                    max-sm:text-[16px] max-sm:px-[18px]
                    ${
                      isActive
                        ? "bg-[#CAF476]"
                        : "bg-transparent hover:bg-[#CAF476]/60"
                    }
                  `}
                  style={{
                    fontFamily: '"SF Pro Display", sans-serif',
                    color: "#132219",
                  }}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
