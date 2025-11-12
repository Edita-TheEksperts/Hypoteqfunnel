"use client";
import React from "react";

export default function HypoZinsSection() {
  return (
    <section className="w-screen bg-[#CAF476] flex justify-center">
      {/* Inner container */}
      <div className="w-full max-w-[1504px] flex flex-col justify-center items-center py-[60px] sm:py-[80px] px-[20px] sm:px-[40px] md:px-[115px] gap-[40px] sm:gap-[48px] text-[#132219] font-['SF Pro Display']">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-[40px] sm:gap-[80px] md:gap-[201px]">
          {/* Left Side */}
          <div className="flex flex-col w-full md:w-[536px]">
            <h2
              className="text-[#132219] font-[500] text-[32px] sm:text-[40px] md:text-[48px] leading-[110%] md:leading-[100%] tracking-[-0.48px]"
              style={{ fontFamily: "SF Pro Display" }}
            >
              Hypo-Zins berechnen?
            </h2>
            <p
              className="mt-[16px] sm:mt-[20px] md:mt-[24px] text-[#132219] font-[500] text-[16px] sm:text-[20px] md:text-[24px] leading-[150%]"
              style={{ fontFamily: "SF Pro Display" }}
            >
              Bist du immer noch unsicher und willst wissen, was drin liegt? Dann
              füll einfach kurz das Formular aus und wir melden uns.
            </p>
          </div>

          {/* Right Side Form */}
          <form className="flex flex-col w-full md:w-[756px] gap-[16px] sm:gap-[20px] md:gap-[30px]">
            {/* First row */}
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <input
                type="text"
                placeholder="Vorname"
                className="flex-1 bg-[#CAF476] px-[20px] py-[8px] sm:px-[24px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[14px] sm:placeholder:text-[16px]"
              />
              <input
                type="text"
                placeholder="Nachname"
                className="flex-1 bg-[#CAF476] px-[20px] py-[8px] sm:px-[24px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[14px] sm:placeholder:text-[16px]"
              />
            </div>

            {/* Second row */}
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <input
                type="text"
                placeholder="Telefon"
                className="flex-1 bg-[#CAF476] px-[20px] py-[8px] sm:px-[24px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[14px] sm:placeholder:text-[16px]"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="flex-1 bg-[#CAF476] px-[20px] py-[8px] sm:px-[24px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[14px] sm:placeholder:text-[16px]"
              />
            </div>

            {/* Third row */}
            <input
              type="text"
              placeholder="Art der Hypothek"
              className="w-full bg-[#CAF476] px-[20px] py-[8px] sm:px-[24px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[14px] sm:placeholder:text-[16px]"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="self-center sm:self-end px-[20px] sm:px-[24px] py-[8px] rounded-[58px] border border-[#132219] bg-[#132219] text-[#CAF476] font-[600] text-[14px] sm:text-[16px] hover:bg-[#243b2d] transition-all h-[42px] sm:h-[46px] flex items-center justify-center"
              style={{
                fontFamily: "SF Pro Display",
              }}
            >
              Send
            </button>
          </form>
        </div>

        {/* Bottom Info */}
        <div
          className="w-full flex flex-col sm:flex-row justify-center md:justify-between items-center gap-[16px] sm:gap-[20px]"
          style={{
            fontFamily: "SF Pro Display",
            fontSize: "16px",
            sm: { fontSize: "20px" },
            md: { fontSize: "24px" },
            fontWeight: 400,
            lineHeight: "140%",
            color: "#132219",
          }}
        >
          <div className="flex items-center gap-[16px] sm:gap-[24px]">
            <span className="text-[#132219] text-[22px] sm:text-[26px] md:text-[28px] leading-none">✔</span>
            Zins berechnen
          </div>
          <div className="flex items-center gap-[16px] sm:gap-[24px]">
            <span className="text-[#132219] text-[22px] sm:text-[26px] md:text-[28px] leading-none">✔</span>
            Keine Verpflichtung
          </div>
          <div className="flex items-center gap-[16px] sm:gap-[24px]">
            <span className="text-[#132219] text-[22px] sm:text-[26px] md:text-[28px] leading-none">✔</span>
            Antwort in wenigen Stunden
          </div>
        </div>
      </div>
    </section>
  );
}
