"use client";
import { useState, useMemo, useEffect, useRef } from "react";
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
const [existingMortgage, setExistingMortgage] = useState(0);  
const [newMortgage, setNewMortgage] = useState(0);      

const [residenceType, setResidenceType] = useState<"haupt" | "zweit">("haupt");

const [loanType, setLoanType] = useState<"purchase" | "refinancing" | null>("purchase");

  const [interestOption, setInterestOption] = useState("10Y 1.40%");
  const params =
    residenceType === "haupt"
      ? {
          maxBelehnung: 0.8, 
          firstMortgageLimit: 0.6667,
          stressRate: 0.05, 
          maintenanceRate: 0.008, 
          amortizationYears: 15, 
          tragbarkeitThreshold: 0.35,
        }
      : {
          maxBelehnung: 0.65, 
          firstMortgageLimit: 0, 
          stressRate: 0.05,
          maintenanceRate: 0.008,
          amortizationYears: 0,
          tragbarkeitThreshold: 0.35,
        };
const dynamicMaxMortgage = residenceType
  ? propertyPrice * params.maxBelehnung 
  : propertyPrice * 0.8; 

const effectiveRate = useMemo(() => {
  if (interestOption.startsWith("SARON")) return 0.0085; 
  if (interestOption.startsWith("5Y"))   return 0.0105;  
  if (interestOption.startsWith("10Y"))  return 0.0140;  
  return 0.0105;
}, [interestOption]);

const interestOptions = ["SARON 0.85%", "5 Jahre 1.05%", "10 Jahre 1.40%"]; 
const mortgageNeed =
  loanType === "purchase"
    ? Math.max(0, propertyPrice - ownFunds)
    : Math.max(0, newMortgage);

const maxMortgageAllowed = (params?.maxBelehnung ?? 0) * propertyPrice;
const totalMortgage = Math.min(mortgageNeed, maxMortgageAllowed);
const firstLimitAbs =
  residenceType === "haupt" ? params.firstMortgageLimit * propertyPrice : Infinity;

const firstMortgage = Math.min(totalMortgage, firstLimitAbs);
const secondMortgage =
  residenceType === "haupt" ? Math.max(0, totalMortgage - firstMortgage) : 0;
const actualMortgage = totalMortgage;
const maxMortgage = propertyPrice * (params?.maxBelehnung ?? 0);
const interestOld = existingMortgage * effectiveRate;
const maintenanceOld = propertyPrice * params.maintenanceRate;
const amortizationOld =
  residenceType === "haupt" &&
  existingMortgage > propertyPrice * params.firstMortgageLimit
    ? (existingMortgage - propertyPrice * params.firstMortgageLimit) / params.amortizationYears
    : 0;

let monthlyOld = 0;
if (loanType === "refinancing") {
  const oldInterestYear = existingMortgage * effectiveRate;
  const oldAmortYear =
    residenceType === "haupt" && existingMortgage > firstLimitAbs && params.amortizationYears > 0
      ? (existingMortgage - firstLimitAbs) / params.amortizationYears
      : 0;

  const oldMaintenanceYear = propertyPrice * params.maintenanceRate;

  monthlyOld = (oldInterestYear + oldAmortYear + oldMaintenanceYear) / 12;
}
const maxBelehnungAllowed = params.maxBelehnung; 
const interestYearStress   = actualMortgage * params.stressRate;  
const maintenanceYear = propertyPrice * params.maintenanceRate;
const belehnungPurchase = propertyPrice > 0 ? actualMortgage / propertyPrice : 0;
const belehnungRefi     = propertyPrice > 0 ? newMortgage / propertyPrice   : 0;
const belehnung         = loanType === "refinancing" ? belehnungRefi : belehnungPurchase;
const amortizationYear =
  loanType === "purchase" &&
  residenceType === "haupt" &&
  belehnung > 0.6667 &&
  secondMortgage > 0
    ? secondMortgage / params.amortizationYears
    : 0;

const tragbarkeitCHF       = interestYearStress + maintenanceYear + amortizationYear;
const minIncomeRequired = tragbarkeitCHF > 0 ? tragbarkeitCHF / params.tragbarkeitThreshold : 0;
const tragbarkeitPercent   = income > 0 ? tragbarkeitCHF / income : 0;
const interestYearEffective = actualMortgage * effectiveRate;
const monthlyCost = (interestYearEffective + amortizationYear + maintenanceYear) / 12;
const minOwnFunds = loanType === "purchase" ? propertyPrice * 0.20 : 0; 
const isBelehnungOK     = belehnung <= params.maxBelehnung; 
const isTragbarkeitOK = Math.round(tragbarkeitPercent * 1000) <= Math.round(params.tragbarkeitThreshold * 1000);

const isEquityOK =
  loanType === "purchase"
    ? ownFunds > 0   // mjafton të ketë fonde
    : true;
const isEligible = isBelehnungOK && isTragbarkeitOK;

const minVisualMax = 100000; 
const sliderMaxExisting = Math.max(propertyPrice, minVisualMax);
const sliderMaxNew = Math.max(dynamicMaxMortgage, minVisualMax);


const infoTitle = isEligible
  ? loanType === "purchase"
    ? "Finanzierung möglich. Geschätzter Hypothekbedarf:"    
    : "Finanzierung möglich. Neue Hypothek bis:"           
  : "Finanzierung nicht möglich. Maximale Hypothek:";       


  // -------------- Formatting --------------
  const formatCHF = (num: number) =>
    "CHF " + Math.round(num).toLocaleString("de-CH");
  const formatPercent = (num: number) =>
    (num * 100).toFixed(1).replace(".", ",") + "%";
const minRefinanceMortgage = existingMortgage;   


  // -------------- UI --------------
  return (
<section className="flex flex-col items-center bg-white py-12 px-[116px] mb-[120px] font-sans text-[#132219]">
<div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1579px] mx-auto gap-[60px] lg:gap-[80px] lg:items-stretch">

        <div className="flex flex-col w-full max-w-[536px] gap-[48px]">
<div className="flex flex-col lg:flex-row items-start justify-between w-full mb-10 mt-6 lg:mb-20 lg:mt-10">
  <h1
    className="
      text-[40px] sm:text-[52px] lg:text-[72px]
      font-[500]
      leading-[110%] lg:leading-[100%]
      tracking-[-0.72px]
      text-[#132219]
      max-w-full lg:max-w-[536px]
      text-left
    "
    style={{ fontFamily: "'SF Pro Display', sans-serif" }}
  >
    Hypothekenrechner
  </h1>
</div>


          <div className="mt-[16px] flex flex-col gap-[24px]">
            <div className="flex gap-3">
              <ToggleButton
                label="Immobilienkauf"
                active={loanType === "purchase"}
                onClick={() =>
                  setLoanType(loanType === "purchase" ? null : "purchase")
                }
              />
              <ToggleButton
                label="Refinanzierung"
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
<div className="flex flex-col gap-[22px] mt-[22px]">

  <SliderInput
    label="Kaufpreis"
    value={propertyPrice}
    setValue={setPropertyPrice}
    min={0}
    max={2000000}
  />

  {loanType === "refinancing" && (
    <>
      <SliderInput
        label="Bisherige Hypothek"
        value={existingMortgage}
        setValue={(v: number) => setExistingMortgage(Math.min(v, propertyPrice))}
        min={0}
        max={sliderMaxExisting}
      />

      <SliderInput
        label="Neue Hypothek"
        value={newMortgage}
        setValue={(v: number) => setNewMortgage(Math.min(v, dynamicMaxMortgage))}
        min={0}
        max={sliderMaxNew}
      />
    </>
  )}

{loanType === "purchase" && (
  <SliderInput
    label="Eigenmittel"
    value={ownFunds}
    setValue={setOwnFunds}
    min={0}
    max={propertyPrice}
    minRequired={minOwnFunds}  
  />
)}

 <SliderInput

  label="Brutto-Haushaltseinkommen"
  value={income}
  setValue={setIncome}
  min={0} 
  max={500000}
  minRequired={minIncomeRequired} 
/>

</div>
          </div>

          <div className="flex flex-col gap-2 mt-[-7px] w-full">
            <label className="text-[16px] font-medium">Postleitzahl / Ort</label>
            <input
              type="text"
              placeholder="Enter your zip/city"
              className="w-full border border-[#A8A8A8] rounded-full px-5 py-2 text-[16px] outline-none placeholder:text-[#A8A8A8]"
            />
          </div>
        </div>
<div className="flex flex-col items-start w-full max-w-[628px] mt-[253px]">

  {/* InfoBox → gap 36px */}
  <div className="flex flex-col gap-[36px] w-full">
    <InfoBox
      title={infoTitle}
      value={formatCHF(actualMortgage)} 
      red={!isEligible}
      loanType={loanType}
    />
  </div>

  {/* Eigenmittel ose Belehnung → 14px distancë nga Tragbarkeit */}
  {loanType === "purchase" && (
    <div className="mt-[36px] mb-[14px] w-full">
      <ProgressBox
        title="Eigenmittel"
        value={formatPercent(propertyPrice > 0 ? ownFunds / propertyPrice : 0)}
        current={formatCHF(ownFunds)}
        total={formatCHF(propertyPrice)}
        loanType={loanType}
      />
    </div>
  )}

  {loanType === "refinancing" && (
    <div className="mt-[36px] mb-[14px] w-full">
<ProgressBox
  title="Belehnung"
  value={formatPercent(belehnungRefi)}
  current={formatCHF(newMortgage)}
  total={formatCHF(propertyPrice)}
  loanType={loanType}
  red={!isBelehnungOK}
/>

    </div>
  )}

  {/* Tragbarkeit */}
  <div className="w-full">
<ProgressBox
  title="Tragbarkeit"
  value={formatPercent(tragbarkeitPercent)}
  current={formatCHF(tragbarkeitCHF)}
  total={formatCHF(income)}
  loanType={loanType}
  red={!isTragbarkeitOK}
/>

  </div>

  {/* Butoni → 28px distancë nga kutia sipër */}
  <button className="w-full h-[41px] mt-[28px] rounded-full bg-[#132219] text-white text-[18px] font-sfpro font-medium text-center leading-normal hover:opacity-90 transition">
    Projekt starten
  </button>
</div>

      </div>
<div className="flex flex-col gap-[40px] md:gap-[63px] mt-[60px] md:mt-[80px] items-stretch">
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
    
<div className="grid grid-cols-2 gap-[10px] w-full max-w-full md:max-w-[628px]">
  {loanType === "refinancing" ? (
    <>
      <SmallBox title="Bisherige monatliche Kosten" value={formatCHF(monthlyOld)} />
      <SmallBox title="Monatliche Gesamtkosten" value={formatCHF(monthlyCost)} highlight />

      <SmallBox title="Zinsen" value={formatCHF(interestYearEffective / 12)} />
      <SmallBox title="Unterhalt / Nebenkosten" value={formatCHF(maintenanceYear / 12)} />
    </>
  ) : (
    <>
      <SmallBox title="Zinsen" value={formatCHF(interestYearEffective / 12)} />
      <SmallBox title="Amortisation" value={formatCHF(amortizationYear / 12)} />
      <SmallBox title="Unterhalt / Nebenkosten" value={formatCHF(maintenanceYear / 12)} />
      <SmallBox title="Monatliche Gesamtkosten" value={formatCHF(monthlyCost)} highlight />
    </>
  )}
</div>

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
     Gesamtkosten pro Jahr
      </p>
    </div>
  </div>
</div>

<div className="flex justify-center w-full mt-0 md:mt-[40px] px-4">
  
  <button className="w-full max-w-[1273px] h-[41px] rounded-[69px] border border-[#132219] bg-[#132219] text-white text-[16px] md:text-[18px] font-medium text-center hover:opacity-90 transition">
    Continue my project
  </button>
</div>

    </section>
  );
}

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

function SliderInput({ label, value, setValue, min, max, minRequired }: any) {
  const percentage = ((value - min) / (max - min)) * 100;
  const animationRef = useRef<number | null>(null);

  // ✅ Gjithmonë ndjek minRequired
  useEffect(() => {
    if (minRequired === undefined) return;

    const startValue = value;
    const endValue = Math.min(Math.max(minRequired, min), max); // kufizo brenda range-it
    const duration = 400;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const newVal = startValue + (endValue - startValue) * eased;
      setValue(Math.round(newVal));
      if (progress < 1) animationRef.current = requestAnimationFrame(animate);
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  }, [minRequired, min, max]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
<div className="flex flex-col gap-[6px] relative">
      {/* Label */}
      <div className="flex justify-between items-center">
        <label className="text-[16px] font-medium">{label}</label>
        <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#626D64]">
          <span className="text-white text-[10px] font-medium">?</span>
        </div>
      </div>

      {/* Input Field */}
      <div className="flex items-center justify-between border border-[#A8A8A8] rounded-full px-5 py-2">
        <input
          type="text"
          value={value.toLocaleString("de-CH")}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            const parsed = Number(raw);
            if (!isNaN(parsed)) {
              const bounded = Math.max(min, Math.min(parsed, max));
              setValue(bounded);
            }
          }}
          className="bg-transparent text-[18px] font-medium w-[120px] outline-none"
        />
        <span className="text-[18px] font-semibold">CHF</span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const newVal = Number(e.target.value);
          // Mos lejo poshtë minimumit
          if (minRequired !== undefined && newVal < minRequired) {
            setValue(minRequired);
          } else {
            setValue(newVal);
          }
        }}
  className="w-full h-[4px] rounded-full appearance-none cursor-pointer transition-[background] duration-300 ease-out mt-[6px]"
        style={{
background: `linear-gradient(to right, #132219 ${Math.max(percentage, 3)}%, #D9D9D9 ${Math.max(percentage, 3)}%)`,

          transition: "all 0.3s ease-out",
        }}
      />

      {minRequired !== undefined && (
        <div className="flex justify-end text-[13px] text-[#4b4b4b] italic pr-2 mt-[-4px]">
          Minimum : {Math.round(minRequired).toLocaleString("de-CH")} CHF
        </div>
      )}
    </div>
  );
}

function InfoBox({ title, value, red = false, loanType }: any) {
const bgColor = !loanType
  ? "bg-[#E5E5E5]"
  : red
  ? "bg-[linear-gradient(270deg,#FCA5A5_0%,#FECACA_100%)]"   // KUQE
  : "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"; // JESHILE

const circleColor = !loanType
  ? "bg-[#BDBDBD]"
  : red
  ? "bg-[#FCA5A5]"
  : "bg-[#CAF47E]";


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

function ProgressBox({ title, value, current, total, loanType, red = false }: any) {

  const percent = parseFloat(value.replace("%", "").replace(",", ".")) || 0;

  const bgColor = !loanType
    ? "bg-[#E5E5E5]"
    : "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]";

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

      <h2 className="text-[48px] font-sfpro font-semibold text-[#132219] leading-none ">
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
  className={`relative flex flex-col justify-between p-[12px_10px] sm:p-[15px_16px] rounded-[10px] border border-[#132219]
  w-full sm:w-[308px] h-[160px] sm:h-[216px] bg-white overflow-hidden`}
>

      {highlight && (
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]" />
      )}
      <p
        className={`text-[#132219] font-['SF Pro Display'] ${
          isMonthlyCosts
            ? "text-[32px] font-[500] tracking-[-0.32px]"
            : "text-[20px] font-[400] tracking-[-0.2px]"
        } leading-[100%]`}
      >
        {title}
      </p>
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
    ? "#6E6E6E" 
    : red
    ? "#7F1D1D" 
    : "#132219"; 

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
