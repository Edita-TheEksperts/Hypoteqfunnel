"use client";

interface Props {
  step: number;
}

const steps = [
  { id: 1, label: "Allgemeines" },
  { id: 2, label: "Finanzierung" },
  { id: 3, label: "Kalkulator / Zusammenfassung" },
  { id: 4, label: "Abschluss" },
];

export default function FunnelSidebar({ step }: Props) {
  return (
    <div className="w-[250px] min-h-screen bg-[#E2E2E2] flex flex-col px-5 py-10 border-r border-gray-300">

      {/* LOGO */}
      <img src="/images/logo.png" className="w-[140px] h-auto mb-14" />

      {/* STEPS */}
      <div className="flex flex-col gap-10">
        {steps.map((s) => {
          const isActive = s.id === step;
          const isCompleted = s.id < step;

          return (
            <div key={s.id} className="relative flex items-center gap-3 mb-6">

              {/* ACTIVE LEFT BAR */}
              {isActive && (
                <div className="absolute -left-4 h-full w-1.5 bg-[#132219] rounded-r-md" />
              )}

              <div
                className={`
                  w-[46px] h-[46px] rounded-full border flex items-center justify-center
                  text-[18px] font-semibold transition-all duration-200
                  ${isActive || isCompleted 
                    ? "bg-[#CAF476] border-[#132219] text-[#132219]" 
                    : "border-[#A0A0A0] text-[#A0A0A0]"
                  }
                `}
              >
                {s.id}
              </div>

              <div>
                <div className="text-[12px] text-gray-500">Step {s.id}</div>
                <div
                  className={`
                    text-[16px] transition-all duration-200
                    ${isActive || isCompleted ? "text-[#132219]" : "text-[#A0A0A0]"}
                  `}
                >
                  {s.label}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
