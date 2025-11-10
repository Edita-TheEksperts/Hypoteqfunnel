import React from "react";

const logos = [
  { name: "UBS", img: "/images/UBS-LogoBlack.svg" },
  { name: "Zürcher Kantonalbank", img: "/images/24.png" },
  { name: "Bank Cler", img: "/images/Bank_Cler_logo.png" },
  { name: "Raiffeisen", img: "/images/Raiffeisen_Schweiz_Logo.png" },
  { name: "SNB BNS", img: "/images/snb.svg" },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1579px] mx-auto px-[119px] text-left">
        {/* Title */}
        <h2
          className="font-sfpro mb-[48px]"
          style={{
            color: "var(--Secondary-Color, #132219)",
            fontFamily: '"SF Pro Display", sans-serif',
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: "140%",
          }}
        >
          Partners
        </h2>

        {/* ✅ 2 rreshta, 5 logo secili, me hapësirë fikse midis tyre */}
        <div className="flex flex-col gap-[48px]">
          {[0, 1].map((row) => (
            <div
              key={row}
              className="flex items-center justify-between"
              style={{ columnGap: "48px" }}
            >
              {logos.map((partner, index) => (
                <img
                  key={`${partner.name}-${row}-${index}`}
                  src={partner.img}
                  alt={partner.name}
                  className="h-[42px] object-contain" // zvogëluar pak nga 48px në 42px
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
