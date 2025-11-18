"use client";

import { useRouter } from "next/navigation";
import { useFunnelStore } from "@/lib/funnelStore";

const figmaInput =
  "h-[32px] px-3 py-[4px] rounded-full border border-[#132219] text-[#132219] text-[12px] leading-[22px] font-normal outline-none";

export default function PropertyStep() {
  const router = useRouter();
const { borrowerType } = useFunnelStore();

  const {
    property,
    borrowers,
    setProperty,
    addBorrower,
    updateBorrower,
  } = useFunnelStore();

  const {
    propertyType,
    neubauType,
    liegenschaftType,
    usage,
    hasRenovation,
    renovationAmount,
    isReserved,
    hasOffers,
  } = property;

  // ---------------------- NORMAL RADIO (pa rreth) ----------------------
  const NormalRadio = ({
    group,
    value,
    label,
  }: {
    group: keyof typeof property;
    value: string;
    label: string;
  }) => {
    const selected = useFunnelStore((state) => state.property[group]);
    const isSelected = selected === value;

    return (
      <button
        type="button"
        onClick={() => {
          if (group === "propertyType") {
            setProperty({ propertyType: value });
            if (value === "bestehend") setProperty({ neubauType: null });
            return;
          }
          setProperty({ [group]: value });
        }}
        className={`
          h-[32px] px-4 rounded-full text-[12px] leading-[22px] font-normal 
          flex items-center gap-2 transition
          ${isSelected
            ? "bg-[#A3A3A3] text-[#132219] border border-[#132219]"
            : "text-[#132219] border border-[#132219] bg-white hover:bg-[#A3A3A3]/50"
          }
        `}
      >
        {label}
      </button>
    );
  };

  // ---------------------- CIRCLE RADIO (me rreth & pikë të zezë) ----------------------
  const CircleRadio = ({
    group,
    value,
    label,
  }: {
    group: keyof typeof property;
    value: string;
    label: string;
  }) => {
    const selected = useFunnelStore((state) => state.property[group]);
    const isSelected = selected === value;

    return (
      <button
        type="button"
        onClick={() => setProperty({ [group]: value })}
        className={`
          h-[32px] px-4 rounded-full text-[12px] leading-[22px] font-normal 
          flex items-center gap-2 transition border border-[#132219]
          ${isSelected ? "bg-[#A3A3A3]/50" : "bg-white hover:bg-[#A3A3A3]/50"}
        `}
      >
        {/* Black ring */}
        <span className="w-4 h-4 border border-[#132219] rounded-full flex items-center justify-center">
          {/* Inner dot only when selected */}
          {isSelected && <span className="w-2 h-2 bg-[#132219] rounded-full"></span>}
        </span>

        {label}
      </button>
    );
  };
const isFormValid =
  propertyType &&
  liegenschaftType &&
  usage; // këto 3 mjaftojnë si në figma

  // ---------------------- NEXT STEP ----------------------
  const handleNext = () => {
    if (!propertyType || !liegenschaftType || !usage) return;
    router.push("/funnel/financing");
  };

  return (
    <div className="w-full min-h-screen flex items-start pt-16 justify-center px-4">
      <div className="max-w-5xl w-full space-y-10">
        <h1 className="text-[36px] font-semibold text-[#132219]">
          Angaben zur Immobilie
        </h1>

        {/* ---------------- Property Type ---------------- */}
        <section className="space-y-3">
          <h2 className="font-semibold text-lg text-[#132219]">Art der Immobilie</h2>

          <div className="flex flex-wrap gap-3">
            <NormalRadio group="propertyType" value="bestehend" label="Bestehende Immobilie" />
            <NormalRadio group="propertyType" value="neubau" label="Neubau" />
          </div>

          {propertyType === "neubau" && (
            <div className="flex flex-wrap gap-3 mt-2">
              <NormalRadio group="neubauType" value="erstellt" label="Bereits erstellt" />
              <NormalRadio group="neubauType" value="bauprojekt" label="Bauprojekt" />
            </div>
          )}
        </section>

        {/* ---------------- Liegenschaft ---------------- */}
        <section className="space-y-2">
          <h2 className="font-semibold text-lg text-[#132219]">Art der Liegenschaft</h2>
          <div className="flex flex-wrap gap-3">
            <NormalRadio group="liegenschaftType" value="einfamilienhaus" label="Einfamilienhaus" />
            <NormalRadio group="liegenschaftType" value="wohnung" label="Wohnung" />
            <NormalRadio group="liegenschaftType" value="mehrfamilienhaus" label="Mehrfamilienhaus" />
            <NormalRadio group="liegenschaftType" value="misch" label="Mischliegenschaft" />
          </div>
        </section>

        {/* ---------------- Nutzung ---------------- */}
        <section className="space-y-2">
          <h2 className="font-semibold text-lg text-[#132219]">Nutzung der Immobilie</h2>
          <div className="flex flex-wrap gap-3">
            <NormalRadio group="usage" value="selbstbewohnt" label="Selbstbewohnt" />
            <NormalRadio group="usage" value="rendite" label="Rendite-Objekt" />
            <NormalRadio group="usage" value="zweitwohnsitz" label="Zweitwohnsitz" />
            <NormalRadio
              group="usage"
              value="vermietet_teilweise"
              label="Vermietet & teilweise selbstbew."
            />
          </div>
        </section>

        {/* ---------------- Renovation ---------------- */}
        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-lg text-[#132219]">
            Gibt es Renovationen oder Mehrausgaben über Kaufpreis?
          </h2>

          <div className="flex gap-3">
            <CircleRadio group="hasRenovation" value="ja" label="Ja" />
            <CircleRadio group="hasRenovation" value="nein" label="Nein" />
          </div>

          {hasRenovation === "ja" && (
            <input
              className={`${figmaInput} w-[383px]`}
              placeholder="Betrag"
              value={renovationAmount || ""}
              onChange={(e) => setProperty({ renovationAmount: e.target.value })}
            />
          )}
        </section>

        {/* ---------------- Reserved ---------------- */}
        <section className="space-y-2">
          <h2 className="font-semibold text-lg text-[#132219]">
            Ist die Liegenschaft bereits reserviert?
          </h2>

          <div className="flex gap-3">
            <CircleRadio group="isReserved" value="ja" label="Ja" />
            <CircleRadio group="isReserved" value="nein" label="Nein" />
          </div>
        </section>

        {/* ---------------- Angebote ---------------- */}
        <section className="space-y-2">
          <h2 className="font-semibold text-lg text-[#132219]">
            Bestehen bereits Finanzierungsangebote?
          </h2>

          <div className="flex gap-3">
            <CircleRadio group="hasOffers" value="nein" label="Nein" />
            <CircleRadio group="hasOffers" value="ja" label="Ja" />
          </div>

          {hasOffers === "ja" && (
            <div className="flex flex-wrap gap-4 pt-3">
              <input
                className={`${figmaInput} w-[250px]`}
                placeholder="Bank"
                value={property.bank || ""}
                onChange={(e) => setProperty({ bank: e.target.value })}
              />

              <input
                className={`${figmaInput} w-[180px]`}
                placeholder="Zins"
                value={property.zins || ""}
                onChange={(e) => setProperty({ zins: e.target.value })}
              />

              <input
                className={`${figmaInput} w-[220px]`}
                placeholder="Laufzeit"
                value={property.laufzeit || ""}
                onChange={(e) => setProperty({ laufzeit: e.target.value })}
              />
            </div>
          )}
        </section>

{/* ---------------- Kreditnehmer ---------------- */}
<section className="space-y-3 pt-6">
  <h2 className="font-semibold text-lg text-[#132219]">Angaben zum Kreditnehmer</h2>

  {/* ⭐ NATÜRLICHE PERSON */}
  {borrowerType === "natuerlich" && (
    <>
      {borrowers.map((k, idx) => (
        <div key={idx} className="flex items-center gap-[10px]">
          <input
            className={`${figmaInput} w-[200px]`}
            placeholder="Vorname"
            value={k.vorname}
            onChange={(e) => updateBorrower(idx, "vorname", e.target.value)}
          />

          <input
            className={`${figmaInput} w-[200px]`}
            placeholder="Name"
            value={k.name}
            onChange={(e) => updateBorrower(idx, "name", e.target.value)}
          />

          <input
            className={`${figmaInput} w-[200px]`}
            type="date"
            value={k.geburtsdatum}
            onChange={(e) => updateBorrower(idx, "geburtsdatum", e.target.value)}
          />

          <input
            className={`${figmaInput} w-[150px]`}
            placeholder="Angestellt"
            value={k.angestellt}
            onChange={(e) => updateBorrower(idx, "angestellt", e.target.value)}
          />

          <input
            className={`${figmaInput} w-[130px]`}
            placeholder="Zivilstand"
            value={k.zivilstand}
            onChange={(e) => updateBorrower(idx, "zivilstand", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={addBorrower}
        className="text-[#132219] text-[28px] font-bold leading-none"
      >
        +
      </button>
    </>
  )}

{/* ⭐ JURISTISCHE PERSON */}
{borrowerType === "juristisch" && (
  <div className="flex flex-col gap-4 mt-4">

    {borrowers.map((b, idx) => (
      <div key={idx} className="flex items-center gap-4">

        {/* + button */}
        <button
          type="button"
          onClick={addBorrower}
          className="text-[#132219] text-[28px] font-bold leading-none"
        >
          +
        </button>

        {/* Firmenname input */}
        <input
          className={`${figmaInput} w-[400px]`}
          placeholder="Firmenname"
          value={b.firmenname || ""}
          onChange={(e) => updateBorrower(idx, "firmenname", e.target.value)}
        />
      </div>
    ))}

  </div>
)}

</section>

        {/* ---------------- Next Button ---------------- */}
{/* Bottom right Continue button */}
<div className="w-full flex justify-end pr-10 pb-10 pt-10">
  <button
    onClick={handleNext}
    className={`
      w-[168px] h-[32px] flex items-center justify-center
      rounded-full border border-[#132219] text-[14px]
      transition
      ${isFormValid
        ? "bg-[#132219] text-white hover:bg-black"
        : "bg-[#B9B9B9] text-white cursor-not-allowed"
      }
    `}
  >
    Continue
  </button>
</div>

      </div>
    </div>
  );
}
