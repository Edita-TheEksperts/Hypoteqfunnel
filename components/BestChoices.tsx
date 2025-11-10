"use client";
import React from "react";

export default function BestChoices() {
  return (
    <section
      className="
        flex justify-between items-center
        w-full max-w-[1272px] mx-auto
        p-[24px]
        rounded-[10px]
        border border-[#000]
        bg-[#132219]
        mt-[80px] mb-[80px]
        h-[297px]
      "
    >
      {/* Left Column */}
      <div
        className="
          flex flex-col justify-center items-start
          w-[511px] h-[249px]
          gap-[58px]
          text-white font-sfpro
        "
      >
        {/* Title + Subtitle */}
        <div>
          <h2 className="text-[48px] font-[500] leading-[140%] tracking-[-0.48px] text-white">
            HYPOTEQ
          </h2>
          <p className="text-[32px] font-[400] leading-[140%] tracking-[-0.32px] text-white">
            Smarte Wahl. Beste Zinsen.
          </p>
        </div>

        {/* Paragraph */}
        <p className="text-[20px] font-[200] leading-[140%] text-white"
                  style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
          Unsere Richtzinsen dienen zur Orientierung. Ihr persönlicher Zinssatz kann je nach
          Situation variieren. Gerne berechnen wir deinen individuellen Zins.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center gap-[42px] w-[622px] h-[225px]">
        <RateCard title="Saron ab" value="0.83%" />
        <RateCard title="5 Jahre ab" value="0.99%" />
        <RateCard title="10 Jahre ab" value="1.38%" />
      </div>
    </section>
  );
}

/* ✅ Rate Card */
function RateCard({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="
        flex flex-col justify-center items-center
        w-[179.33px] h-[143px]
        rounded-[10px]
        bg-[#CAF476]
        px-[12px] py-[16px]
      "
    >
      <span className="font-sfpro text-[16px] font-[400] leading-[100%] text-[#132219] mb-[8px]">
        {title}
      </span>
      <span className="font-sfpro text-[48px] font-[400] text-[#132219] leading-normal">
        {value}
      </span>
    </div>
  );
}
