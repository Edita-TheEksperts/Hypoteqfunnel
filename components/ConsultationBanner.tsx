"use client";
import React from "react";

const ConsultationBanner: React.FC = () => {
  return (
    <section
      className="
        relative w-[1273px] h-[278px] rounded-[10px]
        mt-[48px] md:mt-[120px] overflow-hidden mx-auto
        flex justify-between items-start px-[60px] pt-[40px]
        max-lg:flex-col max-lg:items-start max-lg:h-auto max-lg:px-[24px] max-lg:py-[60px]
        max-sm:w-full max-sm:rounded-none max-sm:px-[28px] max-sm:py-[60px]
        max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center
      "
      style={{
        background: "url('/images/cta1.png') center/cover no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div
        className="
          relative z-10 flex flex-col items-start justify-start gap-[16px] max-w-[700px]
          max-sm:items-center max-sm:justify-center max-sm:gap-[18px]
        "
      >
        {/* Title */}
        <h3
          className="
            font-['SF Pro Display']
            text-[#CAF476]
            text-[28px] lg:text-[36px]
            font-[300]
            leading-[140%]
            tracking-[-0.3px]
            max-sm:text-[22px] max-sm:leading-[130%] max-sm:font-[400]
            max-sm:max-w-[320px]
          "
        >
          15 Minuten, die Klarheit{" "}
          <span className="font-[500] text-[#CAF476]">schaffen</span>
        </h3>

        {/* Paragraph */}
        <p
          className="
            font-['SF Pro Display']
            text-[#f3f7f2]
            text-[16px] lg:text-[20px]
            font-[300]
            leading-[140%]
            opacity-90
            max-w-[650px]
            mt-5
            max-sm:text-[14px] max-sm:leading-[140%]
            max-sm:max-w-[310px] max-sm:opacity-95 max-sm:mt-[4px]
          "
        >
          Unsere Expert:innen erklären dir den Finanzierungsprozess, zeigen dir passende Optionen
          und begleiten dich bei der Entscheidungsfindung.{" "}
          <br className="max-sm:hidden" />
          <span className="font-[400] text-[#CAF476]">
            Jetzt kostenloses Infogespräch buchen.
          </span>
        </p>
      </div>

      {/* Button */}
      <div
        className="
          relative z-10 flex items-center justify-center h-full
          max-sm:mt-[26px] max-sm:w-full max-sm:justify-center
        "
      >
        <button
          className="
            bg-[#CAF476]
            text-[#132219]
            font-['SF Pro Display']
            font-[600]
            text-[18px] lg:text-[20px]
            leading-normal tracking-[-0.2px]
            px-[22px] py-[10px]
            rounded-full border border-[#132219]
            hover:bg-[#D6FA8A]
            transition-all duration-300
            whitespace-nowrap shadow-[0_0_15px_rgba(202,244,118,0.25)]
            max-sm:text-[15px] max-sm:px-[24px] max-sm:py-[12px]
            max-sm:w-auto max-sm:shadow-[0_0_20px_rgba(202,244,118,0.3)]
          "
        >
          Jetzt kostenloses Infogespräch buchen
        </button>
      </div>
    </section>
  );
};

export default ConsultationBanner;
