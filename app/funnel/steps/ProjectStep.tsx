"use client";

import { useFunnelStore } from "@/src/store/funnelStore";

function ProjectStep({ data, setData, saveStep, customerType, back }: any) {
  const project = useFunnelStore((state) => state.project);
  const setProject = useFunnelStore((state) => state.setProject);
const selectCard = (value: string) => {
  console.log("🔹 selectCard fired, value:", value);

  // 1) Update LOCAL STATE
  setData((prev: any) => ({ ...prev, projektArt: value }));

  // 2) Update STORE
  setProject((prev: any) => ({ ...prev, projektArt: value }));

  // Debug without projectData (because projectData DOES NOT exist here)
  console.log("🔹 After set:", {
    local: { ...data, projektArt: value },
    store: useFunnelStore.getState().project
  });

  setTimeout(() => saveStep(), 50);
};



  const title =
    customerType === "partner"
      ? "Welches Projekt hat Ihr Kunde?"
      : "Was ist Ihr Projekt?";

  const subtitle =
    customerType === "partner"
      ? "Bitte wählen Sie die Projektart für Ihren Kunden."
      : "Beschreiben Sie die Art Ihres Projekts.";

  return (
    <div className="w-full max-w-[1400px] mx-auto pl-20 pr-48">
      {/* TITLE */}
      <h2 className="text-[48px] font-semibold text-[#132219] mb-3">
        {title}
      </h2>

      <p className="text-[24px] text-[#132219]/80 mb-12">{subtitle}</p>

      {/* CARDS */}
      <div className="flex gap-[26px]">
        <div
          onClick={() => selectCard("kauf")}
          className={`
            w-[360px] h-[240px] rounded-[10px] cursor-pointer flex flex-col justify-between items-center p-8 transition-all duration-200 border
            ${data.projektArt === "kauf" ? "bg-[#CAF476] border-[#132219]" : "bg-white border-[#132219]"}
            hover:bg-[#CAF476]
          `}
        >
          <img src="/images/88  (1).svg" className="w-[55px] h-[38px]" />
          <div className="flex flex-col w-full items-center">
            <p className="text-[24px] text-[#132219] font-normal">Neue Hypothek</p>
            <div className="w-full h-[1px] bg-[#132219] mt-2"></div>
          </div>
        </div>

        <div
          onClick={() => selectCard("abloesung")}
          className={`
            w-[360px] h-[240px] rounded-[10px] cursor-pointer flex flex-col justify-between items-center p-8 transition-all duration-200 border
            ${data.projektArt === "abloesung" ? "bg-[#CAF476] border-[#132219]" : "bg-white border-[#132219]"}
            hover:bg-[#CAF476]
          `}
        >
          <img src="/images/88  (2).svg" className="w-[55px] h-[38px]" />
          <div className="flex flex-col w-full items-center">
            <p className="text-[24px] text-[#132219] font-normal">Ablösung</p>
            <div className="w-full h-[1px] bg-[#132219] mt-2"></div>
          </div>
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

export default ProjectStep;
