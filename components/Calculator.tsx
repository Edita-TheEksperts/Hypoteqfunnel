"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

<Image
  src="/images/123.png"
  alt="House background"
  fill
  className="object-cover rounded-[10px]"
/>


export default function Calculator() {
  const [propertyPrice, setPropertyPrice] = useState(900000);
  const [ownFunds, setOwnFunds] = useState(200000);
  const [income, setIncome] = useState(140000);
  const [residenceType, setResidenceType] = useState<"haupt" | "zweit">("haupt");
  const [loanType, setLoanType] = useState<"purchase" | "refinancing">("refinancing");
  const [interestOption, setInterestOption] = useState("10Y 1.40%");

  // ------------------- Excel Parameter Mapping -------------------
  const params =
    residenceType === "haupt"
      ? {
          maxBelehnung: 0.8, // 80%
          firstMortgageLimit: 0.6667, // 66.67%
          stressRate: 0.05, // 5% stress
          maintenanceRate: 0.008, // 0.8% p.a.
          amortizationYears: 15, // amortize 2nd hyp over 15y
          tragbarkeitThreshold: 0.35,
        }
      : {
          maxBelehnung: 0.65, // 65%
          firstMortgageLimit: 0, // no 2nd hyp concept
          stressRate: 0.05,
          maintenanceRate: 0.008,
          amortizationYears: 0,
          tragbarkeitThreshold: 0.35,
        };

  // Effective rate by product (for real interest display)
  const effectiveRate = useMemo(() => {
    if (interestOption.startsWith("SARON")) return 0.0085;
    if (interestOption.startsWith("5Y")) return 0.0103;
    if (interestOption.startsWith("10Y")) return 0.014;
    return 0.0103;
  }, [interestOption]);

  // ------------------- Core Excel Logic -------------------
  // Mortgage need (purchase or refi)
  const mortgageNeed =
    loanType === "purchase" ? Math.max(0, propertyPrice - ownFunds) : propertyPrice * 0.78;

  const maxMortgage = propertyPrice * params.maxBelehnung;
  const actualMortgage = Math.min(mortgageNeed, maxMortgage);

  // Split into 1st / 2nd hyp
  const firstMortgage = propertyPrice * params.firstMortgageLimit;
  const secondMortgage =
    residenceType === "haupt" ? Math.max(0, actualMortgage - firstMortgage) : 0;

  // Annualized Excel-style costs
  const interestYearStress = actualMortgage * params.stressRate;
  const maintenanceYear = propertyPrice * params.maintenanceRate;
  const amortizationYear =
    residenceType === "haupt" && secondMortgage > 0 && params.amortizationYears > 0
      ? secondMortgage / params.amortizationYears
      : 0;

  // Total annual “Tragbarkeit” and %
  const tragbarkeitCHF = interestYearStress + maintenanceYear + amortizationYear;
  const tragbarkeitPercent = income > 0 ? tragbarkeitCHF / income : 0;

  // Realistic monthly cost (using selected interest, not stress rate)
  const interestYearEffective = actualMortgage * effectiveRate;
  const monthlyCost =
    interestYearEffective / 12 + maintenanceYear / 12 + amortizationYear / 12;

  // Loan-to-value
  const belehnung = propertyPrice > 0 ? actualMortgage / propertyPrice : 0;

  // Eligibility (Excel logic)
  const isBelehnungOK = belehnung <= params.maxBelehnung;
  const isTragbarkeitOK = tragbarkeitPercent <= params.tragbarkeitThreshold;
  const isEligible = isBelehnungOK && isTragbarkeitOK;

  // Dynamic info title (matches Excel text logic)
  const infoTitle = isEligible
    ? loanType === "purchase"
      ? "Eligibility confirmed. Estimated mortgage need:"
      : "Eligibility confirmed. New mortgage possible up to:"
    : "Not eligible. Maximum possible mortgage:";

  // -------------- Formatting --------------
  const formatCHF = (num: number) =>
    "CHF " + Math.round(num).toLocaleString("de-CH");
  const formatPercent = (num: number) =>
    (num * 100).toFixed(1).replace(".", ",") + "%";

  const interestOptions = ["SARON 0.85%", "5Y 1.03%", "10Y 1.40%"];

  // -------------- UI --------------
  return (
    <section className="flex flex-col items-center mt-[120px] bg-white py-16 px-8 font-sans text-[#132219]">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-[1300px] gap-[108px] mx-auto">
        {/* LEFT SIDE */}
        <div className="flex flex-col w-full max-w-[536px] gap-[28px]">
      {/* Title + Description Section */}
<div className="flex flex-col lg:flex-row items-start justify-between w-full mb-10">
  <h1
    className="text-[72px] font-[500] leading-[100%] tracking-[-0.72px] text-[#132219] max-w-[536px]"
    style={{ fontFamily: "'SF Pro Display', sans-serif" }}
  >
    Mortgage<br />Calculator
  </h1>
</div>


          <div className="mt-[16px] flex flex-col gap-[24px]">
            <div className="flex gap-3">
              <ToggleButton
                label="Purchase"
                active={loanType === "purchase"}
                onClick={() => setLoanType("purchase")}
              />
              <ToggleButton
                label="Refinancing"
                active={loanType === "refinancing"}
                onClick={() => setLoanType("refinancing")}
              />
            </div>

            <div className="flex w-full border border-[#132219] rounded-full p-[3px]">
              <SubToggle
                label="Hauptwohnsitz"
                active={residenceType === "haupt"}
                onClick={() => setResidenceType("haupt")}
              />
              <SubToggle
                label="Zweitwohnsitz"
                active={residenceType === "zweit"}
                onClick={() => setResidenceType("zweit")}
              />
            </div>

            <div className="flex flex-col gap-[24px] mt-2">
              <SliderInput
                label="Property Price"
                value={propertyPrice}
                setValue={setPropertyPrice}
                min={100000}
                max={2000000}
              />
              <SliderInput
                label={loanType === "purchase" ? "Equity / Own Funds" : "Existing Equity"}
                value={ownFunds}
                setValue={setOwnFunds}
                min={0}
                max={propertyPrice}
              />
              <SliderInput
                label="Annual Gross Income (CHF)"
                value={income}
                setValue={setIncome}
                min={50000}
                max={500000}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-[-7px] w-full">
            <label className="text-[16px] font-medium">ZIP / City</label>
            <input
              type="text"
              placeholder="Enter your zip/city"
              className="w-full border border-[#A8A8A8] rounded-full px-5 py-2 text-[16px] outline-none placeholder:text-[#A8A8A8]"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
    {/* RIGHT SIDE */}
<div className="flex flex-col items-start w-full max-w-[628px] mt-[19px] gap-[34px]">
  <p
    className="text-[#132219] text-[22px] font-[300] leading-[150%] mb-[62px]"
    style={{ fontFamily: "'SF Pro Display', sans-serif" }}
  >
    Real-time mortgage math. Slide your price, deposit, rate, and term to compare
    scenarios instantly—monthly cost, total interest, and payoff timeline at a glance.
  </p>

  <InfoBox title={infoTitle} value={formatCHF(actualMortgage)} red={!isEligible} />

  <ProgressBox
    title="Tragbarkeit"
    value={formatPercent(tragbarkeitPercent)}
    current={formatCHF(tragbarkeitCHF)}
    total={formatCHF(income)}
  />

  <ProgressBox
    title="Eigenmittel"
    value={formatPercent(propertyPrice > 0 ? ownFunds / propertyPrice : 0)}
    current={formatCHF(ownFunds)}
    total={formatCHF(propertyPrice)}
  />

  <button className="w-full h-[50px] rounded-full bg-[#132219] text-white text-[18px] font-sfpro font-medium text-center leading-normal hover:opacity-90 transition">
    Continue my project
  </button>
</div>

      </div>

      {/* COST SECTION */}
      <div className="flex flex-col gap-[63px] mt-[80px] items-stretch">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-[40px] font-sfpro font-medium text-[#132219] tracking-[-0.4px]">
            Estimated Costs in detail
          </h2>

      <div className="relative">
  <select
    value={interestOption}
    onChange={(e) => setInterestOption(e.target.value)}
    className="flex justify-between items-center appearance-none w-[444px] h-[40px] px-6 
               bg-[#132219] text-white text-[20px] font-semibold rounded-[58px] 
               cursor-pointer outline-none border-none focus:outline-none"
  >
    {interestOptions.map((option) => (
      <option
        key={option}
        value={option}
        className="bg-[#132219] text-white cursor-pointer"
      >
        {option}
      </option>
    ))}
  </select>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    className="absolute right-6 top-[14px] pointer-events-none"
  >
    <path
      d="M6 7C5.72917 7 5.48958 6.90625 5.28125 6.71875L0.28125 1.71875C0.09375 1.51042 0 1.27083 0 1C0 0.729167 0.09375 0.489583 0.28125 0.28125C0.489583 0.09375 0.729167 0 1 0C1.27083 0 1.51042 0.09375 1.71875 0.28125L6 4.59375L10.2812 0.28125C10.4896 0.09375 10.7292 0 11 0C11.2708 0 11.5104 0.09375 11.7188 0.28125C11.9062 0.489583 12 0.729167 12 1C12 1.27083 11.9062 1.51042 11.7188 1.71875L6.71875 6.71875C6.51042 6.90625 6.27083 7 6 7Z"
      fill="white"
    />
  </svg>
</div>

        </div>

        <div className="flex flex-col md:flex-row gap-[16px]">
          <div className="grid grid-cols-2 gap-[10px] w-full max-w-[628px]">
            <SmallBox
              title="Interest"
              value={formatCHF(interestYearEffective / 12)}
            />
            <SmallBox
              title="Amortisation"
              value={formatCHF(amortizationYear / 12)}
            />
            <SmallBox
              title="Incidental expenses "
              value={formatCHF(maintenanceYear / 12)}
            />
            <SmallBox title="Monthly costs" value={formatCHF(monthlyCost)} highlight />
          </div>

          <div
            className={`flex flex-col justify-center items-center rounded-[10px] border-2 border-[#132219] w-[628px] h-[444px] text-center px-[40px] py-[60px] ${
              isEligible
                ? "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"
                : "bg-[linear-gradient(270deg,#FCA5A5_0%,#FECACA_100%)]"
            }`}
          >
 <h3
  className="font-sfpro text-[#132219]"
  style={{
    fontSize: "85.022px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "100%",
    letterSpacing: "-0.85px",
  }}
>
  {Math.round(interestYearEffective + amortizationYear + maintenanceYear).toLocaleString("de-CH")}
</h3>
<p className="text-[20px] font-sfpro font-normal text-[#132219] opacity-80 mt-3">
  Total yearly expenses
</p>

          </div>
        </div>
      </div>
      {/* Bottom Continue Button */}
<div className="flex justify-center w-full mt-[40px]">
  <button className="w-full max-w-[1273px] h-[41px] rounded-[69px] border border-[#132219] bg-[#132219] text-white text-[18px] font-sfpro font-medium text-center leading-normal hover:opacity-90 transition">
    Continue my project
  </button>
</div>
<section className="flex flex-col md:flex-row justify-between items-start gap-[24px] w-full max-w-[1280px] mx-auto mt-[100px] mb-[100px]">

<div className="relative flex flex-col justify-between items-start w-full md:w-[628px] h-[293px] p-[24px] rounded-[10px] border border-[#132219] overflow-hidden bg-[linear-gradient(90deg,#FFF4DE_0%,#FCEAC5_100%)]">

  <div className="relative z-10 flex flex-col gap-[16px] w-full max-w-[536px]">
    <h3 className="text-[#132219] text-[40px] font-[500] leading-[140%] font-['SF Pro Display'] tracking-[-0.4px]">
      Start your process now!
    </h3>
    <p className="text-[#132219] text-[20px] font-[300] leading-[140%] font-['SF Pro Display'] max-w-[536px]">
      Compare lenders, rates, and terms in a guided three-click flow. <br />
      See your monthly cost upfront and choose the offer that fits.
    </p>
  </div>

  <button className="relative z-10 bg-white border border-[#132219] rounded-full px-[24px] py-[8px] text-[16px] font-[600] text-[#132219] font-['SF Pro Display'] hover:scale-[1.03] transition-transform">
    Start now
  </button>

  {/* Background image */}
  <Image
    src="/images/00.jpg"
    alt="House background"
    fill
    className="object-cover rounded-[10px] z-0"
    priority
  />
</div>
{/* RIGHT CARD */}
<div
  className="relative flex flex-col justify-center items-center w-full md:w-[629px] h-[293px] p-[59px_48px] gap-[60px] rounded-[10px] border border-[#132219] text-center overflow-hidden"
  style={{
    background: "url('/images/0101.png') center/cover no-repeat, #132219",
  }}
>
  <p
    className="text-[#CAF476] text-[32px] font-['SF Pro Display'] font-normal leading-[140%] tracking-[-0.32px] max-w-[557px] text-center"
  >
    Talk to a Hypoteq expert for a{" "}
    <span className="font-[600]">15-minute consultation</span>{" "}
    to get personalized guidance on financing options.
  </p>

  <button className="px-[24px] py-[10px] bg-[#CAF476] text-[#132219] text-[16px] font-['SF Pro Display'] font-[500] rounded-full hover:bg-[#D6FA8A] transition-all">
    Book your call
  </button>
</div>


</section>


    </section>
    
  );
}

/* --------- COMPONENTS (unchanged visuals) --------- */

function ToggleButton({ label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 h-[40px] rounded-full border border-[#132219] text-[18px] font-medium transition-all duration-300 ${
        active
          ? "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"
          : "bg-white opacity-80"
      }`}
    >
      {label}
    </button>
  );
}

function SubToggle({ label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex justify-center items-center h-[40px] rounded-[48px] text-[18px] font-semibold transition-all duration-300 ${
        active
          ? "bg-[#132219] text-[#CAF47E]"
          : "bg-transparent text-[#132219] opacity-70"
      }`}
    >
      {label}
    </button>
  );
}

function SliderInput({ label, value, setValue, min, max }: any) {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-2 relative">
      <div className="flex justify-between items-center">
        <label className="text-[16px] font-medium">{label}</label>
        <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#626D64]">
          <span className="text-white text-[10px] font-medium">?</span>
        </div>
      </div>
      <div className="flex items-center justify-between border border-[#A8A8A8] rounded-full px-5 py-2">
        <input
          type="text"
          value={value.toLocaleString("de-CH")}
          readOnly
          className="bg-transparent text-[18px] font-medium w-[120px] outline-none"
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
        <span>{min.toLocaleString("de-CH")} CHF</span>
        <span>{max.toLocaleString("de-CH")} CHF</span>
      </div>
    </div>
  );
}

function InfoBox({ title, value, red = false }: any) {
  return (
    <div
      className={`flex flex-col justify-center p-[15px_24px] rounded-[10px] border border-[#132219] w-full ${
        red
          ? "bg-[linear-gradient(270deg,#FCA5A5_0%,#FECACA_100%)]"
          : "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"
      }`}
    >
      <div className="flex justify-between items-start">
        <p className="text-[14px] font-medium text-[#132219] leading-tight">
          {title}
        </p>
        <div
          className={`w-[20px] h-[20px] rounded-full flex items-center justify-center border border-[#132219] ${
            red ? "bg-[#FCA5A5]" : "bg-[#CAF47E]"
          }`}
        >
          <CheckIcon red={red} />
        </div>
      </div>

      <div className="h-[1px] bg-[#132219] w-full mt-[6px] mb-[10px]" />
      <h2 className="text-[40px] font-semibold text-[#132219] leading-none">
        {value}
      </h2>
    </div>
  );
}


function ProgressBox({ title, value, current, total }: any) {
  const percent =
    parseFloat(value.replace("%", "").replace(",", ".")) || 0;

  return (
    <div className="flex flex-col justify-center rounded-[10px] border border-[#132219] bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)] w-full p-[18px_24px] gap-[18px]">
      <div className="flex justify-between items-start">
        <h3 className="text-[24px] font-normal text-[#132219]">{title}</h3>
        <div className="w-[22px] h-[22px] rounded-full border border-[#132219] bg-[#CAF47E] flex items-center justify-center">
          <CheckIcon />
        </div>
      </div>

      <h2 className="text-[48px] font-sfpro font-semibold text-[#132219] leading-none opacity-80">
        {value}
      </h2>

      <div className="relative w-full h-[14px] rounded-full overflow-hidden border border-[#132219] bg-[#132219]">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-[linear-gradient(90deg,#DFF69A_0%,#B8E04E_100%)] transition-all duration-500"
          style={{ width: `${Math.min(percent, 100)}%` }}
        />
      </div>

      <div className="relative w-full flex justify-between text-[16px] text-[#132219] mt-[-15px] opacity-80">
        <span>0</span>
        <span>{current}</span>
        <span>{total}</span>
      </div>
    </div>
  );
}
function SmallBox({ title, value, highlight = false }: any) {
  const isMonthlyCosts = title === "Monthly costs";
  const [currency, amount] = value.split(" ");

  return (
    <div
      className={`relative flex flex-col justify-between p-[15px_16px] rounded-[10px] border border-[#132219] w-[308px] h-[216px] bg-white overflow-hidden`}
    >
      {/* Gradient line only at the bottom when highlight = true */}
      {highlight && (
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]" />
      )}

      {/* Title */}
      <p
        className={`text-[#132219] font-['SF Pro Display'] ${
          isMonthlyCosts
            ? "text-[32px] font-[500] tracking-[-0.32px]"
            : "text-[20px] font-[400] tracking-[-0.2px]"
        } leading-[100%]`}
      >
        {title}
      </p>

      {/* Value */}
      <div className="flex items-end gap-[4px]">
        <span
          className={`text-[#132219] font-['SF Pro Display'] leading-[100%] ${
            isMonthlyCosts
              ? "text-[40px] font-[600] tracking-[-0.4px]"
              : "text-[24px] font-[500] tracking-[-0.24px]"
          }`}
        >
          {currency}
        </span>
        <span
          className={`text-[#132219] font-['SF Pro Display'] leading-[100%] ${
            isMonthlyCosts
              ? "text-[40px] font-[600] tracking-[-0.4px]"
              : "text-[32px] font-[500] tracking-[-0.32px]"
          }`}
        >
          {amount}
        </span>
      </div>
    </div>
  );
}


function CheckIcon({ red = false }: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 10 8" fill="none">
      <path
        d="M0.5 3.78129L3.31254 6.59383L9.50012 0.40625"
        stroke={red ? "#7F1D1D" : "#132219"} /* darker red stroke when not eligible */
        strokeWidth="1"
      />
    </svg>
  );
}
