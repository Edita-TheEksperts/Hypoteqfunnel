"use client";
import React, { useState } from "react";

const AdvantageCard = ({
  title,
  text,
  highlight,
  active,
  onClick,
}: {
  title: string | React.ReactNode;
  text: React.ReactNode;
  highlight?: boolean;
  active: boolean;
  onClick: () => void;
}) => {
  const greenBG = "linear-gradient(270deg,#CAF476 0%,#E3F4BF 100%)";

  return (
    <div
      onClick={onClick}
      className={`
        rounded-[10px] 
        flex flex-col items-start 
        cursor-pointer transition-all duration-200 
        w-full bg-[#F6F6F6]
        p-[20px] justify-start
        lg:p-[24px] lg:min-h-0 lg:justify-between
        ${highlight ? "lg:w-[630px]" : ""} lg:h-[286px]
      `}
      style={{
        background: active ? greenBG : "#F6F6F6",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.background = "rgba(202,244,118,0.5)";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.background = "#F6F6F6";
      }}
    >
      {/* CARD TITLE */}
      <h3
        className="
          text-[28px] lg:text-[32px]
          font-[500]
          text-[#3D3D3D]
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
            text-[#3D3D3D]
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
        pt-[80px]
        px-[16px]
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
        {/* FIRST ROW */}
        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="lg:w-[810px] w-full">
            <AdvantageCard
              title="Direkter Weg zur besten Offerte"
              text={
                <>
                  Du erwartest schnelle und verlässliche Resultate – wir liefern
                  sie. < br/> Mit HYPOTEQ wird deine Hypothekensuche einfach, digital
                  und transparent. In nur wenigen Klicks erhältst du ein auf
                  deine Ziele und dein Budget abgestimmtes Finanzierungsangebot.
                </>
              }
              active={activeIndex === 0}
              onClick={() => setActiveIndex(0)}
            />
          </div>

          <div className="w-full lg:w-[446px]">
            <AdvantageCard
              title="Einfach zum Eigenheim"
              text={
                <>
            Unser smarter Online-Prozess macht den Weg zur Hypothek so unkompliziert wie noch nie. Wir führen dich Schritt für Schritt – schnell, sicher und ohne unnötigen Aufwand.
                </>
              }
              active={activeIndex === 1}
              onClick={() => setActiveIndex(1)}
            />
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="flex flex-col lg:flex-row gap-[24px]">
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
                  den besten verfügbaren <br /> Konditionen.
                </>
              }
              active={activeIndex === 2}
              onClick={() => setActiveIndex(2)}
            />
          </div>

          <div className="w-full lg:flex-1">
            <AdvantageCard
              title="Volle Transparenz"
              text={
                <>
                  Mit HYPOTEQ weisst du immer, <strong>wo du stehst</strong>.<br/> Keine versteckten
                  Gebühren, keine Schaufensterzinsen – nur faire,
                  nachvollziehbare Offerten und ehrliche Beratung.
                </>
              }
              highlight
              active={activeIndex === 3}
              onClick={() => setActiveIndex(3)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourAdvantages;
