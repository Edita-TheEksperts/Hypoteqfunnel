"use client";
import { useState } from "react";

export default function DocumentsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Mortgage checklist for a home",
    "Authorization to provide information",
    "Mortgage checklist for a return property",
    "HYPOTEQ information material",
  ];

type SectionProps = {
  title: string;
  docs: string[];
};

const Section = ({ title, docs }: SectionProps) => (

    <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[40px] md:gap-[80px] lg:gap-[120px]">
      {/* LEFT SIDE - TITLE */}
      <div className="w-full lg:w-[45%]">
        <h2 className="text-[#132219] font-sfpro text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px]  font-medium leading-[120%]">
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
            <img
              src="/images/documents.svg"
              alt="document icon"
              className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-[80px] sm:py-[100px] md:py-[120px] px-4 sm:px-6 md:px-10 font-sfpro text-[#132219]">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col gap-[80px] sm:gap-[100px] md:gap-[120px]">

        {/* ===== TITLE + FILTERS ===== */}
        <div className="flex flex-col gap-[24px] sm:gap-[32px]">
          <h1 className="text-[#132219] font-sfpro text-[40px] sm:text-[52px] md:text-[72px] font-medium leading-[100%] tracking-[-0.72px]">
            Documents
          </h1>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-[10px] items-center justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`h-[32px] px-[17px] flex items-center justify-center rounded-[50px] border border-[#132219] text-[14px] sm:text-[15px] font-medium transition-all duration-200
                  ${
                    activeCategory === category
                      ? "bg-[#132219] text-white"
                      : "bg-white text-[#132219] hover:bg-[#132219]/5"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ===== MORTGAGE CHECKLIST FOR A HOME ===== */}
        {(activeCategory === "All" ||
          activeCategory === "Mortgage checklist for a home") && (
          <Section
            title="Mortgage checklist for a home"
            docs={[
              "Checklist for self-occupied residential property",
              "List of control for the dwellings in the occupied property",
              "List of control by the dwelling occupied by the owners",
              "Checklist for owner-occupied property",
            ]}
          />
        )}

        {/* ===== AUTHORIZATION TO PROVIDE INFORMATION ===== */}
        {(activeCategory === "All" ||
          activeCategory === "Authorization to provide information") && (
          <Section
            title="Authorization to provide information"
            docs={[
              "Authorization to provide information",
              "Pouvoir d'information",
              "Search for information",
              "Authorization for information",
            ]}
          />
        )}

        {/* ===== MORTGAGE CHECKLIST FOR A RETURN PROPERTY ===== */}
        {(activeCategory === "All" ||
          activeCategory === "Mortgage checklist for a return property") && (
          <Section
            title="Mortgage checklist for a return property"
            docs={[
              "Checklist for investment properties",
              "List of control for buildings à rendement",
              "List of control by real estate income",
              "Checklist for investment properties",
            ]}
          />
        )}

        {/* ===== HYPOTEQ INFORMATION MATERIAL ===== */}
        {(activeCategory === "All" ||
          activeCategory === "HYPOTEQ information material") && (
          <Section
            title="HYPOTEQ information material"
            docs={[
              'Flyer "Easy and fast to a cheap mortgage"',
              'Brochure "The perfect financing of your own home"',
              "List of control by real estate income",
              "Checklist for investment properties",
            ]}
          />
        )}
      </div>
    </section>
  );
}
