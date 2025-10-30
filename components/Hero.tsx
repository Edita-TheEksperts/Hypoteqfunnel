"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative w-full overflow-x-hidden overflow-y-hidden font-sfpro
        min-h-[500px] sm:min-h-[100vh]">

   {/* ✅ Mobile Background */}
<div
  className="absolute inset-0 bg-no-repeat bg-cover -z-10 block sm:hidden
  h-[500px]"
  style={{
    backgroundImage: "url('/images/mobilehome.png')",
    backgroundPosition: "center top",
    backgroundSize: "cover",
  }}
></div>

{/* ✅ Desktop Background (unchanged) */}
<div
  className="absolute inset-0 bg-no-repeat bg-cover -z-10 hidden sm:block
  h-full"
  style={{
    backgroundImage: "url('/images/Hero1.jpg')",
    backgroundPosition: "-631px -2370px",
    backgroundSize: "266.561% 549.731%",
  }}
></div>


        {/* Content */}
        <div className="relative z-10 flex flex-col justify-start h-full max-w-[1579px] w-full mx-auto 
          px-[20px] pt-[70px] gap-[10px]
          sm:px-[120px] sm:pt-[150px]">

          {/* Heading */}
          <h1
  className="text-[#132219] font-medium max-w-[880px]
  text-[48px] leading-[100%] tracking-[-0.48px]
  sm:text-[128px] sm:leading-[100%] sm:tracking-[-1.28px]"
>

            In drei <br /> Schritten zur Ihrer Hypothek
          </h1>

          {/* Description */}
  <p
  className="text-[#132219]/80 max-w-[580px]
  text-[16px] leading-[140%] font-[400] mt-[12px]
  sm:text-[20px] sm:leading-snug sm:mt-[24px]"
>
  
            Erhalten Sie Ihr persönliches Hypothekarangebot online – schnell,
            sicher und transparent. In nur <strong>drei Klicks</strong> vergleichen Sie
            Optionen, berechnen Ihre monatlichen Kosten und starten Ihren
            Finanzierungsprozess mit Vertrauen.
          </p>

<button
  className="
    bg-[#132219] text-[#CAF476] font-semibold
    text-[12px] sm:text-[16px] lg:text-[18px]
    px-[18px] sm:px-[24px] lg:px-[28px]
    py-[8px] sm:py-[10px] lg:py-[12px]
    leading-[1.2]
    rounded-full hover:opacity-90 transition-all w-fit
    mt-[24px] sm:mt-[16px]
  "
>

  Finanzierung starten
</button>


          {/* Desktop partner section */}
          <div className="hidden sm:flex flex-col mt-[80px] gap-[24px]">
            <p className="text-[#132219]/70 text-[16px] font-normal">
              In Zusammenarbeit mit:
            </p>

            <div className="flex items-center justify-between flex-wrap gap-x-[24px] gap-y-[20px] 
              w-full max-w-[1400px] mx-auto pb-[40px]">

              <Image src="/images/UBS-LogoBlack.svg" alt="UBS" width={213} height={52} unoptimized />
              <Image src="/images/24.png" alt="ZKB" width={213} height={52} />
              <Image src="/images/Bank_Cler_logo.png" alt="Cler" width={222} height={44} />
              <Image src="/images/Raiffeisen_Schweiz_Logo.png" alt="Raiffeisen" width={242} height={36} priority />
              <Image src="/images/67.svg" alt="SNB" width={223} height={36} unoptimized />
            </div>
          </div>
        </div>
      </section>
{/* ✅ MOBILE logos section */}
<div className="sm:hidden bg-white w-full px-6 py-10">
  <p className="text-[#132219]/70 text-[14px] mb-6">
    In Zusammenarbeit mit:
  </p>

  <div className="grid grid-cols-2 gap-x-[35px] gap-y-[58px] place-items-center">
  {/* Row 1 */}
  <Image src="/images/Raiffeisen_Schweiz_Logo.png" width={120} height={30} alt="Raiffeisen" />
  <Image src="/images/UBS-LogoBlack.svg" width={110} height={30} alt="UBS" />

  {/* Row 2 */}
  <Image src="/images/24.png" width={120} height={30} alt="ZKB" />
  <Image src="/images/Bank_Cler_logo.png" width={120} height={30} alt="CLER" />

  {/* Row 3 ✅ SNB */}
<Image src="/images/67.svg" width={120} height={30} alt="SNB BNS" unoptimized />

</div>

</div>


    </>
  );
}
