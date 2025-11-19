"use client";

import { useMemo } from "react";

interface FunnelCalcProps {
  data: any;
  projectData?: any;
}

/* ============================================================
    NORMAT REAL-FIXE SIPAS EXCEL
============================================================ */
const getRealRate = (modell: string) => {
  switch (modell) {
    case "saron":
      return 0.0085; // 0.85%
    case "1":
    case "2":
    case "3":
    case "4":
      return 0.0105; // 1.05%
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
      return 0.0140; // 1.40%
    case "mix":
      return (0.0105 + 0.0140) / 2; // 1.225%
    default:
      return 0.01;
  }
};

/* ============================================================
    STRESS RATE VETËM PËR KAUF
============================================================ */
const STRESS_RATE = 0.05;

export default function FunnelCalc({ data, projectData }: FunnelCalcProps) {
  const projektArt = projectData?.projektArt?.toLowerCase();

  const CHF = (v: number) =>
    "CHF " + Math.round(v).toLocaleString("de-CH");

  /* ============================================================
      1) KAUF  (always stress-test 5%)
  ============================================================ */
  if (projektArt === "kauf") {
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
const hasInputs =
  kaufpreis > 0 ||
  eigenmittel > 0 ||
  einkommen > 0;

    const zinssatz = STRESS_RATE;

    const tragbarkeitPct = useMemo(() => {
      if (einkommen <= 0) return 0;

      const maintenance = kaufpreis * 0.008;
      const interestYear = hypothek * zinssatz;
      const total = interestYear + maintenance;

      return Math.round((total / einkommen) * 100);
    }, [hypothek, einkommen, kaufpreis]);

    const isNegative =
      eigenmittelPct < 20 || tragbarkeitPct > 33;

    return (
      <BoxWrapper>
  <TopBox
  title={isNegative ? "Not eligible" : "Eligibility confirmed."}
  subtitle="Estimated mortgage need:"
  value={CHF(hypothek)}
  error={hasInputs && isNegative}
/>


        <TwoBoxGrid
          leftLabel="Eigenmittel"
          leftValue={`${eigenmittelPct}%`}
          rightLabel="Tragbarkeit"
          rightValue={`${tragbarkeitPct}%`}
        />
      </BoxWrapper>
    );
  }

/* ============================================================
    2) ABLÖSUNG (uses REAL RATE like Excel)
============================================================ */
if (projektArt === "abloesung") {
  const kaufpreis = Number(data.kaufpreis || 0);

  const betrag = Number(data.abloesung_betrag || 0);
  const erhoehung =
    data.erhoehung === "Ja" ? Number(data.erhoehung_betrag || 0) : 0;

  const hypothek = betrag + erhoehung;

  const einkommen = Number(data.brutto || 0) + Number(data.bonus || 0);

  const zinssatz = getRealRate(data.modell);

  const zinsen = (hypothek * zinssatz) / 12;
  const unterhalt = (kaufpreis ? kaufpreis * 0.008 : 0) / 12;

  const zweiteHypothek =
    kaufpreis > 0 ? Math.max(hypothek - kaufpreis * 0.8, 0) : 0;

  const amortisation =
    zweiteHypothek > 0 ? zweiteHypothek / 15 / 12 : 0;

  const total = zinsen + unterhalt + amortisation;

  const tragbarkeitPct =
    einkommen > 0 ? Math.round(((total * 12) / einkommen) * 100) : 0;

  const hasInputs = betrag > 0 || einkommen > 0;
  const isNegative = tragbarkeitPct > 33;

  return (
    <BoxWrapper>
      <TopBox
        title={isNegative ? "Not eligible" : "Eligibility confirmed."}
        subtitle="Estimated mortgage need:"
        value={CHF(hypothek)}
        error={hasInputs && isNegative}
      />

      <TwoBoxGrid
        leftLabel="Hypothek"
        leftValue={CHF(hypothek)}
        rightLabel="Tragbarkeit"
        rightValue={`${tragbarkeitPct}%`}
      />
    </BoxWrapper>
  );
}


  return null;
}

/* ============================================================
    UI COMPONENTS
============================================================ */

function BoxWrapper({ children }: any) {
  return (
    <div className="w-full max-w-[444px] border border-black rounded-[10px] bg-white flex flex-col gap-[12px] p-[12px]">
      {children}
    </div>
  );
}

function TopBox({ title, subtitle, value, error = false }: any) {
  return (
    <div
      className={`
        w-full border border-black rounded-[10px]
        flex flex-col items-center gap-[12px] py-[14px] px-[12px]
        ${error ? "bg-[#FF9A9A]" : "bg-[#CAF476]"}
      `}
    >
      <p className="text-center text-[16px] leading-tight font-medium text-[#132219]">
        {title}
        <br />
        {subtitle}
      </p>
      <div className="text-[38px] font-semibold leading-none text-center">
        {value}
      </div>
    </div>
  );
}

function TwoBoxGrid({ leftLabel, leftValue, rightLabel, rightValue }: any) {
  return (
    <div className="w-full grid grid-cols-2 gap-[12px]">
      <SmallBox label={leftLabel} value={leftValue} />
      <SmallBox label={rightLabel} value={rightValue} />
    </div>
  );
}

function SmallBox({ label, value }: any) {
  return (
    <div className="bg-[#CAF476] border border-black rounded-[10px] flex flex-col items-center py-[14px] px-[12px] gap-[12px]">
      <p className="text-[20px] font-medium">{label}</p>
      <div className="border-t border-black w-full" />
      <p className="text-[32px] font-bold">{value}</p>
    </div>
  );
}
