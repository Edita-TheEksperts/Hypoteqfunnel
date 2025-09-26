"use client";

import { useState } from "react";

// ✅ SliderBlock props
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
    <div className="flex flex-col gap-[24px]">
      {/* Label + Value box */}
      <div
        className="
          flex justify-between items-center
          h-[66.354px] px-[24.5px]
          bg-[#F6F6F6]
          border border-[rgba(0,0,0,0.3)]
          rounded-[81.667px]
          text-[18.375px] font-medium text-[#7E7E7E]
        "
      >
        <span>{label}</span>
        <span>CHF {value.toLocaleString()}</span>
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
          background: `linear-gradient(to right, #132219 ${percentage}%, rgba(168,168,168,0.40) ${percentage}%)`,
        }}
        className="
        cursor-pointer appearance-none h-[3.063px] rounded-full
           ml-auto 
              w-[95%] 
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-[16px]
          [&::-webkit-slider-thumb]:h-[16px]
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-[#132219]
          [&::-webkit-slider-thumb]:mt-[-6px]
          [&::-moz-range-thumb]:w-[16px]
          [&::-moz-range-thumb]:h-[16px]
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-[#132219]
          [&::-moz-range-thumb]:border-0
        "
      />
    </div>
  );
}

export default function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [income, setIncome] = useState(120000);
  const [funds, setFunds] = useState(100000);
  const [fees, setFees] = useState("2.5%"); // dropdown

  return (
    <section className="w-full bg-white flex justify-center font-[SF Pro Display]">
      <div className="w-[1504px] h-[812px] flex flex-row items-start gap-[129px] px-[86px] py-[80px] bg-[#FFF]">
        {/* Left Side - Calculator */}
        <div className="flex flex-col w-[641px] gap-[43.896px]">
          <h2 className="text-[48px] font-medium text-[#474849]">
            Mortgage Calculator
          </h2>

          {/* Tabs */}
          <div className="flex items-center gap-[16px]">
            <button className="flex-1 h-[46px] flex items-center justify-center rounded-full bg-[#474849] text-white text-[14px] font-medium">
              Purchase
            </button>
            <button className="flex-1 h-[46px] flex items-center justify-center rounded-full border border-black bg-white text-[14px] font-medium text-black">
              Refinancing
            </button>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-[43.896px]">
            <SliderBlock
              label="Purchase price"
              value={purchasePrice}
              setValue={setPurchasePrice}
              min={50000}
              max={2000000}
              step={1000}
            />
            <SliderBlock
              label="Gross annual income"
              value={income}
              setValue={setIncome}
              min={20000}
              max={500000}
              step={1000}
            />
            <SliderBlock
              label="Own Funds"
              value={funds}
              setValue={setFunds}
              min={10000}
              max={1000000}
              step={1000}
            />

            {/* Notary Fees Dropdown */}
            <div
              className="
                flex justify-between items-center
                h-[66.354px] px-[24.5px]
                bg-[#F6F6F6]
                border border-[rgba(0,0,0,0.3)]
                rounded-[81.667px]
                text-[18.375px] font-medium text-[#7E7E7E]
              "
            >
              <span>Notary Fees</span>
              <select
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="
                  bg-transparent outline-none text-black font-medium
                  cursor-pointer
                "
              >
              </select>
            </div>
          </div>
        </div>

        {/* Right Side - Project Details */}
        <div className="flex flex-col items-center w-[521px]">
          {/* Box */}
          <div
            className="
              flex flex-col
              w-full
              bg-[#FFF]
              border border-black
              rounded-[9.854px]
              justify-between
            "
          >
            {/* Top Content */}
            <div className="w-full flex flex-col gap-[10px] p-[20px]">
              {/* Header row */}
              <div className="flex items-center justify-between w-full mb-[8px]">
                <p className="text-black font-sfpro font-semibold text-[25.62px] leading-normal">
                  Project Details
                </p>
                <button
                  className="
                    text-[15px] font-sfpro font-normal text-[#7E7E7E]
                    hover:text-black transition
                  "
                >
                  Reset
                </button>
              </div>

              {/* Project details */}
              <div className="flex flex-col w-full">
                <div className="flex justify-between py-[8px]">
                  <span className="text-[#7E7E7E] text-[16px] leading-normal">
                    Purchase Price
                  </span>
                  <span className="text-[#7E7E7E] font-sfpro font-medium text-[15.766px] leading-normal">
                    {purchasePrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-[8px]">
                  <span className="text-[#7E7E7E] text-[16px]">Notary Fees</span>
                  <span className="text-[#7E7E7E] font-sfpro font-medium text-[15.766px] leading-normal">
                    {fees}
                  </span>
                </div>
                {/* Separator + Total Cost */}
                <div className="flex flex-col">
                  <div
                    className="w-full border-t border-[rgba(0,0,0,0.40)] mt-[8px]"
                    style={{ borderTopWidth: "0.985px" }}
                  />
                  <div className="flex justify-between items-center self-stretch pt-[9.854px]">
                    <span className="text-black font-sfpro font-medium text-[19.707px] leading-normal">
                      Total Cost
                    </span>
                    <span className="text-black font-sfpro font-medium text-[19.707px] leading-normal">
                      {(purchasePrice + funds).toLocaleString()} $
                    </span>
                  </div>
                </div>
              </div>

              {/* Financing */}
              <div className="w-full pt-[12px]">
                <h3 className="text-black font-sfpro font-semibold text-[25.62px] leading-normal mb-[8px]">
                  Financing
                </h3>
                <div className="flex justify-between py-[4px]">
                  <span className="text-[#7E7E7E] text-[16px] leading-normal">
                    Own Funds
                  </span>
                  <span className="text-[#7E7E7E] font-sfpro font-normal text-[15.766px] leading-normal">
                    {funds.toLocaleString()} $
                  </span>
                </div>
                <div className="flex justify-between text-[16px] py-[4px]">
                  <span className="text-[#7E7E7E]">Mortgage loans</span>
                  <span className="text-[#7E7E7E] font-sfpro font-normal text-[15.766px] leading-normal">
                    {(purchasePrice - funds).toLocaleString()} $
                  </span>
                </div>
                {/* ✅ Separator only above Total Financing */}
                <div
                  className="w-full border-t border-[rgba(0,0,0,0.40)] mt-[8px]"
                  style={{ borderTopWidth: "0.985px" }}
                />
                <div className="flex justify-between py-[4px]">
                  <span className="text-black font-sfpro font-medium text-[19.707px] leading-normal">
                    Total financing
                  </span>
                  <span className="text-black font-sfpro font-medium text-[19.707px] leading-normal">
                    {purchasePrice.toLocaleString()} $
                  </span>
                </div>
              </div>

              {/* Finma Guidelines */}
              <div className="w-full pt-[12px]">
                <h3 className="text-black font-sfpro font-semibold text-[25.62px] leading-normal mb-[8px]">
                  Finma Guidelines
                </h3>
                <div className="flex justify-between text-[16px] py-[4px]">
                  <span className="text-[#7E7E7E]">Loan/Purchase price</span>
                  <span className="text-[#7E7E7E]">95,75%</span>
                </div>
                <div className="flex justify-between text-[16px] py-[4px]">
                  <span className="text-[#7E7E7E]">Expenses/Income</span>
                  <span className="text-[#7E7E7E]">28,17%</span>
                </div>
              </div>
            </div>

            {/* Warning box */}
            <div
              className="
                flex w-full items-center gap-[40px]
                h-[72.918px] px-[22.664px] py-[16.751px]
                bg-[#F6F6F6]
                border-t border-black
                rounded-b-[9.854px]
              "
            >
              <div className="relative w-[37.444px] h-[37.444px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37.444"
                  height="37.444"
                  viewBox="0 0 37.444 37.444"
                  className="absolute"
                >
                  <rect
                    width="37.444"
                    height="37.444"
                    rx="4.801"
                    fill="#474849"
                    stroke="#FFF"
                    strokeWidth="1.928"
                  />
                </svg>
                <span className="text-white font-bold text-[20px] relative z-10">
                  !
                </span>
              </div>
              <p className="text-[#474849] font-sfpro font-normal text-[15.766px] leading-normal flex-1">
                You don’t seem to have enough own funds for your project. Continue
                and we’ll find solutions together.
              </p>
            </div>
          </div>

          {/* Continue button (flush under box) */}
          <div className="w-full mt-[24px]">
            <button
              className="
                w-full py-[12px]
                bg-[#474849] text-white
                rounded-full
                text-[16px] font-medium
              "
            >
              Continue my project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
