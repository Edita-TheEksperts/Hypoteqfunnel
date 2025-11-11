"use client";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [openLang, setOpenLang] = useState(false);
  const [language, setLanguage] = useState("de"); // default: german

  const handleSelect = (lang) => {
    setLanguage(lang);
    setOpenLang(false);
  };

  return (
    <section
      className="relative w-full overflow-x-hidden font-sfpro min-h-[500px] sm:min-h-[100vh]"
    >
      {/* Background images */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10 block sm:hidden h-[500px]"
        style={{
          backgroundImage: "url('/images/mobilehome.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10 hidden sm:block h-full"
        style={{
          backgroundImage: "url('/images/photohero.png')",
        }}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-start h-full max-w-[1579px] w-full mx-auto 
        px-[20px] pt-[70px] gap-[10px]
        sm:px-[118px] sm:pt-[150px]"
      >
        {/* Heading */}
        <h1
          className="text-[#132219] font-medium max-w-[880px]
          text-[48px] leading-[100%] tracking-[-0.48px]
          sm:text-[100px] sm:leading-[100%] sm:tracking-[-1.28px]"
        >
          In drei Klicks <br />
          zu deiner <br />
          Hypothek
        </h1>

        <p
          className="text-[#132219]/80 max-w-[580px]
          text-[16px] leading-[140%] font-[400] mt-[12px]
          sm:text-[20px] sm:leading-snug sm:mt-[24px]"
        >
          Erhalte dein persönliches Hypothekarangebot online – schnell, sicher
          und transparent. Vergleiche verschiedene Optionen, berechne deine
          monatlichen Kosten und starte deinen Finanzierungsprozess mit
          Vertrauen – alles in nur drei Klicks.
        </p>

        {/* CTA + Language */}
        <div className="flex items-center gap-[16px] mt-[24px] sm:mt-[16px] relative">
          {/* Button */}
          <button
            className="flex items-center justify-center 
            w-[234px] h-[40px] 
            px-[24px] py-[8px] 
            gap-[10px]
            rounded-[45px]
            bg-[#132219] text-[#CAF476] 
            text-[20px] font-semibold 
            hover:opacity-90 transition-all"
          >
            Hypothek berechnen
          </button>

          {/* Language dropdown */}
          <div className="relative">
            {/* Trigger (flag) */}
            <button
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center justify-center w-[62px] h-[38px] rounded-full overflow-hidden border border-[#e6e6e6] bg-white shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src={
                  language === "de"
                    ? "/images/german.png"
                    : "/images/united-kingdom.png"
                }
                alt={language === "de" ? "German" : "English"}
                width={62}
                height={38}
                  unoptimized
                className="object-cover"
              />
            </button>

            {/* Dropdown menu */}
            {openLang && (
              <div
                className="absolute right-0 mt-2 w-[160px] bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden animate-fadeIn"
              >
                <button
                  onClick={() => handleSelect("de")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-[#132219] hover:bg-gray-50 text-[16px]"
                >
                  <Image
                    src="/images/german.png"
                    alt="Deutsch"
                    width={28}
                    height={18}
                    className="rounded-sm"
                      unoptimized
                  />
                  Deutsch
                </button>
                <button
                  onClick={() => handleSelect("en")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-[#132219] hover:bg-gray-50 text-[16px]"
                >
                  <Image
                    src="/images/united-kingdom.png"
                    alt="English"
                    width={28}
                    height={18}
                    className="rounded-sm"
                      unoptimized
                  />
                  Englisch
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Partners section (unchanged) */}
        <div className="hidden sm:flex flex-col mt-[80px] gap-[24px]">
          <p className="text-[#132219]/70 text-[16px] font-normal">
            In Zusammenarbeit mit:
          </p>
          <div
            className="flex items-center justify-between w-full max-w-[1579px] mx-auto gap-[32px]
            whitespace-nowrap overflow-x-auto overflow-y-visible mb-[42px] pt-[4px]"
          >
            <Image src="/images/UBS-LogoBlack.svg" alt="UBS" width={213} height={52} />
            <Image src="/images/24.png" alt="ZKB" width={213} height={52} />
            <Image src="/images/Bank_Cler_logo.png" alt="Cler" width={222} height={44} />
            <Image src="/images/Raiffeisen_Schweiz_Logo.png" alt="Raiffeisen" width={242} height={36} />
            <Image src="/images/67.svg" alt="SNB" width={223} height={36} />
          </div>
        </div>
      </div>
    </section>
  );
}
