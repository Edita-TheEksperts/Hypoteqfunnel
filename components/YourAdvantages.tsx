"use client";
import React from "react";

const AdvantageCard = ({
  title,
  text,
  highlight,
}: {
  title: string;
  text: React.ReactNode;
  highlight?: boolean;
}) => {
  return (
    <div
      className={`rounded-[10px] flex flex-col justify-between items-start 
        ${
          highlight
            ? "border-[2px] border-[#132219] bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)] lg:h-[296px] lg:w-[630px]"
            : "bg-[#F6F6F6] lg:h-[286px]"
        } p-[24px] w-full`}
    >
      <h3 className="text-[24px] lg:text-[36px] font-[400] text-[#3D3D3D] leading-[130%] font-['SF Pro Display']">
        {title}
      </h3>

      {text && (
        <p
          className="text-[16px] lg:text-[20px] font-[300] text-[#3D3D3D] leading-[140%] font-['SF Pro Display'] max-w-[757px]"
          style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}
        >
          {text}
        </p>
      )}
    </div>
  );
};

const YourAdvantages: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white pt-[60px] lg:pt-[100px] pb-[80px] lg:pb-[120px] font-[var(--font-sfpro)]">

      {/* Title */}
      <h2 className="max-w-[1274px] w-full px-4 text-left text-[28px] lg:text-[40px] font-[500] leading-[120%] tracking-[-0.4px] text-[#132219] mb-[32px] lg:mb-[56px] font-['SF Pro Display']">
        Your Advantages
      </h2>

      {/* Grid Container */}
      <div className="max-w-[1274px] w-full px-4 flex flex-col gap-[24px] mb-[60px] lg:mb-[80px]">

        {/* ROW 1 */}
        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="w-full lg:w-[810px]">
            <AdvantageCard
              title="Direct path to the best offer"
              text={
                <>
                  You expect fast and reliable results—and we make them happen.
                  With HYOPTEQ, your mortgage search becomes simple and
                  transparent. Within a few clicks, you’ll receive a tailored
                  financing offer that fits your goals and budget.
                </>
              }
            />
          </div>

          <div className="w-full lg:w-[446px] flex justify-center items-center bg-[#F6F6F6] rounded-[10px] lg:h-[286px] p-[24px_16px] h-[200px]">
            <h3 className="text-[28px] lg:text-[40px] font-[500] text-[#3D3D3D] text-center font-['SF Pro Display'] leading-normal">
              Easy <br /> Ownership
            </h3>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="flex-1 w-full">
            <AdvantageCard
              title="More choice, better rates"
              text={
                <>
                  Compare offers from multiple partners side-by-side <br />
                  to secure the terms that fit your budget.
                </>
              }
            />
          </div>

          <AdvantageCard
            title="Transparency"
            text={
              <>
                With HYOPTEQ, you enjoy full transparency and fair <br /> offers—without window interest rates.
              </>
            }
            highlight
          />
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="relative max-w-[1275px] w-full h-auto lg:h-[197px] rounded-[10px] overflow-hidden flex flex-col lg:flex-row items-start lg:items-center px-[24px] py-[20px] bg-[linear-gradient(90deg,#FFF4DE_0%,#FCEAC5_100%)] mx-4">

        {/* Left */}
        <div className="flex flex-col justify-start items-start w-full lg:w-[536px] gap-[12px] z-10">
          <h3 className="text-[#132219] text-[22px] lg:text-[28px] font-[600] leading-[130%]">
            Start your process now!
          </h3>
          <p className="text-[#132219] text-[14px] lg:text-[16px] font-[400] leading-[150%] opacity-90">
            Compare lenders, rates, and terms in a guided three-click flow.  
            See your monthly cost upfront and choose the offer that fits.
          </p>
        </div>

        {/* Button */}
        <button className="mt-[16px] lg:mt-0 lg:absolute lg:right-[24px] bg-white rounded-full px-[22px] py-[10px] text-[16px] lg:text-[20px] font-[600] text-[#132219] shadow-[0_0_8px_rgba(0,0,0,0.05)] hover:scale-[1.03] transition-transform z-10">
          Start now
        </button>

        {/* BG Image */}
        <img
          src="/images/123.png"
          alt="House background"
          className="absolute top-0 right-0 w-full h-full object-cover opacity-30 lg:opacity-100 rounded-[10px]"
        />
      </div>

    </section>
  );
};

export default YourAdvantages;
