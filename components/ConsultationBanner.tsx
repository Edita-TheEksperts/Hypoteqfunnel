"use client";
import React from "react";

const ConsultationBanner: React.FC = () => {
  return (
    <section
      className="
        relative w-[1273px] h-[278px] rounded-[10px] mt-[100px] mb-[100px] overflow-hidden mx-auto 
        flex items-center px-[60px] text-white

        /* MOBILE FIXES */
        max-lg:w-full max-lg:h-auto max-lg:px-[24px] max-lg:py-[80px]
        max-lg:rounded-none max-lg:flex-col max-lg:items-start
      "
      style={{
        background:
          "url('/images/0101.png') center/cover no-repeat, #132219",
      }}
    >
      {/* Overlay — nuk prek ngjyrën */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-between gap-[20px] w-full">
        
<p
  className="
    text-[#CAF476]
    font-['SF Pro Display']
    font-[400]
    text-[32px]
    leading-[140%]
    tracking-[-0.32px]
    w-[717px]

    /* MOBILE */
    max-lg:w-full
    max-lg:text-[28px]
    max-lg:leading-[140%]
  "
>
  Talk to a Hypoteq expert for a{" "}
  <span className="font-[600] tracking-[-0.32px]">15-minute consultation</span>
  <br />
  to get personalized guidance on financing options.
</p>
<button
  className="
    bg-[#CAF476]
    text-[#132219]
    font-['SF Pro Display']
    font-[600]
    text-[20px]
    leading-[normal]
    tracking-[-0.2px]

    px-[20px] 
    py-[8px]
    rounded-full
    border border-black

    hover:bg-[#D6FA8A]
    transition-all
    flex items-center justify-center

    /* Mobile — e bëjmë pak më të vogël */
    max-lg:text-[18px]
    max-lg:px-[18px]
    max-lg:py-[7px]
  "
>
  Book your call
</button>


      </div>
    </section>
  );
};

export default ConsultationBanner;
