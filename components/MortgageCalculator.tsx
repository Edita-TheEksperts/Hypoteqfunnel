"use client";

import { useState } from "react";

interface SliderBlockProps {
  label: string;
  value: number;
  setValue: (val: number) => void;
  min: number;
  max: number;
  step: number;
}

function SliderBlock({ label, value, setValue, min, max, step }: SliderBlockProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-[10px] w-full">
      {/* Label */}
      <label className="text-[#132219] text-[16px] font-medium">{label}</label>

      {/* Input row */}
      <div className="flex items-center justify-between border border-[#A8A8A8] rounded-[50px] px-[20px] py-[10px]">
        <input
          type="text"
          value={value.toLocaleString()}
          readOnly
          className="bg-transparent outline-none text-[#132219] text-[18px] font-medium w-[150px]"
        />
        <span className="text-[#132219] text-[18px] font-semibold">CHF</span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #132219 ${percentage}%, rgba(217,217,217,1) ${percentage}%)`,
        }}
        className="w-full h-[4px] rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-[18px]
          [&::-webkit-slider-thumb]:h-[18px]
          [&::-webkit-slider-thumb]:bg-[#132219]
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:shadow-[0_0_2px_rgba(0,0,0,0.3)]
          [&::-webkit-slider-thumb]:mt-[-7px]"
      />

      {/* Range values */}
      <div className="flex justify-between text-[14px] text-[#474849]">
        <span>{min.toLocaleString()} CHF</span>
        <span>{max.toLocaleString()} CHF</span>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
    >
      <path
        d="M0.5 3.78129L3.31254 6.59383L9.50012 0.40625"
        stroke="#132219"
        strokeWidth="0.9"
      />
    </svg>
  );
}

export default function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(324000);
  const [funds, setFunds] = useState(100000);
  const [income, setIncome] = useState(50000);

  const [residenceType, setResidenceType] = useState<"haupt" | "zweit">("haupt");

  return (
    <section className="flex justify-center bg-white py-[60px] px-[40px] font-sans">
      <div className="flex w-[1272px] justify-between items-start gap-[108px]">
        {/* LEFT SIDE */}
        <div className="flex flex-col w-[600px] gap-[36px]">
          <h1 className="text-[48px] font-semibold text-[#132219]">
            Mortgage Calculator
          </h1>

          {/* Tabs */}
          <div className="flex gap-[12px]">
            <button className="flex-1 h-[40px] bg-[#CAF47E] border border-[#132219] rounded-[50px] text-[18px] font-medium">
              Purchase
            </button>
            <button className="flex-1 h-[40px] bg-white border border-[#132219] rounded-[50px] text-[18px] font-medium">
              Refinancing
            </button>
          </div>

          {/* Segmented Button Group */}
          <div className="flex w-full border border-[#132219] rounded-full p-[3px]">
            <button
              onClick={() => setResidenceType("haupt")}
              className={`flex-1 h-[45px] text-[18px] font-semibold rounded-full transition-all duration-300 ${
                residenceType === "haupt"
                  ? "bg-[#132219] text-[#CAF47E]"
                  : "bg-transparent text-[#474849]"
              }`}
            >
              Hauptwohnsitz
            </button>
            <button
              onClick={() => setResidenceType("zweit")}
              className={`flex-1 h-[45px] text-[18px] font-semibold rounded-full transition-all duration-300 ${
                residenceType === "zweit"
                  ? "bg-[#132219] text-[#CAF47E]"
                  : "bg-transparent text-[#474849]"
              }`}
            >
              Zweitwohnsitz
            </button>
          </div>

          {/* Slider fields */}
          <SliderBlock
            label="Property Price"
            value={purchasePrice}
            setValue={setPurchasePrice}
            min={100000}
            max={1000000}
            step={1000}
          />
          <SliderBlock
            label="Equity / Own Funds"
            value={funds}
            setValue={setFunds}
            min={100000}
            max={1000000}
            step={1000}
          />
          <SliderBlock
            label="Annual Gross Income (NET)"
            value={income}
            setValue={setIncome}
            min={20000}
            max={200000}
            step={1000}
          />

          {/* ZIP / City field */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[#132219] text-[16px] font-medium">ZIP / City</label>
            <input
              type="text"
              placeholder="Enter your zip/city"
              className="border border-[#A8A8A8] rounded-[50px] px-[20px] py-[10px] text-[16px] text-[#132219] outline-none placeholder:text-[#A8A8A8]"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-[24px] w-[628px]">
          {/* Mortgage Need */}
          <div className="flex flex-col gap-[8px] p-[20px] rounded-[8px] bg-[#E9E9E9]">
            <div className="flex justify-between items-center">
              <p className="text-[16px] text-[#132219]">
                Eligibility confirmed. Estimated mortgage need:
              </p>
              <div className="w-[20px] h-[20px] bg-[#CAF47E] rounded-full flex items-center justify-center">
                <CheckIcon />
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#A8A8A8]/40" />
            <h2 className="text-[40px] font-semibold text-[#132219] leading-none">
              CHF 900’000
            </h2>
          </div>

          {/* Tragbarkeit */}
          <div className="flex flex-col p-[24px] gap-[12px] rounded-[8px] bg-[#E9E9E9]">
            <div className="flex justify-between items-center">
              <h3 className="text-[22px] text-[#132219]">Tragbarkeit</h3>
              <div className="w-[20px] h-[20px] bg-[#CAF47E] rounded-full flex items-center justify-center">
                <CheckIcon />
              </div>
            </div>
            <h2 className="text-[36px] font-semibold text-[#132219]">CHF 165,000</h2>

            <div className="w-full flex flex-col gap-[8px]">
              <div className="h-[14px] rounded-[69px] bg-[#132219] relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#CAF47E]"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[14px] text-[#132219]">
                <span>0$</span>
                <span>165,000$</span>
              </div>
            </div>
          </div>

          {/* Eigenmittel */}
          <div className="flex flex-col p-[24px] gap-[12px] rounded-[8px] bg-[#E9E9E9]">
            <div className="flex justify-between items-center">
              <h3 className="text-[22px] text-[#132219]">Eigenmittel</h3>
              <div className="w-[20px] h-[20px] bg-[#CAF47E] rounded-full flex items-center justify-center">
                <CheckIcon />
              </div>
            </div>
            <h2 className="text-[36px] font-semibold text-[#132219]">CHF 80,000</h2>

            <div className="w-full flex flex-col gap-[8px]">
              <div className="h-[14px] rounded-[69px] bg-[#132219] relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#CAF47E]"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[14px] text-[#132219]">
                <span>0$</span>
                <span>80,000$</span>
              </div>
            </div>
          </div>

          <button className="mt-[10px] w-full h-[50px] rounded-[50px] bg-[#132219] text-white text-[18px] font-medium">
            Continue my project
          </button>
        </div>
      </div>
    </section>
  );
}
