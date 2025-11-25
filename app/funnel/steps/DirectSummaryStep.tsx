"use client";

import { useFunnelStore } from "@/src/store/funnelStore";
import { useEffect } from "react";

export default function DirectSummaryStep({ back, saveStep }: any) {
  const { project, property, borrowers, financing } = useFunnelStore();

  useEffect(() => {
    console.log("📌 DirectSummaryStep - project from store:", project);
  }, [project]);

  /* ================= HELPERS ================= */
  const format = (v: any) => (v ? v : "—");

  const CHF = (v: any) =>
    v ? `${parseFloat(v).toLocaleString("de-CH")} CHF` : "—";

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    if (dateStr.includes(".")) return dateStr;

    if (dateStr.includes("-")) {
      const [y, m, d] = dateStr.split("-");
      return `${d}.${m}.${y}`;
    }

    return dateStr;
  };

  /* ================= CARD COMPONENT ================= */
  const CardSection = ({ title, children }: any) => (
    <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
      <h3 className="text-[26px] font-semibold tracking-tight mb-8">{title}</h3>
      <div className="grid grid-cols-[280px_1fr] gap-y-7 gap-x-16">
        {children}
      </div>
    </div>
  );

  // fallback nëse projektArt nuk është zgjedhur
  const projectLabel =
    project.projektArt === "kauf"
      ? "Neukauf"
      : project.projektArt === "abloesung"
      ? "Ablösung"
      : "Nicht gewählt";

  /* ================= FALLBACK BORROWER LABEL ================= */
  const borrowerLabel =
    borrowers?.[0]?.type === "jur"
      ? "Juristische Person"
      : borrowers?.[0]?.type === "nat"
      ? "Natürliche Person"
      : "—";

  /* ================= CALCULATE TOTAL EIGENMITTEL ================= */
  const totalEigenmittel = financing
    ? Number(financing.eigenmittel_bar || 0) +
      Number(financing.eigenmittel_saeule3 || 0) +
      Number(financing.eigenmittel_pk || 0) +
      Number(financing.eigenmittel_schenkung || 0)
    : 0;
/* ================= MAP HYPOTHEKARLAUFZEITEN ================= */
const laufzeitMap = {
  saron: "Saron",
  "1": "1 Jahr",
  "2": "2 Jahre",
  "3": "3 Jahre",
  "4": "4 Jahre",
  "5": "5 Jahre",
  "6": "6 Jahre",
  "7": "7 Jahre",
  "8": "8 Jahre",
  "9": "9 Jahre",
  "10": "10 Jahre",
  mix: "Mix",
} as const;

const laufzeitLabel =
  laufzeitMap[financing?.modell as keyof typeof laufzeitMap] || "—";

 
  return (
<div className="w-full max-w-[1100px] mx-auto text-[#132219] py-20 px-6 -mt-16">

      {/* ================= HEADER ================= */}
      <div className="pb-8 border-b border-gray-200">
        <h2 className="text-[40px] font-semibold tracking-tight">
          Zusammenfassung
        </h2>
      </div>

      <div className="flex flex-col gap-12 mt-12">

        {/* ================= SECTION: Allgemeines ================= */}
        <CardSection title="Allgemeines">
          <label className="text-[18px] font-light opacity-70">
            Was ist Ihr Projekt?
          </label>
          <div className="text-[20px] font-medium">{projectLabel}</div>

          <label className="text-[18px] font-light opacity-70">Kreditnehmer</label>
          <div className="text-[20px] font-medium">{borrowerLabel}</div>
        </CardSection>

        {/* ================= SECTION: Finanzierung ================= */}
        <CardSection title="Finanzierung">
          <label className="text-[18px] font-light opacity-70">
            Art der Immobilie
          </label>
          <div className="text-[20px] font-medium">{format(property.artImmobilie)}</div>

          <label className="text-[18px] font-light opacity-70">
            Art der Liegenschaft
          </label>
          <div className="text-[20px] font-medium">{format(property.artLiegenschaft)}</div>

          <label className="text-[18px] font-light opacity-70">Nutzung</label>
          <div className="text-[20px] font-medium">{format(property.nutzung)}</div>

          <label className="text-[18px] font-light opacity-70">
            Renovationen / Mehrausgaben
          </label>
          <div className="text-[20px] font-medium">
            {property.renovation === "ja"
              ? `Ja, ${CHF(property.renovationsBetrag)}`
              : "Nein"}
          </div>

          <label className="text-[18px] font-light opacity-70">
            Liegenschaft reserviert?
          </label>
          <div className="text-[20px] font-medium">
            {property.reserviert === "ja" ? "Ja" : "Nein"}
          </div>

          <label className="text-[18px] font-light opacity-70">
            Finanzierungsangebote
          </label>
          <div className="text-[20px] font-medium leading-snug">
            {property.finanzierungsangebote === "ja"
              ? `Ja, ${property.bank}, ${property.zins}%, ${property.laufzeit}`
              : "Nein"}
          </div>

          <label className="text-[18px] font-light opacity-70">
            Kreditnehmer Details
          </label>
          <div className="text-[20px] font-medium leading-snug">
            {property.kreditnehmer
              ?.map((k: any) =>
                borrowers[0]?.type === "jur"
                  ? k.firmenname
                  : `${k.vorname} ${k.name}, ${formatDate(k.geburtsdatum)}`
              )
              .join("; ") || "—"}
          </div>
        </CardSection>

        {/* ================= SECTION: Kalkulator ================= */}
        <CardSection title="Kalkulator / Übersicht">
          <label className="text-[18px] font-light opacity-70">
            Kaufpreis Immobilie
          </label>
          <div className="text-[20px] font-medium">{CHF(financing.kaufpreis)}</div>

          <label className="text-[18px] font-light opacity-70">Eigenmittel</label>
          <div className="text-[20px] font-medium">
            {totalEigenmittel > 0 ? CHF(totalEigenmittel) : "—"}
          </div>

          <label className="text-[18px] font-light opacity-70">PK-Verpfändung</label>
          <div className="text-[20px] font-medium">{format(financing.pkVorbezug)}</div>

   <label className="text-[18px] font-light opacity-70">
  Hypothekenlaufzeiten
</label>
<div className="text-[20px] font-medium">{laufzeitLabel}</div>


          <label className="text-[18px] font-light opacity-70">Einkommen</label>
          <div className="text-[20px] font-medium">
            {CHF(financing.brutto)}
            {financing.bonus ? " + Bonus" : ""}
          </div>

          <label className="text-[18px] font-light opacity-70">
            Steueroptimierung
          </label>
          <div className="text-[20px] font-medium">{format(financing.steueroptimierung)}</div>

          <label className="text-[18px] font-light opacity-70">
            Kaufdatum
          </label>
          <div className="text-[20px] font-medium">{formatDate(financing.kaufdatum)}</div>

          <label className="text-[18px] font-light opacity-70">Kommentar</label>
          <div className="text-[20px] font-medium">{format(financing.kommentar)}</div>
        </CardSection>
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="flex justify-between pt-16">
        <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-[#132219]"
        >
          Zurück
        </button>

        <button
          onClick={saveStep}
          className="px-10 py-2 rounded-full bg-[#CAF476] text-[#132219] font-semibold"
        >
          Weiter
        </button>
      </div>
    </div>
  );
}
