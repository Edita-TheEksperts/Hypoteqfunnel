"use client";
import React from "react";

export default function BestChoices() {
  return (
<section
  className="
    flex flex-col lg:flex-row justify-between items-center
    w-full max-w-[1272px] mx-auto
    p-[24px] sm:p-[32px] md:p-[40px]
    rounded-[10px]
    border border-[#000]
    bg-[#132219]
    mt-[60px] sm:mt-[80px] mb-[60px] sm:mb-[80px]
    h-auto lg:h-[297px]
    gap-[32px] lg:gap-0
  "
>

      {/* ✅ Left Column */}
      <div
        className="
          flex flex-col justify-center items-start
          w-full lg:w-[511px] h-auto lg:h-[249px]
          gap-[24px] lg:gap-[58px]
          text-white font-sfpro
        "
      >
        {/* Title + Subtitle */}
        <div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[500] leading-[140%] tracking-[-0.48px] text-white">
            HYPOTEQ
          </h2>
          <p className="text-[22px] sm:text-[26px] lg:text-[32px] font-[400] leading-[140%] tracking-[-0.32px] text-white">
            Smarte Wahl. Beste Zinsen.
          </p>
        </div>

 <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal text-white leading-[150%] font-sfpro">
  Unsere Richtzinsen dienen zur Orientierung. Ihr persönlicher Zinssatz kann je nach
  Situation variieren. Gerne berechnen wir deinen individuellen Zins.
</p>

      </div>

      {/* ✅ Right Column */}
      <div
        className="
          flex flex-wrap lg:flex-nowrap items-center justify-center
          gap-[10px] sm:gap-[16px] lg:gap-[42px]
          w-full lg:w-[622px] h-auto lg:h-[225px]
        "
      >
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
        w-[30%] sm:w-[32%] md:w-[160px] lg:w-[179.33px]
        h-[90px] sm:h-[110px] md:h-[130px] lg:h-[143px]
        rounded-[10px]
        bg-[#CAF476]
        px-[10px] py-[14px]
      "
    >
      <span className="font-sfpro text-[12px] sm:text-[14px] lg:text-[16px] font-[400] leading-[100%] text-[#132219] mb-[6px] text-center">
        {title}
      </span>
      <span className="font-sfpro text-[28px] sm:text-[36px] lg:text-[48px] font-[400] text-[#132219] leading-normal text-center">
        {value}
      </span>
    </div>
  );
}
