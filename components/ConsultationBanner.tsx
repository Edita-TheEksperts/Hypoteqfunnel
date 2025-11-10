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
      "
      style={{
        background: "url('/images/cta1.png') center/cover no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* LEFT SIDE (Title + Paragraph) */}
      <div className="relative z-10 flex flex-col items-start justify-start gap-[16px] max-w-[700px]">
        {/* Title */}
        <h3
          className="
            font-['SF Pro Display']
            text-[#CAF476]
            text-[28px] lg:text-[36px]
            font-[300]
            leading-[140%]
            tracking-[-0.3px]
          "
        >
          15 Minuten, die Klarheit <span className="text-[#CAF476]">schaffen</span>
        </h3>

        {/* Paragraph */}
        <p
          className="
            font-['SF Pro Display']
            text-[#CAF476]
            text-[16px] lg:text-[20px]
            font-[300]
            leading-[140%]
            opacity-90
            max-w-[650px]
            mt-5
          "
        >
          Unsere Expert:innen erklären dir den <br/>Finanzierungsprozess, zeigen dir passende Optionen – <br/>
          und begleiten dich bei der Entscheidungsfindung. <br />
          Jetzt kostenloses Infogespräch buchen.
        </p>
      </div>

      {/* RIGHT SIDE (Button centered vertically) */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <button
          className="
            bg-[#CAF476]
            text-[#132219]
            font-['SF Pro Display']
            font-[600]
            text-[18px] lg:text-[20px]
            leading-normal
            tracking-[-0.2px]
            px-[20px] py-[8px]
            rounded-full
            border border-[#132219]
            hover:bg-[#D6FA8A]
            transition-all
            whitespace-nowrap
          "
        >
          Jetzt kostenloses Infogespräch buchen
        </button>
      </div>
    </section>
  );
};

export default ConsultationBanner;
