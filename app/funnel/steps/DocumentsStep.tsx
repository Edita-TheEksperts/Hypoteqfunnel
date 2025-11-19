"use client";
import { v4 as uuidv4 } from "uuid";

import { useFunnelStore } from "@/src/store/funnelStore";


function DocumentsStep({ borrowers, docs, setDocs, addDocument, saveStep, back }: any) {
  const { project } = useFunnelStore();


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
  }
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
      "Aktueller Lohnausweis",
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
    title: "Bei Rentner",
    items: [
      "Rentenbescheinigung (PK, AHV)",
    ],
  },

  {
    title: "Ab 50 Jahre Alter der Kreditnehmer",
    items: [
      "Rentenansprechung (AHV)",
      "Pensionskassenausweis und Rückkaufswerte von der 3. Säule",
    ],
  },

  {
    title: "Bei Neubau",
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
    title: "Falls reserviert",
    items: [
      "Reservationsvertrag",
      "Bankauszug Reservationszahlung",
    ],
  },

  {
    title: "Bei Renditeobjekt",
    items: [
      "Aktueller Mieterspiegel inkl. Mietzinsaufstellung",
    ],
  },

  {
    title: "Bei Ablösung",
    items: [
      "Bauschein",
      "Bau-/Grundrisspläne inkl. Nettowohnfläche, Raumhöhe, Deckenform, Bodenbeläge, Baubeschrieb",
      "Aktueller Grundbuchauszug (nicht älter als 6 Monate)",
      "Aktuelle Hypothekenrechnung (bei Ablösung der Hypothek)",
    ],
  },

  {
    title: "Bei Stockwerkeigentum",
    items: [
      "Stockwerkeigentum-Besitzungsausweis mit Wertzuwachsbewertung",
      "Nutzungs- und Verwaltungsreglement der STWE-Gemeinschaft",
      "Protokolle STWEG-Versammlungen + Angaben über den Erneuerungsfonds",
    ],
  },

  {
    title: "Bei Andere Eigentümer",
    items: [
      "Schenkungsvertrag",
      "Darlehensvertrag",
      "Erbschaftsbestätigung",
    ],
  },

  {
    title: "Bei Bauprojekt, Bei Renovation",
    items: [
      "Bauvorlage",
      "Projektpläne, Baubeschrieb und Bauherrenwerkvertrag inkl. Kostenzusammenzug und Kubatur",
    ],
  },
];
const isJur = (borrowers ?? []).some((b: any) => b.type === "jur");

const selectedDocuments = isJur
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
  <div className="w-full flex justify-center pb-3 -mt-16 font-sfpro">

    <div className="w-full max-w-[1100px]">

      {/* HEADER AREA */}
      <div className="text-center mb-14">
        <h1 className="text-[38px] font-semibold text-[#132219] tracking-tight">
         Upload Documents
        </h1>

      </div>

      {/* UPLOAD CARD */}
<div className="
  bg-[#CAF4761A] shadow-md rounded-3xl p-12 
  border border-[#E6E6E6]
  flex flex-col items-center gap-5 mb-16
">


    <div className="w-20 h-20  rounded-full flex items-center justify-center shadow-md">
  <img 
    src="/images/upload.svg" 
    alt="Upload" 
    className="w-10 h-10"
  />
</div>


        <h2 className="text-[22px] font-semibold text-[#132219]">
          Datei auswählen oder hier ablegen
        </h2>

        <p className="text-gray-500 text-[15px]">
          PDF, DOCX, XLSX, JPG – bis zu 50MB
        </p>

        <label className="cursor-pointer mt-3">
          <input type="file" className="hidden" onChange={handleUpload} />
          <div className="bg-[#132219] text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-black">
            Browse Files
          </div>
          
        </label>

<p className="text-gray-500 mt-3 text-[16px] leading-relaxed text-center">
       Upload your documents in one place and use the checkboxes <br/>
to keep track of what you’ve already uploaded (Optional)
        </p>
      </div>

      {/* SECTION LIST */}
      <div className="space-y-16">

        {selectedDocuments.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-3xl p-10 border border-[#F0F0F0]"
          >
            {/* SECTION HEADER */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[22px] font-semibold text-[#132219] tracking-tight">
                {section.title}
              </h3>

              <div className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center shadow-inner">
                <span className="text-lg opacity-70">📄</span>
              </div>
            </div>

            {/* DOCUMENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {section.items.map((doc, idx) => {
                const saved = docs.some((d) => d.name === doc);

                return (
                  <div
                    key={idx}
                    onClick={() => toggleDocument(doc)}
                    className={`
                      flex items-center justify-between
                      px-6 py-4 cursor-pointer rounded-2xl
                      shadow-sm border transition-all  

                      ${
                        saved
                          ? "bg-[#EAF7D8] border-[#CAEBAA]"
                          : "bg-[#FAFAFA] border-[#E4E4E4] hover:bg-[#F2F2F2]"
                      }
                    `}
                  >
                    <span className="text-[15px] text-[#132219] leading-tight">
                      {doc}
                    </span>

                    {/* CHECK CIRCLE */}
                    <div
                      className={`
                        w-6 h-6 rounded-full flex items-center justify-center
                        ${saved ? "bg-[#CAF476] border-[#132219]" : "bg-white border-gray-300"}
                        border transition
                      `}
                    >
                      {saved && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-[#132219]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
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

      {/* FOOTER BUTTONS */}
      <div className="flex justify-between mt-20">
        
        <button
          onClick={back}
          className="px-8 py-3 rounded-full border border-[#132219] text-[#132219] hover:bg-[#F7F7F7]"
        >
          Zurück
        </button>

        <button
          onClick={saveStep}
          className="px-10 py-3 bg-[#CAF476] rounded-full font-medium text-[#132219] shadow hover:bg-[#BCDF6A]"
        >
          Weiter
        </button>

      </div>
    </div>
  </div>
);

}

export default DocumentsStep;
