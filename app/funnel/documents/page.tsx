// app/funnel/financing/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useFunnelStore } from "@/lib/funnelStore";

export default function FinancingStep() {
  const router = useRouter();
  const {
    projectType,
    financingNeu,
    financingAbloesung,
    setFinancingNeu,
    setFinancingAbloesung,
  } = useFunnelStore();

  const handleNext = () => {
    // mund të shtosh validim sipas nevojës
    if (!projectType) return;
    router.push("/funnel/documents");
  };

  if (!projectType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Bitte Projekt zuerst wählen.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-start pt-16 justify-center px-4">
      <div className="max-w-5xl w-full space-y-8">
        <h1 className="text-[36px] font-semibold text-[#132219]">
          Finanzierung – {projectType === "neu" ? "Neukauf" : "Ablösung"}
        </h1>

        {projectType === "neu" ? (
          <>
            {/* Kaufpreis + Eigenmittel */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#132219]">
                  Kaufpreis Immobilie (Betrag)
                </label>
                <input
                  type="text"
                  value={financingNeu.kaufpreis}
                  onChange={(e) =>
                    setFinancingNeu({ kaufpreis: e.target.value })
                  }
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#132219]">
                  Eigenmittel Bar (min. 10%)
                </label>
                <input
                  type="text"
                  value={financingNeu.eigenmittelBar}
                  onChange={(e) =>
                    setFinancingNeu({ eigenmittelBar: e.target.value })
                  }
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#132219]">
                  3. Säule
                </label>
                <input
                  type="text"
                  value={financingNeu.eigenmittelSaeule3}
                  onChange={(e) =>
                    setFinancingNeu({ eigenmittelSaeule3: e.target.value })
                  }
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#132219]">
                  PK
                </label>
                <input
                  type="text"
                  value={financingNeu.eigenmittelPK}
                  onChange={(e) =>
                    setFinancingNeu({ eigenmittelPK: e.target.value })
                  }
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-[#132219]">
                  Andere (Schenkung, usw.)
                </label>
                <input
                  type="text"
                  value={financingNeu.eigenmittelAndere}
                  onChange={(e) =>
                    setFinancingNeu({ eigenmittelAndere: e.target.value })
                  }
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </section>

            {/* PK-Verpfändung + Laufzeit */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-[#132219] mb-1">
                  PK-Verpfändung
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFinancingNeu({ pkVerpfaendung: "ja" })
                    }
                    className={`px-4 py-1 rounded-full border ${
                      financingNeu.pkVerpfaendung === "ja"
                        ? "bg-[#132219] text-white"
                        : "bg-white text-[#132219]"
                    }`}
                  >
                    Ja
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFinancingNeu({ pkVerpfaendung: "nein" })
                    }
                    className={`px-4 py-1 rounded-full border ${
                      financingNeu.pkVerpfaendung === "nein"
                        ? "bg-[#132219] text-white"
                        : "bg-white text-[#132219]"
                    }`}
                  >
                    Nein
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-[#132219] mb-1">
                  Hypothekar-Laufzeiten
                </p>
                <div className="flex flex-wrap gap-2">
                  {["saron", "fest", "mix", "weissnicht"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() =>
                        setFinancingNeu({
                          laufzeit: opt as any,
                        })
                      }
                      className={`px-3 py-1 rounded-full border text-sm ${
                        financingNeu.laufzeit === opt
                          ? "bg-[#132219] text-white"
                          : "bg-white text-[#132219]"
                      }`}
                    >
                      {opt === "saron"
                        ? "Saron"
                        : opt === "fest"
                        ? "Fest"
                        : opt === "mix"
                        ? "Mix"
                        : "Weiss noch nicht"}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Einkommen / Steueroptimierung / Kaufdatum */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#132219]">
                  Einkommen (nur bei Direktkunden)
                </label>
                <input
                  type="text"
                  value={financingNeu.einkommen}
                  onChange={(e) =>
                    setFinancingNeu({ einkommen: e.target.value })
                  }
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-[#132219] mb-1">
                  Steueroptimierte Lösung erwünscht?
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFinancingNeu({ steueroptimiert: "ja" })
                    }
                    className={`px-4 py-1 rounded-full border ${
                      financingNeu.steueroptimiert === "ja"
                        ? "bg-[#132219] text-white"
                        : "bg-white text-[#132219]"
                    }`}
                  >
                    Ja
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFinancingNeu({ steueroptimiert: "nein" })
                    }
                    className={`px-4 py-1 rounded-full border ${
                      financingNeu.steueroptimiert === "nein"
                        ? "bg-[#132219] text-white"
                        : "bg-white text-[#132219]"
                    }`}
                  >
                    Nein
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#132219]">
                  Kaufdatum
                </label>
                <input
                  type="date"
                  value={financingNeu.kaufdatum}
                  onChange={(e) =>
                    setFinancingNeu({ kaufdatum: e.target.value })
                  }
                  className="mt-1 w-full max-w-xs rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-[#132219]">
                  Kommentar
                </label>
                <textarea
                  value={financingNeu.kommentar}
                  onChange={(e) =>
                    setFinancingNeu({ kommentar: e.target.value })
                  }
                  className="mt-1 w-full rounded-2xl border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black min-h-[80px]"
                />
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Ablösung Form */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#132219]">
                  Hypothekarbetrag (aktuell)
                </label>
                <input
                  type="text"
                  value={financingAbloesung.hypothekBetrag}
                  onChange={(e) =>
                    setFinancingAbloesung({
                      hypothekBetrag: e.target.value,
                    })
                  }
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-[#132219] mb-1">
                  Erhöhung der Hypothek?
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFinancingAbloesung({ erhoehung: "ja" })
                    }
                    className={`px-4 py-1 rounded-full border ${
                      financingAbloesung.erhoehung === "ja"
                        ? "bg-[#132219] text-white"
                        : "bg-white text-[#132219]"
                    }`}
                  >
                    Ja
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFinancingAbloesung({ erhoehung: "nein" })
                    }
                    className={`px-4 py-1 rounded-full border ${
                      financingAbloesung.erhoehung === "nein"
                        ? "bg-[#132219] text-white"
                        : "bg-white text-[#132219]"
                    }`}
                  >
                    Nein
                  </button>
                </div>
              </div>

              {financingAbloesung.erhoehung === "ja" && (
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-[#132219]">
                    Erhöhungsbetrag
                  </label>
                  <input
                    type="text"
                    value={financingAbloesung.erhoehungBetrag}
                    onChange={(e) =>
                      setFinancingAbloesung({
                        erhoehungBetrag: e.target.value,
                      })
                    }
                    className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              )}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-[#132219] mb-1">
                  Steueroptimierte Finanzierungslösung?
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFinancingAbloesung({ steueroptimiert: "ja" })
                    }
                    className={`px-4 py-1 rounded-full border ${
                      financingAbloesung.steueroptimiert === "ja"
                        ? "bg-[#132219] text-white"
                        : "bg-white text-[#132219]"
                    }`}
                  >
                    Ja
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFinancingAbloesung({ steueroptimiert: "nein" })
                    }
                    className={`px-4 py-1 rounded-full border ${
                      financingAbloesung.steueroptimiert === "nein"
                        ? "bg-[#132219] text-white"
                        : "bg-white text-[#132219]"
                    }`}
                  >
                    Nein
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#132219]">
                  Ablösedatum
                </label>
                <input
                  type="date"
                  value={financingAbloesung.abloesedatum}
                  onChange={(e) =>
                    setFinancingAbloesung({
                      abloesedatum: e.target.value,
                    })
                  }
                  className="mt-1 w-full max-w-xs rounded-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-[#132219]">
                  Kommentar
                </label>
                <textarea
                  value={financingAbloesung.kommentar}
                  onChange={(e) =>
                    setFinancingAbloesung({
                      kommentar: e.target.value,
                    })
                  }
                  className="mt-1 w-full rounded-2xl border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black min-h-[80px]"
                />
              </div>
            </section>
          </>
        )}

        <div className="pt-6">
          <button
            onClick={handleNext}
            className="px-10 py-3 rounded-full text-white font-medium text-lg bg-[#132219] hover:bg-black transition"
          >
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}
