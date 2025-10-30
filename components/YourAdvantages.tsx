"use client";
import React, { useState } from "react";

const AdvantageCard = ({
  title,
  text,
  highlight,
}: {
  title: string;
  text: React.ReactNode;
  highlight?: boolean;
}) => {
  const [active, setActive] = useState(false);
  const greenBG = "linear-gradient(270deg,#CAF476 0%,#E3F4BF 100%)";

  return (
    <div
      onClick={() => setActive(true)}
      className={`
        rounded-[10px] 
        flex flex-col items-start 
        cursor-pointer transition-all duration-200 
        w-full bg-[#F6F6F6]
        p-[20px] justify-start
        lg:p-[24px] lg:min-h-0 lg:justify-between
        ${highlight ? "lg:w-[630px] lg:h-[296px]" : "lg:h-[286px]"}
      `}
      style={{
        background: active ? greenBG : "#F6F6F6",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.background = "rgba(202,244,118,0.5)";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.background = "#F6F6F6";
      }}
    >
      <h3
        className="
          text-[32px] lg:text-[36px] 
          font-[500] text-[#3D3D3D] 
          leading-[130%] 
          font-[SF Pro Display]
          mb-[12px]
        "
      >
        {title}
      </h3>

      {text && (
        <p
          className="
            text-[18px] lg:text-[20px] 
            font-[300] text-[#3D3D3D] 
            leading-[150%] 
            font-[SF Pro Display]
          "
        >
          {text}
        </p>
      )}
    </div>
  );
};

const YourAdvantages: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white pt-[80px] pb-[100px] font-[var(--font-sfpro)] px-[16px]">

      <h2 className="w-full lg:w-[1274px] text-left text-[32px] lg:text-[40px] font-[500] leading-[56px] text-[#132219] mb-[40px] font-[SF Pro Display]">
        Your Advantages
      </h2>

      <div className="w-full lg:w-[1274px] flex flex-col gap-[24px] mb-[60px]">

        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="lg:w-[810px] w-full">
            <AdvantageCard
              title="Direct path to the best offer"
              text={
                <>
                  You expect fast and reliable results — and we make them happen.
                  With HYOPTEQ, your mortgage search becomes simple and transparent.
                  Within a few clicks, you’ll receive a tailored financing offer
                  that fits your goals and budget. Our smart digital tools and
                  trusted partners ensure you get the best offer — quickly,
                  securely, and without unnecessary detours.
                </>
              }
            />
          </div>

          <div
            className="
              w-full lg:w-[446px] 
              flex items-start lg:items-center justify-start lg:justify-center
              rounded-[10px]
              h-auto min-h-[140px] lg:h-[286px]
              p-[22px]
              cursor-pointer transition-all duration-200 
              bg-[#F6F6F6]
            "
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(202,244,118,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#F6F6F6')}
            onClick={(e) => (e.currentTarget.style.background = 'linear-gradient(270deg,#CAF476 0%,#E3F4BF 100%)')}
          >
            <h3 className="text-[32px] lg:text-[40px] font-[500] text-[#3D3D3D] leading-[120%] font-[SF Pro Display] text-left">
              Easy <br /> Ownership
            </h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="w-full lg:flex-1">
            <AdvantageCard
              title="More choice, better rates"
              text={
                <>
                  <span className="block lg:hidden">
                    Compare offers easily and choose the best fit for your budget.
                  </span>
                  <span className="hidden lg:block">
                    Compare offers from multiple partners side-by-side to secure
                    the terms that fit your budget.
                  </span>
                </>
              }
            />
          </div>

          <div className="w-full lg:flex-1">
            <AdvantageCard
              title="Transparency"
              text={
                <>
                  With HYPOTEQ, you enjoy full transparency and fair offers — without window interest rates.
                </>
              }
              highlight
            />
          </div>
        </div>
      </div>

{/* ✅ ORIGINAL CTA BANNER RESTORED */}
<section
  className="
    relative w-full lg:w-[1273px] h-[278px] rounded-[10px] mt-[80px] 
    overflow-hidden mx-auto flex items-center px-[60px] text-white

    hidden max-lg:hidden lg:flex  /* ✅ KJO LINJË E BËN HIDE NË MOBILE */
  "
  style={{
    background: "url('/images/0101.png') center/cover no-repeat,#132219",
  }}
>
  <div className="absolute inset-0 bg-black/10" />

  <div className="relative z-10 flex flex-col items-start justify-center gap-[20px]">
    <p className="text-[#CAF476] text-[20px] leading-[140%] font-[400] font-['SF Pro Display'] max-w-[640px]">
      Talk to a Hypoteq expert for a <span className="font-[600]">15-minute consultation</span><br />
      to get personalized guidance on financing options.
    </p>

    <button
      className="px-[22px] py-[10px] bg-[#CAF476] text-[#132219] text-[14px] font-[500] rounded-full hover:bg-[#D6FA8A] transition-all"
    >
      Book your call
    </button>
  </div>
</section>

    </section>
  );
};

export default YourAdvantages;
