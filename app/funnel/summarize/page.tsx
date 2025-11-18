"use client";

import { useFunnelStore } from "@/lib/funnelStore";
import { useRouter } from "next/navigation";

export default function SummaryPage() {
  const router = useRouter();

  const property = useFunnelStore(state => state.property);
  const borrowers = useFunnelStore(state => state.borrowers);

  const handleFinish = () => {
    router.push("/funnel/thanks");
  };

  return (
    <div className="w-full min-h-screen bg-white px-10 py-10">

      <h1 className="text-2xl font-semibold mb-8 text-[#132219]">
        Zusammenfassung
      </h1>

      <div className="w-full border rounded-xl p-6 grid grid-cols-3 gap-6 bg-white shadow-sm">

        {/* ART DER IMMOBILIE */}
        <div>
          <label className="font-medium block mb-2">Art der Immobilie</label>
          <div className="border rounded-full px-4 py-2">
            {property.propertyType || "-"}
          </div>
        </div>

        <div>
          <label className="font-medium block mb-2">Art der Liegenschaft</label>
          <div className="border rounded-full px-4 py-2">
            {property.liegenschaftType || "-"}
          </div>
        </div>

        <div>
          <label className="font-medium block mb-2">Nutzung der Immobilie</label>
          <div className="border rounded-full px-4 py-2">
            {property.usage || "-"}
          </div>
        </div>

        {/* 2nd Row */}
        <div>
          <label className="font-medium block mb-2">Renovationen?</label>
          <div className="border rounded-full px-4 py-2">
            {property.hasRenovation || "-"}
          </div>
        </div>

        <div>
          <label className="font-medium block mb-2">Betrag Renovationen</label>
          <div className="border rounded-full px-4 py-2">
            {property.renovationAmount || "-"}
          </div>
        </div>

        <div>
          <label className="font-medium block mb-2">Bereits reserviert?</label>
          <div className="border rounded-full px-4 py-2">
            {property.isReserved || "-"}
          </div>
        </div>

        {/* ANGEBOTE */}
        <div>
          <label className="font-medium block mb-2">Finanzierungsangebote?</label>
          <div className="border rounded-full px-4 py-2">
            {property.hasOffers || "-"}
          </div>
        </div>

        {property.hasOffers === "ja" && (
          <>
            <div>
              <label className="font-medium block mb-2">Bank</label>
              <div className="border rounded-full px-4 py-2">
                {property.bank || "-"}
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2">Zins</label>
              <div className="border rounded-full px-4 py-2">
                {property.zins || "-"}
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2">Laufzeit</label>
              <div className="border rounded-full px-4 py-2">
                {property.laufzeit || "-"}
              </div>
            </div>
          </>
        )}

        {/* KREDITNEHMER */}
        <div className="col-span-3">
          <label className="font-medium block mb-2">Angaben zum Kreditnehmer</label>

          {borrowers.map((b, i) => (
            <div key={i} className="grid grid-cols-5 gap-4 mb-4">
              <div className="border rounded-full px-4 py-2">{b.vorname || "-"}</div>
              <div className="border rounded-full px-4 py-2">{b.name || "-"}</div>
              <div className="border rounded-full px-4 py-2">{b.geburtsdatum || "-"}</div>
              <div className="border rounded-full px-4 py-2">{b.angestellt || "-"}</div>
              <div className="border rounded-full px-4 py-2">{b.zivilstand || "-"}</div>
            </div>
          ))}
        </div>

      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleFinish}
          className="px-8 py-2 bg-[#c2e86f] hover:bg-[#b7dc66] rounded-full"
        >
          Continue
        </button>
      </div>

    </div>
  );
}
