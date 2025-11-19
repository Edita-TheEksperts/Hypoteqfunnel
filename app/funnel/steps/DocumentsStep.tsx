"use client";
import { v4 as uuidv4 } from "uuid";

import { useFunnelStore } from "@/src/store/funnelStore";

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
    <div className="w-full max-w-[1400px] mx-auto mt-10">

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
export default DocumentsStep;