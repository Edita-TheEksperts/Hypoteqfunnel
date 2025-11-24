"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [openLang, setOpenLang] = useState(false);

  return (
    <section className="relative w-full overflow-hidden font-sfpro min-h-[100vh]">
      {/* ✅ Background (works for all screens) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10"
        style={{
          backgroundImage: "url('/images/fotoHeroSection.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* ✅ Content */}
      <div
        className="relative z-10 flex flex-col justify-start h-full w-full mx-auto
        px-6 sm:px-[116px] pt-[120px] sm:pt-[150px] gap-6 sm:gap-[16px]"
      >
        {/* ✅ Heading */}
        <h1
          className="text-[#132219] font-medium
          text-[42px] sm:text-[100px]
          leading-[110%] sm:leading-[100%]
          tracking-[-0.6px] sm:tracking-[-1.28px]
          max-w-[95%] sm:max-w-[880px]"
        >
          In drei Schritten <br />
          zu deiner <br />
          Hypothek
        </h1>

        {/* ✅ Paragraph */}
        <p
          className="text-[#132219]/80
          text-[18px] sm:text-[20px]
          leading-[150%] sm:leading-snug
          font-[400]
          mt-4 sm:mt-[24px]
          max-w-[95%] sm:max-w-[800px]"
        >
          Erhalte dein persönliches Hypothekarangebot online <br/> – <strong>schnell, sicher
          und transparent. </strong><br/>Vergleiche verschiedene Optionen, berechne deine
          monatlichen Kosten<br/>  und starte deinen Finanzierungsprozess - alles nur in drei Schritten<br/> Zuerst vergleichen - dann vertrauen
        </p>

        {/* ✅ CTA Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[14px] mt-6 sm:mt-[16px] w-full">
<Link href="/calc" className="w-full sm:w-[234px]">
  <button
    className="flex items-center justify-center 
    w-full
    h-[54px] sm:h-[48px]
    px-[20px] py-[10px]
    rounded-[45px]
    bg-[#132219] text-[#CAF476]
    text-[18px] sm:text-[20px] font-semibold
    hover:opacity-90 transition-all"
  >
    Hypothek berechnen
  </button>
</Link>

        </div>

{/*
<div className="flex flex-col mt-[60px] sm:mt-[80px] gap-[16px] sm:gap-[24px]">
  <p className="text-[#132219]/70 text-[15px] sm:text-[16px] font-normal">
    In Zusammenarbeit mit:
  </p>

  <div
    className="
      flex flex-wrap sm:flex-nowrap
      items-center justify-start sm:justify-between
      gap-x-[24px] gap-y-[16px] sm:gap-x-[32px]
      mb-[30px] sm:mb-[42px]
    "
  >
    <Image
      src="/images/UBS-LogoBlack.svg"
      alt="UBS"
      width={130}
      height={36}
      className="h-[32px] sm:h-[52px] w-auto shrink-0"
    />
    <Image
      src="/images/24.png"
      alt="ZKB"
      width={130}
      height={36}
      className="h-[32px] sm:h-[52px] w-auto shrink-0"
    />
    <Image
      src="/images/Bank_Cler_logo.png"
      alt="Cler"
      width={140}
      height={32}
      className="h-[32px] sm:h-[44px] w-auto shrink-0"
    />
    <Image
      src="/images/Raiffeisen_Schweiz_Logo.png"
      alt="Raiffeisen"
      width={150}
      height={28}
      className="h-[30px] sm:h-[36px] w-auto shrink-0"
    />
    <Image
      src="/images/67.svg"
      alt="SNB"
      width={140}
      height={28}
      className="h-[30px] sm:h-[36px] w-auto shrink-0"
    />
  </div>
</div>
*/}


      </div>
    </section>
  );
}
