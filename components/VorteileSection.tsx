"use client";
import { useState } from "react";
import Image from "next/image";

export default function VorteileSection() {
  const cards = [
    {
      title: "Keine Produktkonkurrenz",
      text: "Kein Versicherungs- oder Anlagevertrieb durch HYPOTEQ",
    },
    {
      title: "Hohe Margen",
      text: "Faire Provisionsstruktur, schnelle Auszahlung",
    },
    {
      title: "Digitale Tools",
      text: "Kundenportal, Hyporechner, Immobilienbewertung",
    },
    {
      title: "Effiziente Prozesse",
      text: "Kein Papierkram – wir übernehmen die Abwicklung",
    },
    {
      title: "Support auf Augenhöhe",
      text: "Persönliche Ansprechperson & Beratung",
    },
    {
      title: "Kundenbindung stärken",
      text: "Du bietest Mehrwert ohne Mehraufwand",
    },
  ];

  const faqs = [
    { question: "Wer kann HYPOTEQ Partner werden?" },
    { question: "Welche Vorteile bietet eine Partnerschaft mit HYPOTEQ? " },
    { question: "Wie funktioniert die Zusammenarbeit?" },
    { question: "Welche Tools stehen mir als Partner zur Verfügung?" },
        { question: "Wie profitiert meine Kundschaft von der Partnerschaft mit HYPOTEQ? " },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full flex flex-col items-start gap-[120px]
      px-[24px] md:px-[116px] max-w-[1579px] mx-auto mt-[120px] mb-[120px]"
    >
      {/* =================== */}
      {/* Vorteile Section */}
      {/* =================== */}
      <div className="flex flex-col gap-[48px] w-full">
        <h2
          className="text-[#132219] text-[48px] font-[500] leading-[100%] tracking-[-0.48px]
                     font-['SF Pro Display']"
        >
          Deine Vorteile auf einen Blick:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[26px] gap-y-[48px] w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-[16px] relative border-l-[5px] border-[#CAF476] pl-[24px] rounded-[2px]"
            >
     <div className="absolute top-[6px] left-[12px]">
  <Image
    src="/images/MMMA.svg"
    alt="Arrow Icon"
    width={24}
    height={24}
    priority
  />
</div>

              {/* Teksti */}
              <div className="flex flex-col gap-[8px] mt-[40px]">
                <h3 className="text-[#132219] text-[34px] mt-[40px] font-[500] leading-normal font-['SF Pro Display']">
                  {card.title}
                </h3>
                <p className="text-[#132219] text-[22px] font-[400]  mt-[32px] leading-[22px] max-w-[300px]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* =================== */}
{/* FAQ Section */}
{/* =================== */}
<div className="flex flex-col gap-[32px] sm:gap-[48px] w-full">
  <h2  id="faq"
    className="text-[#132219] text-[32px] sm:text-[48px] font-[500] leading-[110%] tracking-[-0.48px]
               font-['SF Pro Display']"
  >
    Frequently Asked Questions
  </h2>

  <div className="flex flex-col gap-[20px] sm:gap-[32px] w-full">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="flex justify-between items-center border border-[#000]
        rounded-[30px] sm:rounded-[50px] py-[8px] px-[16px] sm:px-[20px] cursor-pointer transition-all duration-300"
        onClick={() => toggleFAQ(index)}
      >
        <p
          className="text-[20px] sm:text-[20px] font-[500] leading-[140%] tracking-[-0.32px] text-[#132219]
          font-['SF Pro Display']"
        >
          {faq.question}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="#132219"
          viewBox="0 0 16 16"
          className={`transition-transform duration-300 ${
            openIndex === index ? "rotate-45" : ""
          }`}
        >
          <path d="M9.59969 6.40031V0H6.40031V6.40031H0V9.59969H6.40031V16H9.59969V9.59969H16V6.40031H9.59969Z" />
        </svg>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
