"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface StepProps {
  step?: string;
  title: string;
  text: string;
  image?: string;
  highlightBox?: boolean;
}

/* STEP CARD */
const Step: React.FC<StepProps> = ({ step, title, text, image, highlightBox }) => (
  <div
    className={`
      flex flex-col lg:flex-row justify-between items-start
      w-[95%] sm:w-[90%] md:w-[85%] lg:w-[1272px]
      ${highlightBox ? "p-5 sm:p-6 md:p-10 lg:p-14" : "p-5 sm:p-6 md:p-8 lg:p-10"}
      font-[var(--font-sfpro)]
      bg-[#f8f9fa] rounded-2xl shadow-lg border border-[#e5e7eb]
      transition-all duration-500
    `}
  >
    {/* LEFT SIDE */}
    <div className="text-[#132219] w-full lg:w-[60%] text-center lg:text-left">
      {step && (
        <p className="text-[13px] sm:text-[14px] md:text-[16px] font-[500] mb-[4px]">{step}</p>
      )}

      <h3
        className={`
          ${
            highlightBox
              ? "text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]"
              : "text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px]"
          }
          font-[600] mb-[10px] sm:mb-[12px] md:mb-[16px]
        `}
      >
        {title}
      </h3>

      <p
        className={`
          ${
            highlightBox
              ? "text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px]"
              : "text-[15px] sm:text-[17px] md:text-[20px] lg:text-[24px]"
          }
          font-[300] leading-[160%]
        `}
      >
        {text}
      </p>
    </div>

    {/* Empty spacer for layout */}
    <div className="hidden lg:block w-[199px]" />

    {/* RIGHT SIDE: highlight box */}
    {highlightBox ? (
      <div
        className="
          flex flex-col justify-between items-center
          w-full sm:w-[85%] md:w-[550px]
          h-auto sm:h-[260px] md:h-[300px] lg:h-[350px]
          px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]
          py-[24px] sm:py-[30px]
          bg-[#CAF476] rounded-[14px] shadow-md mt-6 lg:mt-0
        "
      >
        <p
          className="
            text-center text-[#132219]
            text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px]
            font-[400] leading-[140%]
            mx-auto
            max-w-[90%] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[860px]
            tracking-[-0.32px]
          "
        >
          Jetzt in nur 3 Schritten starten. Wir führen Sie sicher durch jeden Schritt.
        </p>

  <Link href="/funnel" className="w-full">
  <button
    className="flex items-center justify-center gap-[8px] sm:gap-[10px] 
    border border-[#132219] rounded-[50px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px]
    text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-[600] 
    text-[#132219] bg-[#CAF476] hover:opacity-90 transition-all"
  >
    Bestes Angebot finden
  </button>
</Link>
      </div>
    ) : (
      image && (
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="flex-shrink-0 w-full sm:w-[320px] md:w-[450px] lg:w-[513px] rounded-[10px] overflow-hidden flex justify-center items-center mt-6 lg:mt-0"
        >
          <Image
            src={image}
            alt={title}
            width={513}
            height={400}
            className="object-contain rounded-[10px]"
          />
        </motion.div>
      )
    )}
  </div>
);

/* MAIN COMPONENT – PARALLAX RISE */
export default function HowItWorks() {
  const steps = [
    {
      step: "Klick 1",
      title: "Angaben zur Immobilie & Finanzierung",
      text: "Trage die wichtigsten Informationen zu deiner Immobilie, deinem Einkommen und deinen Eigenmitteln ein. Bereits nach diesem Schritt siehst du, ob Tragbarkeit und Eigenmittel für eine Finanzierung ausreichen – schnell, einfach und unverbindlich.",
      image: "/images/Epara.png",
    },
    {
      step: "Klick 2",
      title: "Dokumente einreichen",
      text: "Im nächsten Schritt lädst du die erforderlichen Unterlagen hoch (z. B. Lohnausweis, Steuererklärung, Grundbuchauszug). Sobald alle Dokumente vollständig vorliegen, starten wir unseren Prozess und holen die passenden Bankangebote für dich ein.",
      image: "/images/documents.png",
    },
    {
      step: "Klick 3",
      title:  "Angebot erhalten & entscheiden",
      text:"Innerhalb von 48–72 Stunden nach Eingang aller Dokumente erhältst du deine individuellen Offerten – transparent, vergleichbar und persönlich auf dein Profil abgestimmt.Mit einem Klick kannst du das gewünschte Angebot akzeptieren oder ablehnen.",
      image: "/images/486373494.png",
    },
    {
      title: "Gratulation – Deine Hypothek ist bereit",
      text: " Nach deiner Auswahl übernehmen wir den Rest: Wir koordinieren die nächsten Schritte mit der Bank und begleiten dich bis zum Abschluss.",
      highlightBox: true,
    },
  ];

  return (
<section
  className="
    relative bg-white 
    px-[116px]
    mt-[32px] sm:mt-[48px] md:mt-[120px]
  "
>

      {/* Sticky Title */}
      <h2
        className="
          font-['SF Pro Display']
          text-[#132219]
          font-[500]
          text-[28px] sm:text-[36px] md:text-[56px]
          leading-[140%]
          tracking-[-0.4px]
          text-center md:text-left
          sticky top-[80px] z-20 bg-white/80 backdrop-blur-sm py-[12px]
        "
      >
        So funktioniert’s – in nur drei Schritten zu deiner Hypothek
      </h2>

      {/* Steps – PARALLAX RISE EFFECT */}
      <div className="relative flex flex-col gap-[160px] mt-[200px]">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="w-full flex justify-center"
          >
            <Step {...step} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
