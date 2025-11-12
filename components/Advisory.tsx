"use client";
import { useState } from "react";
import Image from "next/image";
import ConsultationBanner from "./ConsultationBanner";

interface Card {
  title: string;
  text: string;
}

export default function Advisory() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      {/* =======================
          SECTION 1: ADVISORY
      ======================= */}
<section
  className="relative w-full min-h-screen flex justify-center items-center overflow-hidden font-sfpro text-[#132219]"
  style={{
    backgroundImage: "url('/images/098.png')",
    backgroundSize: "cover",
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* container */}
  <div className="w-full max-w-[1504px] flex flex-col justify-center items-start mt-[100px] px-[24px] md:px-[116px] py-[116px]">
    {/* Titulli */}
    <div className="flex flex-col items-start gap-[24px] w-full max-w-[650px]">
      <h1
        className="text-[72px] md:text-[100px] leading-[100%] tracking-[-1px] font-[500]"
        style={{ fontFamily: '"SF Pro Display", sans-serif' }}
      >
        HYPOTEQ <br /> Advisory
      </h1>

      <p
        className="text-[24px] leading-[140%] mt-[32px] font-[400]"
        style={{ fontFamily: '"SF Pro Display", sans-serif' }}
      >
        Der Weg zur passenden Finanzierung muss nicht kompliziert sein – auch
        bei komplexeren Vorhaben. Mit unserem kostenpflichtigen Advisory-Service
        bekommst du Zugang zu fundierter Analyse, gezielter Strukturierung und
        den passenden Finanzierungspartnern. Wir helfen dir, Klarheit zu
        schaffen, Optionen zu bewerten und Lösungen umzusetzen, die über
        Standardlösungen hinausgehen.
      </p>
    </div>

    {/* Butonat */}
    <div className="flex flex-col mt-[80px] gap-[24px]">
      <div className="flex flex-wrap gap-[24px]">
        <a
          href="#expectations"
          className="border border-[#132219] rounded-full px-[24px] py-[8px] text-[20px] font-[600] text-[#132219] bg-transparent hover:bg-[#CAF476]/50 active:bg-[#CAF476] transition-all"
        >
          Was dich bei uns erwartet
        </a>

        <a
          href="#benefits"
          className="border border-[#132219] rounded-full px-[24px] py-[8px] text-[20px] font-[600] text-[#132219] bg-transparent hover:bg-[#CAF476]/50 active:bg-[#CAF476] transition-all"
        >
          Deine Vorteile auf einen Blick
        </a>
      </div>

      <div className="flex flex-wrap gap-[24px]">
        <a
          href="#faq"
          className="border border-[#132219] rounded-full px-[24px] py-[8px] text-[20px] font-[600] text-[#132219] bg-transparent hover:bg-[#CAF476]/50 active:bg-[#CAF476] transition-all"
        >
          Frequently Asked Questions
        </a>

        <a
          href="#partners"
          className="border border-[#132219] rounded-full px-[24px] py-[8px] text-[20px] font-[600] text-[#132219] bg-transparent hover:bg-[#CAF476]/50 active:bg-[#CAF476] transition-all"
        >
          Partner werden
        </a>
      </div>
    </div>
  </div>
</section>



      {/* =======================
          SECTION 2: CARDS
      ======================= */}
      <section className="w-full bg-white py-[60px] sm:py-[80px] px-4 sm:px-6 md:px-10 font-sfpro flex flex-col items-center justify-center">
        <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[40px] lg:gap-[48px]">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className={`border border-black rounded-[10px] flex flex-col items-start 
              p-[20px] sm:p-[28px_32px_36px_32px] gap-[18px] sm:gap-[24px] md:gap-[32px] 
              h-auto cursor-pointer transition-all duration-300
              ${
                activeIndex === index
                  ? "bg-[#CAF476]"
                  : "bg-white hover:bg-[#CAF476]/50"
              }`}
            >
              <h3
                className="text-[#132219] font-[500] text-[36px] sm:text-[40px] md:text-[48px] 
                leading-[140%] tracking-[-0.02em]"
                style={{ fontFamily: '"SF Pro Display", sans-serif' }}
              >
                {card.title}
              </h3>
              <p
                className="text-[#132219] font-[300] text-[18px] sm:text-[20px] md:text-[24px] 
                leading-[140%] tracking-[0.01em]"
                style={{ fontFamily: '"SF Pro Display", sans-serif' }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>
<section className="w-full flex flex-col justify-end items-start bg-[#132219] px-[114px] py-[48px] font-sfpro">

  <h2
    className="text-[#CAF476] text-[48px] leading-[100%] tracking-[-0.48px] font-[500] mb-[48px]"
    style={{ fontFamily: '"SF Pro Display", sans-serif' }}
  >
    Wie läuft’s ab?
  </h2>
  <div className="flex justify-start items-start gap-[19px]">

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
        className="flex flex-col w-[412px] h-[450px] bg-[#CAF476] border border-[#132219] rounded-[10px] px-[24px] py-[24px] justify-start"
      >

        <span
          className="text-[80px] font-[500] leading-[140%] text-[#132219] mb-[68px]"
          style={{ fontFamily: '"SF Pro Display", sans-serif' }}
        >
          {box.number}
        </span>

        <p
          className="text-[32px] font-[500] leading-[140%] text-[#132219] flex-1"
          style={{ fontFamily: '"SF Pro Display", sans-serif' }}
        >
          {box.text}
        </p>
        {box.button && (
          <button className="mt-auto bg-[#132219] text-[#CAF476] px-[16px] py-[4px] text-[18px] font-[500] rounded-full hover:opacity-80 transition-all w-fit">
            Termin buchen
          </button>
        )}
      </div>
    ))}
  </div>

  <p
    className="w-[1272px] text-[32px] font-[300] leading-[140%] text-[#CAF476] mt-[48px]"
    style={{ fontFamily: '"SF Pro Display", sans-serif' }}
  >
    Der Advisory-Service ist kostenpflichtig – du profitierst von tiefem
    Marktwissen, individueller Betreuung und Lösungen, die wirklich
    funktionieren.
  </p>
</section>

<div className="mb-[180px]">
  <ConsultationBanner />
</div>
    </>
  );
}
