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
            text-[#CAF476] text-[20px] leading-[140%] font-[400] font-['SF Pro Display'] max-w-[640px]

            /* MOBILE — vetëm e bëjmë më të madh, ngjyra & fonti njëjtë */
            max-lg:text-[32px] max-lg:leading-[140%]
          "
        >
          Talk to a Hypoteq expert for a{" "}
          <span className="font-[600]">15-minute consultation</span>
          <br />
          to get personalized guidance on financing options.
        </p>

        <button
          className="
            px-[22px] py-[10px] bg-[#CAF476] text-[#132219] text-[14px] font-[500] 
            rounded-full hover:bg-[#D6FA8A] transition-all

            /* MOBILE — thjesht më i madh, ngjyra/teksti nuk preken */
            max-lg:px-[26px] max-lg:py-[14px] max-lg:text-[16px]
            max-lg:rounded-[58px]
          "
        >
          Book your call
        </button>
      </div>
    </section>
  );
};

export default ConsultationBanner;
