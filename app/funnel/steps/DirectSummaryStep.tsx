"use client";
import { useFunnelStore } from "@/src/store/funnelStore";

export default function DirectSummaryStep({ back, saveStep }: any) {
  const { project, property, borrowers, financing } = useFunnelStore();

  const format = (v: any) => (v ? v : "—");
  const CHF = (v: any) =>
    v ? `${parseFloat(v).toLocaleString("de-CH")} CHF` : "—";
const formatDate = (dateStr: string) => {
  if (!dateStr) return "—";

  // Format dd.mm.yyyy — e lëmë kështu
  if (dateStr.includes(".")) return dateStr;

  // Format yyyy-mm-dd — e kthejmë në dd.mm.yyyy
  if (dateStr.includes("-")) {
    const [y, m, d] = dateStr.split("-");
    return `${d}.${m}.${y}`;
  }

  return dateStr;
};

  return (
    <div className="w-full max-w-[900px] mx-auto flex flex-col text-[#132219] py-16 px-4">

      {/* WRAPPER ONLY FOR THE CONTENT (MOVES UP + LEFT) */}
      <div className="-mt-32 -ml-10 flex flex-col gap-16">

        {/* ================= TITLE ================= */}
        <div className="border-b pb-4">
          <h2 className="text-[37px] font-semibold tracking-tight">
            Zusammenfassung
          </h2>
        </div>

        {/* ================= SECTION 1 ================= */}
        <section className="flex flex-col gap-8">
          <h3 className="text-[24px] font-[500]">Allgemeines</h3>

          <div className="grid grid-cols-[260px_1fr] gap-y-4">
            <div className="text-[20px] font-[300] opacity-70">Was ist Ihr Projekt?</div>
            <div className="text-[20px] font-[400]">
              {project.projektArt === "kauf" ? "Neu Kauf" : "Ablösung"}
            </div>

            <div className="text-[20px] font-[300] opacity-70">Kreditnehmer</div>
            <div className="text-[20px] font-[400]">
              {borrowers[0]?.type === "jur"
                ? "Juristische Person"
                : "Natürliche Person"}
            </div>
          </div>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className="flex flex-col gap-8">
          <h3 className="text-[24px] font-[500]">Finanzierung</h3>

          <div className="grid grid-cols-[260px_1fr] gap-y-4">
            <div className="text-[20px] font-[300] opacity-70">Art der Immobilie</div>
            <div className="text-[20px] font-[400]">{format(property.artImmobilie)}</div>

            <div className="text-[20px] font-[300] opacity-70">Art der Liegenschaft</div>
            <div className="text-[20px] font-[400]">{format(property.artLiegenschaft)}</div>

            <div className="text-[20px] font-[300] opacity-70">Nutzung der Immobilie</div>
            <div className="text-[20px] font-[400]">{format(property.nutzung)}</div>

            <div className="text-[20px] font-[300] opacity-70">
              Gibt es Renovationen oder Mehrausgaben?
            </div>
            <div className="text-[20px] font-[400]">
              {property.renovation === "ja"
                ? `Ja, ${CHF(property.renovationsBetrag)}`
                : "Nein"}
            </div>

            <div className="text-[20px] font-[300] opacity-70">Ist die Liegenschaft reserviert?</div>
            <div className="text-[20px] font-[400]">
              {property.reserviert === "ja" ? "Ja" : "Nein"}
            </div>

            <div className="text-[20px] font-[300] opacity-70">Bestehen Finanzierungsangebote?</div>
            <div className="text-[20px] font-[400]">
              {property.finanzierungsangebote === "ja"
                ? `Ja, ${property.bank}, ${property.zins}%, ${property.laufzeit}`
                : "Nein"}
            </div>

            <div className="text-[20px] font-[300] opacity-70">Angaben zum Kreditnehmer</div>
            <div className="text-[20px] font-[400]">
              {property.kreditnehmer
                .map((k: any) =>
                  borrowers[0]?.type === "jur"
                    ? k.firmenname
                    : `${k.vorname} ${k.name}, ${formatDate(k.geburtsdatum)}, ${k.status}`

                )
                .join("; ")}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3 ================= */}
        <section className="flex flex-col gap-8">
          <h3 className="text-[24px] font-[500]">Kalkulator / Zusammenfassung</h3>

          <div className="grid grid-cols-[260px_1fr] gap-y-4">
            <div className="text-[20px] font-[300] opacity-70">Kaufpreis Immobilie</div>
            <div className="text-[20px] font-[400]">{CHF(financing.kaufpreis)}</div>

            <div className="text-[20px] font-[300] opacity-70">Eigenmittel</div>
            <div className="text-[20px] font-[400]">{/* TODO */}</div>

            <div className="text-[20px] font-[300] opacity-70">PK-Verpfändung</div>
            <div className="text-[20px] font-[400]">{format(financing.pkVorbezug)}</div>

            <div className="text-[20px] font-[300] opacity-70">Hypothekenlaufzeiten</div>
            <div className="text-[20px] font-[400]">{format(financing.laufzeit)}</div>

            <div className="text-[20px] font-[300] opacity-70">Einkommen</div>
            <div className="text-[20px] font-[400]">
              {CHF(financing.brutto)}
              {financing.bonus ? " + Bonus" : ""}
            </div>

            <div className="text-[20px] font-[300] opacity-70">
              Interessiert an steueroptimierter Finanzierung?
            </div>
            <div className="text-[20px] font-[400]">{format(financing.steueroptimierung)}</div>

            <div className="text-[20px] font-[300] opacity-70">Kaufdatum</div>
<div className="text-[20px] font-[400]">
  {financing.kaufdatum ? formatDate(financing.kaufdatum) : "—"}
</div>

            <div className="text-[20px] font-[300] opacity-70">Kommentar</div>
            <div className="text-[20px] font-[400]">{format(financing.kommentar)}</div>
          </div>
        </section>

      </div>

      {/* BUTTONS — ALWAYS VISIBLE */}
      <div className="flex justify-between pt-12">
        <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-[#132219] text-[#132219]"
        >
          Zurück
        </button>

        <button
          onClick={saveStep}
          className="px-8 py-2 rounded-full bg-[#CAF476] text-[#132219] font-medium"
        >
          Weiter
        </button>
      </div>

    </div>
  );
}
