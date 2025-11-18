"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { id: 1, label: "Allgemeines", path: "/funnel/general" },
  { id: 2, label: "Finanzierung", path: "/funnel/financing" },
  { id: 3, label: "Kalkulator/ Zusammenfassung", path: "/funnel/summary" },
  { id: 4, label: "Abschluss", path: "/funnel/finish" }
];

export default function FunnelSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[300px] h-screen bg-[#E2E2E2] flex flex-col px-6 py-10 border-r border-gray-300">

      {/* LOGO */}
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="Hypoteq Logo"
          className="w-[166px] h-[42px] mb-16"
        />
      </Link>

      {/* STEPS */}
      <div className="flex flex-col gap-12">

        {steps.map((step) => {
          const isActive = pathname.startsWith(step.path);

          return (
            <div key={step.id} className="flex items-center gap-4">

              {/* Circle */}
              <div
                className={`w-[60px] h-[60px] rounded-full border flex items-center justify-center text-[24px] font-semibold
                  ${
                    isActive
                      ? "bg-[#CAF476] border-[#132219] text-[#132219]"
                      : "bg-transparent border-[#A0A0A0] text-[#A0A0A0]"
                  }
                `}
              >
                {step.id}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span
                  className={`text-[14px] ${
                    isActive ? "text-black font-medium" : "text-gray-500"
                  }`}
                >
                  Step {step.id}
                </span>

                <span
                  className={`text-[20px] font-normal ${
                    isActive ? "text-[#132219]" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}
