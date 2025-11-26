"use client";
import HypoZinsSection from "@/components/HypoZinsSection";
import { useState } from "react";

export default function NeueHypotheken() {
  const [active, setActive] = useState("");

const buttons = [
  { id: "neue", label: "Neue Hypothek" },
  { id: "refi", label: "Refinanzierung" },
  { id: "neubau", label: "Neubau-Finanzierung" },
  { id: "hypo", label: "Deine Hypothek berechnen?" }, // ← tani është korrekt
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
            pt-[100px] sm:pt-[120px] md:pt-[180px]
            gap-[10px] text-[#FFF]
          "
        >
          <div className="flex flex-col max-w-[600px]">
            <div className="flex flex-col gap-[16px] sm:gap-[24px]">
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
                Egal ob Hauskauf, Refinanzierung oder Neubau – der Weg zu deinem
                Eigenheim muss nicht kompliziert sein. Unsere smarte Plattform
                vergleicht Angebote von unseren Finanzierungspartnern, damit du
                nur das siehst, was wirklich zählt. Ob du deine erste Hypothek
                suchst, eine bestehende optimieren willst oder ein Bauprojekt
                finanzierst – wir bringen Klarheit und Transparenz in jeden
                Schritt.
              </p>
            </div>

            {/* ===== BUTTON GRID (aligned like Figma) ===== */}
            <div className="flex flex-col gap-[24px] mt-[32px] max-sm:mt-[-30px]">

              {/* Row 1 */}
              <div className="flex flex-wrap gap-[12px] mt-[46px] justify-center sm:justify-start">
                {buttons.slice(0, 2).map((btn) => {
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
{/* Row 2 */}
<div className="flex flex-wrap gap-[12px] justify-center sm:justify-start">
  {buttons.slice(2).map((btn) => {
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
  Starte mit einer kurzen, unverbindlichen Anfrage. Sag uns, worum’s geht – Immobilie, Budget, Einkommen,
  Zeitplan – online oder per Call.
  <br />
  Wir hören zu, klären deine Ziele und nehmen nur auf, was wirklich nötig ist.
  <br />
  Keine Gebühren. Kein Druck. Einfach der erste klare Schritt.
  <span className="underline font-normal">
    {" "}
    Alternativ, kannst du auch alles bei uns direkt hochladen, und deine Hypothekenanfrage starten
  </span>
  .
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
>
              Dein Bauprojekt verdient die passende Finanzierung. Wir analysieren
              dein Profil, holen passende Angebote und zeigen dir alle Optionen
              klar nebeneinander: Zinssatz, Laufzeit, monatliche Kosten. Du
              verstehst die Vorteile, Kompromisse – und triffst deine Entscheidung
              datenbasiert & stressfrei.
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

      {/* ====== HypoZins Section ====== */}
      <HypoZinsSection />
    </>
  );
}
