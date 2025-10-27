"use client";
import React from "react";

export default function BestChoices() {
  return (
    <section
      className="flex justify-between items-start w-[1272px] p-[24px] mx-auto rounded-[10px] mt-[120px] mb-[120px] border border-black"
      style={{
        background: "var(--Secondary-Color, #132219)",
      }}
    >
      {/* Left Column */}
      <div className="flex flex-col font-sfpro gap-[50px] text-white">
        <h2 className="font-sfpro text-[36px] font-[500] leading-[120%] text-[var(--White,#FFF)] mb-[24px] not-italic">
          HYPOTEQ’s <br /> best choices
        </h2>
<p className="font-sfpro text-[20px] font-[300] leading-[140%] text-[var(--White,#FFF)] w-[511px]">
  Find out what your home could be worth today. Our smart valuation tool
  compares local listings and market data to give you an instant estimate.
</p>

      </div>

      {/* Right Column */}
      <div className="grid grid-cols-2 gap-[24px]">
        <RateCard title="Saron" value="0.86%" />
        <RateCard title="5 Years" value="0.99%" />
        <RateCard title="10 Years" value="1.59%" />
        <RateCard title="15 Years" value="1.79%" />
      </div>
    </section>
  );
}

/* ✅ Figma-perfect Rate Card */
function RateCard({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="flex flex-col justify-center items-center w-[303px] px-[32px] py-[16px] rounded-[10px]"
      style={{
        background: "var(--Main-Color, #CAF476)",
      }}
    >
      {/* Title */}
      <span className="font-sfpro text-[16px] font-[400] leading-[100%] text-[var(--Secondary-Color,#132219)] self-stretch text-left mb-[8px] not-italic">
        {title}
      </span>

      {/* Value */}
      <span className="font-sfpro text-[64px] font-[400] leading-none text-[#132219] self-stretch text-left not-italic">
        {value}
      </span>
    </div>
  );
}
