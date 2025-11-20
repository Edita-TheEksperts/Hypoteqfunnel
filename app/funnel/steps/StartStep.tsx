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
        Teilen Sie uns ein paar Basisdaten mit, damit wir Ihr Angebot vorbereiten können.
      </p>

      {/* === DIRECT CUSTOMER FORM === */}
      {customerType === "direct" && (
        <>
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label className="text-[14px] font-medium text-[#132219]">Vorname</label>
              <input
                className="w-full mt-1 border border-[#132219] opacity-80 rounded-full px-5 py-2 text-[#132219]"
                value={clientData.firstName}
                onChange={(e) =>
                  setClientData((p: any) => ({
                    ...p,
                    firstName: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label className="text-[14px] font-medium text-[#132219]">Nachname</label>
              <input
                className="w-full mt-1 border border-[#132219] opacity-80 rounded-full px-5 py-2 text-[#132219]"
                value={clientData.lastName}
                onChange={(e) =>
                  setClientData((p: any) => ({
                    ...p,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div>
              <label className="text-[14px] font-medium text-[#132219]">Email Adresse</label>
              <input
                className="w-full mt-1 border border-[#132219] opacity-80 rounded-full px-5 py-2 text-[#132219]"
                value={clientData.email}
                onChange={(e) =>
                  setClientData((p: any) => ({
                    ...p,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label className="text-[14px] font-medium text-[#132219]">PLZ Code</label>
              <input
                className="w-full mt-1 border border-[#132219] opacity-80 rounded-full px-5 py-2 text-[#132219]"
                value={clientData.zip}
                onChange={(e) =>
                  setClientData((p: any) => ({
                    ...p,
                    zip: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between w-full mt-6">
            <span className="text-[14px] font-medium text-[#132219] opacity-70">
              Sind Sie Partner?{" "}
              <button
                onClick={() => setCustomerType("partner")}
                className="underline underline-offset-2 text-[#132219]"
              >
                Hier klicken, um fortzufahren
              </button>
            </span>

   <button
  onClick={() => {
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
          <div className="grid grid-cols-2 gap-10 mb-10">
            <div>
              <label className="text-[14px] font-medium text-[#132219]">Vorname</label>
              <input
                className="w-full mt-1 border border-[#132219] opacity-80 rounded-full px-5 py-2 text-[#132219]"
                value={clientData.firstName}
                onChange={(e) =>
                  setClientData((p: any) => ({
                    ...p,
                    firstName: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label className="text-[14px] font-medium text-[#132219]">Email Adresse</label>
              <input
                className="w-full mt-1 border border-[#132219] opacity-80 rounded-full px-5 py-2 text-[#132219]"
                value={clientData.partnerEmail}
                onChange={(e) =>
                  setClientData((p: any) => ({
                    ...p,
                    partnerEmail: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
<button
  onClick={() => {
    setEmail(clientData.partnerEmail);   // ✅ RUAN EMAIL-IN E PARTNER-IT
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

