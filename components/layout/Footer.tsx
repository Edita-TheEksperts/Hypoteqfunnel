"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#132219] font-sfpro border-t border-[#E5E5E5] w-full px-[20px] md:px-[116px]">
      <div className="max-w-[1579px] mx-auto pt-[50px] pb-[60px] flex flex-col gap-[108px]">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-[108px] max-lg:gap-[48px]">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-start max-sm:items-center max-sm:text-center">
            <Image
              src="/images/logo.png"
              alt="Hypoteq Logo"
              width={145}
              height={38}
              className="object-contain mb-[22px]"
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

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-3 gap-x-[64px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]">

            <FooterColumn
              title={<a href="/" className="hover:underline">Home</a>}
              links={[
      
              ]}
            />

            <FooterColumn
              title={<a href="/about" className="hover:underline">Über uns</a>}
              links={[
    
              ]}
            />

            <FooterColumn
              title={<a href="/calc" className="hover:underline">Hypothekenrechner</a>}
              links={[
   
              ]}
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-[108px] max-lg:gap-[48px]">

       <div>
  <a
    href="https://www.linkedin.com/company/hypoteq-ag/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[24px] font-[600] hover:underline"
  >
    Neuigkeiten
  </a>
</div>


          <div className="grid grid-cols-3 gap-x-[64px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]">

            <FooterColumn
              title={<a className="hover:underline">Hypotheken leicht gemacht</a>}
              links={[
   
              ]}
            />

            <FooterColumn
              title={<a href="/contact" className="hover:underline">Kontaktiere uns</a>}
              links={[

              ]}
            />
<FooterColumn
  title={
    <a href="/faq" className="hover:underline">
      Frequently Asked Questions
    </a>
  }
  links={[]}
/>

          </div>
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-[108px] max-lg:gap-[48px]">
          <div></div>

          <div className="grid grid-cols-3 gap-x-[64px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[36px]">

            <FooterColumn
              title={<a href="/documents" className="hover:underline">Dokumente</a>}
              links={[

              ]}
            />

            <FooterColumn
              title={<a href="/partner" className="hover:underline">Werde HYPOTEQ Partner</a>}
              links={[

              ]}
            />

            <FooterColumn
              title={<a href="/advisory" className="hover:underline">HYPOTEQ Advisory</a>}
              links={[
        
              ]}
            />

            <FooterColumn
              title={<a href="/mezzanine" className="hover:underline">Mezzanine-Finanzierung</a>}
              links={[

              ]}
              className="mt-[80px]"
            />

            <FooterColumn
              title={<a href="/contact" className="hover:underline">Impressum & Datenschutz</a>}
              links={[

              ]}
              className="mt-[80px]"
            />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-[108px]">
          <div></div>

          <div className="flex flex-col gap-[80px]">
            <div className="flex justify-between max-w-[476px] max-sm:flex-col max-sm:items-center gap-[12px]">
              <h4 className="text-[20px] font-[600]">Immobilienbewertung</h4>
              <h4 className="text-[20px] font-[600]">Impressum & Datenschutz</h4>
            </div>

            <div className="flex flex-col gap-[24px] max-sm:items-center text-center">
              <h4 className="text-[36px] font-[400] max-sm:text-[26px]">
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
  className = "",
}: {
  title: React.ReactNode;
  links?: { label: string; href: string }[];
  className?: string;
}) => {
  return (
    <div className={`flex flex-col items-start w-[258px] gap-[16px] ${className}`}>
      <h4 className="text-[#132219] text-[24px] font-[600] mb-[24px]">
        {title}
      </h4>

      {links && links.length > 0 && (
        <ul className="flex flex-col gap-[16px] w-full">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="text-[#132219] text-[20px] hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Footer;
