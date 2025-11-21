"use client";
import React, { useEffect, useRef, useState } from "react";

interface ExpectItem {
  title: string;
  text: string;
}

const PartnerExpectSection: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(5).fill(false)
  );

  const items: ExpectItem[] = [
    {
      title: "Du bleibst im Lead",
      text: "Die Kundenbeziehung gehört dir. Wir arbeiten im Hintergrund – du bleibst zentrale:r Ansprechpartner:in.",
    },
    {
      title: "Attraktive Vergütung",
      text: "Unsere Margen sind höher als bei klassischen Vermittlern – und du erhältst eine faire Provision pro Abschluss.",
    },
    {
      title: "Ein Tool für alles",
      text: "Unser Partnerbereich unterstützt dich bei Beratung, Erfassung und Offertanfragen – strukturiert, intuitiv und verständlich. Du leitest die Kund:innen durch die wichtigsten Schritte, wir übernehmen die Analyse und holen passende Finanzierungsvorschläge bei unseren Partnern ein. Alles ohne direkte Bankschnittstellen – dafür mit persönlicher Begleitung und klarer Kommunikation.",
    },
    {
      title: "Immobilienbewertung inklusive",
      text: "Über unser System kannst du in wenigen Minuten fundierte Markteinschätzungen für deine Kund:innen erstellen – ein echter Mehrwert bei Verkauf, Kauf oder Finanzierung.",
    },
    {
      title: "Persönlicher Support",
      text: "Du hast Fragen zu Dossiers, Dokumenten oder Szenarien? Unser Team steht dir zur Seite – per Mail oder Telefon. Keine Hotline, kein Bot.",
    },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = entry.isIntersecting;
              return updated;
            });
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section
      className="bg-[#E6E6E6] py-[120px] px-[116px] mb-[120px]
                 flex justify-between items-start gap-[46px]
                 max-lg:flex-col max-lg:px-[40px] max-md:px-[24px]"
    >
      {/* LEFT COLUMN — Sticky Title */}
      <div className="max-w-[1579px] flex-shrink-0 sticky top-[160px] self-start">
        <h2
          className="text-[#132219] text-[48px] font-[500] leading-[100%] tracking-[-0.48px]
                     font-['SF Pro Display'] max-md:text-[36px]"
        >
          Was dich bei<br />uns erwartet:
        </h2>
      </div>

      {/* RIGHT COLUMN — Animated Cards */}
      <div className="flex flex-col gap-[48px] max-w-[680px] w-full">
        {items.map((item, index) => {
          const isVisible = visibleCards[index];
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                cardsRef.current[index] = el;
              }}
              className={`bg-[#132219] rounded-[10px] p-[24px] flex flex-col gap-[24px]
                transition-all duration-[1000ms] ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : isEven
                    ? "opacity-0 -translate-x-[80px]"
                    : "opacity-0 translate-x-[80px]"
                }`}
            >
              <h3 className="text-[#CAF476] text-[36px] font-[500] leading-normal font-['SF Pro Display'] max-md:text-[28px]">
                {item.title}
              </h3>
              <p className="text-[#CAF476] text-[20px] font-[400] leading-normal font-['SF Pro Display'] max-md:text-[18px]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnerExpectSection;
