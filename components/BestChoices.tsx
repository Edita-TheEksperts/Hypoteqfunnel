"use client";
import React from "react";

export default function BestChoices() {
  return (
    <section
      className="
        flex flex-col md:flex-row justify-between items-start 
        w-full max-w-[1272px] mx-auto 
        p-[24px] md:p-[32px] 
        gap-[40px] md:gap-[80px]
        rounded-[10px] mt-[120px] mb-[120px] border border-black
      "
      style={{ background: "var(--Secondary-Color, #132219)" }}
    >
      {/* Left Column */}
      <div className="flex flex-col font-sfpro gap-[24px] text-white max-w-[100%] md:max-w-[500px]">
        <h2 className="font-sfpro text-[28px] md:text-[36px] font-[500] leading-[120%] text-white">
          HYPOTEQ’s <br className="hidden md:block" /> best choices
        </h2>

        <p className="font-['SF Pro Display'] text-[16px] md:text-[20px] font-[200] leading-[150%] text-white">
          Find out what your home could be worth today. Our smart valuation tool
          compares local listings and market data to give you an instant estimate.
        </p>
      </div>

      {/* Right Column */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-[16px] md:gap-[24px] w-full md:w-auto">
        <RateCard title="Saron" value="0.86%" />
        <RateCard title="5 Years" value="0.99%" />
        <RateCard title="10 Years" value="1.59%" />
        <RateCard title="15 Years" value="1.79%" />
      </div>
    </section>
  );
}

/* ✅ Responsive Rate Card */
function RateCard({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="
        flex flex-col justify-center 
        w-full md:w-[303px] 
        px-[24px] md:px-[32px] py-[16px] 
        rounded-[10px]
      "
      style={{ background: "var(--Main-Color, #CAF476)" }}
    >
      <span className="font-sfpro text-[14px] md:text-[16px] font-[400] text-[#132219] mb-[8px]">
        {title}
      </span>

      <span className="font-sfpro text-[40px] md:text-[64px] font-[400] text-[#132219] leading-none">
        {value}
      </span>
    </div>
  );
}
