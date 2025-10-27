"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden font-sfpro">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/Hero1.jpg')",
          backgroundPosition: "-631px -2370px",
          backgroundSize: "266.561% 549.731%",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start h-full max-w-[1579px] w-full mx-auto px-[120px] pt-[150px] gap-[10px]">
        {/* Heading */}
        <h1 className="text-[#132219] text-[128px] leading-[100%] font-medium tracking-[-1.28px] max-w-[880px]">
          In drei <br /> Schritten zur Ihrer Hypothek
        </h1>

        {/* Description */}
        <p className="text-[#132219]/80 text-[20px] leading-snug max-w-[580px] mt-[24px] font-normal">
          Erhalten Sie Ihr persönliches Hypothekarangebot online – schnell,
          sicher und transparent. In nur{" "}
          <strong className="font-semibold">drei Klicks</strong> vergleichen Sie
          Optionen, berechnen Ihre monatlichen Kosten und starten Ihren
          Finanzierungsprozess mit Vertrauen.
        </p>

        {/* Button */}
        <button
          className="mt-[32px] bg-[#132219] text-[#CAF476] 
                     text-[20px] font-[600] leading-normal
                     px-[24px] py-[8px] rounded-full
                     hover:opacity-90 transition-all 
                     w-fit h-[40px] flex items-center justify-center"
        >
          Finanzierung starten
        </button>

        {/* Partner section */}
        <div className="flex flex-col mt-[80px] gap-[24px]">
          <p className="text-[#132219]/70 text-[16px] font-normal whitespace-nowrap">
            In Zusammenarbeit mit:
          </p>

          <div className="flex items-center justify-between flex-wrap gap-x-[24px] gap-y-[20px] w-full max-w-[1400px] mx-auto translate-y-[2px] pb-[40px]">
            {/* UBS */}
            <Image
              src="/images/UBS-LogoBlack.svg"
              alt="UBS"
              width={213}
              height={52}
              className="translate-y-[2px] object-contain"
              unoptimized
            />

            {/* Zürcher Kantonalbank */}
            <Image
              src="/images/24.png"
              alt="Zürcher Kantonalbank"
              width={213}
              height={52}
              className="translate-y-[2px] object-contain"
            />

            {/* Bank Cler */}
            <Image
              src="/images/Bank_Cler_logo.png"
              alt="Bank Cler"
              width={222}
              height={44}
              className="translate-y-[2px] object-contain"
            />

            {/* Raiffeisen Schweiz */}
            <div className="flex items-center h-[35.572px]">
              <Image
                src="/images/Raiffeisen_Schweiz_Logo.png"
                alt="Raiffeisen Schweiz"
                width={242.19}
                height={35.572}
                className="object-contain"
                priority
              />
            </div>

            {/* Swiss National Bank */}
            <Image
              src="/images/67.svg"
              alt="Swiss National Bank"
              width={223}
              height={36}
              className="translate-y-[2px] object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
