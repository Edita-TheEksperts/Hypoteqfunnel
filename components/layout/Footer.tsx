"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#132219] font-sfpro border-t border-[#E5E5E5] w-full">
      <div
        className="
          max-w-[1275px] mx-auto px-[20px] md:px-[40px] 
          pt-[50px] pb-[60px] flex flex-col gap-[108px]
          max-sm:gap-[64px] max-sm:pt-[40px] max-sm:pb-[50px]
        "
      >
        {/* 🔹 Row 1 — Logo + 3 Columns */}
        <div
          className="
            grid grid-cols-[200px_1fr] gap-x-[108px]
            max-lg:grid-cols-1 max-lg:gap-[48px]
          "
        >
          {/* ✅ Logo + Address */}
          <div className="flex flex-col items-start max-sm:items-center max-sm:text-center">
            <Image
              src="/images/logo.png"
              alt="Hypoteq Logo"
              width={145}
              height={38}
              className="object-contain mb-[22px] max-sm:mb-[16px]"
            />

            <p className="text-[20px] leading-[24px] font-[400] text-[#132219] mb-[12px] max-sm:text-[16px]">
              HYPOTEQ AG
            </p>
            <p className="text-[20px] leading-[24px] font-[400] text-[#132219] mb-[12px] max-sm:text-[16px]">
              Löwenstrasse 29 <br /> 8001 Zürich
            </p>
            <p className="text-[20px] leading-[24px] font-[400] text-[#132219] mb-[12px] max-sm:text-[16px]">
              Telefon: <br /> 044 554 41 00
            </p>
            <p className="text-[20px] leading-[24px] font-[400] text-[#132219] max-sm:text-[16px]">
              E-Mail-Adresse: <br /> info@hypoteq.ch
            </p>
          </div>

          {/* ✅ 3 Column Grid */}
          <div
            className="
              grid grid-cols-3 gap-x-[64px]
              max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]
            "
          >
            <FooterColumn
              title="Home Page"
              links={[
                "Hypoteq’s beste Auswahl",
                "Hypothekenrechner",
                "So funktioniert’s",
                "Immobilienbewertung",
                "Deine Vorteile mit HYPOTEQ",
                "Testimonials",
                "Hypotheken Guide",
              ]}
            />
            <FooterColumn
              title="Über uns"
              links={[
                "Unsere Mission",
                "Unser Team",
                "Unsere Partner",
                "Werde Teil von HYPOTEQ",
              ]}
            />
            <FooterColumn
              title="Hypothekenrechner"
              links={["Berechne deine Hypothek", "Geschätzte Kosten im Detail"]}
            />
          </div>
        </div>

        {/* 🔹 Row 2 */}
        <div
          className="
            grid grid-cols-[200px_1fr] gap-x-[108px]
            max-lg:grid-cols-1 max-lg:gap-[48px]
          "
        >
          <div></div>
          <div
            className="
              grid grid-cols-3 gap-x-[64px]
              max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]
            "
          >
            <FooterColumn
              title="Hypotheken leicht gemacht"
              links={["Neuhypothek", "Refinanzierung", "Neubau-Finanzierung"]}
            />
            <FooterColumn
              title="Kontaktiere uns"
              links={["Schreibe uns", "Ruf uns an", "Standort"]}
            />
            <FooterColumn
              title="Frequently Asked Questions"
              links={[
                "Persönliche Informationen",
                "Finanzielle Informationen",
                "Allgemeine Informationen",
              ]}
            />
          </div>
        </div>

        {/* 🔹 Row 3 */}
        <div
          className="
            grid grid-cols-[200px_1fr] gap-x-[108px]
            max-lg:grid-cols-1 max-lg:gap-[48px]
          "
        >
          <div></div>
          <div
            className="
              grid grid-cols-3 gap-x-[64px]
              max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]
            "
          >
            <FooterColumn title="Dokumente" links={["Checklisten & Formulare"]} />
            <FooterColumn
              title="Werde HYPOTEQ Partner"
              links={[
                "Was dich bei uns erwartet",
                "Unsere Vorteile",
                "Deine Vorteile und dein Einstieg",
                "Frequently Asked Questions",
              ]}
            />
            <FooterColumn
              title="Mezzanine-Finanzierung"
              links={[
                "Was ist Mezzanine?",
                "Wann ist Mezzanine sinnvoll?",
                "Wie funktioniert das?",
                "Gemeinsam möglich machen",
              ]}
            />
          </div>
        </div>

        {/* 🔹 Row 4 — Bottom links + Newsletter */}
        <div
          className="
            grid grid-cols-[200px_1fr] gap-x-[108px]
            max-lg:grid-cols-1 max-lg:gap-[48px]
          "
        >
          <div></div>
          <div className="flex flex-col gap-[80px] max-sm:gap-[40px]">
            {/* Home evaluation + Imprint */}
            <div
              className="
                flex justify-between items-start w-full max-w-[476px]
                max-sm:flex-col max-sm:items-center max-sm:gap-[12px]
              "
            >
              <h4 className="text-[20px] font-[600] leading-[24px] max-sm:text-[17px]">
                Immobilienbewertung
              </h4>
              <h4 className="text-[20px] font-[600] leading-[24px] max-sm:text-[17px]">
                Impressum & Datenschutz
              </h4>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-[24px] max-sm:gap-[20px] max-sm:items-center">
      <h4
  className="
    text-[36px] sm:text-[36px]
    font-[400]
    text-[#000000]
    leading-[normal]
    font-[sfpro]
    tracking-normal
    align-self-stretch
    max-sm:text-[26px] max-sm:leading-[120%] max-sm:text-center
  "
>
  Smart Finance – Zuerst vergleicht. <br /> Dann vertrauen.
</h4>


              <div
                className="
                  flex items-center gap-[16px]
                  max-sm:flex-col max-sm:gap-[16px] max-sm:w-full
                "
              >
                {/* Input Field */}
                <div
                  className="
                    flex items-center border border-[#000]/70 rounded-[58px] px-[24px] py-[8px] opacity-[0.7]
                    w-[720px] max-sm:w-full max-sm:max-w-[340px]
                  "
                >
                  <input
                    type="email"
                    placeholder="Abonniere unseren Newsletter"
                    className="flex-1 bg-transparent text-[16px] text-[#132219] placeholder:text-[#9A9A9A] focus:outline-none max-sm:text-[14px]"
                  />
                </div>

                {/* Send Button */}
                <button
                  className="
                    flex justify-center items-center w-[168px] py-[8px] px-[24px] gap-[10px]
                    rounded-[58px] border border-[#000] bg-[#CAF476]
                    text-[#132219] text-[16px] font-[600] leading-normal
                    hover:bg-[#b9eb67] transition
                    max-sm:w-full max-sm:max-w-[340px] max-sm:py-[10px]
                  "
                >
                  Anmelden
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div className="flex flex-col items-start w-[258px] gap-[16px] max-sm:w-full max-sm:items-center max-sm:text-center">
    <h4 className="text-[#132219] font-['SF Pro Display'] text-[24px] font-[600] leading-normal mb-[24px] w-full max-sm:text-[20px]">
      {title}
    </h4>
    <ul className="flex flex-col gap-[16px] w-full">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href="#"
            className="text-[#132219] font-['SF Pro Display'] text-[20px] font-[400] leading-[24px] hover:underline max-sm:text-[16px]"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
