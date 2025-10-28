import React, { useMemo } from "react";

const logos = [
  { name: "UBS", img: "/images/UBS-LogoBlack.svg" },
  { name: "Zürcher Kantonalbank", img: "/images/24.png" },
  { name: "Bank Cler", img: "/images/Bank_Cler_logo.png" },
  { name: "Raiffeisen", img: "/images/Raiffeisen_Schweiz_Logo.png" },
  { name: "SNB BNS", img: "/images/snb.svg" },
];

// 🌀 Krijojmë 30 partnerë (5 rreshta × 6 kolona) duke përzier logot
const PartnersSection: React.FC = () => {
  const partners = useMemo(() => {
    const mixed: { name: string; img: string }[] = [];
    for (let i = 0; i < 30; i++) {
      const randomLogo = logos[Math.floor(Math.random() * logos.length)];
      mixed.push({
        name: `${randomLogo.name} ${i + 1}`,
        img: randomLogo.img,
      });
    }
    return mixed;
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
    <h2
  className="mb-4 font-sfpro"
  style={{
    color: "var(--Secondary-Color, #132219)",
    fontFamily: '"SF Pro Display", sans-serif',
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "140%",
    letterSpacing: "-0.4px",
  }}
>
  Our Partners
</h2>


        <p
          className="mb-10 max-w-2xl font-sfpro"
          style={{
            color: "var(--Secondary-Color, #132219)",
            fontFamily: "SF Pro Display",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "140%",
          }}
        >
          We have established relationships with each of these banks,
          eliminating the need for additional searches or requests.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[193px] h-[161px] bg-gray-100 rounded-md relative border border-transparent hover:shadow-lg transition"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="max-h-16 max-w-[120px] object-contain"
              />
              {/* Green line at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-lime-400 rounded-b-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
