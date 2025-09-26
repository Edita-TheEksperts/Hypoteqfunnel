// components/MortgageGuide.tsx
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const MortgageGuide: React.FC = () => {
  return (
    <section
      className="relative w-full h-[600px] font-sfpro text-white"
      style={{
        background: "url('/images/2.jpg') lightgray -39px -239.614px / 145.335% 237.73% no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div
        className="relative max-w-[1504px] mx-auto px-[80px] py-[116px] 
                   flex flex-col items-start gap-[42px]"
      >
        {/* Title */}
        <h2
          className="font-bold"
          style={{
            fontSize: "48px",
            lineHeight: "50px",
          }}
        >
          Mortgage Guide
        </h2>

        {/* Paragraph */}
        <p
          className="max-w-[626px] font-sfpro"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "22px",
          }}
        >
          If you are planning to buy residential property or renew your existing
          mortgage, you may find yourself facing many uncertainties and important
          questions. From choosing the right financing model to understanding
          interest rates and repayment options, the process can seem complex.
          <br />
          <br />
          Our comprehensive guide is designed to support you along the way,
          offering practical tips, clear explanations, and easy-to-understand
          answers to the most common questions. This way, you can make
          well-informed decisions with confidence and peace of mind.
        </p>

        {/* Button */}
        <button
          className="flex items-center justify-center gap-[10px] 
                     px-[20px] py-[10px]
                     rounded-[70px] border border-white/40 
                     bg-white/20 backdrop-blur-[6.5px] 
                     text-white text-[16px] font-medium 
                     hover:bg-white/30 transition"
        >
          Mortgage Guide
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default MortgageGuide;
