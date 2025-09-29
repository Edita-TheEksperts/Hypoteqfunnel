"use client";
import React, { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text: string =
  "Your advantages begin right from the moment you choose your mortgage advisor. By working with partners who are part of the HYPOTEQ network, you benefit from professionals who stand for competence, reliability, and proven expertise in their respective fields. This network ensures that you are supported by trusted specialists who can guide you through every step of the process with confidence and care.";

const Advantages: FC = () => {
  const words: string[] = text.split(" ");
  const containerRef = useRef<HTMLDivElement>(null);

  // scroll progress scoped to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], 
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#132219] text-white h-[400vh]" 
      // 400vh = pinned scroll space (can be tuned)
    >
      {/* sticky content */}
      <div className="sticky top-0 h-screen flex justify-center items-center">
        <div className="max-w-[1504px] w-full px-10">
          <p className="text-[48px] font-normal leading-[115%] tracking-[-0.48px] text-left flex flex-wrap w-[1310px]">
            {words.map((word: string, i: number) => {
              // map each word to its portion of scroll
              const start = i / words.length;
              const end = (i + 1) / words.length;

              const color = useTransform(
                scrollYProgress,
                [start, end],
                ["#828282", "#ffffff"]
              );

              return (
                <motion.span key={i} style={{ color }} className="mr-2">
                  {word}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
