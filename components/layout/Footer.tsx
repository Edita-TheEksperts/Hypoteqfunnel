"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#132219] font-sfpro border-t border-[#E5E5E5] w-full px-[20px] md:px-[116px]">
      <div className="max-w-[1579px] mx-auto pt-[50px] pb-[60px] flex flex-col gap-[108px]">

        {/* ------------------------------------------------ */}
        {/* 🔹 ROW 1 — Logo + 3 Columns */}
        {/* ------------------------------------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-[108px] max-lg:gap-[48px]">
          
          {/* LEFT — Logo + Address */}
          <div className="flex flex-col items-start max-sm:items-center max-sm:text-center">
            <Image
              src="/images/logo.png"
              alt="Hypoteq Logo"
              width={145}
              height={38}
              className="object-contain mb-[22px] max-sm:mb-[16px]"
            />

            <p className="text-[20px] leading-[24px] mb-[12px]">HYPOTEQ AG</p>
            <p className="text-[20px] leading-[24px] mb-[12px]">
              Löwenstrasse 29 <br /> 8001 Zürich
            </p>
            <p className="text-[20px] leading-[24px] mb-[12px]">
              Telefon: <br /> 044 554 41 00
            </p>
            <p className="text-[20px] leading-[24px]">
              E-Mail-Adresse: <br /> info@hypoteq.ch
            </p>
          </div>

          {/* RIGHT — 3 Columns */}
          <div className="grid grid-cols-3 gap-x-[64px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]">
            <FooterColumn
              title="Home Page"
              links={[
                { label: "Hypoteq’s beste Auswahl", href: "#" },
                { label: "Hypothekenrechner", href: "#" },
                { label: "So funktioniert’s", href: "#" },
                { label: "Immobilienbewertung", href: "#" },
                { label: "Deine Vorteile mit HYPOTEQ", href: "#" },
                { label: "Testimonials", href: "#" },
                { label: "Hypotheken Guide", href: "#" },
              ]}
            />

            <FooterColumn
              title="Über uns"
              links={[
                { label: "Unsere Mission", href: "#" },
                { label: "Unser Team", href: "#" },
                { label: "Unsere Partner", href: "#" },
                { label: "Werde Teil von HYPOTEQ", href: "#" },
              ]}
            />

            <FooterColumn
              title="Hypothekenrechner"
              links={[
                { label: "Berechne deine Hypothek", href: "#" },
                { label: "Geschätzte Kosten im Detail", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* 🔹 ROW 2 — NEWS + 3 Columns */}
        {/* ------------------------------------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-[108px] max-lg:gap-[48px]">

          {/* LEFT — NEWS (Perfect FIGMA position) */}
          <div>
            <h4 className="text-[24px] font-[600]">News</h4>
          </div>

          {/* RIGHT — 3 Columns */}
          <div className="grid grid-cols-3 gap-x-[64px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]">
            <FooterColumn
              title="Hypotheken leicht gemacht"
              links={[
                { label: "Neuhypothek", href: "#" },
                { label: "Refinanzierung", href: "#" },
                { label: "Neubau-Finanzierung", href: "#" },
              ]}
            />

            <FooterColumn
              title="Kontaktiere uns"
              links={[
                { label: "Schreibe uns", href: "#" },
                { label: "Ruf uns an", href: "#" },
                { label: "Standort", href: "#" },
              ]}
            />

            <FooterColumn
              title="Frequently Asked Questions"
              links={[
                { label: "Persönliche Informationen", href: "#" },
                { label: "Finanzielle Informationen", href: "#" },
                { label: "Allgemeine Informationen", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* 🔹 ROW 3 — Other Columns */}
        {/* ------------------------------------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-[108px] max-lg:gap-[48px]">
          <div></div>

          <div className="grid grid-cols-3 gap-x-[64px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]">
            <FooterColumn title="Dokumente" links={[{ label: "Checklisten & Formulare", href: "#" }]} />

            <FooterColumn
              title="Werde HYPOTEQ Partner"
              links={[
                { label: "Was dich bei uns erwartet", href: "#" },
                { label: "Unsere Vorteile", href: "#" },
                { label: "Deine Vorteile und dein Einstieg", href: "#" },
                { label: "FAQ", href: "#" },
              ]}
            />

            <FooterColumn
              title="Mezzanine-Finanzierung"
              links={[
                { label: "Was ist Mezzanine?", href: "#" },
                { label: "Wann ist Mezzanine sinnvoll?", href: "#" },
                { label: "Wie funktioniert das?", href: "#" },
                { label: "Gemeinsam möglich machen", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* 🔹 ROW 4 — Bottom area */}
        {/* ------------------------------------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-[108px]">
          <div></div>

          <div className="flex flex-col gap-[80px] max-sm:gap-[40px]">
            <div className="flex justify-between max-w-[476px] max-sm:flex-col max-sm:items-center max-sm:gap-[12px]">
              <h4 className="text-[20px] font-[600]">Immobilienbewertung</h4>
              <h4 className="text-[20px] font-[600]">Impressum & Datenschutz</h4>
            </div>

            <div className="flex flex-col gap-[24px] max-sm:items-center">
              <h4 className="text-[36px] font-[400] max-sm:text-[26px] text-center">
                Smart Finance – Zuerst vergleicht. <br /> Dann vertrauen.
              </h4>

              <div className="flex items-center gap-[16px] max-sm:flex-col max-sm:w-full">
                <div className="flex items-center border border-[#000]/70 rounded-[58px] px-[24px] py-[8px] opacity-[0.7] w-[720px] max-sm:w-full">
                  <input
                    type="email"
                    placeholder="Abonniere unseren Newsletter"
                    className="flex-1 bg-transparent text-[16px] placeholder:text-[#9A9A9A] focus:outline-none"
                  />
                </div>

                <button className="flex justify-center items-center w-[168px] py-[8px] px-[24px] rounded-[58px] border border-[#000] bg-[#CAF476] hover:bg-[#b9eb67]">
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
  links: { label: string; href: string }[];
}) => {
  return (
    <div className="flex flex-col items-start w-[258px] gap-[16px]">
      <h4 className="text-[#132219] text-[24px] font-[600] mb-[24px]">{title}</h4>
      <ul className="flex flex-col gap-[16px] w-full">
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href} className="text-[#132219] text-[20px] hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
