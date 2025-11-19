"use client";

import FunnelCalc from "@/components/funnelCalc";

function FinancingStep({
  data,
  setData,
  projectData,
  customerType,
  saveStep,
    borrowers, 
  back,
}: any) {
  /* ==========================
      LOGIC CHECKS
  =========================== */
// Accepts: "direct", "direkt", "direct_customer", "direktkunde"
const normalizedCustomer = customerType?.toLowerCase();

const isDirect =
  normalizedCustomer?.includes("dir") ||
  normalizedCustomer?.includes("kunde") ||
  normalizedCustomer?.includes("partner") ||   // për variantin e drejtë
  normalizedCustomer?.includes("parnter");     // për variantin me gabim në UI

  const isKauf = projectData?.projektArt?.toLowerCase() === "kauf";
  const isAblösung = projectData?.projektArt?.toLowerCase() === "abloesung";
const borrowerType = borrowers?.[0]?.type; // nat | jur

const isNat = borrowerType === "nat";
const isJur = borrowerType === "jur";


  const showNeukauf = isDirect && isKauf && (isNat || isJur);

  /* ==========================
      HANDLERS
  =========================== */
  const handleChange = (key: string, value: any) => {
    setData((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const ToggleButton = ({ active, children, onClick }: any) => {
    const isJa = children === "Ja";
    const isNein = children === "Nein";

    return (
      <button
        onClick={onClick}
        className={`
          flex items-center gap-3
          px-6 py-2.5 rounded-full border text-sm transition-all
          ${
            active
              ? "bg-[#CAF476] border-[#132219] text-[#132219]"
              : "bg-white border-[#C8C8C8] text-[#132219]"
          }
        `}
        style={{ minHeight: "40px" }}
      >
        {isJa && <span className="w-4 h-4 rounded-full bg-[#132219]"></span>}
        {isNein && (
          <img src="/images/nein1.svg" alt="Nein Icon" className="w-5 h-5" />
        )}
        {children}
      </button>
    );
  };

  const inputStyle =
    "px-5 py-2 border border-[#132219] rounded-full text-sm w-full";

  return (
    <div className="w-full max-w-[1400px] mx-auto lg:pl-20 -mt-10">

      {/* ====================================================== */}
      {/* NEUKAUF (Direct + Natürliche/Juristische Person) */}
      {/* ====================================================== */}
      {showNeukauf && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-12">

          {/* LEFT SIDE */}
          <div className="space-y-10">
            <h1 className="text-4xl font-semibold">Kauf</h1>

            {/* Kaufpreis */}
            <div>
              <label className="font-medium">Kaufpreis Immobilie</label>
              <input
                type="number"
                placeholder="Betrag"
                className={inputStyle}
                value={data.kaufpreis || ""}
                onChange={(e) => handleChange("kaufpreis", e.target.value)}
              />
            </div>

            {/* Eigenmittel */}
            <div>
              <label className="font-medium">Eigenmittel</label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <input
                  type="number"
                  placeholder="Bar"
                  className={inputStyle}
                  value={data.eigenmittel_bar || ""}
                  onChange={(e) => handleChange("eigenmittel_bar", e.target.value)}
                />

                <input
                  type="number"
                  placeholder="3 Säule"
                  className={inputStyle}
                  value={data.eigenmittel_saeule3 || ""}
                  onChange={(e) => handleChange("eigenmittel_saeule3", e.target.value)}
                />

                <input
                  type="number"
                  placeholder="PK: Betrag"
                  className={inputStyle}
                  value={data.eigenmittel_pk || ""}
                  onChange={(e) => handleChange("eigenmittel_pk", e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Schenkung, usw"
                  className={inputStyle}
                  value={data.eigenmittel_schenkung || ""}
                  onChange={(e) =>
                    handleChange("eigenmittel_schenkung", e.target.value)
                  }
                />
                {/* Total Eigenmittel (Betrag) */}
<div className="col-span-1 md:col-span-2">
  <input
    type="number"
    disabled
    placeholder="Betrag"
    className={`${inputStyle} bg-[#F5F5F5] text-[#555] cursor-not-allowed`}
    value={
      (
        Number(data.eigenmittel_bar || 0) +
        Number(data.eigenmittel_saeule3 || 0) +
        Number(data.eigenmittel_pk || 0) +
        Number(data.eigenmittel_schenkung || 0)
      ) || ""
    }
  />
</div>

              </div>
            </div>
{/* PK-Verpfändung + Hypothekarlaufzeiten */}
<div className="flex flex-col md:flex-row gap-4 md:gap-[45px]">

  {/* PK-Verpfändung */}
  <div className="flex-1">
    <label className="font-medium">PK-Verpfändung</label>
    <div className="flex gap-4 mt-3">
      {["Ja", "Nein"].map((opt) => (
        <ToggleButton
          key={opt}
          active={data.pkVorbezug === opt}
          onClick={() => handleChange("pkVorbezug", opt)}
        >
          {opt}
        </ToggleButton>
      ))}
    </div>
  </div>

{/* Hypothekarlaufzeiten */}
<div className="flex-1">
  <label className="font-medium">Hypothekarlaufzeiten</label>

  <select
    className={`${inputStyle} mt-3 appearance-none pr-10`}
    value={data.modell || ""}
    onChange={(e) => handleChange("modell", e.target.value)}
  >
    <option value="">Bitte wählen</option>

    <option value="saron">Saron</option>
    <option value="1">1 Jahr</option>
    <option value="2">2 Jahre</option>
    <option value="3">3 Jahre</option>
    <option value="4">4 Jahre</option>
    <option value="5">5 Jahre</option>
    <option value="6">6 Jahre</option>
    <option value="7">7 Jahre</option>
    <option value="8">8 Jahre</option>
    <option value="9">9 Jahre</option>
    <option value="10">10 Jahre</option>

    <option value="mix">Mix</option>
  </select>
</div>

</div>


            {/* Einkommen */}
            <div>
              <label className="font-medium">Einkommen<br/>
(inkl. Jährliches Bruttoeinkommen inkl. Bonus*)  </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <input
                  placeholder="Brutto-Haushaltseinkommen"
                  className={inputStyle}
                  value={data.brutto || ""}
                  onChange={(e) => handleChange("brutto", e.target.value)}
                />
              </div>
            </div>

            {/* Steueroptimierung */}
            <div>
              <label className="font-medium">
                Interessiert an einer steueroptimierten Finanzierungslösung?
              </label>

              <div className="flex gap-4 mt-3">
                {["Ja", "Nein"].map((opt) => (
                  <ToggleButton
                    key={opt}
                    active={data.steueroptimierung === opt}
                    onClick={() => handleChange("steueroptimierung", opt)}
                  >
                    {opt}
                  </ToggleButton>
                ))}
              </div>
            </div>

            {/* Kaufdatum */}
            <div>
              <label className="font-medium">Kaufdatum</label>
              <input
                type="date"
                className={inputStyle}
                value={data.kaufdatum || ""}
                onChange={(e) => handleChange("kaufdatum", e.target.value)}
              />
            </div>

            {/* Kommentar */}
            <div>
              <label className="font-medium">Kommentar</label>
              <textarea
                className="w-full px-5 py-2 border border-[#132219] rounded-2xl text-sm"
                rows={4}
                value={data.kommentar || ""}
                onChange={(e) => handleChange("kommentar", e.target.value)}
              />
            </div>
          </div>

          {/* RIGHT SIDE – Calculator */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="w-[444px] max-w-full">
           <FunnelCalc data={data} projectData={projectData} />

            </div>
          </div>
        </div>
      )}

      {/* ====================================================== */}
      {/* ABLÖSUNG */}
      {/* ====================================================== */}
      {isAblösung && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12">

          <div className="space-y-10">
            <h1 className="text-4xl font-semibold">Ablösung</h1>

            {/* Hypothekarbetrag */}
            <div>
              <label className="font-medium">Hypothekarbetrag</label>
              <input
                type="number"
                placeholder="Betrag"
                className={inputStyle}
                value={data.abloesung_betrag || ""}
                onChange={(e) => handleChange("abloesung_betrag", e.target.value)}
              />
            </div>

            {/* Erhöhung */}
            <div className="flex flex-col">
              <label className="font-medium mb-4">
                Erhöhung der Hypothek?
              </label>

              <div className="flex gap-4 mb-[13px]">
                {["Ja", "Nein"].map((opt) => (
                  <ToggleButton
                    key={opt}
                    active={data.erhoehung === opt}
                    onClick={() => handleChange("erhoehung", opt)}
                  >
                    {opt}
                  </ToggleButton>
                ))}
              </div>

              {data.erhoehung === "Ja" && (
                <input
                  type="number"
                  placeholder="85,000 CHF"
                  className={`${inputStyle} mt-[4px]`}
                  value={data.erhoehung_betrag || ""}
                  onChange={(e) =>
                    handleChange("erhoehung_betrag", e.target.value)
                  }
                />
              )}
            </div>

            {/* Steueroptimierung */}
            <div>
              <label className="font-medium">  Interessiert an einer steueroptimierten Finanzierungslösung?</label>
              <div className="flex gap-4 mt-3">
                {["Ja", "Nein"].map((opt) => (
                  <ToggleButton
                    key={opt}
                    active={data.steueroptimierung === opt}
                    onClick={() => handleChange("steueroptimierung", opt)}
                  >
                    {opt}
                  </ToggleButton>
                ))}
              </div>
            </div>

            {/* Kaufdatum */}
            <div>
              <label className="font-medium">Kaufdatum</label>
              <input
                type="date"
                className={inputStyle}
                value={data.abloesedatum || ""}
                onChange={(e) => handleChange("abloesedatum", e.target.value)}
              />
            </div>

            {/* Kommentar */}
            <div>
              <label className="font-medium">Kommentar</label>
              <textarea
                className="w-full px-5 py-2 border border-[#132219] rounded-2xl text-sm"
                rows={4}
                value={data.kommentar || ""}
                onChange={(e) => handleChange("kommentar", e.target.value)}
              />
            </div>
          </div>

          <div className="w-full flex lg:justify-end justify-center">
            <div className="max-w-[380px] w-full lg:ml-auto">
    <FunnelCalc data={data} projectData={projectData} />

            </div>
          </div>

        </div>
      )}

      {/* NAVIGATION */}
      <div className="flex justify-between mt-14 px-6 md:px-12">
        <button onClick={back} className="px-6 py-2 border border-[#132219] rounded-full">
          Zurück
        </button>

        <button
          onClick={saveStep}
          className="px-6 py-2 bg-[#CAF476] text-[#132219] rounded-full"
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

export default FinancingStep;
