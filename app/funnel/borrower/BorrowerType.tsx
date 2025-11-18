"use client";

import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useFunnelStore } from "@/lib/funnelStore";

export default function BorrowerType() {
  const [selected, setSelected] = useState("");

  // Zustand setter
  const setBorrowerType = useFunnelStore(state => state.setBorrowerType);

  const handleSelect = (type: string) => {
    setSelected(type);

    setBorrowerType(type === "natural" ? "natuerlich" : "juristisch");
  };

  const boxStyles =
    "w-[444px] p-6 rounded-[10px] flex flex-col items-start gap-6 cursor-pointer transition-all";

  return (
    <div className="mt-10">
      <h1 className="text-[48px] font-semibold text-secondary">
        Kreditnehmer
      </h1>

      <p className="text-[24px] text-secondary mt-2">
        Tell us about the nature of your project
      </p>

      <div className="flex items-center gap-8 mt-10">
        
        {/* NATÜRLICHE PERSON */}
        <div
          onClick={() => handleSelect("natural")}
          className={`${boxStyles} ${
            selected === "natural"
              ? "bg-[#CCCCCC]"
              : "bg-[#C6C5C5]/50 hover:bg-[#C6C5C5]/70"
          }`}
        >
          <FaHome size={32} />
          <p className="text-[20px] text-black">Natürliche Person</p>
          <div className="w-full h-[2px] bg-black/30"></div>
        </div>

        {/* JURISTISCHE PERSON */}
        <div
          onClick={() => handleSelect("juristic")}
          className={`${boxStyles} ${
            selected === "juristic"
              ? "bg-[#CCCCCC]"
              : "bg-[#C6C5C5]/50 hover:bg-[#C6C5C5]/70"
          }`}
        >
          <PiBuildingOfficeBold size={32} />
          <p className="text-[20px] text-black">Juristische Person</p>
          <div className="w-full h-[2px] bg-black/30"></div>
        </div>
      </div>
    </div>
  );
}
