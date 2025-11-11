"use client";
import { useState } from "react";

export default function DocumentsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  type SectionProps = {
    title: string;
    docs: string[];
  };

  const Section = ({ title, docs }: SectionProps) => {
    const flagIcons = [
      "/images/german.png", // 🇩🇪 German
      "/images/france.png", // 🇫🇷 French
      "/images/it.png", // 🇮🇹 Italian
      "/images/united-kingdom.png", // 🇬🇧 English
    ];

    return (
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[40px] md:gap-[80px] lg:gap-[120px]">
        {/* LEFT SIDE - TITLE */}
        <div className="w-full lg:w-[45%]">
          <h2 className="text-[#132219] font-sfpro text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[120%]">
            {title}
          </h2>
        </div>

        {/* RIGHT SIDE - DOCUMENTS */}
        <div className="w-full lg:w-[55%] flex flex-col gap-[16px] sm:gap-[20px] md:gap-[22px]">
          {docs.map((doc, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full border border-[#132219] rounded-[50px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] sm:py-[10px] cursor-pointer hover:bg-[#132219]/5 transition"
            >
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#132219] leading-tight">
                {doc}
              </p>

              <div className="flex items-center gap-[16px]">
                <img
                  src={flagIcons[index] || "/images/united-kingdom.png"}
                  alt="language flag"
                  className="w-[20px] h-[20px] object-contain"
                />
                <img
                  src="/images/documents.svg"
                  alt="document icon"
                  className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-[80px] sm:py-[100px] md:py-[120px] px-4 sm:px-6 md:px-10 font-sfpro text-[#132219]">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col gap-[80px] sm:gap-[100px] md:gap-[120px]">
        {/* ===== TITLE + FILTERS ===== */}
        <div className="flex flex-col gap-[24px] sm:gap-[32px]">
          <h1 className="text-[#132219] font-sfpro text-[40px] sm:text-[52px] md:text-[72px] font-medium leading-[100%] tracking-[-0.72px]">
            Dokumente
          </h1>
        </div>

        {/* ===== MORTGAGE CHECKLIST FOR A HOME ===== */}
        {(activeCategory === "All" ||
          activeCategory === "Mortgage checklist for a home") && (
          <Section
            title="Hypotheken Checkliste für ein Eigenheim"
            docs={[
              "Checkliste für selbstbewohntes Wohneigentum",
              "Liste de contrôle pour les logements en propriété occupés par leur propriétaire",
              "Lista di controllo per le abitazioni occupate dai proprietari",
              "Checklist for owner-occupied property",
            ]}
          />
        )}

        {/* ===== AUTHORIZATION TO PROVIDE INFORMATION ===== */}
        {(activeCategory === "All" ||
          activeCategory === "Authorization to provide information") && (
          <Section
            title="Auskunftsermächtigung"
            docs={[
              "Checkliste für selbstbewohntes Wohneigentum",
              "Checkliste für selbstbewohntes Wohneigentum",
              "Lista di controllo per le abitazioni occupate dai proprietari",
              "Authorisation for information",
            ]}
          />
        )}

        {/* ===== MORTGAGE CHECKLIST FOR A RETURN PROPERTY ===== */}
        {(activeCategory === "All" ||
          activeCategory === "Mortgage checklist for a return property") && (
          <Section
            title="Hypotheken Checkliste für ein Renditeobjekt"
            docs={[
              "Checkliste für Renditeobjekte",
              "Liste de contrôle pour les immeubles à rendement",
              "Lista di controllo per immobili a reddito",
              "Checklist for investment properties",
            ]}
          />
        )}

        {/* ===== HYPOTEQ INFORMATION MATERIAL ===== */}
        {(activeCategory === "All" ||
          activeCategory === "HYPOTEQ information material") && (
          <Section
            title="HYPOTEQ Informationsmaterial"
            docs={[
              'Flyer "Einfach und schnell zur günstigen Hypothek"',
              'Broschüre "Die perfekte Finanzierung Ihres Eigenheims"',
            ]}
          />
        )}
      </div>
    </section>
  );
}
