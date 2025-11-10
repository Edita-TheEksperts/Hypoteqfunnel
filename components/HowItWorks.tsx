"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

interface StepProps {
  step?: string;
  title: string;
  text: string;
  image?: string;
  highlightBox?: boolean;
}

const Step: React.FC<StepProps> = ({ step, title, text, image, highlightBox }) => (
  <div
    className={`
      flex flex-col lg:flex-row justify-between items-start
      w-[90%] md:w-[85%] lg:w-[1272px]
      ${highlightBox ? "p-6 md:p-10 lg:p-14" : "p-6 md:p-8 lg:p-10"}
      font-[var(--font-sfpro)]
      bg-[#f8f9fa] rounded-2xl shadow-lg border border-[#e5e7eb]
      transition-all duration-500
    `}
  >
    {/* Left Section */}
    <div
      className={`
        text-left text-[#132219]
        w-full lg:w-[60%]
      `}
    >
      {step && <p className="text-[14px] md:text-[16px] font-[500] mb-[4px]">{step}</p>}
      
      <h3
        className={`
          ${highlightBox ? "text-[26px] md:text-[30px] lg:text-[34px]" : "text-[22px] md:text-[26px] lg:text-[28px]"}
          font-[600] mb-[12px] md:mb-[16px]
        `}
      >
        {title}
      </h3>

      <p
        className={`
          ${highlightBox ? "text-[20px] md:text-[22px] lg:text-[26px]" : "text-[18px] md:text-[20px] lg:text-[24px]"}
          font-[300] leading-[150%]
        `}
      >
        {text}
      </p>
    </div>

    {/* Spacer for Desktop */}
    <div className="hidden lg:block w-[199px]" />

    {/* Right Section */}
    {highlightBox ? (
      <div
        className="
          flex flex-col justify-between items-center
          w-full lg:w-[550px]
          h-[260px] md:h-[300px] lg:h-[350px]
          px-[30px] md:px-[60px] lg:px-[80px]
          py-[30px] bg-[#CAF476] rounded-[14px] shadow-md mt-6 lg:mt-0
        "
      >
<p
  className="
    text-center text-[#132219]
    text-[20px] md:text-[26px] lg:text-[32px]
    font-[400] leading-[140%]
    mx-auto
    max-w-[330px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[860px]
    tracking-[-0.32px]
  "
>
Jetzt in nur 3 Klicks starten. 
Wir führen Sie sicher durch 
jeden Schritt.
</p>



        <button className="flex items-center justify-center gap-[10px] border border-[#132219] rounded-[50px] px-[24px] py-[10px]
          text-[18px] md:text-[20px] lg:text-[22px] font-[600] text-[#132219] bg-[#CAF476] hover:opacity-90 transition-all">
          Find my best offer
        </button>
      </div>
    ) : (
      image && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className="flex-shrink-0 w-full md:w-[450px] lg:w-[513px] rounded-[10px] overflow-hidden flex justify-center items-center mt-6 lg:mt-0"
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

export default function HowItWorks() {
  const steps = [
    {
      step: "Klick 1",
      title: "Klick",
      text: "Trage die wichtigsten Informationen zu deiner Immobilie, deinem Einkommen und deinen Eigenmitteln ein. Bereits nach diesem Schritt siehst du, ob Tragbarkeit und Eigenmittel für eine Finanzierung ausreichen – schnell, einfach und unverbindlich.",
      image: "/images/epara.png",
    },
    {
      step: "Klick  2",
      title: "Dokumente einreichen",
      text: "Im nächsten Schritt lädst du die erforderlichen Unterlagen hoch (z. B. Lohnausweis, Steuererklärung, Grundbuchauszug). Sobald alle Dokumente vollständig vorliegen, starten wir unseren Prozess und holen die passenden Bankangebote für dich ein.",
      image: "/images/documents.png",
    },
    {
      step: "Klick  3",
      title: "Angebot erhalten & entscheiden",
      text: "Innerhalb von 48–72 Stunden nach Eingang aller Dokumente erhältst du deine individuellen Offerten – transparent, vergleichbar und persönlich auf dein Profil abgestimmt. Mit einem Klick kannst du das gewünschte Angebot akzeptieren oder ablehnen.",
      image: "/images/ijiji.png",
    },
{
  title: "Gratulation – Deine Hypothek ist bereit",
  text: "Nach deiner Auswahl übernehmen wir den Rest: Wir koordinieren die nächsten Schritte mit der Bank und begleiten dich bis zum Abschluss.",
  highlightBox: true,
},

  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
<section
  ref={ref}
  className="
    relative bg-white 
    h-[500vh] 
    px-4 sm:px-8 md:px-[118px]
    mt-[48px] md:mt-[120px]
  "
>


<motion.h2
  className="
    font-['SF Pro Display']
    text-[#132219]
    font-[500]
    text-[40px] sm:text-[48px] md:text-[56px]
    leading-[140%]
    tracking-[-0.4px]
    mb-[-7px]
    text-left
    whitespace-nowrap
  "
  initial={{ opacity: 1, y: -10 }}
  style={{
    opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
    y: useTransform(scrollYProgress, [0, 0.08], [-10, -60]),
  }}
>
  So funktioniert’s – in nur drei Klicks zu deiner Hypothek
</motion.h2>



      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {steps.map((step, index) => {
          const start = (index - 0.35) / steps.length;
          const end = (index + 0.35) / steps.length;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
const y = useTransform(
  scrollYProgress,
  [start, end],
  [200 + index * 10, index * 20]
);
          const scale = useTransform(scrollYProgress, [start, end], [0.96, 1]);
          const zIndex = index + 1;

          const [visible, setVisible] = useState(false);
          useMotionValueEvent(opacity, "change", (latest) => setVisible(latest > 0.15));

          return (
            <motion.div
              key={index}
              style={{ opacity, scale, y, position: "absolute", zIndex }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className={`w-full flex flex-col items-center justify-center ${
                visible ? "visible pointer-events-auto" : "invisible pointer-events-none"
              }`}
            >
              <Step {...step} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
