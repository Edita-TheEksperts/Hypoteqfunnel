"use client";
import React from "react";

export default function HomeEvaluation() {
  return (
    <section
      className="relative bg-no-repeat text-white px-6 md:px-[118px] py-[48px] md:py-[60px]"
      style={{
        backgroundImage: "url('/images/vV_.png')",
        backgroundSize: "115%",
        backgroundPosition: "30% center",
      }}
    >
      {/* Text content */}
      <div className="max-w-[700px]">
<h1
  className="font-['SF Pro Display'] text-[#132219] text-[40px] md:text-[56px] font-[500] leading-[140%] tracking-[-0.4px] mb-3"
  style={{
    fontStyle: "normal",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  }}
>
  Home Evaluation
</h1>


   <p
  className="font-['SF Pro Display'] text-[#132219] text-[20px] font-[200] leading-[140%] mb-8 self-stretch"
  style={{
    fontStyle: "normal",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  }}
>
  Find out what your home could be worth today. Our smart valuation tool
  compares local listings and market data to give you an instant estimate.
</p>


        <button className="bg-[#132219] hover:bg-[#1C2B1F] text-white text-[20px] font-normal rounded-full px-[24px] py-[8px] w-[328px] h-[40px] flex items-center justify-center transition">
          Enter your address
        </button>
      </div>

      {/* Steps section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[110px] text-[#132219]">
        {/* Step 1 */}
        <Step
  icon={
    <img
      src="/images/Lokacion.svg"
      alt="Location Icon"
      width={49}
      height={68}
      style={{ flexShrink: 0 }}
    />
  }

          title="Address Lookup"
          text="Type your street and number; we auto-complete and pinpoint your exact property."
        />

        {/* Step 2 */}
        <Step
          icon={
           <img
      src="/images/Shpia.svg"
      alt="Location Icon"
      width={49}
      height={68}
      style={{ flexShrink: 0 }}
    />
          }
          title="Property match"
          text="We confirm parcel, unit, and living area from official records and maps."
        />

        {/* Step 3 */}
        <Step
          icon={
                <img
      src="/images/ShpiPare.svg"
      alt="Location Icon"
      width={54}
      height={68}
      style={{ flexShrink: 0 }}
    />
          }
          title="Market comps"
          text="Recent nearby sales and active listings with similar size and features."
        />

        {/* Step 4 */}
        <Step
          icon={
                 <img
      src="/images/Faktura.svg"
      alt="Location Icon"
      width={39}
      height={68}
      style={{ flexShrink: 0 }}
    />
          }
          title="Instant estimate"
          text="We combine comps with local trends to calculate today's value range."
        />
      </div>
    </section>
  );
}

// ✅ FIXED: Add proper TypeScript types for the props
interface StepProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}
function Step({ icon, title, text }: StepProps) {
  return (
    <div className="flex flex-col items-start text-left p-4 max-w-[250px]">
<div className="mb-[19px] min-h-[68px] flex items-center">{icon}</div>

<h3
  className="font-['SF Pro Display'] text-[#132219] font-[600] text-[20px] leading-[140%] tracking-[-0.4px] mb-[30px]"
  style={{
    fontStyle: "normal",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  }}
>
  {title}
</h3>



<p className="font-['SF Pro Display'] text-[16px] font-[300] leading-[140%] text-[#132219]">
  {text}
</p>

    </div>
  );
}
