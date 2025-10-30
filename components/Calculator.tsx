"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

<Image
  src="/images/123.png"
  alt="House background"
  fill
  className="object-cover rounded-[10px]"
/>;

export default function Calculator() {
const [propertyPrice, setPropertyPrice] = useState(0);
const [ownFunds, setOwnFunds] = useState(0);
const [income, setIncome] = useState(0);


  const [residenceType, setResidenceType] = useState<"haupt" | "zweit" | null>(null);

  const [loanType, setLoanType] = useState<"purchase" | "refinancing" | null>(
    null
  );

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
    loanType === "purchase"
      ? Math.max(0, propertyPrice - ownFunds)
      : propertyPrice * 0.78;

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
    residenceType === "haupt" &&
    secondMortgage > 0 &&
    params.amortizationYears > 0
      ? secondMortgage / params.amortizationYears
      : 0;

  // Total annual “Tragbarkeit” and %
  const tragbarkeitCHF =
    interestYearStress + maintenanceYear + amortizationYear;
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
              Mortgage
              <br />
              Calculator
            </h1>
          </div>

          <div className="mt-[16px] flex flex-col gap-[24px]">
            <div className="flex gap-3">
              <ToggleButton
                label="Purchase"
                active={loanType === "purchase"}
                onClick={() =>
                  setLoanType(loanType === "purchase" ? null : "purchase")
                }
              />
              <ToggleButton
                label="Refinancing"
                active={loanType === "refinancing"}
                onClick={() =>
                  setLoanType(loanType === "refinancing" ? null : "refinancing")
                }
              />
            </div>
            {loanType && (
              <div className="flex w-full border border-[#132219] rounded-full p-[3px] animate-fadeIn">
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
            )}

            <div className="flex flex-col gap-[24px] mt-2">
              <SliderInput
                label="Property Price"
                value={propertyPrice}
                setValue={setPropertyPrice}
                min={100000}
                max={2000000}
              />
              <SliderInput
                label={
                  loanType === "purchase"
                    ? "Equity / Own Funds"
                    : "Existing Equity"
                }
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
        <div className="flex flex-col items-start w-full max-w-[628px] mt-[19px] gap-[34px]">
          <p
            className="text-[#132219] text-[22px] font-[300] leading-[150%] mb-[62px]"
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            Real-time mortgage math. Slide your price, deposit, rate, and term
            to compare scenarios instantly—monthly cost, total interest, and
            payoff timeline at a glance.
          </p>

      <InfoBox
  title={infoTitle}
  value={formatCHF(actualMortgage)}
  red={!isEligible}
  loanType={loanType}
/>

<ProgressBox
  title="Tragbarkeit"
  value={formatPercent(tragbarkeitPercent)}
  current={formatCHF(tragbarkeitCHF)}
  total={formatCHF(income)}
  loanType={loanType}
/>

<ProgressBox
  title="Eigenmittel"
  value={formatPercent(propertyPrice > 0 ? ownFunds / propertyPrice : 0)}
  current={formatCHF(ownFunds)}
  total={formatCHF(propertyPrice)}
  loanType={loanType}
/>


          <button className="w-full h-[50px] rounded-full bg-[#132219] text-white text-[18px] font-sfpro font-medium text-center leading-normal hover:opacity-90 transition">
            Continue my project
          </button>
        </div>
      </div>

      {/* COST SECTION */}
{/* COST SECTION */}
<div className="flex flex-col gap-[40px] md:gap-[63px] mt-[60px] md:mt-[80px] items-stretch">

  {/* Title + Select Row */}
  <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center w-full">
    <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-sfpro font-medium text-[#132219] tracking-[-0.4px]">
      Estimated Costs in detail
    </h2>

    <div className="relative w-full md:w-auto">
      <select
        value={interestOption}
        onChange={(e) => setInterestOption(e.target.value)}
        className="
          appearance-none w-full md:w-[444px] h-[40px] px-4 md:px-6
          bg-[#132219] text-white text-[16px] md:text-[20px] font-semibold
          rounded-[58px] cursor-pointer outline-none
        "
      >
        {interestOptions.map((option) => (
          <option key={option} value={option} className="bg-[#132219] text-white">
            {option}
          </option>
        ))}
      </select>

      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        className="absolute right-4 md:right-6 top-[14px] pointer-events-none"
      >
        <path
          d="M6 7c-.27 0-.51-.09-.72-.28L.28 1.72A1.01 1.01 0 0 1 1 0c.27 0 .51.09.72.28L6 4.59l4.28-4.31a1.01 1.01 0 0 1 1.44 1.44L6.72 6.72C6.51 6.91 6.27 7 6 7Z"
          fill="white"
        />
      </svg>
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-[16px]">
    
    {/* 4 small boxes */}
    <div className="grid grid-cols-2 gap-[10px] w-full max-w-full md:max-w-[628px]">
      <SmallBox title="Interest" value={formatCHF(interestYearEffective / 12)} />
      <SmallBox title="Amortisation" value={formatCHF(amortizationYear / 12)} />
      <SmallBox title="Incidental expenses" value={formatCHF(maintenanceYear / 12)} />
      <SmallBox title="Monthly costs" value={formatCHF(monthlyCost)} highlight />
    </div>

    {/* Big yearly box */}
    <div
      className={`
        flex flex-col justify-center items-center rounded-[10px] border-2 border-[#132219] 
        w-full md:w-[628px] h-[280px] md:h-[444px] text-center px-[20px] md:px-[40px] py-[40px] md:py-[60px]
        ${
          !loanType
            ? "bg-[#E5E5E5]"
            : isEligible
            ? "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"
            : "bg-[linear-gradient(270deg,#FCA5A5_0%,#FECACA_100%)]"
        }
      `}
    >
      <h3 className="font-sfpro text-[#132219] text-[48px] sm:text-[60px] md:text-[85px] font-medium leading-[100%] tracking-[-0.85px]">
        {Math.round(interestYearEffective + amortizationYear + maintenanceYear).toLocaleString("de-CH")}
      </h3>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#132219] opacity-80 mt-3">
        Total yearly expenses
      </p>
    </div>
  </div>
</div>

{/* Bottom Continue Button */}
<div className="flex justify-center w-full mt-[30px] md:mt-[40px] px-4">
  <button className="w-full max-w-[1273px] h-[41px] rounded-[69px] border border-[#132219] bg-[#132219] text-white text-[16px] md:text-[18px] font-medium text-center hover:opacity-90 transition">
    Continue my project
  </button>
</div>

{/* TWO CTA CARDS */}
<section className="flex flex-col md:flex-row justify-between items-start gap-[24px] w-full max-w-[1280px] mx-auto mt-[60px] md:mt-[100px] mb-[80px] md:mb-[100px] px-4">

  {/* Left Card */}
  <div className="relative flex flex-col justify-between items-start w-full md:w-[628px] h-[260px] md:h-[293px] p-[20px] md:p-[24px] rounded-[10px] border border-[#132219] overflow-hidden bg-[linear-gradient(90deg,#FFF4DE_0%,#FCEAC5_100%)]">
    <div className="relative z-10 flex flex-col gap-[10px] md:gap-[16px] w-full max-w-[536px]">
      <h3 className="text-[#132219] text-[28px] sm:text-[32px] md:text-[40px] font-[500] leading-[140%] tracking-[-0.4px]">
        Start your process now!
      </h3>
      <p className="text-[#132219] text-[16px] sm:text-[18px] md:text-[20px] font-[300] leading-[140%]">
        Compare lenders, rates, and terms in a guided flow.<br />
        See your monthly cost upfront and choose the offer that fits.
      </p>
    </div>

    <button className="relative z-10 bg-white border border-[#132219] rounded-full px-[20px] md:px-[24px] py-[6px] md:py-[8px] text-[14px] sm:text-[16px] font-[600] text-[#132219] hover:scale-[1.03] transition-transform">
      Start now
    </button>

    <Image src="/images/00.jpg" alt="House background" fill className="object-cover rounded-[10px] z-0" />
  </div>

  {/* Right Card */}
  <div
    className="relative flex flex-col justify-center items-center w-full md:w-[629px] h-[260px] md:h-[293px] p-[40px] md:p-[59px_48px] gap-[40px] md:gap-[60px] rounded-[10px] border border-[#132219] text-center overflow-hidden"
    style={{ background: "url('/images/0101.png') center/cover no-repeat, #132219" }}
  >
    <p className="text-[#CAF476] text-[22px] sm:text-[26px] md:text-[32px] leading-[140%] tracking-[-0.32px] max-w-[557px]">
      Talk to a Hypoteq expert for a{" "}
      <span className="font-[600]">15-minute consultation</span> for personalized guidance.
    </p>

    <button className="px-[20px] md:px-[24px] py-[8px] md:py-[10px] bg-[#CAF476] text-[#132219] text-[14px] sm:text-[16px] font-[500] rounded-full hover:bg-[#D6FA8A] transition-all">
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
function InfoBox({ title, value, red = false, loanType }: any) {
  // ✅ Background color logic (keeps your structure)
  const bgColor = !loanType
    ? "bg-[#E5E5E5]" // neutral gray when no selection
    : red
    ? "bg-[linear-gradient(270deg,#FCA5A5_0%,#FECACA_100%)]" // red when not eligible
    : "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"; // green when eligible

  // ✅ Circle background color (also gray when no selection)
  const circleColor = !loanType
    ? "bg-[#BDBDBD]" // gray circle
    : red
    ? "bg-[#FCA5A5]" // red circle
    : "bg-[#CAF47E]"; // green circle

  return (
    <div
      className={`flex flex-col justify-center p-[15px_24px] rounded-[10px] border border-[#132219] w-full ${bgColor}`}
    >
      <div className="flex justify-between items-start">
        <p className="text-[14px] font-medium text-[#132219] leading-tight">
          {title}
        </p>
        <div
          className={`w-[20px] h-[20px] rounded-full flex items-center justify-center border border-[#132219] ${circleColor}`}
        >
          <CheckIcon red={red} loanType={loanType} />
        </div>
      </div>

      <div className="h-[1px] bg-[#132219] w-full mt-[6px] mb-[10px]" />
      <h2 className="text-[40px] font-semibold text-[#132219] leading-none">
        {value}
      </h2>
    </div>
  );
}

function ProgressBox({ title, value, current, total, loanType }: any) {
  const percent = parseFloat(value.replace("%", "").replace(",", ".")) || 0;

  // ✅ Background (gray when no selection)
  const bgColor = !loanType
    ? "bg-[#E5E5E5]"
    : "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]";

  // ✅ Circle background (gray when no selection)
  const circleColor = !loanType ? "bg-[#BDBDBD]" : "bg-[#CAF47E]";

  return (
    <div
      className={`flex flex-col justify-center rounded-[10px] border border-[#132219] w-full p-[18px_24px] gap-[18px] ${bgColor}`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-[24px] font-normal text-[#132219]">{title}</h3>

        <div
          className={`w-[22px] h-[22px] rounded-full border border-[#132219] flex items-center justify-center ${circleColor}`}
        >
          <CheckIcon loanType={loanType} />
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

function CheckIcon({ red = false, loanType }: any) {
  const strokeColor = !loanType
    ? "#6E6E6E" // gri kur nuk është zgjedhur asgjë
    : red
    ? "#7F1D1D" // e kuqe kur nuk është eligible
    : "#132219"; // e zezë për normale / jeshile

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="6"
      viewBox="0 0 10 8"
      fill="none"
    >
      <path
        d="M0.5 3.78129L3.31254 6.59383L9.50012 0.40625"
        stroke={strokeColor}
        strokeWidth="1"
      />
    </svg>
  );
}
