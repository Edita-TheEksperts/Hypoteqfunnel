"use client";

function ProjectStep({ data, setData, saveStep, customerType }: any) {
  const selectCard = (value: string) => {
    setData((p: any) => ({ ...p, projektArt: value }));
    saveStep();
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

      <p className="text-[24px] text-[#132219]/80 mb-12">
        {subtitle}
      </p>

      {/* CARDS */}
      <div className="flex gap-[26px]">

<div
  onClick={() => selectCard("kauf")}
  className={`
    w-[360px] h-[240px]
    rounded-[10px] cursor-pointer
    flex flex-col justify-between items-center
    p-8
    transition-all duration-200 border

    ${
      data.projektArt === "kauf"
        ? "bg-[#CAF476] border-[#132219]"
        : "bg-white border-[#132219]"
    }

    hover:bg-[#CAF476]
  `}
>

          <img src="/images/88  (1).svg" className="w-[55px] h-[38px]" />

          <div className="flex flex-col w-full items-center">
            <p className="text-[24px] text-[#132219] font-normal">
              Neu (Kauf)
            </p>
            <div className="w-full h-[1px] bg-[#132219] mt-2"></div>
          </div>
        </div>

<div
  onClick={() => selectCard("abloesung")}
  className={`
    w-[360px] h-[240px]
    rounded-[10px] cursor-pointer
    flex flex-col justify-between items-center
    p-8
    transition-all duration-200 border

    ${
      data.projektArt === "abloesung"
        ? "bg-[#CAF476] border-[#132219]"
        : "bg-white border-[#132219]"
    }

    hover:bg-[#CAF476]
  `}
>

          <img src="/images/88  (2).svg" className="w-[55px] h-[38px]" />

          <div className="flex flex-col w-full items-center">
            <p className="text-[24px] text-[#132219] font-normal">
              Ablösung
            </p>
            <div className="w-full h-[1px] bg-[#132219] mt-2"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectStep;
