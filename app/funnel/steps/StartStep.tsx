"use client";
import { useState, useEffect } from "react";
import { useFunnelStore } from "@/src/store/funnelStore";

function StartStep({
  customerType,
  setCustomerType,
  clientData,
  setClientData,
  saveStep,
}: any) {
  const [errors, setErrors] = useState<ErrorFields>({});

  interface ErrorFields {
    firstName?: string;
    lastName?: string;
    email?: string;
    zip?: string;
      partnerEmail?: string;  
  }

  const validateDirectCustomer = () => {
    const newErrors: ErrorFields = {};
if (!clientData.firstName)
  newErrors.firstName = "Bitte geben Sie Ihren Vornamen ein.";

if (!clientData.lastName)
  newErrors.lastName = "Bitte geben Sie Ihren Nachnamen ein.";

if (!clientData.email)
  newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";

if (!clientData.zip)
  newErrors.zip = "Bitte geben Sie Ihre PLZ ein.";


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Default to direct (fix infinite re-render)
  useEffect(() => {
    if (!customerType) {
      setCustomerType("direct");
    }
  }, []);
  const { setEmail } = useFunnelStore();

  return (
    <div className="w-full max-w-[1400px] mx-auto pl-20 pr-32 -mt-10">
      {/* === Title === */}
      <h2 className="text-[48px] font-normal text-[#132219] mb-1 font-sfpro">
        Starten Sie Ihre Hypothekanfrage
      </h2>

      {/* === Subtitle === */}
      <p className="text-[24px] font-normal   font-sfpro text-[#132219]/80 mb-12">
        Teilen Sie uns ein paar Basisdaten mit, damit wir Ihr Angebot
        vorbereiten können.
      </p>

      {/* === DIRECT CUSTOMER FORM === */}
      {customerType === "direct" && (
        <>
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label className="text-[14px] font-medium text-[#132219]">
                Vorname
              </label>

              <input
                className={`w-full mt-1 rounded-full px-5 py-2 text-[#132219]
      border 
      ${errors.firstName ? "border-red-500" : "border-[#132219] opacity-80"}
    `}
                value={clientData.firstName}
                onChange={(e) => {
                  setClientData((p: any) => ({
                    ...p,
                    firstName: e.target.value,
                  }));
                  setErrors((prev: any) => ({ ...prev, firstName: "" })); // remove error when typing
                }}
              />

              {errors.firstName && (
                <p className="text-red-500 text-[12px] mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div>
              <label className="text-[14px] font-medium text-[#132219]">
                Nachname
              </label>

              <input
                className={`w-full mt-1 rounded-full px-5 py-2 text-[#132219]
      border 
      ${errors.lastName ? "border-red-500" : "border-[#132219] opacity-80"}
    `}
                value={clientData.lastName}
                onChange={(e) => {
                  setClientData((p: any) => ({
                    ...p,
                    lastName: e.target.value,
                  }));
                  setErrors((prev: any) => ({ ...prev, lastName: "" }));
                }}
              />

              {errors.lastName && (
                <p className="text-red-500 text-[12px] mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div>
              <label className="text-[14px] font-medium text-[#132219]">
                Email Adresse
              </label>

              <input
                className={`w-full mt-1 rounded-full px-5 py-2 text-[#132219]
      border 
      ${errors.email ? "border-red-500" : "border-[#132219] opacity-80"}
    `}
                value={clientData.email}
                onChange={(e) => {
                  setClientData((p: any) => ({ ...p, email: e.target.value }));
                  setErrors((prev: any) => ({ ...prev, email: "" }));
                }}
              />

              {errors.email && (
                <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-[14px] font-medium text-[#132219]">
                PLZ Code
              </label>

              <input
                className={`w-full mt-1 rounded-full px-5 py-2 text-[#132219]
      border 
      ${errors.zip ? "border-red-500" : "border-[#132219] opacity-80"}
    `}
                value={clientData.zip}
                onChange={(e) => {
                  setClientData((p: any) => ({ ...p, zip: e.target.value }));
                  setErrors((prev: any) => ({ ...prev, zip: "" }));
                }}
              />

              {errors.zip && (
                <p className="text-red-500 text-[12px] mt-1">{errors.zip}</p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between w-full mt-6">
            <div
              onClick={() => setCustomerType("partner")}
              className="
    group cursor-pointer select-none mt-6
    flex items-center gap-4
    px-7 py-4

    transition-all duration-300
  "
            >
              {/* Icon Circle */}
              <div
                className="
      w-10 h-10 flex items-center justify-center
      rounded-full bg-[#CAF476]/20
      group-hover:bg-[#CAF476]/40
      backdrop-blur-sm
      transition-all duration-300
      shadow-inner
    "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#132219]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Text Area */}
              <div className="flex flex-col">
                <span className="text-[18px] font-semibold text-[#132219]">
                  Sind Sie Partner?
                </span>
                <span className="text-[13px] text-[#132219]/70 group-hover:text-[#132219] transition-colors">
                  Klicken Sie hier, um fortzufahren
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                if (!validateDirectCustomer()) return; // STOP if invalid
                setEmail(clientData.email);
                saveStep();
              }}
              className="px-8 py-2 bg-[#CAF476] border border-[#132219] rounded-full text-[14px] font-medium text-[#132219]"
            >
              Weiter
            </button>
          </div>
        </>
      )}

      {/* === PARTNER FORM === */}
      {customerType === "partner" && (
        <>
          <div className="grid grid-cols-1 gap-10 mb-10">
            <div>
              <label className="text-[14px] font-medium text-[#132219]">
                Email Adresse
              </label>
 <input
  className={`w-full mt-1 rounded-full px-5 py-2 text-[#132219]
    border 
    ${errors.partnerEmail ? "border-red-500" : "border-[#132219] opacity-80"}
  `}
  value={clientData.partnerEmail}
  onChange={(e) => {
    setClientData((p: any) => ({
      ...p,
      partnerEmail: e.target.value,
    }));
    setErrors((prev: any) => ({ ...prev, partnerEmail: "" }));
  }}
/>

{errors.partnerEmail && (
  <p className="text-red-500 text-[12px] mt-1">{errors.partnerEmail}</p>
)}

            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
        onClick={() => {
  if (!clientData.partnerEmail) {
    setErrors({ partnerEmail: "Bitte geben Sie Ihre E-Mail-Adresse ein." });
    return;
  }

  setEmail(clientData.partnerEmail);
  saveStep();
}}
              className="px-8 py-2 bg-[#CAF476] border border-[#132219] rounded-full text-[14px] font-medium text-[#132219]"
            >
              Weiter
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* REUSABLE COMPONENTS */
function InputField({ label, value, onChange, type = "text" }: any) {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-[#132219]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-2 border px-4 py-3 rounded-xl"
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }: any) {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-[#132219]">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-2 border px-4 py-3 rounded-xl"
      >
        <option value="">Bitte auswählen</option>
        {options.map(([val, text]: any) => (
          <option key={val} value={val}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StartStep;
