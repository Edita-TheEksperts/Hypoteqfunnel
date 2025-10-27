"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface StepProps {
  step?: string;
  title: string;
  text: string;
  image?: string;
  highlightBox?: boolean;
}

const Step: React.FC<StepProps> = ({ step, title, text, image, highlightBox }) => (
  <div
    className={`flex justify-between items-start ${
      highlightBox ? "w-[1272px] p-14" : "w-[1272px] p-10"
    } font-[var(--font-sfpro)] bg-[#f8f9fa] rounded-2xl shadow-lg border border-[#e5e7eb] transition-all duration-500`}
  >
    <div
      className={`text-left text-[#132219] ${
        highlightBox ? "w-[600px]" : "w-[536px]"
      }`}
    >
      {step && <p className="text-[16px] font-[500] mb-[4px]">{step}</p>}
      <h3
        className={`${
          highlightBox ? "text-[34px]" : "text-[28px]"
        } font-[600] mb-[16px]`}
      >
        {title}
      </h3>
      <p
        className={`${
          highlightBox ? "text-[26px]" : "text-[24px]"
        } font-[300] leading-[140%]`}
      >
        {text}
      </p>
    </div>

    <div className="w-[199px]" />

    {highlightBox ? (
      <div className="flex flex-col justify-between items-center w-[600px] h-[350px] px-[80px] py-[40px] bg-[#CAF476] rounded-[14px] shadow-md">
        <p className="text-center text-[#132219] text-[30px] font-[400] leading-[130%]">
          Start now in just 3 clicks.
          <br />
          We’ll guide you step by step.
        </p>
        <button className="flex items-center justify-center gap-[10px] border border-[#132219] rounded-[58px] px-[32px] py-[10px] text-[22px] font-[600] text-[#132219] bg-[#CAF476] hover:opacity-90 transition-all">
          Find my best offer
        </button>
      </div>
    ) : (
      image && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}      // start small, invisible, rotated
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}     // pop to normal, rotate to 0
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",                                    
            stiffness: 500,
            damping: 20,
          }}
          className="flex-shrink-0 w-[513px] rounded-[10px] overflow-hidden flex justify-center items-center"
        >
          <Image
            src={image}
            alt={title}
            width={513}
            height={400}
            className="object-contain rounded-[10px]"
          />
        </motion.div>
      )
    )}
  </div>
);

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      title: "Inquiry",
      text: "Start with a quick, no-obligation inquiry. Tell us about your property, budget, income, and timeline—either via our secure online form or a short call with an advisor. We’ll listen, clarify your goals, and capture only what’s needed to assess options. No fees, no pressure—just a clear first step.",
      image: "/images/h1.png",
    },
    {
      step: "Step 2",
      title: "Analysis",
      text: "Once we have your details, our team gets to work. We evaluate affordability, credit profile, and property documentation to determine eligibility. Using advanced comparison tools, we review offers from partner banks and outline clear scenarios for you. Every rate, fee, and term is explained—transparent, accurate, and tailored to your needs.",
      image: "/images/oooo.png",
    },
    {
      step: "Step 3",
      title: "Offer",
      text: "Once we’ve completed the analysis, we present tailored mortgage offers based on your financial profile and property details. You’ll receive side-by-side comparisons of interest rates, terms, and monthly payments from our network of trusted banks. Each option is explained clearly—so you understand the benefits, trade-offs, and total costs before making a decision. Transparent, data-driven, and fully personalized.",
      image: "/images/offer.png",
    },
    {
      title: "Congratulations on Your Mortgage",
      text: "After we complete our review, we share a tailored set of mortgage offers matched to your profile and property. You’ll see side-by-side comparisons of rates, terms, fees, and projected monthly payments. We highlight the pros, trade-offs, and total cost over time. You choose with confidence—no jargon, no pressure",
      highlightBox: true,
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative bg-white h-[500vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {steps.map((step, index) => {
          const start = index / steps.length;
          const end = (index + 0.9) / steps.length;

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [index === 0 ? 1 : 0, 1]
          );

          const incrementalOffset = 60;

          const y = useTransform(scrollYProgress, [start, end], [
            index === 0 ? 20 : 200 + index * incrementalOffset,
            index * incrementalOffset - index * 20,
          ]);

          const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
          const zIndex = index + 1;

          return (
            <motion.div
              key={index}
              style={{
                opacity,
                scale,
                y,
                position: "absolute",
                zIndex,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col items-center justify-center"
            >
              <Step {...step} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
