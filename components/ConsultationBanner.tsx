"use client";
import React from "react";

const ConsultationBanner: React.FC = () => {
  return (
    <section
      className="
        relative rounded-[10px] mt-[100px] mb-[100px] overflow-hidden mx-auto 
        flex items-center px-[60px] text-white
        w-[1273px] h-[278px]

        max-lg:w-full max-lg:h-auto max-lg:px-5 max-lg:py-10
      "
      style={{
        background: "url('/images/0101.png') center/cover no-repeat, #132219",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div
        className="
          relative z-10 flex flex-col items-start gap-[20px]
          max-lg:items-center max-lg:text-center max-lg:w-full
        "
      >
        <p
          className="
            text-[#CAF476] text-[20px] leading-[140%] font-[400] font-['SF Pro Display'] max-w-[640px]
            max-lg:max-w-full max-lg:text-[18px]
          "
        >
          Talk to a Hypoteq expert for a{" "}
          <span className="font-[600]">15-minute consultation</span>
          <br className="max-lg:hidden" />
          to get personalized guidance on financing options.
        </p>

        <div className="max-lg:flex max-lg:justify-center max-lg:w-full">
          <button
            className="
              px-[22px] py-[10px] bg-[#CAF476] text-[#132219] text-[14px] font-[500]
              rounded-full hover:bg-[#D6FA8A] transition-all
              max-lg:mx-auto
            "
          >
            Book your call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
