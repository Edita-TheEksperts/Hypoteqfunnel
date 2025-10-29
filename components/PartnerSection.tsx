"use client";
import Image from "next/image";

export default function PartnerSection() {
  return (
    <>
      {/* =======================
          SECTION 1: BECOME A PARTNER
      ======================= */}
      <section className="relative w-full min-h-[90vh] lg:h-screen text-white font-sfpro overflow-hidden flex items-center">
        <Image
          src="/images/2026.png"
          alt="Roof background"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 gap-10 lg:gap-[60px]">
          <div className="w-full lg:w-[50%] flex flex-col gap-6 text-left">
      <h1 className="font-[500] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[100%] tracking-[-0.72px]">
              Become a partner
            </h1>

            <h2
              className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-light leading-[140%]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontWeight: 100,
                letterSpacing: "0.01em",
              }}
            >
              Empower your clients. Expand your business.
            </h2>

            <p
              className="mt-[40px] sm:mt-[70px] md:mt-[95px] text-[20px] sm:text-[22px] md:text-[24px] text-white leading-[140%] max-w-[1000px]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontWeight: 100,
                letterSpacing: "0.01em",
              }}
            >
              Partner with Hypoteq to access multiple lenders, faster approvals,
              and a seamless digital workflow. <br />
              Our platform combines clarity, automation, and expert support so
              you can grow your portfolio while keeping client, <br />{" "}
              relationships fully yours.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          SECTION 2: WHO IS IT FOR?
      ======================= */}
      <section className="w-full bg-white py-20 px-6 md:px-10 mt-[80px] flex flex-col items-center justify-center">
        <div className="w-full max-w-[1275px] flex flex-col gap-[48px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <h2 className="text-[#132219] text-[32px] sm:text-[40px] md:text-[48px] font-[500] leading-[100%] tracking-[-0.48px]">
              Who is it for?
            </h2>

            <p className="text-[#132219] text-[15px] sm:text-[16px] font-[500] leading-[137.5%] max-w-[536px]">
              To qualify as a Hypoteq partner, your company must be a registered
              business with a valid brokerage license, operate in compliance
              with KYC and AML regulations, and have a proven operational track
              record—or be supervised by a licensed entity.
            </p>
          </div>

          <div className="w-full h-[180px] sm:h-[240px] md:h-[291px] mb-[80px]">
            <Image
              src="/images/123321.png"
              alt="Who is it for illustration"
              width={1275}
              height={291}
              className="w-full h-full rounded-[10px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* =======================
          SECTION 3: YOUR ADVANTAGES
      ======================= */}
      <section className="w-full bg-[#132219] text-[#CAF476] px-6 sm:px-10 md:px-[60px] lg:px-[117px] py-[52px] flex flex-col justify-center font-sfpro">
        <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[60px] sm:gap-[75px]">
          <h2 className="text-[#CAF476] text-[32px] sm:text-[40px] md:text-[48px] font-[500] leading-[100%] tracking-[-0.48px] text-left">
            Your advantages with HYPOTEQ
          </h2>

          <div className="w-full flex flex-wrap justify-center lg:justify-between items-start gap-[40px] sm:gap-[60px]">
            {[
              {
                icon: "/images/partner11.svg",
                text: "Partner portal with case tracking and analysis",
              },
              {
                icon: "/images/partner22.svg",
                text: "Lender marketplace with up-to-date criteria",
              },
              {
                icon: "/images/partner33.svg",
                text: "Marketing toolkit & white-label materials",
              },
              {
                icon: "/images/partner44.svg",
                text: "Priority support and training",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left w-full sm:w-[180px] flex-shrink-0"
              >
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={64}
                  height={64}
                  className="mb-[24px] sm:mb-[38px]"
                />
                <p className="text-[#CAF476] opacity-80 text-[18px] sm:text-[20px] font-[400] leading-[140%] tracking-[-0.2px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          SECTION 4: FREQUENTLY ASKED QUESTIONS
      ======================= */}
      <section className="w-full bg-white py-[60px] sm:py-[80px] px-[20px] sm:px-[40px] md:px-[80px] font-sfpro flex flex-col items-center justify-center">
        <div className="w-full max-w-[1275px] flex flex-col gap-[48px]">
          <h2 className="text-[#132219] text-[32px] sm:text-[40px] md:text-[48px] font-[500] leading-[100%] tracking-[-0.48px]">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-[24px] sm:gap-[32px]">
            {[
              "Do I keep ownership of the client?",
              "How are commissions structured?",
              "Can I use my own branding?",
              "How long does onboarding take?",
            ].map((question, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-black rounded-[50px] px-[16px] sm:px-[24px] py-[8px]"
              >
                <p className="text-[#132219] text-[18px] sm:text-[24px] md:text-[32px] font-[500] leading-[140%] tracking-[-0.32px]">
                  {question}
                </p>
                <span className="text-[#132219] text-[24px] sm:text-[32px] font-[500]">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          SECTION 5: BECOMING A PARTNER FORM
      ======================= */}
      <section className="w-full bg-white py-[80px] px-[20px] sm:px-[40px] md:px-[80px] font-sfpro flex flex-col items-center justify-center">
        <div className="w-full max-w-[1275px] flex flex-col gap-[48px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[32px] lg:gap-[48px]">
            <h2 className="text-[#132219] text-[28px] sm:text-[40px] md:text-[48px] font-[500] leading-[110%] tracking-[-0.48px] max-w-[442px]">
              Yes, I am interested in becoming a partner!
            </h2>

            <p className="text-[#132219] text-[15px] sm:text-[16px] font-[500] leading-[137.5%] max-w-[536px]">
              To qualify as a Hypoteq partner, your company must be a registered
              business with a valid brokerage license, operate in compliance
              with KYC/AML regulations, and have a proven operational track
              record—or be supervised by a licensed entity.
            </p>
          </div>

          <form className="flex flex-col gap-[17px]">
            {[
              ["Full Name", "Email Address"],
              ["Company Name", "Phone number"],
              ["Inquiry Type", "Your message"],
            ].map((row, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center gap-[17px] w-full"
              >
                {row[0] === "Inquiry Type" ? (
                  <select className="w-full border border-[#132219] rounded-[40px] px-[16px] sm:px-[24px] py-[8px] text-[#132219] text-[15px] sm:text-[16px] font-[500] bg-white">
                    <option>{row[0]}</option>
                    <option>Partnership</option>
                    <option>Support</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder={row[0]}
                    className="w-full border border-[#132219] rounded-[40px] px-[16px] sm:px-[24px] py-[8px] text-[#132219] text-[15px] sm:text-[16px] font-[500]"
                  />
                )}

                <input
                  type="text"
                  placeholder={row[1]}
                  className="w-full border border-[#132219] rounded-[40px] px-[16px] sm:px-[24px] py-[8px] text-[#132219] text-[15px] sm:text-[16px] font-[500]"
                />
              </div>
            ))}

            <div className="flex justify-end mt-[24px]">
              <button
                type="submit"
                className="bg-[#132219] text-white text-[16px] sm:text-[20px] font-[600] px-[24px] py-[8px] rounded-[58px] hover:bg-[#0f1b14] transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =======================
    SECTION 6: CTA BANNER
======================= */}
      <section
        className="relative w-full max-w-[1273px] rounded-[10px] mt-[60px] sm:mt-[100px] mb-[100px] sm:mb-[140px] overflow-hidden mx-auto flex flex-col lg:flex-row items-center justify-between gap-[20px] px-[20px] sm:px-[40px] lg:px-[60px] py-[40px] text-white"
        style={{
          background: "url('/images/0101.png') center/cover no-repeat, #132219",
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
