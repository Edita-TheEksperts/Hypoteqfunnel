"use client";
import useMortgageCalculator from "@/src/hooks/useMortgageCalculator";



export default function MortgageCalculator() {
  const calc = useMortgageCalculator(); // ⬅️ thirrja

  const {
    propertyPrice, ownFunds, income, existingMortgage, newMortgage, cashOut,
    residenceType, loanType, interestOption, slidersTouched,
    requiredOwnFunds, requiredIncome, actualMortgage, mortgageNeed,
    tragbarkeitCHF, tragbarkeitPercent, maintenanceYear, amortizationYear,
    interestYearEffective, monthlyCost, belehnung, isEligible, infoTitle, interestOptions,
    setPropertyPrice, setOwnFunds, setIncome, setExistingMortgage, setNewMortgage,
    setCashOut, setResidenceType, setLoanType, setInterestOption, setSlidersTouched,
    formatCHF, formatPercent
  } = calc;


  // -------------- UI --------------
  return (
    <section
      className="
    flex flex-col items-center 
    py-[48px] md:py-[120px]
    px-[20px] md:px-[118px]
    font-sans text-[#132219] bg-white
  "
    >
      <div
        className="flex flex-col lg:flex-row justify-between items-start 
w-full max-w-[1440px] mx-auto 
gap-[40px] lg:gap-[108px]"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col w-full max-w-[536px] gap-[28px]">
          <h1 className="text-[40px] font-semibold leading-none mb-6">
            Mortgage Calculator
          </h1>

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

            <div className="flex flex-col gap-[20px] mt-2 w-full">
              <SliderInput
                label="Property Price"
                value={propertyPrice}
                setValue={(v: number) => {
                  setPropertyPrice(v);
                  setSlidersTouched(true);
                }}
                min={0}
                max={2000000}
                slidersTouched={slidersTouched}
              />
              <SliderInput
                label="Annual Gross Income (CHF)"
                value={income}
                setValue={(v: number) => {
                  setIncome(v);
                  setSlidersTouched(true);
                }}
                min={0}
                max={500000}
                requiredValue={requiredIncome}
                slidersTouched={slidersTouched}
              />
           {loanType === "refinancing" ? (
  <>
    <SliderInput
      label="Existing Mortgage"
      value={existingMortgage}
      setValue={(v: number) => {
        setExistingMortgage(v);
        setSlidersTouched(true);
      }}
      min={0}
      max={propertyPrice}
      slidersTouched={slidersTouched}
    />
    <SliderInput
      label="New Mortgage"
      value={newMortgage}
      setValue={(v: number) => {
        setNewMortgage(v);
        setSlidersTouched(true);
      }}
      min={0}
      max={propertyPrice}
      slidersTouched={slidersTouched}
    />
    <div className="flex items-center gap-2 mt-[-10px]">
      <input
        type="checkbox"
        checked={cashOut}
        onChange={() => setCashOut(!cashOut)}
      />
      <span className="text-[14px] font-medium text-[#132219]">Cash-out equity</span>
    </div>
  </>
) : (
  <SliderInput
    label="Equity / Own Funds"
    value={ownFunds}
    setValue={(v: number) => {
      setOwnFunds(v);
      setSlidersTouched(true);
    }}
    min={0}
    max={Math.max(propertyPrice, 2000000)}
    requiredValue={requiredOwnFunds}
    slidersTouched={slidersTouched}
  />
)}

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
        <div className="flex flex-col items-start w-full lg:max-w-[628px] mt-[40px] lg:mt-[96px] gap-[24px] px-2">
<InfoBox
title={
  loanType === "refinancing"
    ? cashOut
      ? "Refinance + Cash-out enabled"
      : "Refinancing eligibility"
    : infoTitle
}


value={
  loanType === "refinancing"
   ? formatCHF(actualMortgage)  // ✅ maksimumi i lejuar sipas rregullave
      : formatCHF(mortgageNeed)
}

  loanType={loanType}
  isEligible={isEligible}
  slidersTouched={slidersTouched}
/>


          <ProgressBox
            title="Tragbarkeit"
            value={formatPercent(tragbarkeitPercent)}
            current={formatCHF(tragbarkeitCHF)}
            total={formatCHF(income)}
            loanType={loanType}
            isEligible={isEligible}
            slidersTouched={slidersTouched}
          />
<ProgressBox
  title="Eigenmittel"
  value={
    loanType === "refinancing"
      ? formatPercent(existingMortgage > 0 ? 1 - existingMortgage / propertyPrice : 0)
      : formatPercent(propertyPrice > 0 ? ownFunds / propertyPrice : 0)
  }
  current={
    loanType === "refinancing"
      ? formatCHF(propertyPrice - existingMortgage)
      : formatCHF(ownFunds)
  }
  total={formatCHF(propertyPrice)}
  loanType={loanType}
  isEligible={isEligible}
  slidersTouched={slidersTouched}
/>

          <button className="w-full h-[50px] rounded-full bg-[#132219] text-white text-[18px] font-sfpro font-medium text-center leading-normal hover:opacity-90 transition">
            Continue my project
          </button>
        </div>
      </div>

      {/* COST SECTION */}
      <div className="flex flex-col gap-[63px] mt-[80px] items-stretch w-full max-w-[1440px] mx-auto px-[20px] md:px-0">
        {/* Top Row: Title + Select */}
        <div className="flex flex-col md:flex-row justify-between md:items-center w-full gap-4">
          <h2 className="text-[28px] md:text-[40px] font-sfpro font-medium text-[#132219] tracking-[-0.4px]">
            Estimated Costs in detail
          </h2>

          <div className="relative w-full md:w-[444px]">
            <select
              value={interestOption}
              onChange={(e) => setInterestOption(e.target.value)}
              className="appearance-none w-full h-[44px] px-6 
         bg-[#132219] text-white text-[16px] md:text-[20px] font-semibold rounded-[58px]
         cursor-pointer outline-none border-none"
            >
              {interestOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-[#132219] text-white"
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
              className="absolute right-6 top-[50%] -translate-y-1/2 pointer-events-none"
            >
              <path
                d="M6 7C5.72917 7 5.48958 6.90625 5.28125 6.71875L0.28125 1.71875C0.09375 1.51042 0 1.27083 0 1C0 0.729167 0.09375 0.489583 0.28125 0.28125C0.489583 0.09375 0.729167 0 1 0C1.27083 0 1.51042 0.09375 1.71875 0.28125L6 4.59375L10.2812 0.28125C10.4896 0.09375 10.7292 0 11 0C11.2708 0 11.5104 0.09375 11.7188 0.28125C11.9062 0.489583 12 0.729167 12 1C12 1.27083 11.9062 1.51042 11.7188 1.71875L6.71875 6.71875C6.51042 6.90625 6.27083 7 6 7Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Boxes + Result */}
        <div className="flex flex-col md:flex-row gap-[16px] w-full">
          {/* Small boxes grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-[10px] w-full md:max-w-[628px]">
            <SmallBox
              title="Interest"
              value={formatCHF(interestYearEffective / 12)}
            />
            <SmallBox
              title="Amortisation"
              value={formatCHF(amortizationYear / 12)}
            />
            <SmallBox
              title="Incidental expenses"
              value={formatCHF(maintenanceYear / 12)}
            />
            <SmallBox
              title="Monthly costs"
              value={formatCHF(monthlyCost)}
              highlight
            />
          </div>

          {/* Total Box */}
          <div
            className={`
        flex flex-col justify-center items-center rounded-[10px] border-2 border-[#132219]
    w-full lg:w-[628px] 
min-h-[300px] lg:h-[444px]

        text-center px-[24px] md:px-[40px] py-[40px] md:py-[60px]
${
  !slidersTouched
    ? "bg-[#E5E5E5]"
    : isEligible
    ? "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"
    : "bg-[linear-gradient(270deg,#FCA5A5_0%,#FECACA_100%)]"
}

      `}
          >
            <h3 className="font-sfpro text-[#132219] text-[40px] md:text-[85px] font-medium leading-none">
              {Math.round(
                interestYearEffective + amortizationYear + maintenanceYear
              ).toLocaleString("de-CH")}
            </h3>

            <p className="text-[16px] md:text-[20px] font-sfpro font-normal text-[#132219] opacity-80 mt-3">
              Total yearly expenses
            </p>
          </div>
        </div>
      </div>
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
function SliderInput({
  label,
  value,
  setValue,
  min,
  max,
  setSlidersTouched,
  requiredValue,
  slidersTouched,
}: any) {
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
  onChange={(e) => {
    // 1️⃣ Lejo vetëm numra
    let raw = e.target.value.replace(/[^0-9]/g, "");

    // 2️⃣ Convert to number
    const numericValue = raw === "" ? 0 : Number(raw);

    // 3️⃣ Respekto max = slider max
    const finalValue = Math.min(numericValue, max);

    setValue(finalValue);
    setSlidersTouched(true);
  }}
  onKeyDown={(e) => {
    // 4️⃣ Stop shkencor notation & minus
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  }}
  onBlur={(e) => {
    // 5️⃣ Re-format when leaving input
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const numericValue = raw === "" ? 0 : Number(raw);
    e.target.value = numericValue.toLocaleString("de-CH");
  }}
  className="bg-transparent text-[18px] font-medium w-[140px] outline-none"
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
      {/* REMOVE min/max labels */}

      {/* Minimum Required on right side */}
      {slidersTouched && requiredValue > 0 && (
        <div className="flex justify-end w-full mt-[-2px]">
          <p
            style={{
              color: "var(--Secondary-Color, #132219)",
              fontFamily: "SF Pro Display",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Minimum required: {requiredValue.toLocaleString("de-CH")} CHF
          </p>
        </div>
      )}
    </div>
  );
}

function InfoBox({
  title,
  value,
  red = false,
  loanType,
  isEligible,
  slidersTouched,
}: any) {
  // ✅ Background color logic (keeps your structure)

  const bgColor = !slidersTouched
    ? "bg-[#E5E5E5]" // gray before touching sliders
    : isEligible
    ? "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]" // green when eligible
    : "bg-[linear-gradient(270deg,#FCA5A5_0%,#FECACA_100%)]"; // red when NOT eligible

  const circleColor = !slidersTouched
    ? "bg-[#BDBDBD]" // gray circle before slider move
    : isEligible
    ? "bg-[#CAF47E]" // green circle
    : "bg-[#FCA5A5]"; // red circle

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

function ProgressBox({
  title,
  value,
  current,
  total,
  loanType,
  isEligible,
  slidersTouched,
}: any) {
  const percent = parseFloat(value.replace("%", "").replace(",", ".")) || 0;
  const bgColor = !slidersTouched
    ? "bg-[#E5E5E5]"
    : isEligible
    ? "bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]"
    : "bg-[linear-gradient(270deg,#FCA5A5_0%,#FECACA_100%)]";

  const circleColor = !slidersTouched
    ? "bg-[#BDBDBD]"
    : isEligible
    ? "bg-[#CAF47E]"
    : "bg-[#FCA5A5]";

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
      className={`relative flex flex-col justify-between p-[15px_16px] rounded-[10px] border border-[#132219] w-full sm:w-[308px] min-h-[180px]
 bg-white overflow-hidden`}
    >
      {/* Gradient line only at the bottom when highlight = true */}
      {highlight && (
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(270deg,#CAF476_0%,#E3F4BF_100%)]" />
      )}

      {/* Title */}
      <p
        className={`text-[#132219] font-['SF Pro Display'] ${
          isMonthlyCosts
            ? "text-[20px] sm:text-[32px] font-[500] tracking-[-0.32px]" // 20px mobile, 32px desktop
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
              ? "text-[28px] sm:text-[40px] font-[600] tracking-[-0.4px]" // 28px mobile, 40px desktop
              : "text-[24px] font-[500] tracking-[-0.24px]"
          }`}
        >
          {currency}
        </span>
        <span
          className={`text-[#132219] font-['SF Pro Display'] leading-[100%] ${
            isMonthlyCosts
              ? "text-[28px] sm:text-[40px] font-[600] tracking-[-0.4px]"
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
  const strokeColor = !loanType ? "#6E6E6E" : red ? "#7F1D1D" : "#132219";

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
