"use client";
import React, { useState } from "react";

const AdvantageCard = ({
  title,
  text,
  highlight,
}: {
  title: string | React.ReactNode;
  text: React.ReactNode;
  highlight?: boolean;
}) => {
  return (
    <div
      className={`
        rounded-[10px] 
        flex flex-col items-start 
        cursor-pointer transition-all duration-300 
        w-full 
        bg-[#F6F6F6]
        hover:bg-[rgba(202,244,118,0.5)]
        p-[20px] justify-start
        lg:p-[24px] lg:min-h-0 lg:justify-between
        ${highlight ? "lg:w-[630px]" : ""} lg:h-[286px]
      `}
    >
      {/* CARD TITLE */}
      <h3
        className="
          text-[28px] lg:text-[40px]
          font-[500]
          text-[#132219]
          leading-[130%]
          font-['SF Pro Rounded']
          mb-[10px]
        "
      >
        {title}
      </h3>

      {/* CARD TEXT */}
      {text && (
        <p
          className="
            text-[16px]
            font-[400]
            text-[#132219]
            leading-normal
            font-['SF Pro Rounded']
          "
        >
          {text}
        </p>
      )}
    </div>
  );
};


const YourAdvantages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="
        w-full flex flex-col items-center bg-white 
        pt-[120px]
    px-[16px] md:px-[40px] lg:px-[116px]

        mt-[48px] md:mt-[120px]
      "
    >
      {/* SECTION TITLE */}
      <h2
        className="
          w-full lg:w-[1274px] text-left
          text-[32px] lg:text-[40px]
          font-[500]
          leading-[130%]
          text-[#132219]
          mb-[40px]
          font-['SF Pro Rounded']
        "
      >
        Deine Vorteile mit HYPOTEQ
      </h2>

      <div className="w-full lg:w-[1274px] flex flex-col gap-[24px] mb-[60px]">
  {/* FIRST ROW – merged into one box */}
<div className="flex flex-col lg:flex-row gap-[16px]">
  <div className="w-full">
    <AdvantageCard
      title="Einfach & schnell zur besten Finanzierung"
      text={
        <>
          Dein Weg zum Eigenheim muss nicht kompliziert sein. <br />
          HYPOTEQ vergleicht Angebote verschiedener Finanzierungspartner und
          zeigt dir sofort, welche Lösung zu dir passt. <br />
          Schnell, transparent und komplett digital.
        </>
      }
    />
  </div>
</div>


        {/* SECOND ROW */}
        <div className="flex flex-col lg:flex-row gap-[16px]">
          <div className="w-full lg:flex-1">
            <AdvantageCard
              title={
                <>
                  Mehr Auswahl, <br />
                  bessere Konditionen
                </>
              }
              text={
                <>
                  Vergleiche Angebote von mehreren Finanzierungspartnern. So
                  findest du die Finanzierung, die wirklich zu dir passt – mit
                  den besten verfügbaren <br />
                  Konditionen.
                </>
              }
            />
          </div>

          <div className="w-full lg:flex-1">
            <AdvantageCard
              title="Volle Transparenz"
              text={
                <>
                  Mit HYPOTEQ weisst du immer, wo du stehst.
                  <br /> Keine versteckten Gebühren, keine Schaufensterzinsen –
                  nur faire, nachvollziehbare Offerten und ehrliche Beratung.
                </>
              }
              highlight
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourAdvantages;
