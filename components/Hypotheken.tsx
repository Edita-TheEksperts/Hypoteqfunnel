export default function neueHypotheken() {
  return (
    <>
      {/* ====== SECTION 1: Hero / Hypoteken World ====== */}
      <section
        className="relative w-full h-screen flex items-start justify-start bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hypotheneHome.png')",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-[1200px] px-[40px] md:pl-[100px] pt-[140px] md:pt-[180px] flex flex-col gap-[32px] text-[#fff]">
          <div className="flex flex-col max-w-[600px]">
            <div className="flex flex-col gap-[24px]">
              <h2
                className="text-[#fff] text-[48px] md:text-[72px] leading-[100%] font-[500] tracking-[-0.72px]"
                style={{
                  fontFamily: '"SF Pro Display", sans-serif',
                }}
              >
                Hypoteken World
              </h2>
            </div>

            <div className="mt-[60px] md:mt-[95px]">
              <p
                className="text-[18px] md:text-[24px] font-light leading-[1.5] text-[#fff]"
                style={{
                  fontFamily: '"SF Pro Display", sans-serif',
                  fontWeight: 100,
                  letterSpacing: "0.01em",
                }}
              >
                Buying, refinancing, or building a home shouldn’t feel
                complicated. Our smart platform compares lenders, rates, and
                terms in real time—so you see only what matters. Whether you’re
                getting your first mortgage, optimizing an existing one, or
                financing new construction, we bring clarity, transparency, and
                human expertise to every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 2–4: Details Sections ====== */}
      <section className="w-full bg-white flex flex-col items-center py-[80px] md:py-[120px] px-[24px] md:px-[100px] text-[#132219] font-['SF Pro Display']">
        {/* ====== New Mortgage Section ====== */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1504px] mb-[80px] md:mb-[120px] gap-[40px]">
          {/* Text Left */}
          <div className="max-w-[536px]">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[140%] tracking-[-0.36px] mb-[16px] md:mb-[24px]">
              New Mortgage
            </h2>
            <p className="text-[18px] md:text-[24px] font-light leading-[140%] tracking-[-0.24px]">
              Start with a quick, no-obligation inquiry. Tell us about your
              property, budget, income, and timeline—either via our secure
              online form or a short call with an advisor. We’ll listen, clarify
              your goals, and capture only what’s needed to assess options. No
              fees, no pressure—just a clear first step.
            </p>
          </div>

          {/* Image Right */}
          <div className="w-full md:w-[537px] h-[300px] md:h-[443px] rounded-[10px] overflow-hidden flex items-center justify-center bg-[#F8F8F8]">
            <img
              src="/images/NewMortgage.png"
              alt="New Mortgage"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ====== Refinancing Section ====== */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1504px] mb-[80px] md:mb-[120px] gap-[40px]">
          {/* Text Left */}
          <div className="max-w-[536px] order-2 md:order-1">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[140%] tracking-[-0.36px] mb-[16px] md:mb-[24px]">
              Refinancing
            </h2>
            <p className="text-[18px] md:text-[24px] font-light leading-[140%] tracking-[-0.24px]">
              Once we have your details, our team gets to work. We evaluate
              affordability, credit profile, and property documentation to
              determine eligibility. Using advanced comparison tools, we review
              offers from partner banks and outline clear scenarios for you.
              Every rate, fee, and term is explained—transparent, accurate, and
              tailored to your needs.
            </p>
          </div>

          {/* Image Right */}
          <div className="w-full md:w-[537px] h-[300px] md:h-[443px] rounded-[10px] overflow-hidden flex items-center justify-center bg-[#F8F8F8] order-1 md:order-2">
            <img
              src="/images/Refinance.png"
              alt="Refinance Graph"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ====== Neubau Section ====== */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1504px] gap-[40px]">
          {/* Text Left */}
          <div className="max-w-[536px]">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[140%] tracking-[-0.36px] mb-[16px] md:mb-[24px]">
              Neubau
            </h2>
            <p className="text-[18px] md:text-[24px] font-light leading-[140%] tracking-[-0.24px]">
              Once we’ve completed the analysis, we present tailored mortgage
              offers based on your financial profile and property details.
              You’ll receive side-by-side comparisons of interest rates, terms,
              and monthly payments from our network of trusted banks. Each
              option is explained clearly—so you understand the benefits,
              trade-offs, and total costs before making a decision. Transparent,
              data-driven, and fully personalized.
            </p>
          </div>

          {/* Image Right */}
          <div className="w-full md:w-[537px] h-[300px] md:h-[443px] rounded-[10px] overflow-hidden flex items-center justify-center bg-[#F8F8F8]">
            <img
              src="/images/Neubau.png"
              alt="Neubau Graph"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ====== Full-width CTA Banner ====== */}
        <section
          className="relative mt-[100px] w-full h-auto md:h-[228px] rounded-[10px] overflow-hidden 
                     flex flex-col md:flex-row items-center justify-between gap-[24px] md:gap-0 px-[24px] md:px-[60px] py-[40px] md:py-0 text-white"
          style={{
            background:
              "url('/images/0101.png') center/cover no-repeat, #132219",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex flex-col items-start justify-center gap-[20px] max-w-[640px] text-center md:text-left w-full">
            <p className="text-[#CAF476] text-[18px] md:text-[20px] leading-[140%] font-[400] font-['SF Pro Display']">
              Talk to a Hypoteq expert for a{" "}
              <span className="font-[600]">15-minute consultation</span>
              <br className="hidden md:block" />
              to get personalized guidance on financing options.
            </p>

            <button
              className="px-[22px] py-[10px] bg-[#CAF476] text-[#132219] text-[14px] font-[500] 
                         rounded-full hover:bg-[#D6FA8A] transition-all mx-auto md:mx-0"
            >
              Book your call
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
