import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-[120px] flex flex-col items-center text-[#132219] max-md:py-[60px]">
      {/* Title */}
      <div className="max-w-[1274px] w-full px-[20px]">
        <h2
          className="
            font-[SF Pro Display] text-[#132219]
            text-[64px] leading-[140%] font-normal 
            max-lg:text-[52px] 
            max-md:text-[40px] 
            max-sm:text-[32px]
          "
        >
          We help homebuyers and homeowners make{" "}
          <span className="font-semibold">
            confident financing decisions.
          </span>
        </h2>

        <p
          className="mt-[32px] font-[SF Pro Display] text-[24px] font-light leading-[140%] 
          max-md:text-[20px] max-sm:text-[18px]"
        >
          Our mission is to simplify the mortgage journey end-to-end—pairing
          clear, jargon-free guidance with smart digital tools, so you can
          compare options, lock great terms, and move forward with confidence.
          We bring transparency to every step (from inquiry to approval),
          personalize recommendations to your goals, and stay by your side with
          real human expertise when it matters most.
        </p>
      </div>

      {/* Stats */}
      <div 
        className="
          w-full max-w-[1274px] mt-[80px] mb-[80px] px-[20px]
          grid grid-cols-4 gap-[40px]
          max-lg:grid-cols-2 
          max-sm:grid-cols-1 
        "
      >
        {[
          {
            title: "40+",
            desc: "Access 40+ partner lenders — more choice and better terms for you.",
          },
          {
            title: "3 Clicks",
            desc: "From inquiry to approval — our streamlined system gets you results fast.",
          },
          {
            title: "1,500+",
            desc: "Thousands of happy homeowners who trusted us with their mortgage journey.",
          },
          {
            title: "8+",
            desc: "Nearly a decade of guiding clients toward confident financing decisions.",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col gap-[8px]">
            <h3
              className="
                font-[SF Pro Display] text-[48px] font-normal leading-[140%]
                max-md:text-[36px] max-sm:text-[32px]
              "
            >
              {item.title}
            </h3>
            <p 
              className="
                font-[SF Pro Display] text-[20px] font-light leading-[140%] 
                max-w-[262px] max-md:text-[18px]
              "
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="w-full max-w-[1274px] h-[278px] max-md:h-[200px] max-sm:h-[160px] rounded-[10px] overflow-hidden px-[20px]">
        <img
          src="/images/houses.png"
          alt="Modern houses"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Our DNA */}
      <div className="w-full flex flex-col items-center mt-[120px] max-md:mt-[80px]">
        <div className="max-w-[1274px] w-full flex flex-col gap-[80px] px-[20px]">
          <h2
            className="
              font-[SF Pro Display] text-[40px] font-medium text-[#132219] 
              max-md:text-[32px] max-sm:text-[28px]
            "
          >
            Our DNA
          </h2>

          <div 
            className="
              grid grid-cols-2 gap-x-[100px] gap-y-[80px]
              max-lg:gap-x-[60px]
              max-md:grid-cols-1 max-md:gap-y-[60px]
            "
          >
            {[
              {
                icon: "/images/mission.svg",
                title: "Our Mission",
                desc: "We aim to simplify complex processes through innovation and human-centered solutions...",
              },
              {
                icon: "/images/32.svg",
                title: "Our Vision",
                desc: "To create a world where technology works seamlessly with people...",
              },
              {
                icon: "/images/Values.svg",
                title: "Our Values",
                desc: "Integrity, transparency, and collaboration guide everything we do...",
              },
              {
                icon: "/images/Group.svg",
                title: "Our Purpose",
                desc: "Our purpose is to connect people with opportunities that improve their lives...",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-[28px] relative pl-[42px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[32px] h-[32px] absolute left-0 top-[4px]"
                />
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-[SF Pro Display] text-[28px] font-semibold text-[#132219] max-sm:text-[24px]">
                    {item.title}
                  </h3>

                  <div className="flex gap-[20px]">
                    <div className="w-[8px] bg-[#CAF476] rounded-[2px]" />
                    <p className="font-[SF Pro Display] text-[20px] leading-[1.6] font-light text-[#132219] max-sm:text-[18px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
