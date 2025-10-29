"use client";
import Image from "next/image";

export default function Advisory() {
  return (
    <>
      {/* =======================
          SECTION 1: ADVISORY
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
  {/* Background blu si overlay për ngjyrë shtesë */}
  <div className="absolute inset-0" />

  {/* Përmbajtja */}
  <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-10 gap-[40px] lg:gap-[80px]">
    {/* Teksti majtas */}
    <div className="w-full lg:w-[50%] flex flex-col text-left">
      <h1 className="font-[500] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[100%] tracking-[-0.72px]">
        Advisory
      </h1>

      <p
        className="mt-[40px] sm:mt-[70px] md:mt-[95px] text-[18px] sm:text-[20px] md:text-[24px] text-[#132219] leading-[150%] max-w-[900px]"
        style={{
          fontFamily: '"SF Pro Display", sans-serif',
          fontWeight: 100,
          letterSpacing: "0.01em",
        }}
      >
        Buying, refinancing, or building a home shouldn’t feel complicated.
        Our smart platform compares lenders, rates, and terms in real
        time—so you see only what matters. Whether you’re getting your
        first mortgage, optimizing an existing one, or financing new
        construction, we bring clarity, transparency, and human expertise
        to every step.
      </p>
    </div>
  </div>
</section>

      {/* =======================
          SECTION 2: CARDS
      ======================= */}
      <section className="w-full bg-white py-[60px] sm:py-[80px] px-4 sm:px-6 md:px-10 font-sfpro flex flex-col items-center justify-center">
        <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[40px] lg:gap-[48px]">
          {[
            {
              bg: "#CAF476",
              title: "Financing in Retirement",
              text: "Accessing property financing shouldn’t stop once you retire. With changing income structures and long-term financial planning needs, we help design flexible solutions that work even after your active working years. Whether you’re looking to refinance an existing mortgage, purchase a new residence, or unlock equity from your current home, our advisors evaluate your pension income, assets, and future plans to build a sustainable financing model. The goal: financial independence and stability—without compromising your lifestyle or long-term security.",
            },
            {
              bg: "#FFFFFF",
              title: "Large & Complex Investment Properties",
              text: "High-value or multi-unit income properties require more than standard financing—they demand expertise and structured planning. We specialize in securing financing for complex portfolios, mixed-use developments, or large-scale rental buildings with layered ownership or revenue streams. From precise valuation and yield analysis to negotiation with lenders, we coordinate every step to ensure favorable conditions.",
            },
            {
              bg: "#FFFFFF",
              title: "Support After Multiple Bank Rejections",
              text: "A “no” from traditional banks doesn’t have to be the end of your financing journey. Many clients come to us after several rejections due to rigid criteria, unconventional income sources, or project-specific complexities. We analyze your case thoroughly to identify the root cause of the rejection and match you with lenders who think beyond standard credit frameworks. Through our partner network and flexible mezzanine financing, we open new paths to approval.",
            },
            {
              bg: "#FFFFFF",
              title: "Complex Borrower Structures",
              text: "When a transaction involves multiple shareholders, holding companies, or cross-border investors, traditional lending becomes challenging. We simplify this complexity. Our team structures financing solutions that clearly define borrower responsibilities, guarantee arrangements, and repayment flows—making them understandable and acceptable for lenders. Whether managing a joint venture, family office, or multi-entity partnership, we align legal and financial aspects.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`border border-black rounded-[10px] flex flex-col items-start p-[20px] sm:p-[28px_32px_36px_32px] gap-[18px] sm:gap-[24px] md:gap-[32px] h-auto ${
                card.bg === "#CAF476" ? "bg-[#CAF476]" : "bg-white"
              }`}
            >
              <h3 className="text-[#132219] text-[26px] sm:text-[32px] md:text-[40px] font-[500] leading-[130%]">
                {card.title}
              </h3>
              <p className="text-[#132219] text-[16px] sm:text-[18px] md:text-[20px] font-[300] leading-[150%] tracking-[-0.01em]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =======================
          SECTION 3: CTA BANNER
      ======================= */}
      <section
        className="relative w-full max-w-[1273px] rounded-[10px] mt-[60px] sm:mt-[100px] mb-[100px] sm:mb-[140px] overflow-hidden mx-auto flex flex-col lg:flex-row items-center justify-between gap-[20px] px-[20px] sm:px-[40px] lg:px-[60px] py-[40px] text-white"
        style={{
          background:
            "url('/images/0101.png') center/cover no-repeat, #132219",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center lg:items-start justify-center gap-[20px] text-center lg:text-left">
          <p className="text-[#CAF476] text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] font-[400] max-w-[700px]">
            Talk to a Hypoteq expert for a{" "}
            <span className="font-[600]">15-minute consultation</span> to get
            personalized guidance on financing options.
          </p>

          <button className="px-[22px] py-[10px] bg-[#CAF476] text-[#132219] text-[14px] sm:text-[16px] font-[500] rounded-full hover:bg-[#D6FA8A] transition-all">
            Book your call
          </button>
        </div>
      </section>
    </>
  );
}
