"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const firstRow = [
    {
      title: "Home Page",
      links: ["Quick Calculator", "Financing Request", "Mortgage Guide"],
    },
    {
      title: "Mortgage Calculator",
      links: [],
    },
    {
      title: "Mortgages",
      links: ["New Mortgage", "Refinancing", "New Construction"],
    },
    {
      title: "Guide",
      links: ["Interest Rate Trends", "Property Market", "Homeownership"],
    },
  ];

  const secondRow = [
    {
      title: "About Us",
      links: ["Mission", "Team", "Partners"],
      extra: "Imprint & Data Protection",
    },
    {
      title: "Partners & White Label",
      links: ["API", "Platform Integration"],
    },
    {
      title: "Contact & Consolation",
      links: ["Consultation Form", "Locations"],
    },
    {
      title: "Downloads & Checklists",
      links: ["Interest Rate Trends", "Property Market", "Homeownership"],
    },
  ];

  return (
    <footer className="bg-white text-[#132219] font-['SF Pro Display'] border-t border-[#E5E5E5] w-full">
      <div className="max-w-[1273px] mx-auto grid grid-cols-[168px_repeat(4,minmax(0,1fr))] gap-x-[108px] gap-y-[43px] px-[60px] pt-[70px] pb-[50px]">

        {/* === Column 1: Logo + Address === */}
        <div className="flex flex-col gap-[35px]">
          <Image
            src="/images/logo.png"
            alt="Hypoteq Logo"
            width={145}
            height={38}
            className="object-contain"
          />
          <p className="text-[14px] text-[#132219]/80">Address</p>
        </div>

        {/* === First Row === */}
        {firstRow.map((col, i) => (
          <div key={i} className="flex flex-col gap-[5px]">
            <h4 className="text-[18px] font-semibold mb-[48px]">{col.title}</h4>
            {col.links.length > 0 && (
              <ul className="flex flex-col gap-[2px]">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-[15px] font-normal text-[#132219] hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* === Second Row === */}
        <div></div> {/* bosh poshtë logos */}
        {secondRow.map((col, i) => (
          <div key={i} className="flex flex-col gap-[5px]">
            <h4 className="text-[18px] font-semibold mb-[56px] leading-[1.1]">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-[1px] mt-[2px]">
              {col.links.map((link, j) => (
                <li key={j}>
                  <a
                    href="#"
                    className="text-[15px] font-normal text-[#132219] hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Vetëm për About Us */}
            {col.extra && (
              <h4 className="text-[18px] font-semibold mt-[48px] whitespace-nowrap">
                {col.extra}
              </h4>
            )}
          </div>
        ))}

        {/* === NEWSLETTER SECTION (Input box + Button poshtë) === */}
        <div className="col-start-2 col-span-4 flex flex-col gap-[10px] mt-[120px] mb-[120px]">
          <h4 className="text-[18px] font-semibold">
            Subscribe to our Newsletter
          </h4>

          {/* Input frame */}
          <div className="flex items-center h-[48px] w-full border border-[rgba(0,0,0,0.3)] bg-[rgba(0,0,0,0.1)] rounded-[10px] px-[17px]">
            <input
              type="email"
              placeholder="Write your email"
              className="flex-1 bg-transparent text-[14px] placeholder:text-[#9A9A9A] focus:outline-none"
            />
          </div>

          {/* Button jashtë kutisë gri */}
          <button className="flex items-center justify-center gap-[6px] self-end px-[20px] py-[9px] w-[120px] rounded-full bg-[#CAF476] hover:bg-[#b9eb67] text-[#132219] text-[14px] font-medium transition mt-[8px]">
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[13px] h-[13px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
