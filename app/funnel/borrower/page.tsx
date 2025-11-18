"use client";

import BorrowerType from "./BorrowerType";
import { useRouter } from "next/navigation";
import { useFunnelStore } from "@/lib/funnelStore";

export default function BorrowerPage() {
  const router = useRouter();

  // Get borrowerType from Zustand
  const borrowerType = useFunnelStore(state => state.borrowerType);

  const handleContinue = () => {
    if (!borrowerType) return;
    router.push("/funnel/property");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">

        <BorrowerType />

        <div className="w-full flex justify-end mt-10 pr-10">
          <button
            disabled={!borrowerType}
            onClick={handleContinue}
            className={`w-[168px] h-[32px] rounded-full flex items-center justify-center text-[14px] transition
              ${
                borrowerType
                  ? "bg-black text-white hover:bg-[#222]"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}
