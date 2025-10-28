import React from "react";

const StatsSection: React.FC = () => {
  return (
       <section className="w-full bg-white py-[120px] flex flex-col items-center text-[#132219]">
      {/* Titulli kryesor */}
      <div className="max-w-[1274px] w-full">
<h2
  style={{
    fontFamily: '"SF Pro Display", sans-serif',
    fontSize: "64px",
    lineHeight: "140%",
    fontWeight: 400,
    color: "#132219",
  }}
>
  We help homebuyers and homeowners make{" "}
  <span
    style={{
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: "64px",
      lineHeight: "140%",
    }}
  >
    confident financing decisions.
  </span>
</h2>


        <p
          className="mt-[32px]"
          style={{
            fontFamily: '"SF Pro Display", sans-serif',
            fontSize: "24px",
            lineHeight: "140%",
            fontWeight: 300,
            color: "#132219",
          }}
        >
          Our mission is to simplify the mortgage journey end-to-end—pairing
          clear, jargon-free guidance with smart digital tools, so you can
          compare options, lock great terms, and move forward with confidence.
          We bring transparency to every step (from inquiry to approval),
          personalize recommendations to your goals, and stay by your side with
          real human expertise when it matters most.
        </p>
      </div>

      {/* Statistika */}
      <div className="flex justify-between w-full mt-[80px] mb-[80px] max-w-[1274px]">
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
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-[8px]">
            <h3
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "48px",
                fontWeight: 400,
                lineHeight: "140%",
                color: "#132219",
              }}
            >
              {item.title}
            </h3>
            <p
              className="max-w-[262px]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "140%",
                color: "#132219",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Imazhi */}
      <div className="w-full max-w-[1274px] h-[278px] rounded-[10px] overflow-hidden">
        <img
          src="/images/houses.png"
          alt="Modern houses"
          className="w-full h-full object-cover"
        />
      </div>

   {/* Our DNA */}
<div className="w-full flex flex-col items-center mt-[120px]">
  <div className="max-w-[1274px] w-full flex flex-col gap-[80px] px-[20px]">
    <h2
      style={{
        fontFamily: '"SF Pro Display", sans-serif',
        fontSize: "40px",
        fontWeight: 500,
        lineHeight: "140%",
        letterSpacing: "-0.4px",
        color: "#132219",
      }}
    >
      Our DNA
    </h2>

    <div className="grid grid-cols-2 gap-x-[100px] gap-y-[80px]">
      {[
        {
          icon: "/images/mission.svg",
          title: "Our Mission",
          desc: "We aim to simplify complex processes through innovation and human-centered solutions. Our mission is to empower individuals and organizations with tools that make everyday decisions smarter, faster, and more meaningful.",
        },
        {
          icon: "/images/32.svg",
          title: "Our Vision",
          desc: "To create a world where technology works seamlessly with people—enhancing trust, accessibility, and progress. We envision a future where clarity replaces complexity and innovation drives positive impact.",
        },
        {
          icon: "/images/Values.svg",
          title: "Our Values",
          desc: "Integrity, transparency, and collaboration guide everything we do. We believe in creating meaningful experiences, prioritizing long-term relationships over short-term gains, and fostering creativity through trust.",
        },
        {
          icon: "/images/Group.svg",
          title: "Our Purpose",
          desc: "Our purpose is to connect people with opportunities that improve their lives. We strive to build systems that inspire confidence, deliver simplicity, and promote growth for everyone involved",
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col gap-[28px] relative">
          {/* Ikona */}
          <img
            src={item.icon}
            alt={item.title}
            className="w-[32px] h-[32px] absolute -left-[42px] top-[4px]"
          />

          {/* Titulli dhe përshkrimi */}
          <div className="flex flex-col gap-[16px]">
            <h3
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "28px",
                fontWeight: 600,
                color: "#132219",
              }}
            >
              {item.title}
            </h3>

            <div className="flex gap-[20px]">
              <div
                className="rounded-[2px]"
                style={{
                  width: "8px",
                  backgroundColor: "#CAF476",
                }}
              />
              <p
                style={{
                  fontFamily: '"SF Pro Display", sans-serif',
                  fontSize: "20px",
                  lineHeight: "1.6",
                  fontWeight: 300,
                  color: "#132219",
                }}
              >
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
