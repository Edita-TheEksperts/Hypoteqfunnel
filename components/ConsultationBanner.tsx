"use client";
import React from "react";

const ConsultationBanner: React.FC = () => {
  return (
    <section
      className="relative w-[1273px] h-[278px] rounded-[10px] mt-[100px] mb-[100px] overflow-hidden mx-auto 
                 flex items-center px-[60px] text-white"
      style={{
        background:
          "url('/images/0101.png') center/cover no-repeat, #132219",
      }}
    >
      {/* Overlay (opsionale për kontrast) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center gap-[20px]">
        <p className="text-[#CAF476] text-[20px] leading-[140%] font-[400] font-['SF Pro Display'] max-w-[640px]">
          Talk to a Hypoteq expert for a{" "}
          <span className="font-[600]">15-minute consultation</span>
          <br />
          to get personalized guidance on financing options.
        </p>

        <button
          className="px-[22px] py-[10px] bg-[#CAF476] text-[#132219] text-[14px] font-[500] 
                     rounded-full hover:bg-[#D6FA8A] transition-all"
        >
          Book your call
        </button>
      </div>
    </section>
  );
};

export default ConsultationBanner;
