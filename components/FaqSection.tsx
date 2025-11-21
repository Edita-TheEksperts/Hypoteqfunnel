"use client";
import { useState } from "react";

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-[120px] px-[116px] font-sfpro text-[#132219]">
      
      {/* WRAPPER MAX-WIDTH = 1504px (FIGMA) */}
      <div className="w-full max-w-[1504px] mx-auto flex flex-col gap-[120px]">

        {/* TITLE */}
        <h1 className="text-[48px] md:text-[72px] font-medium leading-[100%] tracking-[-0.72px]">
          Frequently Asked <br /> Questions
        </h1>

        {/* QUESTIONS */}
        <div className="flex flex-col gap-[22px] w-full">

          {[
            "Wie funktioniert eine Hypothekananfrage bei HYPOTEQ?",
            "Was kostet der Service von HYPOTEQ?",
            "Welche Arten von Finanzierungen bietet HYPOTEQ an?",
            "Wie lange dauert es, bis ich ein Angebot erhalte?",
            "Warum dauert mein Kreditantrag länger als erwartet?",
            "Welche Dokumente benötige ich für eine definitive Offerte?",
            "Mit welchen Banken arbeitet HYPOTEQ zusammen?",
            "Was ist der Unterschied zwischen HYPOTEQ und einer Bank?",
            "Wie kann ich direkt einen Termin vereinbaren?",
            "Was ist HYPOTEQ Advisory?",
            "Wie kann man Mezzanine-Finanzierungen anfragen?",
            "Wie kann ich HYPOTEQ kontaktieren?",
          ].map((q, i) => (
            <div
              key={i}
              className="flex justify-between items-center w-full border border-[#132219] rounded-[58px]
              px-[24px] py-[12px] cursor-pointer hover:bg-[#132219]/5 transition"
            >
              <p className="text-[16px] md:text-[20px] font-medium">{q}</p>
              <span className="text-[26px] font-light leading-none">+</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
