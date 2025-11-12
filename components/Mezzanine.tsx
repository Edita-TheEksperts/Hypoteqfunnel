"use client";
import Image from "next/image";
import { useState } from "react";
import ConsultationBanner from "./ConsultationBanner";

export default function Mezzanine() {
  const [active, setActive] = useState("");

  const buttons = [
    { id: "neue", label: "Was ist Mezzanine?" },
    { id: "refi", label: "Wann ist Mezzanine sinnvoll?" },
    { id: "neubau", label: "Wie funktioniert das?" },
    { id: "gemeinsam", label: "Gemeinsam möglich machen" },
  ];

  const handleClick = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; 
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* =======================
          SECTION 1: HERO
      ======================= */}
      <section
        className="relative w-full flex justify-center items-start bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/98.png')", 
        }}
      >
        <div className="absolute inset-0"></div>

        <div
          className="relative z-10 w-full max-w-[1504px] h-[957px] flex flex-col justify-start 
          px-[24px] md:px-[116px] pt-[140px] md:pt-[180px] gap-[10px] text-[#132219]"
        >
          <div className="flex flex-col max-w-[692px]">
            <h2
              className="text-[48px] md:text-[72px] leading-[100%] font-[500] tracking-[-0.72px]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              Mezzanine <br />
              Finanzierung
            </h2>

            <p
              className="mt-[32px] text-[24px] leading-[140%] font-[400] text-[#132219]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontStyle: "normal",
              }}
            >
              Kapital mit Flexibilität
            </p>

            <p
              className="mt-[32px] text-[24px] leading-[140%] font-normal text-[#132219]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              Wenn klassische Bankfinanzierungen an ihre Grenzen stossen, sorgt
              Mezzanine-Kapital für den nötigen Spielraum. Ob bei Neubauprojekten,
              Akquisitionen oder Wachstumsschritten – diese Finanzierungsschicht
              schliesst die Lücke zwischen Eigenkapital und Fremdfinanzierung,
              ohne Anteile abzugeben.
            </p>

            <div className="flex flex-col gap-[24px] mt-[80px]">
              <div className="flex flex-wrap gap-[10px]">
                {buttons.slice(0, 2).map((btn) => {
                  const isActive = active === btn.id;
                  return (
                    <button
                      key={btn.id}
                      onClick={() => handleClick(btn.id)}
                      className={`rounded-[45px] text-[20px] font-[600] font-['SF Pro Display']
                        border-2 border-[#132219] px-[24px] py-[8px] transition-all duration-300
                        ${
                          isActive
                            ? "bg-[#CAF476] text-[#132219]"
                            : "bg-transparent text-[#132219] hover:bg-[#CAF476]/60 hover:text-[#132219]"
                        }`}
                    >
                      {btn.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-[10px]">
                {buttons.slice(2).map((btn) => {
                  const isActive = active === btn.id;
                  return (
                    <button
                      key={btn.id}
                      onClick={() => handleClick(btn.id)}
                      className={`rounded-[45px] text-[20px] font-[600] font-['SF Pro Display']
                        border-2 border-[#132219] px-[24px] py-[8px] transition-all duration-300
                        ${
                          isActive
                            ? "bg-[#CAF476] text-[#132219]"
                            : "bg-transparent text-[#132219] hover:bg-[#CAF476]/60 hover:text-[#132219]"
                        }`}
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

      {/* =======================
          SECTION 2: DETAILS
      ======================= */}
      <section className="w-full bg-white flex flex-col items-center py-[60px] sm:py-[80px] md:py-[120px] px-6 sm:px-10 md:px-[118px] text-[#132219] font-['SF Pro Display']">

        {/* SECTION 1 — Was ist Mezzanine? */}
        <div id="neue" className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1504px] gap-[60px] md:gap-[199px] mb-[60px] md:mb-[120px]">
          <div className="max-w-full md:max-w-[536px] text-center md:text-left">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-[500] leading-[140%] mb-[20px]">
              Was ist Mezzanine?
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[24px] font-[300] leading-[150%]">
              Eine flexible Finanzierungsform, die zwischen Bankdarlehen und Eigenkapital liegt. 
              Sie ist nachrangig gegenüber klassischen Hypotheken, aber vorrangig vor Gesellschafterkapital. 
              Mezzanine wird als Darlehen mit Zins und Gewinnbeteiligung strukturiert – individuell und projektbezogen.
            </p>
          </div>
          <div className="w-full sm:w-[420px] md:w-[538px] h-auto flex items-center justify-center">
            <img src="/images/s2.png" alt="Was ist Mezzanine?" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* SECTION 2 — Wann ist Mezzanine sinnvoll? */}
        <div id="refi" className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1504px] gap-[60px] md:gap-[199px] mb-[60px] md:mb-[120px]">
          <div className="max-w-full md:max-w-[536px] order-2 md:order-1 text-center md:text-left">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-[500] leading-[140%] mb-[20px]">
              Wann ist Mezzanine sinnvoll?
            </h2>
            <ul className="text-[16px] sm:text-[18px] md:text-[24px] font-[300] leading-[150%] list-disc pl-[20px]">
              <li>Du brauchst zusätzliches Kapital, willst aber deine Beteiligung nicht verwässern.</li>
              <li>Die Bank deckt nur einen Teil des Projekts – der Eigenmittelanteil reicht nicht.</li>
              <li>Du willst schnell handeln – z. B. bei Akquisitionen, Zwischenfinanzierungen oder Reorganisationen.</li>
            </ul>
          </div>
          <div className="w-full sm:w-[420px] md:w-[538px] h-auto flex items-center justify-center order-1 md:order-2">
            <img src="/images/s1.png" alt="Closing Day Kalender" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* SECTION 3 — Wie funktioniert das? */}
        <div id="neubau" className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1504px] gap-[60px] md:gap-[199px] mb-[60px] md:mb-[120px]">
          <div className="max-w-full md:max-w-[536px] text-center md:text-left">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-[500] leading-[140%] mb-[20px]">
              Wie funktioniert das?
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[24px] font-[300] leading-[150%] mb-[16px]">
              Die Struktur ist flexibel – zum Beispiel:
            </p>
            <ul className="text-[16px] sm:text-[18px] md:text-[24px] font-[300] leading-[150%] list-disc pl-[20px]">
              <li>Nachrangdarlehen mit fixem oder variablem Zinssatz</li>
              <li>Rückzahlung endfällig oder mit leichter Amortisation</li>
              <li>Optionale Gewinnbeteiligung</li>
              <li>Laufzeiten zwischen 2 und 5 Jahren</li>
              <li>Immer abgestimmt auf Projekt, Risiko und Zeithorizont</li>
            </ul>
          </div>
          <div className="w-full sm:w-[420px] md:w-[538px] h-auto flex items-center justify-center">
            <img src="/images/s3.png" alt="Projekt Risiko Zeithorizont" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* SECTION 4 — Gemeinsam möglich machen */}
        <div id="gemeinsam" className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1504px] gap-[60px] md:gap-[199px]">
          <div className="max-w-full md:max-w-[536px] text-center md:text-left">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-[500] leading-[140%] mb-[20px]">
              Gemeinsam möglich machen
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[24px] font-[300] leading-[150%]">
              Wir bringen dich mit passenden Kapitalpartnern zusammen – diskret, lösungsorientiert und effizient.
              Ob Developer, Family Office oder Bestandshalter – wir schaffen den Zugang zu Mezzanine-Kapital, damit du dein Vorhaben realisieren kannst.
              Unser Ansatz ist analytisch – wir analysieren deine Finanzierungssituation und finden den idealen Partner.
            </p>
          </div>
          <div className="w-full sm:w-[420px] md:w-[538px] h-auto flex items-center justify-center">
            <img src="/images/s4.png" alt="Features Graph" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      <div className="mb-[180px]">
        <ConsultationBanner />
      </div>
    </>
  );
}
