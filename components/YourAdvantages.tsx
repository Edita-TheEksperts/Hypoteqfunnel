"use client";
import React, { useState } from "react";

const AdvantageCard = ({
  title,
  text,
  highlight,
  active,
  onClick
}: {
  title: string;
  text: React.ReactNode;
  highlight?: boolean;
  active: boolean;
  onClick: () => void;
}) => {
  const greenBG = "linear-gradient(270deg,#CAF476 0%,#E3F4BF 100%)";

  return (
    <div
      onClick={onClick}
      className={`
        rounded-[10px] 
        flex flex-col items-start 
        cursor-pointer transition-all duration-200 
        w-full bg-[#F6F6F6]
        p-[20px] justify-start
        lg:p-[24px] lg:min-h-0 lg:justify-between
        ${highlight ? "lg:w-[630px]" : ""} lg:h-[286px]

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
  <section
  className="
    w-full flex flex-col items-center bg-white 
    pt-[80px]
    font-[var(--font-sfpro)] px-[16px]
    mt-[48px] md:mt-[120px]
  "
>

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
              active={activeIndex === 0}
              onClick={() => setActiveIndex(0)}
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
            "
            style={{
              background:
                activeIndex === 1
                  ? "linear-gradient(270deg,#CAF476 0%,#E3F4BF 100%)"
                  : "#F6F6F6",
            }}
            onMouseEnter={(e) => {
              if (activeIndex !== 1)
                e.currentTarget.style.background = "rgba(202,244,118,0.5)";
            }}
            onMouseLeave={(e) => {
              if (activeIndex !== 1)
                e.currentTarget.style.background = "#F6F6F6";
            }}
            onClick={() => setActiveIndex(1)}
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
              active={activeIndex === 2}
              onClick={() => setActiveIndex(2)}
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
              active={activeIndex === 3}
              onClick={() => setActiveIndex(3)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourAdvantages;
