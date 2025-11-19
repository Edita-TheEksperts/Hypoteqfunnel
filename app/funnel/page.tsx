"use client";

import { useState, useEffect } from "react";
import { useFunnelStore } from "@/src/store/funnelStore";
import ProgressBar from "@/components/ProgressBar"; 
import StartStep from "./steps/StartStep";
import ProjectStep from "./steps/ProjectStep";
import BorrowersStep from "./steps/BorrowersStep";
import PropertyStep from "./steps/PropertyStep";
import FinancingStep from "./steps/FinancingStep";
import DocumentsStep from "./steps/DocumentsStep";
import DirectSummaryStep from "./steps/DirectSummaryStep";
import FunnelSidebar from "./FunnelSidebar";
import { v4 as uuidv4 } from "uuid";

export default function FunnelPage() {
  const {
    customerType,
    setCustomerType,
    setClient,
    setProject,
    setProperty,
    setBorrowers,
    setFinancing,
    addDocument,
  } = useFunnelStore();

  const [step, setStep] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlType =
      params.get("customer") || params.get("customerType") || null;

    if (!customerType) {
      if (urlType === "direct" || urlType === "partner") {
        setCustomerType(urlType);
      }
    }
  }, [customerType, setCustomerType]);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(1, s - 1));

  // -------------------------------------
  // CALCULATE SIDEBAR MAPPING
  // -------------------------------------
  const getSidebarStep = () => {
    if (step <= 3) return 1;               // StartStep, ProjectStep, BorrowersStep
    if (step === 4) return 2;              // PropertyStep
    if (step === 5 || step === 6) return 3; // FinancingStep + Documents/Summary
    return 4;                              // Final
  };

  const sidebarStep = getSidebarStep();

  // -------------------------------------
  // STATE
  // -------------------------------------

  const [clientData, setClientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
    partnerEmail: "",
  });

  const [projectData, setProjectData] = useState({
    projektArt: "" as "" | "kauf" | "abloesung",
    liegenschaftZip: "",
    kreditnehmerTyp: "",
  });

  const [propertyData, setPropertyData] = useState({
    artImmobilie: "",
    artLiegenschaft: "",
    nutzung: "",
    renovation: "",
    renovationsBetrag: "",
    reserviert: "",
    finanzierungsangebote: "",
    angeboteListe: [] as string[],
    kreditnehmer: [
      {
        id: uuidv4(),
        vorname: "",
        name: "",
        geburtsdatum: "",
        status: "Angestellt",
      },
    ],
    firmen: [{ firmenname: "" }],
  });

  const [borrowers, setLocalBorrowers] = useState([
    {
      id: uuidv4(),
      type: "" as "" | "nat" | "jur",
      firstName: "",
      lastName: "",
      birthdate: "",
      civil: "",
      job: "",
      firmaName: "",
      firmaUID: "",
    },
  ]);

  const [financingData, setFinancingData] = useState({
    kaufpreis: "",
    eigenmittel_bar: "",
    eigenmittel_saeule3: "",
    eigenmittel_pk: "",
    eigenmittel_schenkung: "",
    pkVorbezug: "",
    hypoBetrag: "",
    modell: "",
    einkommen: "",
    steueroptimierung: "",
    kaufdatum: "",
    kommentar: "",
    abloesung_betrag: "",
    erhoehung: "",
    erhoehung_betrag: "",
    abloesedatum: "",
  });

  const [uploadedDocs, setUploadedDocs] = useState<any[]>([]);

  // -------------------------------------
  // SAVE STEPS
  // -------------------------------------

  const saveStep1 = () => {
    if (customerType === "partner") {
      setClient({ email: clientData.partnerEmail });
    } else {
      setClient(clientData);
    }
    next();
  };

  const saveStep2 = () => {
    setProject(projectData);
    next();
  };

  const saveStep3 = () => {
    setProperty(propertyData);
    next();
  };

  const saveStep4 = () => {
    setBorrowers(borrowers);
    next();
  };

  const saveStep5 = () => {
    setFinancing(financingData);
    next();
  };

  const saveStep6 = () => {
    setStep(7);
  };

  // -------------------------------------
  // RENDER
  // -------------------------------------

  return (
    <div className="w-full min-h-screen bg-white flex">

      <FunnelSidebar step={sidebarStep} />

<div className="flex-1 w-full pl-0 pr-8 pb-32">

        
        <div className="mb-[140px]">
          <ProgressBar step={step} />
        </div>

        {step === 1 && (
          <StartStep
            customerType={customerType}
            setCustomerType={setCustomerType}
            clientData={clientData}
            setClientData={setClientData}
            saveStep={saveStep1}
          />
        )}

        {step === 2 && (
          <ProjectStep
            data={projectData}
            setData={setProjectData}
            saveStep={saveStep2}
            back={back}
            customerType={customerType}
          />
        )}

        {step === 3 && (
          <BorrowersStep
            borrowers={borrowers}
            setBorrowers={setLocalBorrowers}
            saveStep={saveStep4}
            back={back}
          />
        )}

        {step === 4 && (
          <PropertyStep
            data={propertyData}
            setData={setPropertyData}
            saveStep={saveStep3}
            back={back}
            customerType={borrowers[0]?.type}
          />
        )}

        {step === 5 && (
          <FinancingStep
            data={financingData}
            setData={setFinancingData}
            projectData={projectData}
                borrowers={borrowers}      

            customerType={customerType}
            saveStep={saveStep5}
            back={back}
          />
        )}

        {step === 6 && customerType === "direct" && (
          <DirectSummaryStep back={back} saveStep={saveStep6} />
        )}

        {step === 6 && customerType === "partner" && (
          <DocumentsStep
            docs={uploadedDocs}
            setDocs={setUploadedDocs}
            addDocument={addDocument}
            saveStep={saveStep6}
            back={back}
          />
        )}

 {step === 7 && (
  <div className="w-full min-h-screen flex flex-col items-center justify-center -mt-[220px] text-center px-4">
    <h1 className="text-[48px] font-normal leading-tight">
      Vielen Dank, dass Sie das<br />Formular ausgefüllt haben.
    </h1>

    <p className="text-[24px] font-normal mt-4">
      Wir melden uns in Kürze bei Ihnen!
    </p>

    <button
      onClick={() => (window.location.href = "/")}
      className="mt-8 px-6 py-2 h-[32px] flex items-center gap-2 rounded-full 
                 border border-[#132219] text-[#132219] text-[14px] font-medium"
      style={{ backgroundColor: "#CAF476" }}
    >
      Zurück zur Homepage
    </button>
  </div>
)}

      </div>
    </div>
  );
}
