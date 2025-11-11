"use client";
import React from "react";

export default function HypoZinsSection() {
  return (
    <section className="w-screen bg-[#CAF476] flex justify-center">
      {/* Inner container */}
      <div className="w-full max-w-[1504px] flex flex-col justify-center items-center py-[80px] px-[115px] gap-[48px] text-[#132219] font-['SF Pro Display']">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-[201px]">
          {/* Left Side */}
          <div className="flex flex-col w-full md:w-[536px]">
            <h2
              className="text-[#132219] font-[500]"
              style={{
                width: "536px",
                fontFamily: "SF Pro Display",
                fontSize: "48px",
                lineHeight: "100%",
                letterSpacing: "-0.48px",
              }}
            >
              Hypo-Zins berechnen?
            </h2>
            <p
              className="mt-[24px] text-[#132219] font-[500]"
              style={{
                width: "536px",
                fontFamily: "SF Pro Display",
                fontSize: "24px",
                lineHeight: "140%",
                letterSpacing: "0px",
              }}
            >
              Bist du immer noch unsicher und willst wissen, was drin liegt? Dann
              füll einfach kurz das Formular aus und wir melden uns.
            </p>
          </div>

          {/* Right Side Form */}
          <form className="flex flex-col w-full md:w-[756px] gap-[30px]">
            {/* First row */}
            <div className="flex flex-col md:flex-row gap-[10px]">
              <input
                type="text"
                placeholder="Vorname"
                className="flex-1 bg-[#CAF476] px-[24px] py-[8px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[16px]"
              />
              <input
                type="text"
                placeholder="Nachname"
                className="flex-1 bg-[#CAF476] px-[24px] py-[8px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[16px]"
              />
            </div>

            {/* Second row */}
            <div className="flex flex-col md:flex-row gap-[10px]">
              <input
                type="text"
                placeholder="Telefon"
                className="flex-1 bg-[#CAF476] px-[24px] py-[8px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[16px]"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="flex-1 bg-[#CAF476] px-[24px] py-[8px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[16px]"
              />
            </div>

            {/* Third row */}
            <input
              type="text"
              placeholder="Art der Hypothek"
              className="w-full bg-[#CAF476] px-[24px] py-[8px] rounded-[58px] border border-[#132219] outline-none opacity-70 focus:opacity-100 placeholder-[#132219] placeholder:font-[600] placeholder:text-[16px]"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="self-end px-[24px] py-[8px] rounded-[58px] border border-[#132219] bg-[#132219] text-[#CAF476] font-[600] text-[16px] hover:bg-[#243b2d] transition-all h-[46px] flex items-center justify-center"
              style={{
                fontFamily: "SF Pro Display",
                letterSpacing: "0px",
              }}
            >
              Send
            </button>
          </form>
        </div>

        {/* Bottom Info */}
        <div
          className="w-full flex flex-col md:flex-row justify-between items-center gap-[20px]"
          style={{
            fontFamily: "SF Pro Display",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "140%",
            color: "#132219",
          }}
        >
          <div className="flex items-center gap-[24px]">
            <span className="text-[#132219] text-[28px] leading-none">✔</span>
            Zins berechnen
          </div>
          <div className="flex items-center gap-[24px]">
            <span className="text-[#132219] text-[28px] leading-none">✔</span>
            Keine Verpflichtung
          </div>
          <div className="flex items-center gap-[24px]">
            <span className="text-[#132219] text-[28px] leading-none">✔</span>
            Antwort in wenigen Stunden
          </div>
        </div>
      </div>
    </section>
  );
}
