"use client";
import { useState } from "react";

export default function PartnerWerdenSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="w-full flex flex-col items-start gap-[32px] sm:gap-[40px] md:gap-[48px] px-[16px] sm:px-[24px] md:px-[116px] max-w-[1579px] mx-auto mt-[120px] sm:mt-[100px] md:mt-[120px] mb-[120px] sm:mb-[100px] md:mb-[120px]">
      {/* Title */}
      <h2 className="text-[#132219] text-[32px] sm:text-[40px] md:text-[48px] font-[500] leading-[110%] md:leading-[100%] tracking-[-0.48px] font-['SF Pro Display'] text-center md:text-left">
    Du möchtest Hypotheken aktiv vermitteln und mit HYPOTEQ zusammenarbeiten?
      </h2>

      {/* Subtitle */}
      <p className="text-[#132219] text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[140%] md:leading-[22px] font-['SF Pro Display'] text-center md:text-left">
      Dann freuen wir uns über deine Anfrage!
      </p>

      {/* Form */}
      <form className="w-full flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-[12px] sm:gap-[17px] w-full">
          <input
            type="text"
            placeholder="Vorname"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
          />
          <input
            type="text"
            placeholder="Nachname"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
          />
        </div>

        {/* Middle row */}
        <div className="flex flex-col md:flex-row gap-[12px] sm:gap-[17px] w-full">
          <input
            type="email"
            placeholder="E-Mail"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
          />
          <input
            type="tel"
            placeholder="Telefonnummer"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Deine Nachricht"
          className="w-full border border-[#132219] opacity-70 rounded-[10px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] h-[110px] sm:h-[133px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
        ></textarea>

        {/* Footer info + button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] sm:gap-[20px] md:gap-[24px] w-full">
          <p className="text-[#132219] opacity-60 text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[22px] font-[400] font-['SF Pro Display'] max-w-[1088px] text-center md:text-left">
            Um Partner zu werden, solltest du ein registriertes Unternehmen mit gültiger Vermittlungsbewilligung sein,
            die regulatorischen Vorgaben (z. B. KYC/AML) einhalten und bereits Erfahrung im operativen Geschäft haben –
            oder unter der Aufsicht einer lizenzierten Organisation stehen.
          </p>

          <button
            type="submit"
            className="self-center md:self-auto flex justify-center items-center px-[20px] sm:px-[24px] py-[8px] rounded-[58px] border border-[#132219] bg-[#132219] text-white font-['SF Pro Display'] text-[14px] sm:text-[15px] md:text-[16px] font-[600] hover:opacity-90 transition"
          >
            Absenden
          </button>
        </div>
      </form>
      
    {/* ------------------------------------------------------- */}
{/* --------------------  FAQ SECTION OFF  ----------------- */}
{/* ------------------------------------------------------- */}


<div className="flex flex-col gap-[32px] mt-[120px] sm:gap-[48px] w-full">
  <h2
    id="faq"
    className="text-[#132219] text-[32px] sm:text-[48px] font-[500] leading-[110%] tracking-[-0.48px]
               font-['SF Pro Display']"
  >
    Frequently Asked Questions
  </h2>

  <div className="flex flex-col gap-[20px] sm:gap-[24px] w-full">

    {[
      {
        q: "Wer kann HYPOTEQ Partner werden?",
        a: (
          <>
            Treuhänder:innen, Vermögensverwalter:innen, Makler:innen und
            Broker:innen, die ihr Angebot um professionelle Hypothekenberatung
            erweitern möchten – ganz ohne eigenen Bankenvertrag.
          </>
        ),
      },
      {
        q: "Welche Vorteile bietet eine Partnerschaft mit HYPOTEQ?",
        a: (
          <>
            Als Partner profitierst du von attraktiven Margen, einer fairen
            Provisionsstruktur, schnellen Auszahlungen, digitalen Tools sowie
            persönlichem Support – und das alles ohne Produktkonkurrenz.
            <br />
            Du stärkst deine Kundenbindung und erweiterst dein Angebot, ohne
            zusätzlichen administrativen Aufwand.
          </>
        ),
      },
      {
        q: "Wie funktioniert die Zusammenarbeit?",
        a: (
          <>
            Du bleibst im Lead: Die Kundenbeziehung gehört dir, während HYPOTEQ
            <br />
            Du führst die Beratung, wir übernehmen die Analyse, holen Offerten
            bei unseren Partnerbanken ein und begleiten dich bis zum Abschluss.
          </>
        ),
      },
      {
        q: "Welche Tools stehen mir als Partner zur Verfügung?",
        a: (
          <>
            Als Vertriebspartner kannst du über unsere Website Kreditanträge
            erfassen, den Funnel nutzen, Termine vereinbaren, Fragen stellen und
            unsere digitalen Tools wie den Hypothekenrechner oder die
            Immobilienbewertung (bereit ab Dezember 2025) verwenden – einfach,
            effizient und transparent.
            <br />
            Es gibt keinen separaten Login oder geschützten Bereich – du nutzt
            unsere Online-Tools direkt über die Website.
          </>
        ),
      },
      {
        q: "Wie profitiert meine Kundschaft von der Partnerschaft mit HYPOTEQ?",
        a: (
          <>
            Über unser Netzwerk mit mehr als 30 Kreditgebern vergleichen wir für
            deine Kund:innen die besten Finanzierungslösungen am Markt –
            <br />
            Du bleibst Hauptansprechperson und bietest echten Mehrwert, während
            wir im Hintergrund die passende Finanzierung strukturieren und
            begleiten.
            <br />
            Mehr dazu unter 
            <a
              href="https://hypoteq.ch/partner"
              target="_blank"
              className="underline"
            >
              hypoteq.ch/partner
            </a>
          </>
        ),
      },
    ].map((item, index) => {
      const isOpen = openIndex === index;

      return (
        <div key={index} className="flex flex-col w-full">

          <div
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center border border-[#000]
            rounded-[30px] sm:rounded-[50px] py-[10px] px-[20px] cursor-pointer
            transition-all duration-300 hover:bg-[#132219]/5"
          >
            <p className="text-[20px] font-[500] tracking-[-0.32px] text-[#132219]">
              {item.q}
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="#132219"
              viewBox="0 0 16 16"
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            >
              <path d="M9.59969 6.40031V0H6.40031V6.40031H0V9.59969H6.40031V16H9.59969V9.59969H16V6.40031H9.59969Z" />
            </svg>
          </div>

          {isOpen && (
            <div
              className="mt-[12px] border border-[#132219] rounded-[16px] p-[24px]
              bg-white shadow-sm text-[18px] leading-[150%] font-light text-[#132219]"
            >
              {item.a}
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

    </section>
    
  );
}
