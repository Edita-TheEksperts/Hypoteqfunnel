"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFunnelStore } from "@/lib/funnelStore";

export default function FinancingPartner() {
  const router = useRouter();
  const { customerType } = useFunnelStore();

  useEffect(() => {
    if (customerType !== "partner") {
      router.push("/funnel/start");
    }
  }, [customerType, router]);

  return (
    <div className="w-full space-y-8">
      <h1 className="text-2xl font-semibold">Nur für Vertriebspartner</h1>

      <div className="border p-6 min-h-[200px] bg-gray-50">
        DRAG & DROP
      </div>

      <textarea
        className="w-full p-4 border rounded-xl"
        placeholder="Kommentar"
      />

      <h2 className="text-xl font-semibold">Checkliste für Dokumente</h2>

      {/* Insert full checklist exactly as screenshot */}
    </div>
  );
}
