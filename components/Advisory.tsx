"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ConsultationBanner from "./ConsultationBanner";

interface Card {
  title: string;
  text: string;
}

export default function Advisory() {
  const cards: Card[] = [
    {
      title: "Finanzierung im Ruhestand",
      text: "Auch im Ruhestand gibt es Wege zur Finanzierung – ob Umschuldung, Ausbau oder Freisetzung von Eigenkapital. Wir analysieren deine Pensionssituation, Vermögenslage und Ziele und zeigen dir Modelle, die zu deinem Lebensabschnitt passen – mit Planungssicherheit und Weitblick.",
    },
    {
      title: "Komplexe Liegenschaften",
      text: "Mehrfamilienhäuser, gemischt genutzte Objekte oder renditeorientierte Investitionen? Wir kennen die Anforderungen und begleiten dich durch die Bewertung, Strukturierung und Gespräche mit spezialisierten Kreditgebern. Transparent, machbar, professionell.",
    },
    {
      title: "Nach Bankabsagen",
      text: "Absage von der Bank? Kein Grund aufzugeben. Wir analysieren deinen Fall, identifizieren realistische Optionen und öffnen dir den Zugang zu Finanzierungspartnern mit mehr Flexibilität – ohne Standardschablone, aber mit klarem Plan.",
    },
    {
      title: "Komplexe Eigentümerstrukturen",
      text: "Mehrere Eigentümer, juristische Personen, Auslandsbeteiligung? Kein Problem. Wir bringen Struktur ins Dossier, klären Verantwortlichkeiten und erarbeiten gemeinsam ein Finanzierungsmodell, das Kreditgeber überzeugt und für dich passt.",
    },
  ];

  return (
    <>
      {/* ======================= */}
      {/* SECTION 1: ADVISORY HERO */}
      {/* ======================= */}
      <section
        className="
          relative w-full min-h-screen flex justify-center mb-[120px] items-center overflow-hidden 
          font-sfpro 
          px-[16px] sm:px-[24px] md:px-[116px] lg:px-[116px] xl:px-[116px] 2xl:px-[116px]
          text-[#132219]
        "
        style={{
          backgroundImage: "url('/images/09.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-[1579px] flex flex-col justify-center items-start mt-[80px] sm:mt-[100px] py-[60px] sm:py-[116px]">
          <div className="flex flex-col items-start gap-[16px] sm:gap-[24px] max-w-[650px]">
            <h1
              className="text-[48px] sm:text-[72px] md:text-[100px] font-[500] leading-[100%] tracking-[-1px]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              HYPOTEQ <br /> Advisory
            </h1>

            <p
              className="text-[18px] sm:text-[24px] mt-[16px] sm:mt-[32px] leading-[140%]"
              style={{ fontFamily: '"SF Pro Display", sans-serif' }}
            >
              Der Weg zur passenden Finanzierung muss nicht kompliziert sein –
              auch bei komplexeren Vorhaben. Mit unserem kostenpflichtigen
              Advisory-Service bekommst du Zugang zu fundierter Analyse,
              gezielter Strukturierung und den passenden Finanzierungspartnern.
              Wir helfen dir, Klarheit zu schaffen, Optionen zu bewerten und
              Lösungen umzusetzen, die über Standardlösungen hinausgehen.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col mt-[48px] sm:mt-[80px] gap-[16px] sm:gap-[24px]">
       <div className="flex flex-col gap-[16px]">
  
  {/* RRESHTI 1 – dy butonat */}
  <div className="flex flex-wrap gap-[12px] sm:gap-[24px]">
    <a
      href="#expectations"
      className="border border-[#132219] rounded-full px-[20px] sm:px-[24px] py-[6px] sm:py-[8px]
        text-[18px] sm:text-[20px] font-[600] text-[#132219]
        bg-transparent hover:bg-[#CAF476]/50 transition-all"
    >
    Advisory Beispiele
    </a>

    <a
      href="#benefits"
      className="border border-[#132219] rounded-full px-[20px] sm:px-[24px] py-[6px] sm:py-[8px]
        text-[18px] sm:text-[20px] font-[600] text-[#132219]
        bg-transparent hover:bg-[#CAF476]/50 transition-all"
    >
      Wie läuft’s ab?
    </a>
  </div>

  {/* RRESHTI 2 – butoni i tretë */}
  <div className="flex justify-start sm:justify-start">
    <a
      href="#beispiele"
      className="border border-[#132219] rounded-full px-[20px] sm:px-[24px] py-[6px] sm:py-[8px]
        text-[18px] sm:text-[20px] font-[600] text-[#132219]
        bg-transparent hover:bg-[#CAF476]/50 transition-all"
    >
      Beispielfälle
    </a>
  </div>

</div>

          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* SECTION 2: CARDS */}
      {/* ======================= */}
      <section
        id="expectations"
        className="
          w-full bg-white 
          py-[48px] sm:py-[80px] mb-[120px]
          px-[16px] sm:px-[24px] md:px-[116px] lg:px-[116px] xl:px-[116px] 2xl:px-[116px]
          font-sfpro flex flex-col items-center justify-center
        "
      >
        <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[40px] lg:gap-[48px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                border border-black rounded-[10px]
                flex flex-col items-start
                p-[16px] sm:p-[28px_32px_36px_32px]
                gap-[16px] sm:gap-[24px] md:gap-[32px]
                bg-white hover:bg-[#CAF476]/50 transition-all
              "
            >
              <h3
                className="text-[#132219] font-[500] text-[28px] sm:text-[40px] md:text-[48px] leading-[140%]"
                style={{ fontFamily: '"SF Pro Display", sans-serif' }}
              >
                {card.title}
              </h3>

              <p
                className="text-[#132219] font-[300] text-[16px] sm:text-[20px] md:text-[24px] leading-[140%]"
                style={{ fontFamily: '"SF Pro Display", sans-serif' }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= */}
      {/* SECTION 3: PROCESS */}
      {/* ======================= */}
      <section
        id="benefits"
        className="
          w-full bg-[#132219]
          flex flex-col items-start 
          px-[16px] sm:px-[24px] md:px-[116px] mb-[120px] lg:px-[116px] xl:px-[116px] 2xl:px-[116px]
          py-[48px] font-sfpro
        "
      >
        <h2
          className="text-[#CAF476] text-[32px] sm:text-[48px] font-[500] mb-[32px] sm:mb-[48px]"
          style={{ fontFamily: '"SF Pro Display", sans-serif' }}
        >
          Wie läuft’s ab?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-[16px] sm:gap-[19px] w-full">
          {[
            {
              number: "1",
              text: "Du buchst ein gratis Erstgespräch mit einem Advisory-Experten.",
              button: true,
            },
            {
              number: "2",
              text: "Wir analysieren deine Situation und machen dir eine Offerte für ein HYPOTEQ Advisory Mandat.",
            },
            {
              number: "3",
              text: "Wir begleiten dich bei der Umsetzung – von Offertvergleich bis Vertragsverhandlung.",
            },
          ].map((box, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-[412px] bg-[#CAF476] border border-[#132219] rounded-[10px] px-[20px] sm:px-[24px] py-[24px]"
            >
              <span
                className="text-[56px] sm:text-[80px] font-[500] leading-[140%] text-[#132219] mb-[32px] sm:mb-[68px]"
                style={{ fontFamily: '"SF Pro Display", sans-serif' }}
              >
                {box.number}
              </span>

              <p
                className="text-[22px] sm:text-[32px] font-[500] leading-[140%] text-[#132219] flex-1"
                style={{ fontFamily: '"SF Pro Display", sans-serif' }}
              >
                {box.text}
              </p>

              {box.button && (
          <Link href="/contact">
  <button className="mt-[24px] bg-[#132219] text-[#CAF476] px-[16px] py-[6px] rounded-full text-[16px] sm:text-[18px] font-[500] hover:opacity-80 transition-all w-fit">
    Termin buchen
  </button>
</Link>
              )}
            </div>
          ))}
        </div>


      </section>

      <div className="mb-[200px] sm:mb-[180px]">
        <ConsultationBanner />
      </div>
    </>
  );
}
