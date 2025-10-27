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
            ? "border-[2px] border-[#132219] bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)] h-[296px] w-[630px]"
            : "bg-[#F6F6F6] h-[286px]"
        } p-[24px]`}
    >
      <h3 className="text-[40px] font-[500] text-[#3D3D3D] leading-normal font-['SF Pro Display']">
        {title}
      </h3>
      {text && (
        <p className="text-[14px] font-[400] text-[#3D3D3D] leading-normal font-['SF Pro Rounded'] max-w-[757px]">
          {text}
        </p>
      )}
    </div>
  );
};

const YourAdvantages: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white pt-[100px] pb-[120px] font-[var(--font-sfpro)]">
      {/* Section Title */}
      <h2 className="w-[1274px] text-left text-[40px] font-[500] leading-[56px] tracking-[-0.4px] text-[#132219] mb-[56px] font-['SF Pro Display']">
        Your Advantages
      </h2>

      {/* Grid Layout */}
      <div className="w-[1274px] flex flex-col gap-[24px] mb-[80px]">
        {/* Row 1 */}
        <div className="flex gap-[24px]">
          <div className="w-[810px]">
            <AdvantageCard
              title="Direct path to the best offer"
              text={
                <>
                  You expect fast and reliable results—and we make them happen.
                  With HYOPTEQ, your mortgage search becomes simple and
                  transparent. Within a few clicks, you’ll receive a tailored
                  financing offer that fits your goals and budget. Our smart
                  digital tools and trusted partners ensure you get the best
                  offer—quickly, securely, and without unnecessary detours.
                </>
              }
            />
          </div>
          <div className="w-[446px] flex justify-center items-center bg-[#F6F6F6] rounded-[10px] h-[286px] p-[24px_16px]">
            <h3 className="text-[40px] font-[500] text-[#3D3D3D] text-center font-['SF Pro Display'] leading-normal">
              Easy <br /> Ownership
            </h3>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-[24px]">
          <div className="flex-1">
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
                With HYOPTEQ, you enjoy full transparency and fair <br /> offers—without
                window interest rates.
              </>
            }
            highlight
          />
        </div>
      </div>

      {/* ✅ CTA Banner (correct text sizes) */}
 <div className="relative w-[1275px] h-[197px] rounded-[10px] overflow-hidden flex items-center p-[24px] bg-[linear-gradient(90deg,#FFF4DE_0%,#FCEAC5_100%)]">
  {/* Left content wrapper */}
  <div className="flex flex-col justify-start items-start w-[536px] h-[147px] gap-[19px] z-10">
    <h3 className="text-[#132219] text-[28px] font-[600] leading-[130%] font-['SF Pro Display']">
      Start your process now!
    </h3>
    <p className="text-[#132219] text-[16px] font-[400] leading-[150%] opacity-90 font-['SF Pro Display']">
      Compare lenders, rates, and terms in a guided three-click flow. <br />
      See your monthly cost upfront and choose the offer that fits.
    </p>
  </div>

  {/* Button aligned over image */}
  <button className="absolute right-[24px] bg-white rounded-full px-[24px] py-[8px] text-[20px] font-[600] text-[#132219] font-['SF Pro Display'] shadow-[0_0_8px_rgba(0,0,0,0.05)] hover:scale-[1.03] transition-transform z-10">
    Start now
  </button>

  {/* Background image */}
  <img
    src="/images/123.png"
    alt="House background"
    className="absolute top-0 right-0 w-full h-full object-cover rounded-[10px]"
  />
</div>

    </section>
  );
};

export default YourAdvantages;
