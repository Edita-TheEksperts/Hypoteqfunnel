// app/partner/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function PartnerPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/partner/summary");
  };

  return (
    <div className="w-full min-h-screen flex items-start pt-16 justify-center px-4">
      <div className="max-w-5xl w-full space-y-6">
        <h1 className="text-[36px] font-semibold text-[#132219]">
          Nur für Vertriebspartner – Dokumente
        </h1>
        <p className="text-gray-700">
          Laden Sie die Unterlagen für natürliche oder juristische Personen
          gemäss Checkliste hoch.
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center text-gray-500">
          Drag &amp; Drop Dokumente (Implementim uploadi më vonë)
        </div>

        <button
          onClick={handleNext}
          className="px-10 py-3 rounded-full text-white font-medium text-lg bg-[#132219] hover:bg-black transition"
        >
          Weiter
        </button>
      </div>
    </div>
  );
}
