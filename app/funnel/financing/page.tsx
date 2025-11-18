"use client";

import { useFunnelStore } from "@/lib/funnelStore";
import FinancingDirect from "./FinancingDirect";

export default function FinancingPage() {
  const { customerType } = useFunnelStore();

  // If customerType hasn't been chosen yet (direct or partner)
  if (!customerType) {
    return (
      <p className="mt-20 text-center text-xl">
        Please select customer type first.
      </p>
    );
  }

  return (
    <div className="w-full">
      {customerType === "partner" && (
        <p className="text-green-700 font-medium mb-4">
          ✔ Partner erkannt – Formular bleibt gleich
        </p>
      )}

      <FinancingDirect />
    </div>
  );
}
