"use client";

import { useRouter } from "next/navigation";
import { useFunnelStore } from "@/lib/funnelStore";
import { useEffect } from "react";

export default function FinancingForm() {
  const router = useRouter();
  const { customerType } = useFunnelStore();

  useEffect(() => {
    if (customerType !== "direct") {
      router.push("/funnel/start");
    }
  }, [customerType, router]);

  return (
    <div className="w-full min-h-screen bg-white flex justify-center pt-10">
      <div className="w-[90%] max-w-[1400px] grid grid-cols-3 gap-10">

        {/* ---------------- LEFT SIDE – FORM ---------------- */}
        <div className="col-span-1 space-y-6">

          <h2 className="text-xl font-semibold text-[#132219]">Kauf</h2>

          {/* Kaufpreis Immobilie */}
          <div>
            <label className="block mb-1 font-medium">Kaufpreis Immobilie</label>
            <input
              type="text"
              placeholder="Betrag"
              className="w-full border rounded-full px-4 py-2"
            />
          </div>

          {/* Eigenmittel */}
          <div>
            <label className="block mb-1 font-medium">Eigenmittel</label>
            <input
              type="text"
              placeholder="Bar (min. 10%)"
              className="w-full border rounded-full px-4 py-2 mb-2"
            />
            <input
              type="text"
              placeholder="3. Säule: Betrag"
              className="w-full border rounded-full px-4 py-2"
            />
          </div>

          {/* PK Betrag */}
          <div>
            <label className="block mb-1 font-medium">PK: Betrag</label>
            <input
              type="text"
              placeholder="Betrag"
              className="w-full border rounded-full px-4 py-2"
            />
          </div>

          {/* Andere */}
          <div>
            <label className="block mb-1 font-medium">Andere</label>
            <input
              type="text"
              placeholder="Schenkung, usw"
              className="w-full border rounded-full px-4 py-2"
            />
          </div>

          {/* PK-Verpfändung */}
          <div>
            <label className="block mb-2 font-medium">PK-Verpfändung</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input type="radio" name="pk" /> Ja
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="pk" /> Nein
              </label>
            </div>
          </div>

          {/* Hypothekarlaufzeiten */}
          <div>
            <label className="block mb-2 font-medium">
              Hypothekarlaufzeiten
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input type="radio" name="hypo" /> Saron - Fest
              </label>
     
              <label className="flex items-center gap-1">
                <input type="radio" name="hypo" /> Jahre - Mix
              </label>
            </div>
          </div>

          {/* Steueroptimiert */}
          <div>
            <label className="block mb-2 font-medium">
              Interessiert an einer steueroptimierten Finanzierungslösung?
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input type="radio" name="tax_opt" /> Ja
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="tax_opt" /> Nein
              </label>
            </div>
          </div>

          {/* Kaufdatum */}
          <div>
            <label className="block mb-2 font-medium">Kaufdatum</label>
            <input
              type="date"
              className="border rounded-full px-4 py-2 w-full"
            />
          </div>

          {/* Kommentar */}
          <div>
            <label className="block mb-1 font-medium">Kommentar</label>
            <textarea
              placeholder="Kommentar"
              rows={4}
              className="w-full border rounded-xl px-4 py-2"
            ></textarea>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end pt-4">
  <button 
  onClick={() => router.push("/funnel/summarize")}
  className="px-8 py-2 bg-gray-300 rounded-full"
>
  Continue
</button>

          </div>
        </div>

        {/* ---------------- CENTER – CALCULATOR ---------------- */}
        <div className="col-span-1 flex justify-center">
          <div className="w-[350px] h-[450px] bg-gray-300 rounded-xl flex items-center justify-center shadow">
            <p className="text-2xl font-medium text-[#132219]">Calculator</p>
          </div>
        </div>

        {/* ---------------- RIGHT SIDE – EMPTY FOR FUTURE ---------------- */}
        <div className="col-span-1">
          {/* Leave empty for now, will add summary later */}
        </div>
      </div>
    </div>
  );
}
