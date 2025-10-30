"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

interface StepProps {
  step?: string;
  title: string;
  text: string;
  image?: string;
  highlightBox?: boolean;
}

const Step: React.FC<StepProps> = ({ step, title, text, image, highlightBox }) => (
  <div
    className={`
      flex flex-col lg:flex-row justify-between items-start
      w-[90%] md:w-[85%] lg:w-[1272px]
      ${highlightBox ? "p-6 md:p-10 lg:p-14" : "p-6 md:p-8 lg:p-10"}
      font-[var(--font-sfpro)]
      bg-[#f8f9fa] rounded-2xl shadow-lg border border-[#e5e7eb]
      transition-all duration-500
    `}
  >
    {/* Left Section */}
    <div
      className={`
        text-left text-[#132219]
        w-full lg:w-[60%]
      `}
    >
      {step && <p className="text-[14px] md:text-[16px] font-[500] mb-[4px]">{step}</p>}
      
      <h3
        className={`
          ${highlightBox ? "text-[26px] md:text-[30px] lg:text-[34px]" : "text-[22px] md:text-[26px] lg:text-[28px]"}
          font-[600] mb-[12px] md:mb-[16px]
        `}
      >
        {title}
      </h3>

      <p
        className={`
          ${highlightBox ? "text-[20px] md:text-[22px] lg:text-[26px]" : "text-[18px] md:text-[20px] lg:text-[24px]"}
          font-[300] leading-[150%]
        `}
      >
        {text}
      </p>
    </div>

    {/* Spacer for Desktop */}
    <div className="hidden lg:block w-[199px]" />

    {/* Right Section */}
    {highlightBox ? (
      <div
        className="
          flex flex-col justify-between items-center
          w-full lg:w-[550px]
          h-[260px] md:h-[300px] lg:h-[350px]
          px-[30px] md:px-[60px] lg:px-[80px]
          py-[30px] bg-[#CAF476] rounded-[14px] shadow-md mt-6 lg:mt-0
        "
      >
        <p className="text-center text-[#132219] text-[20px] md:text-[26px] lg:text-[30px] font-[400] leading-[130%]">
          Start now in just 3 clicks.
          <br /> We’ll guide you step by step.
        </p>

        <button className="flex items-center justify-center gap-[10px] border border-[#132219] rounded-[50px] px-[24px] py-[10px]
          text-[18px] md:text-[20px] lg:text-[22px] font-[600] text-[#132219] bg-[#CAF476] hover:opacity-90 transition-all">
          Find my best offer
        </button>
      </div>
    ) : (
      image && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className="flex-shrink-0 w-full md:w-[450px] lg:w-[513px] rounded-[10px] overflow-hidden flex justify-center items-center mt-6 lg:mt-0"
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

      <motion.h2
        className="text-[38px] md:text-[48px] lg:text-[54px] font-bold text-[#132219] text-center mb-6"
        initial={{ opacity: 1, y: -10 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
          y: useTransform(scrollYProgress, [0, 0.08], [-10, -60]),
        }}
      >
        How It Works
      </motion.h2>

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {steps.map((step, index) => {
          const start = (index - 0.35) / steps.length;
          const end = (index + 0.35) / steps.length;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const y = useTransform(scrollYProgress, [start, end], [200 + index * 60, index * -10]);
          const scale = useTransform(scrollYProgress, [start, end], [0.96, 1]);
          const zIndex = index + 1;

          const [visible, setVisible] = useState(false);
          useMotionValueEvent(opacity, "change", (latest) => setVisible(latest > 0.15));

          return (
            <motion.div
              key={index}
              style={{ opacity, scale, y, position: "absolute", zIndex }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className={`w-full flex flex-col items-center justify-center ${
                visible ? "visible pointer-events-auto" : "invisible pointer-events-none"
              }`}
            >
              <Step {...step} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
