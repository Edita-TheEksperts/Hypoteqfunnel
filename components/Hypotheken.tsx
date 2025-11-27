"use client";
import HypoZinsSection from "@/components/HypoZinsSection";
import { useState } from "react";

export default function NeueHypotheken() {
  const [active, setActive] = useState("");

const buttons = [
  { id: "neue", label: "Neue Hypothek" },
  { id: "refi", label: "Refinanzierung" },
  { id: "neubau", label: "Neubau-Finanzierung" },
];


  const handleClick = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const top =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ====== SECTION 1: Hero ====== */}
      <section
        className="relative w-full flex justify-center items-start bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hypotheneHome.png')",
        }}
      >
        <div className="absolute inset-0"></div>

        <div
          className="
            relative z-10 w-full max-w-[1579px]
            h-auto md:h-[957px]
            flex flex-col justify-start
            px-[16px] sm:px-[24px] md:px-[116px]
 pt-[40px] sm:pt-[80px] md:pt-[110px]

            gap-[10px] text-[#FFF]
          "
        >
          <div className="flex flex-col max-w-[600px]">
            <div className="flex flex-col gap-[16px] sm:gap-[20px]">
              <h2
                className="text-[32px] sm:text-[40px] md:text-[72px] leading-[110%] md:leading-[100%] font-[500] tracking-[-0.72px]"
                style={{ fontFamily: '"SF Pro Display", sans-serif' }}
              >
                Hypotheken <br />
                leicht gemacht
              </h2>
            </div>

      <div className="mt-[20px] sm:mt-[40px] md:mt-[32px]">
  <p
    className="text-[15px] sm:text-[18px] md:text-[24px] font-light leading-[1.6] text-white"
    style={{
      fontFamily: '"SF Pro Display", sans-serif',
      fontWeight: 100,
      letterSpacing: "0.01em",
    }}
  >
   Wir sind dein Partner für smarte Immobilienfinanzierung in der Schweiz. Unsere digitale Plattform verbindet dich mit geprüften Finanzierungspartnern und macht Hypothekenangebote einfach vergleichbar. Mit klaren Prozessen und persönlicher Unterstützung begleiten wir dich vom ersten Schritt bis zum Abschluss – transparent, effizient und unverbindlich.
Unsere DNA - Wir vereinfachen den Hypothekenprozess in der Schweiz – digital, smart und nah am Menschen. Mit Technologie, Daten und einem starken Partnernetzwerk gestalten wir Finanzierung schneller, klarer und zugänglicher. Für Kund:innen, Vermittler und Kreditgeber.
  </p>


</div>

{/* ===== BUTTON GRID ===== */}
<div className="mt-[32px] max-sm:mt-[-30px]">

  {/* ALL 3 BUTTONS IN ONE ROW */}
  <div className="flex flex-wrap gap-[12px] mt-[46px] justify-center sm:justify-start">
    {buttons.map((btn) => {
      const isActive = active === btn.id;
      return (
        <button
          key={btn.id}
          onClick={() => handleClick(btn.id)}
          className={`
            font-sfpro text-[20px] font-semibold px-[28px] py-[10px]
            rounded-[45px] border border-[#fff]
            transition-all duration-300
            max-sm:text-[16px] max-sm:px-[20px] max-sm:w-full
            ${
              isActive
                ? "bg-[#CAF476] text-[#132219]"
                : "bg-transparent hover:bg-[#CAF476]/60 text-[#fff]"
            }
          `}
        >
          {btn.label}
        </button>
      );
    })}
  </div>

</div>

          </div>
        </div>
      </section>

      {/* ====== SECTION 2–4 ====== */}
      <section className="w-full bg-white flex flex-col items-center py-[80px] md:py-[120px] px-[24px] md:px-[116px] text-[#132219] font-['SF Pro Display']">

        {/* Neue Hypothek */}
        <div
          id="neue"
          className="
            flex flex-col md:flex-row 
            justify-between 
            items-center md:items-center
            w-full max-w-[1504px] 
            mb-[80px] md:mb-[120px] 
            gap-[40px]
          "
        >
          <div className="max-w-[536px]">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[140%] tracking-[-0.36px] mb-[16px] md:mb-[24px]">
              Neue Hypothek
            </h2>
<p className="text-[#132219] text-[18px] md:text-[24px] font-normal leading-[140%] tracking-[-0.24px] font-sfpro"
>
 Der erste Schritt ist einfach. Starte mit einer kurzen, unverbindlichen Anfrage.
  <br />
Um zu starten brauchen wir Angaben zur  Immobilie, Budget, Einkommen und deinen Zeitplan. 
Keine Gebühren. Kein Druck.
  <br />
Du kannst alles direkt bei uns hochladen, und deine Hypothekenanfrage starten oder wir helfen dir telefonisch weiter. 
</p>

          </div>

          <div className="w-full md:w-[537px] h-[300px] md:h-[443px] rounded-[10px] overflow-hidden flex items-center justify-center bg-[#F8F8F8]">
            <img
              src="/images/doraqelsi.png"
              alt="New Mortgage"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Refinanzierung */}
        <div
          id="refi"
          className="
            flex flex-col md:flex-row 
            justify-between 
            items-center md:items-center
            w-full max-w-[1504px] 
            mb-[80px] md:mb-[120px] 
            gap-[40px]
          "
        >
          <div className="max-w-[536px] order-2 md:order-1">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[140%] tracking-[-0.36px] mb-[16px] md:mb-[24px]">
              Refinanzierung
            </h2>
            <p className="text-[#132219] text-[18px] md:text-[24px] font-normal leading-[140%] tracking-[-0.24px] font-sfpro"
>
              Du hast schon eine Hypothek? Wir prüfen Tragbarkeit, Bonität &
              Co. – und zeigen dir, ob es bessere Optionen gibt. Unser
              Vergleichstool checkt Offerten aus unserem Netzwerk und stellt dir
              transparente Szenarien zusammen. <br />
              Zinssätze, Laufzeiten, Bedingungen – alles vergleichbar.
            </p>
          </div>

          <div className="w-full md:w-[537px] h-[300px] md:h-[443px] rounded-[10px] overflow-hidden flex items-center justify-center bg-[#F8F8F8] order-1 md:order-2">
            <img
              src="/images/2023.png"
              alt="Refinance Graph"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Neubau */}
        <div
          id="neubau"
          className="
            flex flex-col md:flex-row 
            justify-between 
            items-center md:items-center
            w-full max-w-[1504px] 
            gap-[40px] mb-[80px]
          "
        >
          <div className="max-w-[536px]">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[140%] tracking-[-0.36px] mb-[16px] md:mb-[24px]">
              Neubau-Finanzierung
            </h2>
            <p className="text-[#132219] text-[18px] md:text-[24px] font-normal leading-[140%] tracking-[-0.24px] font-sfpro"
>Für dein Bauprojekt brauchst du eine Finanzierung, die wirklich zu dir passt. 
Wir analysieren dein Profil, vergleichen die besten Angebote und erklären dir alle Optionen verständlich. 
So triffst du deine Entscheidung entspannt und auf Basis klarer Daten.

            </p>
          </div>

          <div className="w-full md:w-[537px] h-[300px] md:h-[443px] rounded-[10px] overflow-hidden flex items-center justify-center bg-[#F8F8F8]">
            <img
              src="/images/2020.png"
              alt="Neubau Graph"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}
