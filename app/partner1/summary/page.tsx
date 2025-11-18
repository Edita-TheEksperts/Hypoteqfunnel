"use client";

export default function SummarizePage() {
  return (
    <div className="w-full min-h-screen px-10 py-10">
      <h1 className="text-[32px] font-semibold mb-10">Summarize</h1>

      {/* TOP ROW */}
      <div className="grid grid-cols-4 gap-10">

        {/* Kaufpreis Immobilie */}
        <div className="flex flex-col gap-2">
          <label>Kaufpreis Immobilie</label>
          <input
            type="text"
            placeholder="Betrag"
            className="border border-black rounded-full px-4 py-1"
          />
        </div>

        {/* Eigenmittel */}
        <div className="flex flex-col gap-2">
          <label>Eigenmittel</label>
          <input
            type="text"
            placeholder="Bar (min. 10%)"
            className="border border-black rounded-full px-4 py-1"
          />
        </div>

        {/* PK Betrag */}
        <div className="flex flex-col gap-2">
          <label>PK: Betrag</label>
          <input
            type="text"
            placeholder="Betrag"
            className="border border-black rounded-full px-4 py-1"
          />
        </div>

        {/* Andere */}
        <div className="flex flex-col gap-2">
          <label>Andere</label>
          <input
            type="text"
            placeholder="Schenkung, usw"
            className="border border-black rounded-full px-4 py-1"
          />
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-4 gap-10 mt-12">

        {/* PK-Verpfändung */}
        <div className="flex flex-col gap-2">
          <label>PK-Verpfändung</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="radio" name="pk" /> Ja
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="pk" /> Nein
            </label>
          </div>
        </div>

        {/* Hypothekarlaufzeiten */}
        <div className="flex flex-col gap-2">
          <label>Hypothekarlaufzeiten</label>
          <div className="flex gap-3">
            <button className="px-4 py-1 rounded-full border border-black">
              Saron - Fest
            </button>
            <button className="px-4 py-1 rounded-full border border-black">
              Jahre - Mix
            </button>
          </div>
        </div>

        {/* Steueroptimiert */}
        <div className="flex flex-col gap-2">
          <label>
            Interessiert an einer steueroptimierten Finanzierungslösung?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="radio" name="steuer" /> Ja
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="steuer" /> Nein
            </label>
          </div>
        </div>

        {/* Kaufdatum */}
        <div className="flex flex-col gap-2">
          <label>Kaufdatum</label>
          <input
            type="date"
            className="border border-black rounded-full px-4 py-1"
          />
        </div>
      </div>

      {/* KOMMENTAR */}
      <div className="mt-12">
        <label className="block mb-2">Kommentar</label>
        <textarea
          rows={6}
          placeholder="Kommentar"
          className="w-full border border-black rounded-xl p-4"
        />
      </div>

      {/* BUTTON */}
      <div className="w-full flex justify-end mt-10">
        <button className="px-10 py-2 bg-black text-white rounded-full hover:bg-gray-800">
          Continue
        </button>
      </div>
    </div>
  );
}
