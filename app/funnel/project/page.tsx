"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFunnelStore, ProjectType } from "@/lib/funnelStore";

export default function ProjectStep() {
  const router = useRouter();
  const [selected, setSelected] = useState<ProjectType>(null);

  const setProjectType = useFunnelStore((state) => state.setProjectType);

  const handleSelect = (type: ProjectType) => {
    setSelected(type);
    setProjectType(type); // ✔ tani pranon vetëm vlerat e sakta
  };

  const handleNext = () => {
    if (!selected) return;

    if (selected === "neu") {
      router.push("/funnel/property");
    } else if (selected === "ablosung") {
      router.push("/funnel/financing");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-start pt-20 justify-center px-4">
      <div className="max-w-5xl w-full">
        
        <Image
          src="/hypoteq-logo.png"
          alt="Hypoteq Logo"
          width={160}
          height={40}
          className="mb-12"
        />

        <h1 className="text-[48px] font-semibold text-[#132219] mb-2">
          Was ist Ihr Projekt?
        </h1>

        <p className="text-[24px] text-[#132219] mb-10">
          Beschreiben Sie die Art Ihres Projekts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Neu */}
          <div
            onClick={() => handleSelect("neu")}
            className={`cursor-pointer flex flex-col gap-[47px] p-[24px] w-[444px] rounded-[10px] bg-[#C6C5C5] border ${
              selected === "neu" ? "border-black" : "border-transparent"
            }`}
          >
            <Image src="/icons/home.svg" alt="Neu Icon" width={40} height={40} />
            <div>
              <p className="text-[20px] font-medium text-black mb-2">Neu (Kauf)</p>
              <div className="w-full h-[1px] bg-black opacity-40"></div>
            </div>
          </div>

          {/* Ablösung */}
          <div
            onClick={() => handleSelect("ablosung")}
            className={`cursor-pointer flex flex-col gap-[47px] p-[24px] w-[444px] rounded-[10px] bg-[#C6C5C5] border ${
              selected === "ablosung" ? "border-black" : "border-transparent"
            }`}
          >
            <Image src="/icons/refinance.svg" alt="Ablösung Icon" width={40} height={40} />
            <div>
              <p className="text-[20px] font-medium text-black mb-2">Ablösung</p>
              <div className="w-full h-[1px] bg-black opacity-40"></div>
            </div>
          </div>

        </div>

        <div className="mt-12">
          <button
            disabled={!selected}
            onClick={handleNext}
            className={`px-10 py-3 rounded-full text-white font-medium text-lg ${
              selected ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Weiter
          </button>
        </div>

      </div>
    </div>
  );
}
