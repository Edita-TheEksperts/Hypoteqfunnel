"use client";
import Image from "next/image";

export default function Mezzanine() {
  return (
    <>
      {/* =======================
          SECTION 1: HERO
      ======================= */}
      <section
        className="relative w-full min-h-screen text-[#132219] font-sfpro overflow-hidden flex items-center py-[60px] sm:py-[80px] md:py-[100px]"
        style={{
          backgroundImage: "url('/images/098.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-10 gap-[40px] lg:gap-[80px]">
          <div className="w-full lg:w-[50%] flex flex-col text-left">
            <h1
              className="font-[500] text-[32px] sm:text-[44px] md:text-[64px] lg:text-[72px] leading-[100%] tracking-[-0.72px]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              Mezzanine- <br />Finanzierung
            </h1>

            <p
              className="mt-[30px] sm:mt-[50px] md:mt-[95px] text-[16px] sm:text-[18px] md:text-[24px] text-[#132219] leading-[150%] max-w-[900px] font-[300] tracking-[0.01em]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
              }}
            >
              Flexible capital between debt and equity—for projects that need to
              move now. It fills the equity gap when senior debt is maxed,
              preserves ownership, and unlocks fast execution with tailored
              terms designed for development, acquisitions, and expansions.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          SECTION 2: DETAILS
      ======================= */}
      <section className="w-full bg-white flex flex-col items-center py-[60px] sm:py-[80px] md:py-[120px] px-6 sm:px-10 md:px-[118px] text-[#132219] font-['SF Pro Display']">
        {/* SECTION 1 — What is Mezzanine Financing */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1504px] gap-[60px] md:gap-[199px] mb-[60px] md:mb-[120px]">
          <div className="max-w-full md:max-w-[536px] text-center md:text-left">
            <h2
              className="text-[24px] sm:text-[28px] md:text-[36px] font-[500] leading-[140%] mb-[20px]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              What is Mezzanine Financing
            </h2>

            <p
              className="text-[16px] sm:text-[18px] md:text-[24px] font-[300] leading-[150%]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              A flexible layer of capital that sits between senior debt and
              equity. It’s usually subordinated to the bank loan and repaid
              before shareholders, combining interest with potential
              profit-sharing—so projects close without giving up full ownership.
            </p>
          </div>

          <div className="w-full sm:w-[420px] md:w-[538px] h-auto flex items-center justify-center">
            <img
              src="/images/s2.png"
              alt="Mezzanine Financing Graph"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* SECTION 2 — When to Use It */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1504px] gap-[60px] md:gap-[199px] mb-[60px] md:mb-[120px]">
          <div className="max-w-full md:max-w-[536px] order-2 md:order-1 text-center md:text-left">
            <h2
              className="text-[24px] sm:text-[28px] md:text-[36px] font-[500] leading-[140%] mb-[20px]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              When to Use It
            </h2>

            <p
              className="text-[16px] sm:text-[18px] md:text-[24px] font-[300] leading-[150%]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              Ideal to fill the equity gap in real-estate development,
              acquisitions, expansions, or recapitalizations. Use mezzanine when
              bank leverage is maxed out, timelines are tight, or you want to
              preserve equity while still moving the deal forward.
            </p>
          </div>

          <div className="w-full sm:w-[420px] md:w-[538px] h-auto flex items-center justify-center order-1 md:order-2">
            <img
              src="/images/s1.png"
              alt="When to Use It Graph"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* SECTION 3 — How It’s Structured */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1504px] gap-[60px] md:gap-[199px]">
          <div className="max-w-full md:max-w-[536px] text-center md:text-left">
            <h2
              className="text-[24px] sm:text-[28px] md:text-[36px] font-[500] leading-[140%] mb-[20px]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              How It’s Structured
            </h2>

            <p
              className="text-[16px] sm:text-[18px] md:text-[24px] font-[300] leading-[150%]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              Structured as subordinated debt (often unsecured or second-lien)
              with returns via cash interest, PIK interest, and/or warrants.
              Common features include 2–5 year tenor, intercreditor agreement
              with the senior lender, light amortization or bullet repayment,
              covenants, and early-repayment provisions.
            </p>
          </div>

          <div className="w-full sm:w-[420px] md:w-[538px] h-auto flex items-center justify-center">
            <img
              src="/images/s3.png"
              alt="Structure Graph"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* CTA BANNER */}
        <section
          className="relative mt-[80px] md:mt-[120px] w-full rounded-[10px] overflow-hidden 
                     flex flex-col md:flex-row items-center justify-between gap-[24px] md:gap-0 px-6 sm:px-[40px] md:px-[60px] py-[40px] text-white text-center md:text-left"
          style={{
            background: "url('/images/0101.png') center/cover no-repeat, #132219",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex flex-col items-center md:items-start justify-center gap-[20px] max-w-[640px] w-full">
            <p
              className="text-[#CAF476] text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] font-[400]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
              }}
            >
              Talk to a Hypoteq expert for a{" "}
              <span className="font-[600]">15-minute consultation</span>
              <br className="hidden md:block" />
              to get personalized guidance on financing options.
            </p>

            <button
              className="px-[22px] py-[10px] bg-[#CAF476] text-[#132219] text-[14px] font-[500] 
                         rounded-full hover:bg-[#D6FA8A] transition-all"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
              }}
            >
              Book your call
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
