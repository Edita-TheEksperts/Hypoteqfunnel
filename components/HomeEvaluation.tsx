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
      "
      style={{
        backgroundImage: "url('/images/vV_.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="max-w-[720px]">
        <h1
          className="
            font-['SF Pro Display'] text-[#132219]
            text-[32px] sm:text-[42px] md:text-[56px]
            font-[600]
            leading-[120%] md:leading-[130%]
            tracking-[-0.6px]
            mb-4 sm:mb-5
          "
        >
          Home Evaluation
        </h1>

        <p
          className="
            font-['SF Pro Display'] text-[#132219]
            text-[16px] sm:text-[18px] md:text-[20px]
            leading-[150%] font-[300]
            max-w-[92%] md:max-w-none
            mb-6 sm:mb-8
          "
        >
          Find out what your home could be worth today. Our smart valuation tool
          compares local listings and market data to give you an instant estimate.
        </p>

<button
  className="
    bg-[#132219] hover:bg-[#1C2B1F] text-white
    rounded-[58px] font-medium

    text-[14px]           /* MOBILE FONT */
    sm:text-[18px]        /* DESKTOP FONT */

    px-[24px] py-[8px]    /* MOBILE PADDING: (8px top/bottom, 24px left/right) */
    sm:px-6 sm:py-3       /* DESKTOP PADDING */

    w-auto                /* MOBILE WIDTH: not full */
    sm:w-[300px] md:w-[328px]  /* DESKTOP WIDTH */

    duration-200 shadow-[0_6px_20px_rgba(0,0,0,0.15)]
    flex items-center justify-center gap-[10px]
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
          font-['SF Pro Display'] text-[#132219]
          font-[600]
          text-[16px] sm:text-[20px]
          leading-[130%]
          mb-2
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
