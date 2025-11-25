"use client";

import { useEffect } from "react";
import { useFunnelStore } from "@/src/store/funnelStore";
import { v4 as uuidv4 } from "uuid";

function BorrowersStep({ saveStep , back}: any) {
  const borrowers = useFunnelStore((state) => state.borrowers);
  const setBorrowers = useFunnelStore((state) => state.setBorrowers);

  // Initialize default borrower on mount
  useEffect(() => {
    if (!borrowers || borrowers.length === 0) {
      setBorrowers([{ id: uuidv4(), type: "nat" }]);
    }
  }, [borrowers, setBorrowers]);

  const selectType = (type: "nat" | "jur") => {
    const updated = [{ id: borrowers[0]?.id || uuidv4(), type }];
    setBorrowers(updated); // update store
    saveStep();            // move to next step
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto pl-20 pr-48">
      <h2 className="text-[48px] font-semibold text-[#132219] mb-8">
        Kreditnehmer?
      </h2>

      <div className="flex gap-[26px] mb-12">
        {/* Natürliche Person Card */}
        <div
          onClick={() => selectType("nat")}
          className={`
            w-[360px] h-[240px] rounded-[10px] cursor-pointer
            flex flex-col justify-between items-center p-8 border
            transition-colors duration-200
            ${borrowers[0]?.type === "nat" ? "bg-[#CAF476] border-[#132219]" : "bg-white border-[#132219]"}
            hover:bg-[#CAF476]
          `}
        >
          <img src="/images/44.svg" alt="Natürliche Person" className="w-[100px] h-[80px]" />
          <p className="text-[24px] text-[#132219] font-normal">Natürliche Person</p>
        </div>

        {/* Juristische Person Card */}
        <div
          onClick={() => selectType("jur")}
          className={`
            w-[360px] h-[240px] rounded-[10px] cursor-pointer
            flex flex-col justify-between items-center p-8 border
            transition-colors duration-200
            ${borrowers[0]?.type === "jur" ? "bg-[#CAF476] border-[#132219]" : "bg-white border-[#132219]"}
            hover:bg-[#CAF476]
          `}
        >
          <img src="/images/2345.svg" alt="Juristische Person" className="w-[100px] h-[80px]" />
          <p className="text-[24px] text-[#132219] font-normal">Juristische Person</p>
        </div>
      </div>
      
      {/* ========================================================= */}
      {/*  BUTTONS                                                  */}
      {/* ========================================================= */}
      <div className="flex justify-between mt-20">
        <button onClick={back} className="px-6 py-2 border border-[#132219] rounded-full">
          Zurück
        </button>
        <button onClick={saveStep} className="px-6 py-2 bg-[#CAF476] text-[#132219] rounded-full">
          Weiter
        </button>
      </div>
    </div>
  );
}

export default BorrowersStep;
