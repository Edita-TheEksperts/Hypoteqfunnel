"use client";
import { useState, useEffect } from "react";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "next/navigation";
import FunnelCalc from "@/components/funnelCalc";
import { useFunnelStore } from "@/src/store/funnelStore";


// ======================================================
// ZUSTAND STORE — GLOBAL FUNNEL DATA
// ======================================================
interface FunnelState {
  customerType: "direct" | "partner" | null;
  client: any;
  project: any;
  property: any;
  borrowers: any[];
  financing: any;
  documents: any[];

  setCustomerType: (type: "direct" | "partner") => void;
  setClient: (data: any) => void;
  setProject: (data: any) => void;
  setProperty: (data: any) => void;
  setBorrowers: (data: any[]) => void;
  setFinancing: (data: any) => void;
  addDocument: (file: any) => void;
}




// ======================================================
// MAIN FUNNEL WIZARD PAGE
// ======================================================
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
      params.get("customer") ||
      params.get("customerType") ||
      null;

    if (!customerType) {
      if (urlType === "direct" || urlType === "partner") {
        setCustomerType(urlType);
      }
    }
  }, [customerType, setCustomerType]);

  // -------------------------
  // STEP NAVIGATION
  // -------------------------
  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(1, s - 1));
  // Local State
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
// -----------------------------
// DOCUMENTS FOR NEU KAUF + JUR
// -----------------------------

const documentsForNeuKaufJur = [
  {
    title: "Basic Information",
    items: [
      "HYRTEQ-Formular",
      "Handelsregisterauszug",
      "Pass oder Identitätskarte der zeichnungsberechtigten Person",
      "Jahresabschlüsse",
      "Aktuelle Zwischenbilanz",
      "Aktueller Betreibungsauszug",
      "Aktuelle Steuererklärung",
      "Aufstellung und Nachweis der Eigenmittel",
      "Aktuelle Steuererklärung (inkl. Schulden-, Wertschriften-, Liegenschaftsverzeichnis)",
    ],
  },

  {
    title: "Bei Neubau",
    items: [
      "Verkaufsdokumentation inkl. Fotos des Innen- und Aussenbereichs",
      "Bau-/Grundrisspläne inkl. Nettowohnfläche, Raumhöhe, Dachform, Bodenbeläge, Baubeschrieb",
      "Aktueller Grundbuchauszug falls vorhanden",
      "Kaufvertrag (Entwurf/original) oder/und Renovationsvertrag",
      "Falls nicht, Kubatur m3",
      "Aktuelle Gebäudeversicherungspolice (inkl. Kubatur in m3), falls bereits vorhanden",
    ],
  },

  {
    title: "Bei Ablösung",
    items: [
      "Baubeschrieb (inkl. Fotos des Innen- und Aussenbereichs)",
      "Bau-/Grundrisspläne inkl. Nettowohnfläche, Raumhöhe, Dachform, Bodenbeläge, Baubeschrieb",
      "Aktueller Grundbuchauszug (nicht älter als 6 Monate)",
      "Aktueller Hypothekarvertrag (bei Ablösung der Hypothek)",
    ],
  },

  {
    title: "Bei Stockwerkeigentum",
    items: [
      "Stockwerkeigentum-Begründungsakt mit Wertquotenaufteilung",
      "Nutzungs- und Verwaltungsreglement der STWE-Gemeinschaft",
      "Bei Stockwerkeigentum: Angaben über den Erneuerungsfonds",
    ],
  },

  {
    title: "Bei Andere Eigentümer",
    items: [
      "Schenkungsvertrag",
      "Darlehensvertrag",
      "Erbschaftsvertrag",
    ],
  },

  {
    title: "Bei Bauprojekt, Bei Renovation",
    items: [
      "Baubewilligung",
      "Projektplan, Baubeschrieb und Bauhandwerkerverzeichnis (inkl. Kostenvoranschlag und Kubatur)",
    ],
  },
];
// -------------------------------------
// SELECT CORRECT DOCUMENT SET
// -------------------------------------


  const [uploadedDocs, setUploadedDocs] = useState<any[]>([]);

  // Save Actions for each step
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
  // ruajtja në backend nëse e përdor
  setStep(7);   // Shko tek faqja e falënderimit
};


  return (
    <div className="w-full min-h-screen bg-white p-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <p className="text-gray-600 mb-12">Schritt {step} von 6</p>

        {/* STEPS */}
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

        {/* STEP 3 — KREDITNEHMER (Nat / Jur) */}
        {step === 3 && (
          <BorrowersStep
            borrowers={borrowers}
            setBorrowers={setLocalBorrowers}
            saveStep={saveStep4}
            back={back}
          />
        )}

        {/* STEP 4 — IMMOBILIENANGABEN */}
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
            customerType={customerType}
            saveStep={saveStep5}
            back={back}
          />
        )}
        

{step === 6 && customerType === "direct" && (
  <DirectSummaryStep back={back} saveStep={saveStep6} />
)}


        {/* STEP 6 — DOCUMENTS UPLOAD for Partner */}
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
  <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">

    {/* Titulli i madh */}
    <h1
      className="text-[48px] font-normal leading-tight"
      style={{ fontFamily: "SF Pro Display" }}
    >
      Vielen Dank, dass Sie das<br />Formular ausgefüllt haben.
    </h1>

    {/* Teksti i vogël */}
    <p
      className="text-[24px] font-normal mt-4"
      style={{ fontFamily: "SF Pro Display" }}
    >
      Wir melden uns in Kürze bei Ihnen!
    </p>

    {/* Butoni */}
    <button
      onClick={() => (window.location.href = "/")}
      className="mt-8 px-6 py-2 h-[32px] flex items-center gap-2 rounded-full 
                 border border-[#132219] text-[#132219] text-[14px] font-medium"
      style={{ 
        backgroundColor: "#CAF476",
        fontFamily: "SF Pro Display",
        paddingLeft: "24px",
        paddingRight: "24px"
      }}
    >
      Zurück zur Homepage
    </button>
  </div>
)}

      </div>
    </div>
  );
}

function StartStep({
  customerType,
  setCustomerType,
  clientData,
  setClientData,
  saveStep,
}: any) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2">
        Starten Sie Ihre Hypothekanfrage
      </h2>
      <p className="text-gray-600 mb-10">
        Teilen Sie uns ein paar Basisdaten mit, damit wir Ihr Angebot
        vorbereiten können.
      </p>

      {/* Direct & Partner Customer Form */}
      {(customerType === "direct" || customerType === "partner") && (
        <>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm text-gray-700">Vorname</label>
              <input
                className="w-full mt-1 border rounded-full px-4 py-2"
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
              <label className="text-sm text-gray-700">Nachname</label>
              <input
                className="w-full mt-1 border rounded-full px-4 py-2"
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

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm text-gray-700">Email Adresse</label>
              <input
                className="w-full mt-1 border rounded-full px-4 py-2"
                value={customerType === "partner" ? clientData.partnerEmail : clientData.email}
                onChange={(e) =>
                  setClientData((p: any) => ({
                    ...p,
                    [customerType === "partner" ? "partnerEmail" : "email"]: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">PLZ Code</label>
              <input
                className="w-full mt-1 border rounded-full px-4 py-2"
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

          {/* SWITCH BETWEEN PARTNER AND DIRECT */}
          {customerType === "direct" ? (
            <p className="text-sm text-gray-600 mb-4">
              Sind Sie Partner?{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => setCustomerType("partner")}
              >
                Hier klicken
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600 mb-4">
              Kein Partner?{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => setCustomerType("direct")}
              >
                Als direkter Kunde fortfahren
              </span>
            </p>
          )}

          <button
            onClick={saveStep}
            className="px-6 py-2 bg-lime-400 rounded-full float-right"
          >
            Weiter
          </button>
        </>
      )}

      {/* Default view: Ask user to choose customer type */}
      {!customerType && (
        <div className="flex gap-6 mt-6">
          <button
            onClick={() => setCustomerType("direct")}
            className="px-6 py-3 bg-gray-200 rounded-full"
          >
            Direktkunde
          </button>

          <button
            onClick={() => setCustomerType("partner")}
            className="px-6 py-3 bg-gray-200 rounded-full"
          >
            Vertriebspartner
          </button>
        </div>
      )}
    </div>
  );
}

// ======================================================
// STEP 2 — ProjectStep (Neu Kauf / Ablösung)
// ======================================================
function ProjectStep({ data, setData, saveStep, customerType }: any) {
  const selectCard = (value: string) => {
    setData((p: any) => ({ ...p, projektArt: value }));
    saveStep(); // AUTOSAVE + NEXT STEP
  };

  // Tekstet sipas customerType
  const title =
    customerType === "partner"
      ? "Welches Projekt hat Ihr Kunde?"
      : "Was ist Ihr Projekt?";

  const subtitle =
    customerType === "partner"
      ? "Bitte wählen Sie die Projektart für Ihren Kunden."
      : "Beschreiben Sie die Art Ihres Projekts.";

  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* TITULLI */}
      <h2 className="text-[48px] font-semibold text-[#132219] mb-3">
        {title}
      </h2>

      <p className="text-[24px] text-[#132219]/80 mb-12">
        {subtitle}
      </p>

      {/* KARTAT */}
      <div className="grid grid-cols-2 gap-8 mb-12">

        {/* KAUF */}
        <div
          onClick={() => selectCard("kauf")}
          className={`
            flex flex-col 
            bg-[#C6C5C5] 
            rounded-[10px]
            px-6 py-4
            cursor-pointer 
            gap-[47px]
            border
            ${data.projektArt === "kauf" ? "border-black" : "border-transparent"}
          `}
        >
          <img src="/images/88  (1).svg" className="w-[55px] h-[38px]" />

          <div className="flex flex-col w-full">
            <p className="text-[24px] text-[#132219] font-normal">Neu (Kauf)</p>
            <div className="w-full h-[0.5px] bg-black mt-2"></div>
          </div>
        </div>

        {/* ABLÖSUNG */}
        <div
          onClick={() => selectCard("abloesung")}
          className={`
            flex flex-col 
            bg-[#C6C5C5] 
            rounded-[10px]
            px-6 py-4
            cursor-pointer 
            gap-[47px]
            border
            ${data.projektArt === "abloesung" ? "border-black" : "border-transparent"}
          `}
        >
          <img src="/images/88  (2).svg" className="w-[55px] h-[38px]" />

          <div className="flex flex-col w-full">
            <p className="text-[24px] text-[#132219] font-normal">Ablösung</p>
            <div className="w-full h-[0.5px] bg-black mt-2"></div>
          </div>
        </div>
      </div>

      {/* NO BUTTONS */}
    </div>
  );
}



function PropertyStep({ data, setData, saveStep, back, customerType }: any) {
  const update = (key: string, value: any) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
  };

  const ToggleButton = ({ active, children, onClick }: any) => (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full border font-medium transition 
      ${active ? "bg-gray-400 text-black border-black" : "bg-white"} `}
    >
      {children}
    </button>
  );

  // Property use options based on customer type
  const propertyUseOptions = customerType === "jur"
    ? ["Rendite-Immobilie", "Für eigenes Geschäft"]  // Juristische Person: Only two options
    : [
        "Selbstbewohnt",
        "Rendite-Immobilie",
        "Zweitwohnsitz / Ferienliegenschaft",
        "Vermietet & teilweise selbstbewohnt",
      ]; // Direct/Partner customers: All options

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {/* ================================
          ART DER IMMOBILIE
      ================================= */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Art der Immobilie</h3>
        <div className="flex flex-wrap gap-4">
          <ToggleButton
            active={data.artImmobilie === "bestehend"}
            onClick={() => update("artImmobilie", "bestehend")}
          >
            Bestehende Immobilie
          </ToggleButton>
          <ToggleButton
            active={data.artImmobilie === "neubau"}
            onClick={() => update("artImmobilie", "neubau")}
          >
            Neubau
          </ToggleButton>
        </div>

        {/* SHOW OPTIONS ONLY IF NEUBAU */}
        {data.artImmobilie === "neubau" && (
          <div className="flex flex-wrap gap-4 mt-4">
            <ToggleButton
              active={data.neubauArt === "bereits_erstellt"}
              onClick={() => update("neubauArt", "bereits_erstellt")}
            >
              Bereits erstellt
            </ToggleButton>
            <ToggleButton
              active={data.neubauArt === "bauprojekt"}
              onClick={() => update("neubauArt", "bauprojekt")}
            >
              Bauprojekt
            </ToggleButton>
          </div>
        )}
      </div>

      {/* ================================
          ART DER LIEGENSCHAFT
      ================================= */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Art der Liegenschaft</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "Einfamilienhaus",
            "Wohnung",
            "Mehrfamilienhaus",
            "Mischliegenschaft",
          ].map((item) => (
            <ToggleButton
              key={item}
              active={data.artLiegenschaft === item}
              onClick={() => update("artLiegenschaft", item)}
            >
              {item}
            </ToggleButton>
          ))}
        </div>
      </div>

      {/* ================================
          NUTZUNG DER IMMOBILIE
      ================================= */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Nutzung der Immobilie</h3>
        <div className="flex flex-wrap gap-4">
          {propertyUseOptions.map((item) => (
            <ToggleButton
              key={item}
              active={data.nutzung === item}
              onClick={() => update("nutzung", item)}
            >
              {item}
            </ToggleButton>
          ))}
        </div>
      </div>

      {/* ================================
          RENOVATIONEN
      ================================= */}
      <div>
        <h3 className="text-xl font-semibold">
          Gibt es Renovationen oder Mehrausgaben über Kaufpreis?
        </h3>
        <div className="flex gap-4 mt-3">
          <ToggleButton
            active={data.renovation === "ja"}
            onClick={() => update("renovation", "ja")}
          >
            Ja
          </ToggleButton>
          <ToggleButton
            active={data.renovation === "nein"}
            onClick={() => update("renovation", "nein")}
          >
            Nein
          </ToggleButton>
        </div>
        {data.renovation === "ja" && (
          <input
            type="number"
            placeholder="Betrag in CHF"
            className="mt-4 px-6 py-3 border rounded-full w-full"
            value={data.renovationsBetrag || ""}
            onChange={(e) => update("renovationsBetrag", e.target.value)}
          />
        )}
      </div>

      {/* ================================
          RESERVIERT
      ================================= */}
      <div>
        <h3 className="text-xl font-semibold">
          Ist die Liegenschaft bereits reserviert?
        </h3>
        <div className="flex gap-4 mt-3">
          <ToggleButton
            active={data.reserviert === "ja"}
            onClick={() => update("reserviert", "ja")}
          >
            Ja
          </ToggleButton>
          <ToggleButton
            active={data.reserviert === "nein"}
            onClick={() => update("reserviert", "nein")}
          >
            Nein
          </ToggleButton>
        </div>
      </div>

      {/* ================================
          FINANZIERUNGSANGEBOTE
      ================================= */}
      <div>
        <h3 className="text-xl font-semibold">
          Bestehen bereits Finanzierungsangebote?
        </h3>
        <div className="flex gap-4 mt-3">
          <ToggleButton
            active={data.finanzierungsangebote === "ja"}
            onClick={() => update("finanzierungsangebote", "ja")}
          >
            Ja
          </ToggleButton>
          <ToggleButton
            active={data.finanzierungsangebote === "nein"}
            onClick={() => update("finanzierungsangebote", "nein")}
          >
            Nein
          </ToggleButton>
        </div>

        {data.finanzierungsangebote === "ja" && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            <input
              placeholder="Bank"
              className="px-6 py-3 border rounded-full"
              value={data.bank || ""}
              onChange={(e) => update("bank", e.target.value)}
            />
            <input
              placeholder="Zins"
              className="px-6 py-3 border rounded-full"
              value={data.zins || ""}
              onChange={(e) => update("zins", e.target.value)}
            />
            <input
              placeholder="Laufzeit"
              className="px-6 py-3 border rounded-full"
              value={data.laufzeit || ""}
              onChange={(e) => update("laufzeit", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* ================================
          KREDITNEHMER INFORMATIONEN
      ================================= */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">
          {customerType === "jur"
            ? "Kreditnehmer (1–6) (bitte alle angeben)"
            : "Angaben zum Kreditnehmer"}
        </h3>

        {data.kreditnehmer?.map((row: any, index: number) => (
          <div key={index} className="flex items-center gap-4 mb-6">
            {/* + BUTTON */}
            <button
              className="w-6 h-6 rounded-full border border-[#132219] flex items-center justify-center text-[#132219] text-xl"
              onClick={() =>
                update("kreditnehmer", [
                  ...data.kreditnehmer,
                  customerType === "jur"
                    ? { firmenname: "" }
                    : {
                        vorname: "",
                        name: "",
                        geburtsdatum: "",
                        status: "Angestellt",
                      }
                ])
              }
            >
              +
            </button>

            {/* JURISTISCHE PERSON */}
            {customerType === "jur" ? (
              <input
                placeholder="Firmenname"
                className="px-6 py-3 border rounded-full w-80"
                value={row.firmenname || ""}
                onChange={(e) => {
                  const arr = [...data.kreditnehmer];
                  arr[index].firmenname = e.target.value;
                  update("kreditnehmer", arr);
                }}
              />
            ) : (
              <>
                {/* NATÜRLICHE PERSON */}
                <input
                  placeholder="Vorname"
                  className="px-6 py-3 border rounded-full w-40"
                  value={row.vorname}
                  onChange={(e) => {
                    const arr = [...data.kreditnehmer];
                    arr[index].vorname = e.target.value;
                    update("kreditnehmer", arr);
                  }}
                />

                <input
                  placeholder="Name"
                  className="px-6 py-3 border rounded-full w-40"
                  value={row.name}
                  onChange={(e) => {
                    const arr = [...data.kreditnehmer];
                    arr[index].name = e.target.value;
                    update("kreditnehmer", arr);
                  }}
                />

                <input
                  type="date"
                  className="px-6 py-3 border rounded-full w-44"
                  value={row.geburtsdatum}
                  onChange={(e) => {
                    const arr = [...data.kreditnehmer];
                    arr[index].geburtsdatum = e.target.value;
                    update("kreditnehmer", arr);
                  }}
                />

                <div className="flex gap-3">
                  {["Angestellt", "Selbstständig", "Zivilstand"].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        const arr = [...data.kreditnehmer];
                        arr[index].status = status;
                        update("kreditnehmer", arr);
                      }}
                      className={`px-5 h-10 rounded-full border text-sm transition
                        ${row.status === status
                          ? "bg-[#132219] text-white border-[#132219]"
                          : "bg-white text-[#132219] border-[#132219]"}`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between mt-12">
        <button onClick={back} className="px-6 py-2 bg-gray-200 rounded-full">
          Zurück
        </button>
        <button
          onClick={saveStep}
          className="px-6 py-2 bg-black text-white rounded-full"
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// ======================================================
// STEP 4 — BorrowersStep (ONLY CHOICE NAT / JUR)
// ======================================================

function BorrowersStep({ borrowers, setBorrowers, saveStep, back }: any) {
  const selectType = (type: "nat" | "jur") => {
    // Keep 1 borrower only
    setBorrowers([
      {
        id: borrowers[0]?.id || uuidv4(),
        type: type,
      }
    ]);

    // Auto continue
    setTimeout(() => {
      saveStep();
    }, 200); 
  };

  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* TITULLI */}
      <h2 className="text-[48px] font-semibold text-[#132219] mb-3">
        Kreditnehmer
      </h2>

      <p className="text-[24px] text-[#132219]/80 mb-12">
        Tell us about the nature of your project
      </p>

      {/* TWO CLICKABLE CARDS */}
      <div className="grid grid-cols-2 gap-8 mb-12">

        {/* NATÜRLICHE PERSON */}
        <div
          onClick={() => selectType("nat")}
          className={`
            flex flex-col bg-[#C6C5C5]
            rounded-[10px] px-6 py-6 cursor-pointer gap-[47px] border
            transition-all duration-200
            ${
              borrowers[0]?.type === "nat"
                ? "border-black scale-[1.02]"
                : "border-transparent hover:border-black/40 hover:scale-[1.02]"
            }
          `}
        >
          <img src="/images/88  (1).svg" className="w-[55px] h-[38px]" />

          <div className="flex flex-col w-full">
            <p className="text-[24px] text-[#132219] font-normal">
              Natürliche Person
            </p>
            <div className="w-full h-[0.5px] bg-black mt-2"></div>
          </div>
        </div>

        {/* JURISTISCHE PERSON */}
        <div
          onClick={() => selectType("jur")}
          className={`
            flex flex-col bg-[#C6C5C5]
            rounded-[10px] px-6 py-6 cursor-pointer gap-[47px] border
            transition-all duration-200
            ${
              borrowers[0]?.type === "jur"
                ? "border-black scale-[1.02]"
                : "border-transparent hover:border-black/40 hover:scale-[1.02]"
            }
          `}
        >
          <img src="/images/88  (2).svg" className="w-[55px] h-[38px]" />

          <div className="flex flex-col w-full">
            <p className="text-[24px] text-[#132219] font-normal">
              Juristische Person
            </p>
            <div className="w-full h-[0.5px] bg-black mt-2"></div>
          </div>
        </div>
      </div>

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


// ======================================================
// STEP 5 — FinancingStep (Neu Kauf / Ablösung)
// ======================================================
function FinancingStep({
  data,
  setData,
  projectData,
  customerType,
  saveStep,
  back,
}: any) {
  const isKauf = projectData.projektArt === "kauf";
  const isAblösung = projectData.projektArt === "abloesung";

  // CALCULATE DIFFERENCE
  const kaufpreis = parseFloat(data.kaufpreis || "0");
  const eigenmittel =
    parseFloat(data.eigenmittel_bar || "0") +
    parseFloat(data.eigenmittel_saeule3 || "0") +
    parseFloat(data.eigenmittel_pk || "0") +
    parseFloat(data.eigenmittel_schenkung || "0");

  const hypothekarbetrag = Math.max(kaufpreis - eigenmittel, 0);

  const handleChange = (key: string, value: any) => {
    setData((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Finanzierung</h2>

      {/* ============================== */}
      {/* NEUKAUF SECTION */}
      {/* ============================== */}
{isKauf && (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* LEFT SIDE — FORM */}
    <div className="space-y-10">

      {/* TITLE */}
      <h1 className="text-4xl font-semibold mb-6">Kauf</h1>

      {/* Kaufpreis */}
      <div>
        <label className="font-medium">Kaufpreis Immobilie</label>
        <input
          type="number"
          placeholder="Betrag"
          className="w-full mt-2 border px-6 py-3 rounded-full"
          value={data.kaufpreis || ""}
          onChange={(e) => handleChange("kaufpreis", e.target.value)}
        />
      </div>

      {/* Eigenmittel */}
      <div>
        <label className="font-medium">Eigenmittel</label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <input
            type="number"
            placeholder="Bar"
            className="border px-6 py-3 rounded-full"
            value={data.eigenmittel_bar || ""}
            onChange={(e) => handleChange("eigenmittel_bar", e.target.value)}
          />

          <input
            type="number"
            placeholder="3 Säule"
            className="border px-6 py-3 rounded-full"
            value={data.eigenmittel_saeule3 || ""}
            onChange={(e) =>
              handleChange("eigenmittel_saeule3", e.target.value)
            }
          />

          <input
            type="number"
            placeholder="PK: Betrag"
            className="border px-6 py-3 rounded-full"
            value={data.eigenmittel_pk || ""}
            onChange={(e) => handleChange("eigenmittel_pk", e.target.value)}
          />

          <input
            type="number"
            placeholder="Schenkung, usw"
            className="border px-6 py-3 rounded-full"
            value={data.eigenmittel_schenkung || ""}
            onChange={(e) =>
              handleChange("eigenmittel_schenkung", e.target.value)
            }
          />
        </div>
      </div>

      {/* PK-Verpfändung */}
      <div>
        <label className="font-medium">PK-Verpfändung</label>
        <div className="flex gap-4 mt-3">
          {["Ja", "Nein"].map((opt) => (
            <button
              key={opt}
              onClick={() => handleChange("pkVorbezug", opt)}
              className={`px-6 py-3 rounded-full border 
                ${
                  data.pkVorbezug === opt
                    ? "bg-[#132219] text-white border-[#132219]"
                    : "bg-white text-[#132219] border-[#132219]"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Hypothekarzeiten */}
      <div>
        <label className="font-medium">Hypothekaraufzeiten</label>
        <select
          className="w-full mt-3 border px-6 py-3 rounded-full"
          value={data.modell || ""}
          onChange={(e) => handleChange("modell", e.target.value)}
        >
          <option value="">Saron</option>
          <option value="saron">Saron</option>
          <option value="fest">Fest</option>
          <option value="mix">Mix</option>
        </select>
      </div>

      {/* Einkommen */}
      <div>
        <label className="font-medium">Einkommen</label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">

          <input
            placeholder="Brutto-Haushaltseinkommen"
            className="border px-6 py-3 rounded-full"
            value={data.brutto || ""}
            onChange={(e) => handleChange("brutto", e.target.value)}
          />

          <input
            placeholder="Bonus (Durchschnitt der letzten 3 Jahre)"
            className="border px-6 py-3 rounded-full"
            value={data.bonus || ""}
            onChange={(e) => handleChange("bonus", e.target.value)}
          />
        </div>
      </div>

      {/* Steueroptimierung */}
      <div>
        <label className="font-medium">
          Interessiert an einer steueroptimierten Finanzierungslösung?
        </label>

        <div className="flex gap-4 mt-3">
          {["Ja", "Nein"].map((opt) => (
            <button
              key={opt}
              onClick={() => handleChange("steueroptimierung", opt)}
              className={`px-6 py-3 rounded-full border 
                ${
                  data.steueroptimierung === opt
                    ? "bg-[#132219] text-white border-[#132219]"
                    : "bg-white text-[#132219] border-[#132219]"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Kaufdatum */}
      <div>
        <label className="font-medium">Kaufdatum</label>
        <input
          type="date"
          className="w-full mt-2 border px-6 py-3 rounded-full"
          value={data.kaufdatum || ""}
          onChange={(e) => handleChange("kaufdatum", e.target.value)}
        />
      </div>

      {/* Kommentar */}
      <div>
        <label className="font-medium">Kommentar</label>
        <textarea
          className="w-full mt-2 border px-6 py-3 rounded-2xl"
          rows={4}
          value={data.kommentar || ""}
          onChange={(e) => handleChange("kommentar", e.target.value)}
        />
      </div>

    </div>

 <div className="w-full h-full">
<FunnelCalc data={data} />

</div>

  </div>
)}

{isAblösung && (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* LEFT SIDE — FORM */}
    <div className="space-y-10">

      {/* TITLE */}
      <h1 className="text-4xl font-semibold mb-6">Ablösung</h1>

      {/* Hypothekarbetrag */}
      <div>
        <label className="font-medium">Hypothekarbetrag</label>
        <input
          type="number"
          placeholder="Betrag"
          className="w-full mt-2 border px-6 py-3 rounded-full"
          value={data.abloesung_betrag || ""}
          onChange={(e) =>
            handleChange("abloesung_betrag", e.target.value)
          }
        />
      </div>

      {/* Erhöhung */}
      <div>
        <label className="font-medium">Erhöhung der Hypothek?</label>

        <div className="flex gap-4 mt-3">
          {["Ja", "Nein"].map((opt) => (
            <button
              key={opt}
              onClick={() => handleChange("erhoehung", opt)}
              className={`px-6 py-3 rounded-full border
                ${
                  data.erhoehung === opt
                    ? "bg-[#132219] text-white border-[#132219]"
                    : "bg-white text-[#132219] border-[#132219]"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {data.erhoehung === "Ja" && (
          <input
            type="number"
            placeholder="85,000 CHF"
            className="w-full mt-4 border px-6 py-3 rounded-full"
            value={data.erhoehung_betrag || ""}
            onChange={(e) =>
              handleChange("erhoehung_betrag", e.target.value)
            }
          />
        )}
      </div>

      {/* Steueroptimierung */}
      <div>
        <label className="font-medium">
          Interessiert an einer steueroptimierten Finanzierungslösung?
        </label>

        <div className="flex gap-4 mt-3">
          {["Ja", "Nein"].map((opt) => (
            <button
              key={opt}
              onClick={() => handleChange("steueroptimierung", opt)}
              className={`px-6 py-3 rounded-full border
                ${
                  data.steueroptimierung === opt
                    ? "bg-[#132219] text-white border-[#132219]"
                    : "bg-white text-[#132219] border-[#132219]"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Kaufdatum */}
      <div>
        <label className="font-medium">Kaufdatum</label>
        <input
          type="date"
          className="w-full mt-2 border px-6 py-3 rounded-full"
          value={data.abloesedatum || ""}
          onChange={(e) => handleChange("abloesedatum", e.target.value)}
        />
      </div>

      {/* Kommentar */}
      <div>
        <label className="font-medium">Kommentar</label>
        <textarea
          className="w-full mt-2 border px-6 py-3 rounded-2xl"
          rows={4}
          placeholder="Kommentar"
          value={data.kommentar || ""}
          onChange={(e) => handleChange("kommentar", e.target.value)}
        />
      </div>

    </div>

<div className="w-full h-full">
 <FunnelCalc data={data} />

</div>

  </div>
)}

      {/* Navigation */}
      <div className="flex justify-between mt-12">
        <button onClick={back} className="px-6 py-2 bg-gray-200 rounded-full">
          Zurück
        </button>

      <button
          onClick={saveStep}
          className="px-6 py-2 bg-black text-white rounded-full"
        >
          Weiter
        </button>
      </div>
    </div>
  );
}
function DirectSummaryStep({ back, saveStep }: any) {
  const { client, project, property, borrowers, financing } = useFunnelStore();

  const format = (v: any) => (v ? v : "—");
  const CHF = (v: any) =>
    v ? `${parseFloat(v).toLocaleString("de-CH")} CHF` : "—";

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">

      {/* TITLE */}
      <h2 className="text-3xl font-semibold mb-6">Kalkulator / Zusammenfassung</h2>

      {/* ================================
          ALLGEMEINES
      =================================*/}
      <section>
        <h3 className="text-xl font-semibold mb-4">Allgemeines</h3>

        <div className="grid grid-cols-2 gap-y-3">
          <p>Was ist Ihr Projekt?</p>
          <p className="font-medium">
            {project.projektArt === "kauf" ? "Neu Kauf" : "Ablösung"}
          </p>

          <p>Kreditnehmer</p>
          <p className="font-medium">
            {borrowers[0]?.type === "jur"
              ? "Juristische Person"
              : "Natürliche Person"}
          </p>
        </div>
      </section>

      {/* ================================
          FINANZIERUNG / PROPERTY
      =================================*/}
      <section>
        <h3 className="text-xl font-semibold mb-4">Finanzierung</h3>

        <div className="grid grid-cols-2 gap-y-3">

          <p>Art der Immobilie</p>
          <p className="font-medium">{format(property.neubauArt || property.artImmobilie)}</p>

          <p>Art der Liegenschaft</p>
          <p className="font-medium">{format(property.artLiegenschaft)}</p>

          <p>Nutzung der Immobilie</p>
          <p className="font-medium">{format(property.nutzung)}</p>

          <p>Renovationen</p>
          <p className="font-medium">
            {property.renovation === "ja"
              ? `Ja, ${CHF(property.renovationsBetrag)}`
              : "Nein"}
          </p>

          <p>Ist die Liegenschaft reserviert?</p>
          <p className="font-medium">
            {property.reserviert === "ja" ? "Ja" : "Nein"}
          </p>

          <p>Bestehen Finanzierungsangebote?</p>
          <p className="font-medium">
            {property.finanzierungsangebote === "ja"
              ? `Ja, ${property.bank}, ${property.zins}%, ${property.laufzeit}`
              : "Nein"}
          </p>

          <p>Angaben zum Kreditnehmer</p>
          <p className="font-medium">
            {property.kreditnehmer
              .map((k: any) =>
                borrowers[0]?.type === "jur"
                  ? k.firmenname
                  : `${k.vorname} ${k.name}, ${k.geburtsdatum}, ${k.status}`
              )
              .join("; ")}
          </p>
        </div>
      </section>

      {/* ================================
          FINANZIERUNGSZUSAMMENFASSUNG
      =================================*/}
      <section>
        <h3 className="text-xl font-semibold mb-4">Kalkulator / Zusammenfassung</h3>

        <div className="grid grid-cols-2 gap-y-3">

          <p>Kaufpreis Immobilie</p>
          <p className="font-medium">{CHF(financing.kaufpreis)}</p>

          <p>Eigenmittel</p>
          <p className="font-medium">
            {[
              financing.eigenmittel_bar &&
                `CHF ${parseFloat(financing.eigenmittel_bar).toLocaleString("de-CH")}`,
              financing.eigenmittel_saeule3 &&
                `CHF ${parseFloat(financing.eigenmittel_saeule3).toLocaleString("de-CH")}`,
              financing.eigenmittel_pk &&
                `CHF ${parseFloat(financing.eigenmittel_pk).toLocaleString("de-CH")}`,
              financing.eigenmittel_schenkung &&
                `CHF ${parseFloat(financing.eigenmittel_schenkung).toLocaleString("de-CH")}`,
            ]
              .filter(Boolean)
              .join(", ")}
          </p>

          <p>PK-Verpfändung</p>
          <p className="font-medium">{format(financing.pkVorbezug)}</p>

          <p>Hypothekaraufzeiten</p>
          <p className="font-medium">{format(financing.modell)}</p>

          <p>Einkommen</p>
          <p className="font-medium">
            {CHF(financing.brutto)}{financing.bonus ? " + Bonus" : ""}
          </p>

          <p>Steueroptimierte Finanzierung?</p>
          <p className="font-medium">{format(financing.steueroptimierung)}</p>

          <p>Kaufdatum</p>
          <p className="font-medium">{format(financing.kaufdatum)}</p>

          <p>Kommentar</p>
          <p className="font-medium">{format(financing.kommentar)}</p>
        </div>
      </section>

      {/* BUTTONS */}
      <div className="flex justify-between mt-10">
        <button onClick={back} className="px-6 py-2 bg-gray-200 rounded-full">
          Zurück
        </button>

        <button
          onClick={saveStep}
          className="px-6 py-2 bg-lime-400 rounded-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function DocumentsStep({ docs, setDocs, addDocument, saveStep, back }: any) {
  const { borrowers, project } = useFunnelStore();

  // -----------------------------
  // DOCUMENTS FOR NEU KAUF + JUR
  // -----------------------------
  const documentsForNeuKaufJur = [
    {
      title: "Basic Information",
      items: [
        "HYRTEQ-Formular",
        "Handelsregisterauszug",
        "Pass oder Identitätskarte der zeichnungsberechtigten Person",
        "Jahresabschlüsse",
        "Aktuelle Zwischenbilanz",
        "Aktueller Betreibungsauszug",
        "Aktuelle Steuererklärung",
        "Aufstellung und Nachweis der Eigenmittel",
        "Aktuelle Steuererklärung (inkl. Schulden-, Wertschriften-, Liegenschaftsverzeichnis)",
      ],
    },

    {
      title: "Bei Neubau",
      items: [
        "Verkaufsdokumentation inkl. Fotos des Innen- und Aussenbereichs",
        "Bau-/Grundrisspläne inkl. Nettowohnfläche, Raumhöhe, Dachform, Bodenbeläge, Baubeschrieb",
        "Aktueller Grundbuchauszug falls vorhanden",
        "Kaufvertrag (Entwurf/original) oder/und Renovationsvertrag",
        "Falls nicht, Kubatur m3",
        "Aktuelle Gebäudeversicherungspolice (inkl. Kubatur in m3), falls bereits vorhanden",
      ],
    },

    {
      title: "Bei Ablösung",
      items: [
        "Baubeschrieb (inkl. Fotos des Innen- und Aussenbereichs)",
        "Bau-/Grundrisspläne inkl. Nettowohnfläche, Raumhöhe, Dachform, Bodenbeläge, Baubeschrieb",
        "Aktueller Grundbuchauszug (nicht älter als 6 Monate)",
        "Aktueller Hypothekarvertrag (bei Ablösung der Hypothek)",
      ],
    },

    {
      title: "Bei Stockwerkeigentum",
      items: [
        "Stockwerkeigentum-Begründungsakt mit Wertquotenaufteilung",
        "Nutzungs- und Verwaltungsreglement der STWE-Gemeinschaft",
        "Bei Stockwerkeigentum: Angaben über den Erneuerungsfonds",
      ],
    },

    {
      title: "Bei Andere Eigentümer",
      items: [
        "Schenkungsvertrag",
        "Darlehensvertrag",
        "Erbschaftsvertrag",
      ],
    },

    {
      title: "Bei Bauprojekt, Bei Renovation",
      items: [
        "Baubewilligung",
        "Projektplan, Baubeschrieb und Bauhandwerkerverzeichnis (inkl. Kostenvoranschlag und Kubatur)",
      ],
    },
  ];


  // -----------------------------
  // DEFAULT SECTIONS (Nat. Person)
  // -----------------------------
  const sections = [
    {
      title: "Basic Information",
      items: [
        "Hypotheke Formular",
        "Pass, Identitätskarte, Aufenthaltsbewilligung",
        "Aktuelle Aufstellung und Nachweis der Eigenmittel",
        "Aktuelle Steuererklärung",
      ],
    },

    {
      title: "Bei Angestellten",
      items: [
        "Bei unselbständiger Erwerbstätigkeit: Aktueller Lohnausweis",
        "Pensionskassenausweis und Rückkaufswerte von der 3. Säule",
      ],
    },

    {
      title: "Bei Selbständig",
      items: [
        "Aktueller Lohnausweis",
        "Pensionskassenausweis und Rückkaufswerte von der 3. Säule",
      ],
    },

    {
      title: "Bei Rentner:",
      items: ["Rentenbescheinigung (PK, AHV)"],
    },

    {
      title: "Ab 50 Jahre Alter der Kreditnehmer",
      items: [
        "Rentenansprechung (AHV)",
        "Pensionskassenausweis und Rückkaufswerte von der 3. Säule",
      ],
    },

    {
      title: "Bei Neubau:",
      items: [
        "Verkaufsdokumentation",
        "Bau-/Grundrisspläne inkl. Nettowohnfläche, Raumhöhe, Deckenform, Bodenbeläge, Baubeschrieb",
        "Kaufvertrag",
        "Aktuelle Gebäudeversicherungspolice (inkl. Kubatur in m3)",
        "Falls nicht, Kubatur m3",
        "Aktueller Grundbuchauszug falls vorhanden",
      ],
    },

    {
      title: "Falls reserviert:",
      items: ["Reservationsvertrag", "Bankauszug Reservationszahlung"],
    },

    {
      title: "Bei Renditeobjekt:",
      items: ["Aktueller Mieterspiegel inkl. Mietzinsaufstellung"],
    },

    {
      title: "Bei Ablösung:",
      items: [
        "Bauschein",
        "Bau-/Grundrisspläne inkl. Nettowohnfläche, Raumhöhe, Deckenform, Bodenbeläge, Baubeschrieb",
        "Aktueller Grundbuchauszug (nicht älter als 6 Monate)",
        "Aktuelle Hypothekenrechnung (bei Ablösung der Hypothek)",
      ],
    },

    {
      title: "Bei Stockwerkeigentum:",
      items: [
        "Stockwerkeigentum-Besitzungsausweis mit Wertzuwachsbewertung",
        "Nutzungs- und Verwaltungsreglement der STWE-Gemeinschaft",
        "Protokolle STWEG-Versammlungen + Angaben über den Erneuerungsfonds",
      ],
    },

    {
      title: "Bei Andere Eigentümer:",
      items: ["Schenkungsvertrag", "Darlehensvertrag", "Erbschaftsbestätigung"],
    },

    {
      title: "Bei Bauprojekt, Bei Renovation",
      items: [
        "Bauvorlage",
        "Projektpläne, Baubeschrieb und Bauherrenwerkvertrag inkl. Kostenzusammenzug und Kubatur",
      ],
    },
  ];


  // -----------------------------
  // SELECT CORRECT DOCUMENT SET
  // -----------------------------
  const isNeuKaufJur =
    project?.projektArt === "kauf" &&
    (borrowers ?? []).some((b: any) => b.type === "jur");

  const selectedDocuments = isNeuKaufJur
    ? documentsForNeuKaufJur
    : sections;


  // -----------------------------
  // UPLOAD FILE HANDLER
  // -----------------------------
  const handleUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newDoc = {
      id: uuidv4(),
      name: file.name,
      size: file.size,
      file,
    };

    setDocs((prev: any[]) => [...prev, newDoc]);
    addDocument(newDoc);
  };

const toggleDocument = (docName: string) => {
  const exists = docs.find((d: any) => d.name === docName);

  if (exists) {
    // remove
    setDocs((prev: any[]) => prev.filter((d) => d.name !== docName));
  } else {
    // add placeholder (pa file, vetëm për checked state)
    const newDoc = {
      id: uuidv4(),
      name: docName,
      size: 0,
      file: null,
    };

    setDocs((prev: any[]) => [...prev, newDoc]);
  }
};

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">

      <h1 className="text-center text-2xl font-semibold mb-8">
        Upload Documents
      </h1>

      {/* UPLOAD BOX */}
      <div className="border border-[#D6E8C6] bg-[#F7FBF2] rounded-xl p-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="text-5xl">⬆️</div>

          <p className="text-lg font-medium">
            Choose a file or drag & drop it here
          </p>
          <p className="text-sm text-gray-500">
            txt, docx, pdf, jpeg, xlsx – Up to 50MB
          </p>

          <label className="cursor-pointer">
            <input type="file" className="hidden" onChange={handleUpload} />
            <div className="bg-black text-white px-6 py-2 rounded-full mt-3">
              Browse Files
            </div>
          </label>
        </div>
      </div>
{/* DOCUMENT LISTS */}
<div className="mt-14 space-y-10">
  {selectedDocuments.map((s, index) => (
    <div key={index}>
      <h4 className="text-lg font-semibold mb-medium">{s.title}</h4>

      <div className="grid w-full grid-cols-1 gap-medium md:grid-cols-3">
        {s.items.map((doc: string, idx: number) => {
          const saved = !!docs.find((d: any) => d.name === doc);

          return (
            <div
              key={idx}
              onClick={() => toggleDocument(doc)}   // 🔥 CHECK / UNCHECK
              className={`flex items-center justify-between h-[40px] px-4
                          border rounded-full cursor-pointer transition
                          ${saved ? "bg-[#EAF7D8] border-[#CAF476]" : "bg-white border-[#132219]"}`}
            >
              <span className="text-sm text-[#132219]">
                {doc}
              </span>

              {/* CHECK ICON */}
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full border 
                            ${saved ? "border-[#132219]" : "border-gray-300"}`}
              >
                {saved && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-[#132219]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>



      {/* BUTTONS */}
      <div className="flex justify-between mt-14 mb-20">
        <button onClick={back} className="px-6 py-2 bg-gray-100 rounded-full">
          Zurück
        </button>

        <button
          onClick={saveStep}
          className="px-8 py-2 bg-[#CAF476] rounded-full font-medium text-[#132219]"
        >
          Weiter
        </button>
      </div>
    </div>
  );
}
