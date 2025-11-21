"use client";
import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-[120px] flex flex-col items-center text-[#132219] max-md:py-[60px]">
      
      {/* Title */}
<div className="w-full max-w-[1579px] px-[20px] lg:px-[116px] mx-auto">
        <h2
          className="
            font-sfpro text-[#132219]
            text-[64px] leading-[140%] font-normal
            max-lg:text-[52px]
            max-md:text-[40px]
            max-sm:text-[32px]
          "
        >
          Wir helfen dir, die beste Finanzierung zu finden
        </h2>

        <p
          className="
            mt-[32px] font-sfpro text-[24px] font-light leading-[140%]
            max-md:text-[20px] max-sm:text-[18px]
          "
        >
          Unsere Mission ist einfach: Wir machen den Weg zur passenden Hypothek klar, effizient und verständlich. Mit durchdachten Tools, einem breiten Netzwerk an Finanzierungspartnern und persönlicher Beratung begleiten wir dich Schritt für Schritt. Du vergleichst Angebote, erkennst auf einen Blick, was zu dir passt – und triffst informierte Entscheidungen mit Rückendeckung von echten Profis.
        </p>
      </div>

  {/* Stats */}
<div
  className="
    w-full max-w-[1579px] px-[20px] lg:px-[116px] mx-auto
    mt-[80px] mb-[80px]
    grid grid-cols-4 gap-[40px]
    max-lg:grid-cols-2
    max-sm:grid-cols-1
  "
>
  {[
    {
      title: "30+",
      desc: "Partnerbanken – mehr Auswahl und bessere Konditionen für dich.",
    },
{
  title: "3 Klicks",
  desc: "Von der Anfragebis <br/> zur Zusage",
},

    {
      title: "2,500+",
      desc: "Zufriedene Kund:innen, die uns bereits ihr Vertrauen geschenkt haben.",
    },
    {
      title: "5+ Jahre",
      desc: "Erfahrung aus Hypo- und <br/> FinTech-Welt.",
    },
  ].map((item, idx) => (
    <div key={idx} className="flex flex-col gap-[12px]">

      <h3
        className="
          font-sfpro text-[48px] font-normal leading-[140%]
          max-md:text-[36px] max-sm:text-[32px]
        "
      >
        {item.title}
      </h3>

<p
  className="
    font-sfpro text-[20px] font-light leading-[150%]
    max-w-[400px] max-lg:max-w-full max-md:text-[18px]
  "
  dangerouslySetInnerHTML={{ __html: item.desc }}
/>


    </div>
  ))}
</div>


      {/* Image */}
      <div className="w-full w-full max-w-[1579px] px-[20px] lg:px-[116px] mx-auto
] h-[278px] max-md:h-[200px] max-sm:h-[160px] rounded-[10px] overflow-hidden px-[20px] lg:px-[116px]">
        <img
          src="/images/2586.png"
          alt="Modern houses"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Unsere DNA */}
      <div className="w-full flex flex-col items-center mt-[120px] max-md:mt-[80px]">
        <div className="w-full max-w-[1579px] px-[20px] lg:px-[116px] mx-auto
] w-full flex flex-col gap-[40px] px-[20px] lg:px-[116px]">

          {/* Title */}
          <h2
            id="dna"
            className="
              font-sfpro text-[40px] font-medium text-[#132219]
              max-md:text-[32px] max-sm:text-[28px]
            "
          >
            Unsere DNA
          </h2>

          {/* Paragraph */}
          <p
            className="
              font-sfpro text-[24px] font-light leading-[140%]
              text-[#132219] max-w-[1280px]
              max-md:text-[20px] max-sm:text-[18px]
            "
          >
            Wir vereinfachen den Hypothekenprozess in der Schweiz – digital, smart und nah am Menschen. 
            Mit Technologie, Daten und einem starken Partnernetzwerk gestalten wir Finanzierung schneller, klarer und zugänglicher. 
            Für Kund:innen, Vermittler und Kreditgeber.
          </p>

          {/* Grid */}
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
                title: "Unsere Mission",
                desc: "Hypotheken sollen nicht kompliziert sein. Unser Ziel: dir einfache Tools und transparente Prozesse an die Hand zu geben, damit du schnell, selbstbestimmt und mit gutem Gefühl zur passenden Finanzierung findest – in drei klaren Schritten.",
              },
              {
                icon: "/images/32.svg",
                title: "Unsere Vision",
                desc: "Wir schaffen eine Plattform, auf der Technologie auf Vertrauen trifft. Klarheit statt Bürokratie. Effizienz statt Wartezeiten. Entscheidungen, die für alle Beteiligten im Hypomarkt einen echten Unterschied machen.",
              },
              {
                icon: "/images/Values.svg",
                title: "Unsere Werte",
                desc: "Wir glauben an Offenheit, Verlässlichkeit und Partnerschaft auf Augenhöhe. Ob im Team oder mit unseren Kund:innen – wir handeln transparent, denken langfristig und lernen jeden Tag dazu.",
              },
              {
                icon: "/images/Group.svg",
                title: "Unser Antrieb",
                desc: "Wir bringen Menschen, Partner und Prozesse zusammen – nicht weil wir müssen, sondern weil wir es besser machen wollen. Mit einfachen digitalen Lösungen, persönlichem Support und einem klaren Ziel: Hypotheken einfacher, fairer und smarter machen.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-[28px] relative pl-[42px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[32px] h-[32px] absolute left-0 top-[4px]"
                />
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-sfpro text-[28px] font-semibold text-[#132219] max-sm:text-[24px]">
                    {item.title}
                  </h3>

                  <div className="flex gap-[20px]">
                    <div className="w-[15px] bg-[#CAF476] rounded-[2px]" />

                    <p className="font-sfpro text-[20px] leading-[160%] font-light text-[#132219] max-sm:text-[18px]">
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
