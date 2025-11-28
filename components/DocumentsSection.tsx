"use client";
import { useState } from "react";

export default function DocumentsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

type DocItem = {
  label: string;
  file?: string;
  flag?: string;   
};


type SectionProps = {
  title: string;
  docs: DocItem[];
};


  const Section = ({ title, docs }: SectionProps) => {
    const flagIcons = [
      "/images/german.png", // 🇩🇪 German
      "/images/france.png", // 🇫🇷 French
      "/images/it.png", // 🇮🇹 Italian
      "/images/united-kingdom.png", // 🇬🇧 English
    ];

    return (
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[40px] md:gap-[80px]  lg:gap-[120px]">
        {/* LEFT SIDE - TITLE */}
        <div className="w-full lg:w-[45%]">
          <h2 className="text-[#132219] font-sfpro text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[120%]">
            {title}
          </h2>
        </div>

        {/* RIGHT SIDE - DOCUMENTS */}
        <div className="w-full lg:w-[55%] flex flex-col gap-[16px] sm:gap-[20px] md:gap-[22px]">
{docs.map((doc, index) => (
  <a
    key={index}
    href={doc.file}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-between items-center w-full border border-[#132219] rounded-[50px]
               px-[16px] sm:px-[20px] md:px-[24px] py-[8px] sm:py-[10px]
               cursor-pointer hover:bg-[#132219]/5 transition"
  >
    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#132219] leading-tight">
      {doc.label}
    </p>

    <div className="flex items-center gap-[16px]">
<img
  src={doc.flag || flagIcons[index] || "/images/united-kingdom.png"}
  alt="language flag"
  className="w-[20px] h-[20px]"
/>

      <img
        src="/images/documents.svg"
        alt="document icon"
        className="w-[18px] sm:w-[20px]"
      />
    </div>
  </a>
))}

        </div>
      </div>
    );
  };

  return (
<section className="w-full bg-white py-[80px] sm:py-[100px] md:py-[120px] px-4 sm:px-6 md:px-[116px] font-sfpro text-[#132219]">
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
    { label: "Checkliste für selbstbewohntes Wohneigentum", file: "/documents/checkliste_selbst_bewohntes_wohneigentum.pdf" },
    { label: "Liste de contrôle pour les logements en propriété occupés par leur propriétaire", file: "/documents/Liste-de-controle-pour-les-logements-en-propriete-occupes-par-leur-proprietaire.pdf" },
    { label: "Lista di controllo per le abitazioni occupate dai proprietari", file: "/documents/Lista-di-controllo-per-immobili-residenziali-occupati-dal-proprietario.pdf" },
    { label: "Checklist for owner-occupied property", file: "/documents/Checklist-for-owner-occupied-property.pdf" },
  ]}
/>

        )}

{/* ===== AUTHORIZATION TO PROVIDE INFORMATION ===== */}
{(activeCategory === "All" ||
  activeCategory === "Authorization to provide information") && (
  <Section
    title="Auskunftsermächtigung"
    docs={[
      { label: "Auskunftsermächtigung ", file: "/documents/Auskunftsermaechtigung-1.pdf" },
     { label: " Pouvoir d’information ", file: "/documents/20250711_HYPOTEQ-Pouvoir-dinformation-1-1.pdf" },
      { label: "Procura per informazioni", file: "/documents/20250711_HYPOTEQ-Procura-per-informazioni-1.pdf" },
      { label: "Autorisation d’information ", file: "/documents/HYPOTEQ-Pouvoir-dinformation-1-1.pdf" },
    ]}
  />
)}


{/* ===== MORTGAGE CHECKLIST FOR A RETURN PROPERTY ===== */}
{(activeCategory === "All" ||
  activeCategory === "Mortgage checklist for a return property") && (
  <Section
    title="Hypotheken Checkliste für ein Renditeobjekt"
    docs={[
      { label: "Checkliste für Renditeobjekte", file: "/documents/Checkliste-fuer-Renditeobjekte.pdf" },
      { label: "Liste de contrôle pour les immeubles à rendement", file: "/documents/Liste-de-controle-pour-les-immeubles-a-rendement.pdf" }, 
      { label: "Lista di controllo per immobili a reddito", file: "/documents/Lista-di-controllo-per-immobili-a-reddito.pdf" },
      { label: "Checklist for investment properties", file: "/documents/Checklist-for-investment-properties.pdf" },
    ]}
  />
)}


        {/* ===== HYPOTEQ INFORMATION MATERIAL ===== */}
        {(activeCategory === "All" ||
          activeCategory === "HYPOTEQ information material") && (
          <Section
            title="HYPOTEQ Informationsmaterial"
docs={[
  { 
    label: 'Flyer "Einfach und schnell zur günstigen Hypothek"', 
    file: "/documents/HYPOTEQ-Flyer.pdf",
    flag: "/images/german.png"
  },
  { 
    label: 'Broschüre "Die perfekte Finanzierung Ihres Eigenheims"', 
    file: "/documents/HYPOTEQ-Broschuere.pdf",
    flag: "/images/german.png"
  },
]}

          />
        )}
      </div>
    </section>
  );
}
