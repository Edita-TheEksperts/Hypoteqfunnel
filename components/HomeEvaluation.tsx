"use client";
import React from "react";

export default function HomeEvaluation() {
  return (
    <section
      className="
        relative bg-no-repeat text-white 
        px-4 sm:px-8 md:px-[118px]
        py-[60px] md:py-[80px]
        overflow-hidden

        bg-[url('/images/999.png')]
        md:bg-[url('/images/vV_.png')]
        bg-cover bg-center
      "
    >
      {/* Content */}
      <div className="max-w-[720px]">
        <h1
          className="
            font-['SF Pro Display']
            text-[#132219]
            font-[500]
            text-[40px] sm:text-[48px] md:text-[56px]
            leading-[140%]
            tracking-[-0.4px]
            mb-4 sm:mb-5
          "
        >
          Home Evaluation
        </h1>

    <p
  className="
    font-['SF Pro Display']
    text-[#132219]
    font-[300]
    text-[22px] sm:text-[20px]
    leading-[140%]
    max-w-[92%] md:max-w-none
    mb-6 sm:mb-8
  "
>
  Find out what your home could be worth today. Our smart valuation tool
  compares local listings and market data to give you an instant estimate.
</p>


<button
  className="
    bg-[#132219] text-white
    font-['SF Pro Display']
    rounded-[58px]
    flex items-center justify-center
    px-[24px] py-[8px]
    text-[14px] font-[600]
    h-[30px]

    /* Desktop unchanged */
    md:w-[328px] md:h-[40px]
    md:text-[20px] md:font-[500]

    hover:opacity-90 transition
  "
>
  Enter your address
</button>

      </div>

      {/* Steps */}
      <div
        className="
          mt-[70px] md:mt-[120px]
          grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4
          gap-x-[30px] gap-y-[50px]
          text-[#132219]
          place-items-start
        "
      >
        <Step
          icon={<img src="/images/Lokacion.svg" className="w-[49px] h-[68px]" />}
          title="Address Lookup"
          text="Type your street and number; we auto-complete and pinpoint your exact property."
        />
        <Step
          icon={<img src="/images/Shpia.svg" className="w-[49px] h-[68px]" />}
          title="Property match"
          text="We confirm parcel, unit, and living area from official records and maps."
        />
        <Step
          icon={<img src="/images/ShpiPare.svg" className="w-[54px] h-[68px]" />}
          title="Market comps"
          text="Recent sales and active listings with similar size and features."
        />
        <Step
          icon={<img src="/images/Faktura.svg" className="w-[39px] h-[68px]" />}
          title="Instant estimate"
          text="We combine comps with local trends to calculate today's value range."
        />
      </div>
    </section>
  );
}

interface StepProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Step({ icon, title, text }: StepProps) {
  return (
    <div
      className="
        flex flex-col
        sm:items-start items-center
        text-center sm:text-left
        max-w-[167px]
      "
    >
      <div className="mb-4">{icon}</div>

      <h3
        className="
          font-['SF Pro Display']
          text-[20px]
          font-[500]
          leading-[140%]
          text-[#132219]
          mb-5
        "
      >
        {title}
      </h3>

      <p
        className="
          font-['SF Pro Display']
          text-[14px] sm:text-[16px]
          leading-[150%] font-[300]
        "
      >
        {text}
      </p>
    </div>
  );
}
