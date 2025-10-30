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
      {/* Content Wrapper */}
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
            font-[300] leading-[150%]
            max-w-[92%] md:max-w-none
            mb-8 sm:mb-10
          "
        >
          Find out what your home could be worth today. Our smart valuation tool
          compares local listings and market data to give you an instant estimate.
        </p>

        <button
          className="
            bg-[#132219] hover:bg-[#1C2B1F]
            text-white 
            text-[16px] sm:text-[18px]
            font-medium rounded-full 
            px-6 py-3
            w-full sm:w-[300px] md:w-[328px]
            duration-200
            shadow-[0_6px_20px_rgba(0,0,0,0.15)]
          "
        >
          Enter your address
        </button>
      </div>

      {/* STEPS */}
      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-10 sm:gap-12 md:gap-[32px]
          mt-[70px] md:mt-[120px]
          text-[#132219]
          place-items-start
        "
      >
        <Step
          icon={<img src="/images/Lokacion.svg" width={49} height={68} alt="" />}
          title="Address Lookup"
          text="Type your street and number; we auto-complete and pinpoint your exact property."
        />
        <Step
          icon={<img src="/images/Shpia.svg" width={49} height={68} alt="" />}
          title="Property match"
          text="We confirm parcel, unit, and living area from official records and maps."
        />
        <Step
          icon={<img src="/images/ShpiPare.svg" width={54} height={68} alt="" />}
          title="Market comps"
          text="Recent sales and active listings with similar size and features."
        />
        <Step
          icon={<img src="/images/Faktura.svg" width={39} height={68} alt="" />}
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
        text-left sm:text-left text-center
        max-w-[270px]
      "
    >
      <div className="mb-5">{icon}</div>

      <h3
        className="
          font-['SF Pro Display'] text-[#132219] 
          font-[600]
          text-[18px] sm:text-[20px] 
          leading-[130%] 
          tracking-[-0.4px]
          mb-3
        "
      >
        {title}
      </h3>

      <p
        className="
          font-['SF Pro Display']
          text-[14px] sm:text-[15px] md:text-[16px] 
          font-[300] leading-[150%]
          text-[#132219]
        "
      >
        {text}
      </p>
    </div>
  );
}
