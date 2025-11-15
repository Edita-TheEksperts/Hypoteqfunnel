"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Personal Information",
    "Financial Information",
    "General Information",
  ];

  return (
    <section className="w-full bg-white py-[120px]  px-6 md:px-[116px] font-sfpro mt-[100px] text-[#132219]">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col gap-[120px]">
        
        {/* ===== TITLE + CATEGORIES TOGETHER ===== */}
        <div className="flex flex-col gap-[32px]">
          {/* TITLE */}
          <h1 className="text-[#132219] font-sfpro text-[48px] md:text-[72px] font-medium leading-[100%] tracking-[-0.72px]">
            Frequently Asked <br /> Questions
          </h1>

          {/* CATEGORIES + SEARCH */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 flex-wrap">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-[10px] items-center justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`h-[32px] px-[17px] flex items-center justify-center rounded-[50px] border border-[#132219] text-[15px] font-medium transition-all duration-200
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

            {/* Search Input */}
            <div className="relative flex items-center justify-between w-full md:w-[627px] h-[32px] border border-[#132219] rounded-[50px] opacity-60 px-[17px] py-[4px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-[15px] md:text-[16px] text-[#132219] placeholder:text-[#132219]/70 font-sfpro"
              />
              <Search size={17} className="text-[#132219]/70" />
            </div>
          </div>
        </div>

        {/* ===== PERSONAL INFORMATION SECTION ===== */}
        {(activeCategory === "All" ||
          activeCategory === "Personal Information") && (
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[60px] md:gap-[120px]">
            <div className="w-full lg:w-[45%]">
              <h2 className="text-[#132219] font-sfpro text-[36px] md:text-[48px] font-medium leading-[50px]">
                Personal Information
              </h2>
            </div>

            <div className="w-full lg:w-[55%] flex flex-col gap-[22px]">
              {[
                "Do I qualify if I’m self-employed or a contractor?",
                "What’s the minimum credit score to apply?",
                "Can I use a co-applicant or guarantor to qualify?",
                "Can I apply if I’m new to the country?",
                "How is my debt-to-income (DTI) ratio calculated?",
              ].map((question, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center w-full border border-[#132219] rounded-[58px] px-[20px] md:px-[24px] py-[8px] cursor-pointer hover:bg-[#132219]/5 transition"
                >
                  <p className="text-[15px] md:text-[16px] font-medium text-[#132219]">
                    {question}
                  </p>
                  <span className="text-[24px] md:text-[26px] font-light leading-none">
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== FINANCIAL INFORMATION SECTION ===== */}
        {(activeCategory === "All" ||
          activeCategory === "Financial Information") && (
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[60px] md:gap-[120px]">
            <div className="w-full lg:w-[45%]">
              <h2 className="text-[#132219] font-sfpro text-[36px] md:text-[48px] font-medium leading-[50px]">
                Financial Information
              </h2>
            </div>

            <div className="w-full lg:w-[55%] flex flex-col gap-[22px]">
              {[
                "What is LTV (loan-to-value) and why does it matter?",
                "Are there fees or penalties for early repayment?",
                "What closing costs should I budget for?",
                "What down payment do I need?",
              ].map((question, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center w-full border border-[#132219] rounded-[58px] px-[20px] md:px-[24px] py-[8px] cursor-pointer hover:bg-[#132219]/5 transition"
                >
                  <p className="text-[15px] md:text-[16px] font-medium text-[#132219]">
                    {question}
                  </p>
                  <span className="text-[24px] md:text-[26px] font-light leading-none">
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== GENERAL INFORMATION SECTION ===== */}
        {(activeCategory === "All" ||
          activeCategory === "General Information") && (
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[60px] md:gap-[120px]">
            <div className="w-full lg:w-[45%]">
              <h2 className="text-[#132219] font-sfpro text-[36px] md:text-[48px] font-medium leading-[50px]">
                General Information
              </h2>
            </div>

            <div className="w-full lg:w-[55%] flex flex-col gap-[22px]">
              {[
                "How long does the entire process usually take?",
                "What are the steps from pre-approval to closing?",
                "Can I apply online and upload documents securely?",
                "Do you work with multiple lenders or a single bank?",
                "Who will be my point of contact?",
              ].map((question, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center w-full border border-[#132219] rounded-[58px] px-[20px] md:px-[24px] py-[8px] cursor-pointer hover:bg-[#132219]/5 transition"
                >
                  <p className="text-[15px] md:text-[16px] font-medium text-[#132219]">
                    {question}
                  </p>
                  <span className="text-[24px] md:text-[26px] font-light leading-none">
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
