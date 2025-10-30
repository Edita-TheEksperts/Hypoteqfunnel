"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-x-hidden overflow-y-hidden font-sfpro">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10"
        style={{
          backgroundImage: "url('/images/Hero1.jpg')",
          backgroundPosition: "-631px -2370px",
          backgroundSize: "266.561% 549.731%",
        }}
      ></div>

      {/* Content */}
      <div
        className="
          relative z-10 flex flex-col justify-start h-full max-w-[1579px] w-full mx-auto 
          px-[24px] pt-[90px] gap-[10px]
          sm:px-[80px] sm:pt-[120px]
          md:px-[120px] md:pt-[150px]
        "
      >
        {/* Heading */}
        <h1
          className="
            text-[#132219] font-medium tracking-[-1.28px] max-w-[880px]
            text-[36px] leading-[110%]
            sm:text-[64px] sm:leading-[100%]
            md:text-[128px]
          "
        >
          In drei <br /> Schritten zur Ihrer Hypothek
        </h1>

        {/* Description */}
        <p
          className="
            text-[#132219]/80 font-normal max-w-[580px]
            text-[15px] sm:text-[18px] md:text-[20px]
            mt-[16px] sm:mt-[24px]
            leading-snug
          "
        >
          Erhalten Sie Ihr persönliches Hypothekarangebot online – schnell,
          sicher und transparent. In nur{" "}
          <strong className="font-semibold">drei Klicks</strong> vergleichen Sie
          Optionen, berechnen Ihre monatlichen Kosten und starten Ihren
          Finanzierungsprozess mit Vertrauen.
        </p>

        {/* Button */}
        <button
          className="
            mt-[20px] sm:mt-[32px] bg-[#132219] text-[#CAF476] 
            text-[16px] sm:text-[20px] font-[600] leading-normal
            px-[20px] sm:px-[24px] py-[8px] rounded-full
            hover:opacity-90 transition-all 
            w-fit h-[40px] flex items-center justify-center
          "
        >
          Finanzierung starten
        </button>

        {/* Partner section */}
        <div className="flex flex-col mt-[50px] sm:mt-[80px] gap-[24px]">
          <p className="text-[#132219]/70 text-[14px] sm:text-[16px] font-normal whitespace-nowrap">
            In Zusammenarbeit mit:
          </p>

          <div
            className="
              flex items-center justify-start flex-wrap
              gap-x-[20px] gap-y-[18px]
              sm:justify-between
              w-full max-w-[1400px] mx-auto pb-[40px]
            "
          >
            {/* UBS */}
            <Image
              src="/images/UBS-LogoBlack.svg"
              alt="UBS"
              width={150}
              height={40}
              className="object-contain"
              unoptimized
            />

            {/* Zürcher Kantonalbank */}
            <Image
              src="/images/24.png"
              alt="Zürcher Kantonalbank"
              width={150}
              height={40}
              className="object-contain"
            />

            {/* Bank Cler */}
            <Image
              src="/images/Bank_Cler_logo.png"
              alt="Bank Cler"
              width={160}
              height={40}
              className="object-contain"
            />

            {/* Raiffeisen Schweiz */}
            <Image
              src="/images/Raiffeisen_Schweiz_Logo.png"
              alt="Raiffeisen Schweiz"
              width={180}
              height={36}
              className="object-contain"
              priority
            />

            {/* Swiss National Bank */}
            <Image
              src="/images/67.svg"
              alt="Swiss National Bank"
              width={160}
              height={32}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
