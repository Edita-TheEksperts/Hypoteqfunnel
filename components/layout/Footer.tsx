"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Shtohet

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
      <div className="max-w-[1273px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[168px_repeat(4,minmax(0,1fr))] gap-y-[40px] md:gap-y-[60px] gap-x-[40px] md:gap-x-[60px] lg:gap-x-[108px] px-[20px] sm:px-[40px] md:px-[60px] pt-[50px] md:pt-[70px] pb-[60px]">

        <div className="flex flex-col gap-[25px] md:gap-[35px] items-start">
          <Image src="/images/logo.png" alt="Hypoteq Logo" width={145} height={38} className="object-contain w-[120px] sm:w-[145px]" />
          <h4 className="text-[#132219] text-[16px] font-[400] leading-normal font-['SF Pro Display']">Address</h4>
        </div>

        {firstRow.map((col, i) => (
          <div key={i} className="flex flex-col gap-[5px]">
            <h4 className="text-[16px] sm:text-[18px] font-semibold mb-[20px] sm:mb-[48px]">{col.title}</h4>
            {col.links.length > 0 && (
              <ul className="flex flex-col gap-[2px]">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-[14px] sm:text-[15px] font-normal text-[#132219] hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="hidden lg:block"></div>

        {secondRow.map((col, i) => (
          <div key={i} className="flex flex-col gap-[5px]">

            {col.title === "About Us" ? (
              <Link href="/about" className="text-[16px] sm:text-[18px] font-semibold mb-[20px] sm:mb-[56px] leading-[1.1] hover:underline">
                {col.title}
              </Link>
            ) : (
              <h4 className="text-[16px] sm:text-[18px] font-semibold mb-[20px] sm:mb-[56px] leading-[1.1]">{col.title}</h4>
            )}

            <ul className="flex flex-col gap-[1px] mt-[2px]">
        {col.links.map((link, j) => (
  <li key={j}>
    {link === "Quick Calculator" ? (
      <Link
        href="/calc"
        className="text-[14px] sm:text-[15px] font-normal text-[#132219] hover:underline"
      >
        {link}
      </Link>
    ) : (
      <a
        href="#"
        className="text-[14px] sm:text-[15px] font-normal text-[#132219] hover:underline"
      >
        {link}
      </a>
    )}
  </li>
))}

            </ul>

            {col.extra && (
              <h4 className="text-[16px] sm:text-[18px] font-semibold mt-[30px] sm:mt-[48px] whitespace-nowrap">{col.extra}</h4>
            )}
          </div>
        ))}

        <div className="col-span-full flex flex-col gap-[10px] mt-[60px] md:mt-[100px] mb-[80px] md:mb-[120px]">
          <h4 className="text-[16px] sm:text-[18px] font-semibold text-center md:text-left">Subscribe to our Newsletter</h4>

          <div className="flex items-center h-[45px] sm:h-[48px] w-full border border-[rgba(0,0,0,0.3)] bg-[rgba(0,0,0,0.05)] rounded-[10px] px-[14px] sm:px-[17px]">
            <input type="email" placeholder="Write your email" className="flex-1 bg-transparent text-[13px] sm:text-[14px] placeholder:text-[#9A9A9A] focus:outline-none" />
          </div>

          <button className="flex items-center justify-center gap-[6px] self-center md:self-end px-[20px] py-[9px] w-[110px] sm:w-[120px] rounded-full bg-[#CAF476] hover:bg-[#b9eb67] text-[#132219] text-[13px] sm:text-[14px] font-medium transition mt-[8px]">
            Send
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[13px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
