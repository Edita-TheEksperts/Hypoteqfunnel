"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(900000);
  const [ownFunds, setOwnFunds] = useState(400000);
  const [income, setIncome] = useState(140000);
  const [residenceType, setResidenceType] = useState("haupt");
  const [loanType, setLoanType] = useState("purchase");

  // ---- Parameters based on residence type ----
  const params =
    residenceType === "haupt"
      ? {
          maxBelehnung: 0.8,
          firstMortgageLimit: 0.6667,
          interestRate: 0.05,
          maintenanceRate: 0.008,
          amortizationYears: 15,
          tragbarkeitThreshold: 0.35,
        }
      : {
          maxBelehnung: 0.65,
          firstMortgageLimit: 0,
          interestRate: 0.05,
          maintenanceRate: 0.008,
          amortizationYears: 0,
          tragbarkeitThreshold: 0.35,
        };

  // ---- Calculations ----
  const maxMortgage = propertyPrice * params.maxBelehnung;
  const mortgageNeed = propertyPrice - ownFunds;
  const actualMortgage = Math.min(mortgageNeed, maxMortgage);

  const annualInterest = actualMortgage * params.interestRate;
  const maintenance = propertyPrice * params.maintenanceRate;
  const amortization =
    residenceType === "haupt"
      ? (actualMortgage * (params.maxBelehnung - params.firstMortgageLimit)) /
        params.amortizationYears
      : 0;

  const totalAnnualCost = annualInterest + maintenance + amortization;
  const tragbarkeitRatio = totalAnnualCost / income;

  const tragbarkeitOK = tragbarkeitRatio <= params.tragbarkeitThreshold;
  const eigenmittelPercent = (ownFunds / propertyPrice) * 100;

  // ---- UI helpers ----
  const formatCHF = (num: number) =>
    "CHF " + num.toLocaleString("de-CH").replace(",", "'");

  return (
    <section className="flex flex-col items-center bg-white py-16 px-8 font-sans text-[#132219]">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1273px] gap-[48px] mx-auto mt-[0px]">

        {/* LEFT SIDE */}
        <div className="flex flex-col w-full max-w-[550px] gap-[24px]">
          <h1 className="text-[48px] font-semibold leading-none mb-[40px]">
            Mortgage Calculator
          </h1>

          {/* Purchase / Refinancing */}
          <div className="flex gap-3 w-full max-w-[550px]">
            <button
              onClick={() => setLoanType("purchase")}
              className={`flex justify-center items-center flex-1 h-[40px] px-[17px] py-[16.3px]
                rounded-[50px] border border-[#132219] text-[18px] font-medium transition-all duration-300
                ${
                  loanType === "purchase"
                    ? "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"
                    : "bg-white opacity-80"
                }`}
            >
              Purchase
            </button>
            <button
              onClick={() => setLoanType("refinancing")}
              className={`flex justify-center items-center flex-1 h-[40px] px-[17px] py-[16.3px]
                rounded-[50px] border border-[#132219] text-[18px] font-medium transition-all duration-300
                ${
                  loanType === "refinancing"
                    ? "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"
                    : "bg-white opacity-80"
                }`}
            >
              Refinancing
            </button>
          </div>

          {/* Residence Type */}
          <div className="flex w-full max-w-[550px] border border-[#132219] rounded-full p-[3px] mb-[36px]">
            <button
              onClick={() => setResidenceType("haupt")}
              className={`flex-1 flex justify-center items-center h-[40px] rounded-[48px] text-[18px] font-semibold transition-all duration-300
                ${
                  residenceType === "haupt"
                    ? "bg-[#132219] text-[#CAF47E]"
                    : "bg-transparent text-[#132219] opacity-80"
                }`}
            >
              Hauptwohnsitz
            </button>
            <button
              onClick={() => setResidenceType("zweit")}
              className={`flex-1 flex justify-center items-center h-[40px] rounded-[48px] text-[18px] font-semibold transition-all duration-300
                ${
                  residenceType === "zweit"
                    ? "bg-[#132219] text-[#CAF47E]"
                    : "bg-transparent text-[#132219] opacity-80"
                }`}
            >
              Zweitwohnsitz
            </button>
          </div>

          {/* Sliders */}
          <SliderInput label="Property Price" value={propertyPrice} setValue={setPropertyPrice} min={100000} max={2000000} />
          <SliderInput label="Equity / Own Funds" value={ownFunds} setValue={setOwnFunds} min={50000} max={2000000} />
          <SliderInput label="Annual Gross Income (NET)" value={income} setValue={setIncome} min={20000} max={300000} />

          {/* ZIP */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[16px] font-medium">ZIP / City</label>
            <input
              type="text"
              placeholder="Enter your zip/city"
              className="border border-[#A8A8A8] rounded-[50px] px-[20px] py-[10px] text-[16px] outline-none placeholder:text-[#A8A8A8]"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-start w-full max-w-[620px] lg:mt-[96px] gap-[48px]">
          <InfoBox
            title="Eligibility confirmed. Estimated mortgage need:"
            value={formatCHF(actualMortgage)}
          />

          {/* Two progress boxes */}
          <div className="flex flex-col gap-[14px] w-full">
            <ProgressBox
              title="Tragbarkeit"
              value={`${(tragbarkeitRatio * 100).toFixed(1)}%`}
              percent={Math.min(tragbarkeitRatio * 100, 100)}
            />
            <ProgressBox
              title="Eigenmittel"
              value={`${eigenmittelPercent.toFixed(1)}%`}
              percent={Math.min(eigenmittelPercent, 100)}
            />
          </div>

          <button className="w-full h-[50px] rounded-[50px] bg-[#132219] text-white text-[18px] font-medium">
            Continue my project
          </button>

          <div className="w-full h-[41px] rounded-[69px] border border-[#132219] flex justify-center items-center text-[16px] font-medium bg-[#132219] text-white">
            5 Year Fixed-rate mortgage – 1,03%
          </div>
        </div>
      </div>

      {/* Estimated Costs */}
      <div className="mt-16 w-full max-w-[1273px]">
        <h2 className="text-[28px] font-semibold mb-6">Estimated Costs in detail</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <SmallBox title="Interest" value={formatCHF(annualInterest)} />
          <SmallBox title="Amortization" value={formatCHF(amortization)} />
          <SmallBox title="Maintenance" value={formatCHF(maintenance)} />
          <LargeBox value={formatCHF(totalAnnualCost)} label="Total annual cost" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */
function SliderInput({ label, value, setValue, min, max }: any) {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="text-[16px] font-medium">{label}</label>
      <div className="flex items-center justify-between border border-[#A8A8A8] rounded-[50px] px-[20px] py-[10px]">
        <input
          type="text"
          value={value.toLocaleString()}
          readOnly
          className="bg-transparent text-[18px] font-medium w-[150px] outline-none"
        />
        <span className="text-[18px] font-semibold">CHF</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-[4px] rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #132219 ${percentage}%, #D9D9D9 ${percentage}%)`,
        }}
      />
      <div className="flex justify-between text-[14px] text-[#474849]">
        <span>{min.toLocaleString()} CHF</span>
        <span>{max.toLocaleString()} CHF</span>
      </div>
    </div>
  );
}

function InfoBox({ title, value }: any) {
  return (
    <div className="flex flex-col justify-center items-start gap-[10px] p-[8px_10px] rounded-[10px] border border-[#132219] w-full"
      style={{ height: "104px", background: "linear-gradient(270deg, #CAF476 0%, #E3F4BF 100%)" }}>
      <div className="flex justify-between items-start w-full">
        <p className="text-[16px] font-normal tracking-[-0.16px] text-[#132219]">{title}</p>
        <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full border border-[#132219] opacity-80 bg-[#CAF47E]">
          <CheckIcon />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#132219]" />
      <h2 className="text-[40px] font-semibold text-[#132219]">{value}</h2>
    </div>
  );
}

function ProgressBox({ title, value, percent }: any) {
  return (
    <div className="flex flex-col p-[24px] rounded-[10px] border border-[#132219] bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)] w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-[24px] font-[400] text-[#132219]">{title}</h3>
        <div className="w-[20px] h-[20px] rounded-full border border-[#132219] flex items-center justify-center bg-[#CAF47E]">
          <CheckIcon />
        </div>
      </div>
      <h2 className="text-[48px] font-[600] text-[#132219] opacity-80">{value}</h2>
      <div className="flex flex-col gap-2">
        <div className="relative w-full h-[14px] rounded-[69px] overflow-hidden border border-[#132219]">
          <div className="absolute inset-0 bg-[#132219]" />
          <div className="absolute left-0 top-0 h-full transition-all duration-500"
            style={{ width: `${percent}%`, background: "linear-gradient(270deg, #CAF476 0%, #E3F4BF 100%)" }}></div>
        </div>
      </div>
    </div>
  );
}

function SmallBox({ title, value }: any) {
  return (
    <div className="flex flex-col justify-between border border-[#132219] rounded-[10px] p-6 h-[120px]">
      <h4 className="text-[18px] font-medium">{title}</h4>
      <p className="text-[20px] font-semibold">{value}</p>
    </div>
  );
}

function LargeBox({ value, label }: any) {
  return (
    <div className="flex flex-col justify-center items-center border border-[#132219] rounded-[10px] bg-gradient-to-r from-[#CAF47E] to-[#E5F8B8] p-8 h-[120px]">
      <h3 className="text-[48px] font-semibold">{value}</h3>
      <p className="text-[18px]">{label}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 10 8" fill="none">
      <path d="M0.5 3.78129L3.31254 6.59383L9.50012 0.40625" stroke="#132219" strokeWidth="1" />
    </svg>
  );
}
