"use client";

import { useMemo } from "react";

interface FunnelCalcProps {
  data: {
    kaufpreis?: number | string;
    eigenmittel_bar?: number | string;
    eigenmittel_saeule3?: number | string;
    eigenmittel_pk?: number | string;
    eigenmittel_schenkung?: number | string;
    brutto?: number | string;
    bonus?: number | string;
  };
}

export default function FunnelCalc({ data }: FunnelCalcProps) {
  const kaufpreis = Number(data.kaufpreis || 0);

  const eigenmittel =
    Number(data.eigenmittel_bar || 0) +
    Number(data.eigenmittel_saeule3 || 0) +
    Number(data.eigenmittel_pk || 0) +
    Number(data.eigenmittel_schenkung || 0);

  const einkommen = Number(data.brutto || 0) + Number(data.bonus || 0);

  const hypothek = Math.max(kaufpreis - eigenmittel, 0);

  const eigenmittelPct =
    kaufpreis > 0 ? Math.round((eigenmittel / kaufpreis) * 100) : 0;

  const tragbarkeitPct = useMemo(() => {
    if (einkommen <= 0) return 0;

    const stressRate = 0.05;
    const maintenance = kaufpreis * 0.008;

    const interestYear = hypothek * stressRate;
    const total = interestYear + maintenance;

    return Math.round((total / einkommen) * 100);
  }, [hypothek, einkommen, kaufpreis]);

  const CHF = (v: number) =>
    "CHF " + Math.round(v).toLocaleString("de-CH");

  return (
    <div className="w-full border border-black rounded-[10px] bg-[#CAF476] p-6 flex flex-col items-center gap-6">
      {/* TOP BOX */}
      <div className="w-full border border-black rounded-[10px] bg-[#CAF476] px-6 py-4 text-center flex flex-col gap-3">
        <p className="text-[#132219] text-[18px] leading-tight font-medium">
          Eligibility confirmed.<br /> Estimated mortgage need:
        </p>

        <div className="text-[40px] font-semibold leading-none">
          {CHF(hypothek)}
        </div>
      </div>

      {/* BOTTOM BOXES */}
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="border border-black rounded-[10px] bg-[#CAF476] p-4 text-center flex flex-col gap-4">
          <p className="text-[22px] font-semibold">Eigenmittel</p>
          <div className="border-t border-black w-full"></div>
          <p className="text-[36px] font-bold">{eigenmittelPct}%</p>
        </div>

        <div className="border border-black rounded-[10px] bg-[#CAF476] p-4 text-center flex flex-col gap-4">
          <p className="text-[22px] font-semibold">Tragbarkeit</p>
          <div className="border-t border-black w-full"></div>
          <p className="text-[36px] font-bold">{tragbarkeitPct}%</p>
        </div>
      </div>
    </div>
  );
}
