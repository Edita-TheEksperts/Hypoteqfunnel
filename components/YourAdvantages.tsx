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
      className={`rounded-[10px] flex flex-col justify-between items-start p-[24px]
      cursor-pointer transition-all duration-200
      border-[2px] border-[#132219] w-full
      ${highlight ? "lg:w-[630px] lg:h-[296px]" : "h-[286px]"}
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
      <h3 className="text-[28px] lg:text-[36px] font-[400] text-[#3D3D3D] leading-[130%] font-[SF Pro Display]">
        {title}
      </h3>

      {text && (
        <p className="text-[16px] lg:text-[20px] font-[300] text-[#3D3D3D] leading-[150%] font-[SF Pro Display]">
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

      {/* Content Container */}
      <div className="w-full lg:w-[1274px] flex flex-col gap-[24px] mb-[60px]">

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="lg:w-[810px] w-full">
            <AdvantageCard
              title="Direct path to the best offer"
              text={
                <>
                  You expect fast and reliable results — and we make them happen.
                  With HYPOTEQ, your mortgage search becomes simple and transparent...
                </>
              }
            />
          </div>

          {/* Small card */}
          <div
            className="w-full lg:w-[446px] flex justify-center items-center rounded-[10px] h-[200px] lg:h-[286px] p-[24px]
            cursor-pointer transition-all duration-200 border-[2px] border-[#132219] bg-[#F6F6F6]"
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(202,244,118,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#F6F6F6")}
            onClick={(e) => (e.currentTarget.style.background = "linear-gradient(270deg,#CAF476 0%,#E3F4BF 100%)")}
          >
            <h3 className="text-[32px] lg:text-[40px] font-[500] text-[#3D3D3D] text-center font-[SF Pro Display] leading-normal">
              Easy <br /> Ownership
            </h3>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="flex-1">
            <AdvantageCard
              title="More choice, better rates"
              text={
                <>
                  Compare offers from multiple partners side-by-side to secure
                  the terms that fit your budget.
                </>
              }
            />
          </div>

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

      {/* CTA Banner */}
      <div className="relative w-full lg:w-[1275px] h-auto lg:h-[197px] rounded-[10px] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-[24px] gap-[20px]
      bg-[linear-gradient(90deg,#FFF4DE_0%,#FCEAC5_100%)]">

        {/* Text */}
        <div className="flex flex-col justify-start items-start gap-[14px] z-10 w-full lg:w-[536px]">
          <h3 className="text-[#132219] text-[22px] lg:text-[28px] font-[600] leading-[130%] font-[SF Pro Display]">
            Start your process now!
          </h3>
          <p className="text-[#132219] text-[14px] lg:text-[16px] font-[400] leading-[150%] font-[SF Pro Display]">
            Compare lenders, rates, and terms in a guided three-click flow.<br />
            See your monthly cost upfront and choose the offer that fits.
          </p>
        </div>

        {/* Button */}
        <button className="bg-white rounded-full px-[24px] py-[10px] text-[18px] font-[600] text-[#132219] shadow-md hover:scale-[1.03] transition-transform z-10 w-full sm:w-auto text-center">
          Start now
        </button>

        {/* BG image */}
        <img
          src="/images/123.png"
          alt="House background"
          className="absolute top-0 right-0 w-full h-full object-cover opacity-40 lg:opacity-100"
        />
      </div>

    </section>
  );
};

export default YourAdvantages;
