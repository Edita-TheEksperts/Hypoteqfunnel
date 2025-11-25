"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-[#132219] font-sfpro border-t border-[#E5E5E5] w-full px-[20px] md:px-[116px]">
      <div className="max-w-[1579px] mx-auto pt-[50px] pb-[60px] flex flex-col gap-[108px]">

        {/* ROW 1 — LEFT INFO + RIGHT 3-COLUMN GRID */}
        <div className="grid grid-cols-[200px_858px] max-lg:grid-cols-1 gap-x-[108px]">

          {/* LEFT */}
          <div className="flex flex-col items-start max-sm:items-center max-sm:text-center">
            <Image
              src="/images/logo.png"
              alt="Hypoteq Logo"
              width={145}
              height={38}
              className="object-contain mb-[65px]"
            />

            <p className="text-[20px] leading-[24px] mb-[12px]">HYPOTEQ AG</p>
            <p className="text-[20px] leading-[24px] mb-[12px]">
              Löwenstrasse 29 <br /> 8001 Zürich
            </p>
            <p className="text-[20px] leading-[24px] mb-[12px]">
              Telefonnummer: <br /> 044 554 41 00
            </p>
            <p className="text-[20px] leading-[24px]">
              E-Mail-Adresse: <br /> info@hypoteq.ch
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-3 gap-x-[64px] gap-y-[67px] max-lg:grid-cols-2 max-sm:grid-cols-1">

            <FooterColumn title="Home Page" />
            <FooterColumn title="Über uns" href="about"/>
            <FooterColumn title="Hypothekenrechner" href="calc" />

            <FooterColumn title="Hypotheken leicht gemacht" href="hypotheken" />
            <FooterColumn title="Kontaktiere uns"  href="contact"/>
            <FooterColumn title="Frequently Asked Questions" href="/faq" />

            <FooterColumn title="Dokumente" href="/documents" />
            <FooterColumn title="Werde HYPOTEQ Partner" href="/partner" />
            <FooterColumn title="HYPOTEQ Advisory" href="/advisory" />

            <FooterColumn title="Mezzanine-Finanzierung" href="/mezzanine" />
            <FooterColumn title="Impressum & Datenschutz" href="/contact" />
            <FooterColumn title="Neuigkeiten" href="https://www.linkedin.com/company/hypoteq-ag/" />
          </div>

        </div>

        {/* ROW 2 – After 120px */}
        <div className="grid grid-cols-[200px_858px] max-lg:grid-cols-1 gap-x-[108px] mt-[120px]">

          <div></div>
<div className="flex flex-col gap-[24px] max-sm:items-center text-center w-full">

  {/* Title */}
  <h4 className="text-[36px] font-[400] leading-normal text-[#000] w-full text-left max-sm:text-center">
    Smart Finance – Zuerst vergleicht. <br /> Dann vertrauen.
  </h4>

  {/* Input + Button */}
  <div className="flex items-center gap-[16px] max-sm:flex-col max-sm:w-full w-full">

    {/* Input Wrapper */}
    <div className="flex items-center border border-[#000]/70 rounded-[58px] px-[24px] py-[8px] opacity-[0.7] w-full max-w-[906px] max-sm:w-full">
      <input
        type="email"
        placeholder="Subscribe to our newsletter"
        className="flex-1 bg-transparent text-[16px] placeholder:text-[#9A9A9A] focus:outline-none"
      />
    </div>

    {/* Button */}
    <button className="flex justify-center items-center w-[168px] py-[8px] px-[24px] rounded-[58px] border border-[#000] bg-[#CAF476] hover:bg-[#b9eb67] whitespace-nowrap">
      Anmelden
    </button>
  </div>
</div>

        </div>

      </div>
    </footer>
  );
};

const FooterColumn = ({
  title,
  href = "#"
}: {
  title: string;
  href?: string;
}) => {
  return (
    <div className="flex flex-col w-[258px]">
      <a href={href} className="text-[24px] font-[600] hover:underline">
        {title}
      </a>
    </div>
  );
};

export default Footer;
