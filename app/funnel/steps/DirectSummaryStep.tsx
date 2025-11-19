"use client";

import { useFunnelStore } from "@/src/store/funnelStore";

export default function DirectSummaryStep({ back, saveStep }: any) {
  const { project, property, borrowers, financing } = useFunnelStore();

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

  return (
    <div className="w-full max-w-[1100px] mx-auto text-[#132219] py-20 px-6">

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
          <div className="text-[20px] font-medium">
            {project.projektArt === "kauf" ? "Neukauf" : "Ablösung"}
          </div>

          <label className="text-[18px] font-light opacity-70">Kreditnehmer</label>
          <div className="text-[20px] font-medium">
            {borrowers[0]?.type === "jur"
              ? "Juristische Person"
              : "Natürliche Person"}
          </div>
        </CardSection>

        {/* ================= SECTION: Finanzierung ================= */}
        <CardSection title="Finanzierung">
          <label className="text-[18px] font-light opacity-70">
            Art der Immobilie
          </label>
          <div className="text-[20px] font-medium">
            {format(property.artImmobilie)}
          </div>

          <label className="text-[18px] font-light opacity-70">
            Art der Liegenschaft
          </label>
          <div className="text-[20px] font-medium">
            {format(property.artLiegenschaft)}
          </div>

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
              .map((k: any) =>
                borrowers[0]?.type === "jur"
                  ? k.firmenname
                  : `${k.vorname} ${k.name}, ${formatDate(k.geburtsdatum)}`
              )
              .join("; ")}
          </div>
        </CardSection>

        {/* ================= SECTION: Kalkulator ================= */}
        <CardSection title="Kalkulator / Übersicht">
          <label className="text-[18px] font-light opacity-70">
            Kaufpreis Immobilie
          </label>
          <div className="text-[20px] font-medium">{CHF(financing.kaufpreis)}</div>

          <label className="text-[18px] font-light opacity-70">Eigenmittel</label>
          <div className="text-[20px] font-medium">—</div>

          <label className="text-[18px] font-light opacity-70">PK-Verpfändung</label>
          <div className="text-[20px] font-medium">
            {format(financing.pkVorbezug)}
          </div>

          <label className="text-[18px] font-light opacity-70">
            Hypothekenlaufzeiten
          </label>
          <div className="text-[20px] font-medium">{format(financing.laufzeit)}</div>

          <label className="text-[18px] font-light opacity-70">Einkommen</label>
          <div className="text-[20px] font-medium">
            {CHF(financing.brutto)}
            {financing.bonus ? " + Bonus" : ""}
          </div>

          <label className="text-[18px] font-light opacity-70">
            Steueroptimierung
          </label>
          <div className="text-[20px] font-medium">
            {format(financing.steueroptimierung)}
          </div>

          <label className="text-[18px] font-light opacity-70">
            Kaufdatum
          </label>
          <div className="text-[20px] font-medium">
            {formatDate(financing.kaufdatum)}
          </div>

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
