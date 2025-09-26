"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const text: string =
  "Your advantages begin right from the moment you choose your mortgage advisor. By working with partners who are part of the HYPOTEQ network, you benefit from professionals who stand for competence, reliability, and proven expertise in their respective fields. This network ensures that you are supported by trusted specialists who can guide you through every step of the process with confidence and care.";

const Advantages: FC = () => {
  const words: string[] = text.split(" ");
  const { ref, inView } = useInView({
    triggerOnce: false, // animate again when scrolling back
    threshold: 0.2,
  });

  return (
    <section className="bg-[#132219] text-white font-sfpro flex justify-center items-center py-[180px]">
      <div
        ref={ref}
        className="max-w-[1504px] w-full h-[845px] flex justify-center items-center rounded-[8px]"
      >
        <p className="text-[48px] font-normal leading-[115%] tracking-[-0.48px] w-[1310px] text-left flex flex-wrap">
          {words.map((word: string, i: number) => (
            <motion.span
              key={i}
              initial={{ color: "#828282" }} // before reading
              animate={inView ? { color: "#ffffff" } : { color: "#828282" }} // after reading
              transition={{
                delay: i * 0.10, // speed of "reading"
                duration: 0.01, // instant switch, not smooth
              }}
              className="mr-2"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Advantages;
