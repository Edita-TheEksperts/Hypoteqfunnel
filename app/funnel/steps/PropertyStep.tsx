"use client";

function PropertyStep({ data, setData, saveStep, back, customerType }: any) {
  const update = (key: string, value: any) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
  };

  const ToggleButton = ({ active, children, onClick, showCircle = false }: any) => {
    return (
      <button
        onClick={onClick}
        className={`
          flex items-center gap-3
          px-6 py-2.5 rounded-full border text-sm transition-all
          ${active
            ? "bg-[#CAF476] border-[#132219] text-[#132219]"
            : "bg-white border-[#C8C8C8] text-[#132219]"}
        `}
        style={{ minHeight: "40px" }}
      >
        {showCircle && <span className="w-4 h-4 rounded-full bg-[#132219]"></span>}
        {children}
      </button>
    );
  };

  const formatCHF = (value: string | number) => {
    if (!value) return "";
    const num = typeof value === "string" ? Number(value.replace(/'/g, "")) : value;
    return num.toLocaleString("de-CH"); // Swiss formatting
  };

  /* ======== OPTIONS ======== */
  const propertyUseOptions =
    customerType === "jur"
      ? ["Rendite-Immobilie", "Für eigenes Geschäft"]
      : [
          "Selbstbewohnt",
          "Rendite-Immobilie",
          "Zweitwohnsitz / Ferienliegenschaft",
          "Vermietet & teilweise selbstbewohnt",
        ];

  return (
    <div className="w-full max-w-[1400px] mx-auto pl-28 space-y-[30px] -mt-10">
      {/* ========================================================= */}
      {/*  ART DER IMMOBILIE                                        */}
      {/* ========================================================= */}
      <div>
        <h3 className="text-[16px] font-semibold mb-[16px]">Art der Immobilie</h3>
        <div className="flex flex-wrap gap-[24px]">
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
        {data.artImmobilie === "neubau" && (
          <div className="flex flex-wrap gap-[24px] mt-[16px]">
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

      {/* ========================================================= */}
      {/*  ART DER LIEGENSCHAFT                                     */}
      {/* ========================================================= */}
      <div>
        <h3 className="text-[16px] font-semibold mb-[16px]">Art der Liegenschaft</h3>
        <div className="flex flex-wrap gap-[24px]">
          {["Einfamilienhaus", "Wohnung", "Mehrfamilienhaus", "Landwirschaftszone"].map(
            (item) => (
              <ToggleButton
                key={item}
                active={data.artLiegenschaft === item}
                onClick={() => update("artLiegenschaft", item)}
              >
                {item}
              </ToggleButton>
            )
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/*  NUTZUNG DER IMMOBILIE                                    */}
      {/* ========================================================= */}
      <div>
        <h3 className="text-[16px] font-semibold mb-[16px]">Nutzung der Immobilie</h3>
        <div className="flex flex-wrap gap-[24px]">
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

      {/* ========================================================= */}
      {/*  RENOVATIONEN                                             */}
      {/* ========================================================= */}
      <div>
        <h3 className="text-[16px] font-semibold mb-[16px]">
          {customerType === "jur"
            ? "Gibt es Renovationen?"
            : "Gibt es Renovationen oder Mehrausgaben über Kaufpreis?"}
        </h3>

        <div className="flex gap-[24px]">
          <ToggleButton
            active={data.renovation === "ja"}
            onClick={() => update("renovation", "ja")}
            showCircle={true}
          >
            Ja
          </ToggleButton>
          <ToggleButton
            active={data.renovation === "nein"}
            onClick={() => update("renovation", "nein")}
            showCircle={true}
          >
            Nein
          </ToggleButton>
        </div>

        {data.renovation === "ja" && (
          <input
            type="text"
            placeholder="Betrag in CHF"
            className="mt-[16px] px-5 py-2 border border-[#C8C8C8] rounded-full w-[260px] text-sm"
            value={data.renovationsBetrag ? `CHF ${formatCHF(data.renovationsBetrag)}` : ""}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/CHF\s?|'/g, "");
              const numericValue = rawValue.replace(/\D/g, "");
              update("renovationsBetrag", numericValue);
            }}
          />
        )}
      </div>

      {/* ========================================================= */}
      {/*  RESERVIERUNG – HIDE FOR JURISTICHE PERSON                */}
      {/* ========================================================= */}
      {customerType !== "jur" && (
        <div>
          <h3 className="text-[16px] font-semibold mb-[16px]">
            Ist die Liegenschaft bereits reserviert?
          </h3>
          <div className="flex gap-[24px]">
            <ToggleButton
              active={data.reserviert === "ja"}
              onClick={() => update("reserviert", "ja")}
              showCircle={true}
            >
              Ja
            </ToggleButton>
            <ToggleButton
              active={data.reserviert === "nein"}
              onClick={() => update("reserviert", "nein")}
              showCircle={true}
            >
              Nein
            </ToggleButton>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/*  FINANZIERUNGSANGEBOTE                                    */}
      {/* ========================================================= */}
      <div>
        <h3 className="text-[16px] font-semibold mb-[16px]">
          Bestehen bereits Finanzierungsangebote?
        </h3>
        <div className="flex gap-[24px]">
          <ToggleButton
            active={data.finanzierungsangebote === "ja"}
            onClick={() => update("finanzierungsangebote", "ja")}
            showCircle={true}
          >
            Ja
          </ToggleButton>
          <ToggleButton
            active={data.finanzierungsangebote === "nein"}
            onClick={() => update("finanzierungsangebote", "nein")}
            showCircle={true}
          >
            Nein
          </ToggleButton>
        </div>
        {data.finanzierungsangebote === "ja" && (
          <div className="grid grid-cols-3 gap-[24px] mt-[16px]">
            <input
              placeholder="Bank"
              className="px-5 py-2 border border-[#C8C8C8] rounded-full text-sm"
              value={data.bank || ""}
              onChange={(e) => update("bank", e.target.value)}
            />
            <input
              placeholder="Zins"
              className="px-5 py-2 border border-[#C8C8C8] rounded-full text-sm"
              value={data.zins || ""}
              onChange={(e) => update("zins", e.target.value)}
            />
            <input
              placeholder="Laufzeit"
              className="px-5 py-2 border border-[#C8C8C8] rounded-full text-sm"
              value={data.laufzeit || ""}
              onChange={(e) => update("laufzeit", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/*  KREDITNEHMER FORM                                        */}
      {/* ========================================================= */}
      <div>
        <h3 className="text-[16px] font-semibold mb-[16px]">
          {customerType === "jur"
            ? "Kreditnehmer (1-6) (bitte alle angeben)"
            : "Angaben zum Kreditnehmer"}
        </h3>

        <div className="space-y-[24px]">
          {data.kreditnehmer.map((kn: any, index: number) => (
            <div key={index} className="flex items-center gap-[16px]">
              <button
                onClick={() => {
                  const updated = [...data.kreditnehmer];
                  updated.splice(
                    index + 1,
                    0,
                    customerType === "jur"
                      ? { firmenname: "" }
                      : {
                          vorname: "",
                          name: "",
                          geburtsdatum: "",
                          beschaeftigung: "",
                          zivilstand: "",
                        }
                  );
                  update("kreditnehmer", updated);
                }}
                className="text-3xl leading-none text-[#132219] mt-[5px]"
              >
                +
              </button>

              {customerType === "jur" ? (
                <div className="w-[260px]">
                  <input
                    type="text"
                    placeholder="Firmenname"
                    className="px-5 py-2 border border-[#132219] rounded-full text-sm w-full"
                    value={kn.firmenname || ""}
                    onChange={(e) => {
                      const updated = [...data.kreditnehmer];
                      updated[index].firmenname = e.target.value;
                      update("kreditnehmer", updated);
                    }}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-6 gap-[16px] flex-1">
                  <input
                    type="text"
                    placeholder="Vorname"
                    className="px-5 py-2 border border-[#132219] rounded-full text-sm"
                    value={kn.vorname}
                    onChange={(e) => {
                      const updated = [...data.kreditnehmer];
                      updated[index].vorname = e.target.value;
                      update("kreditnehmer", updated);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-5 py-2 border border-[#132219] rounded-full text-sm"
                    value={kn.name}
                    onChange={(e) => {
                      const updated = [...data.kreditnehmer];
                      updated[index].name = e.target.value;
                      update("kreditnehmer", updated);
                    }}
                  />
                  <div className="relative w-full">
                    <select
                      className="px-5 py-2 rounded-full text-sm w-full bg-white border border-[#132219] appearance-none pr-10"
                      value={kn.erwerb || ""}
                      onChange={(e) => {
                        const updated = [...data.kreditnehmer];
                        updated[index].erwerb = e.target.value;
                        update("kreditnehmer", updated);
                      }}
                    >
                      <option value="">Erwerbsstatus</option>
                      <option value="angestellt">Angestellt</option>
                      <option value="selbständig">Selbständig</option>
                      <option value="rentner">Rentner</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-b-2 border-[#132219] rotate-45" />
                  </div>
                  <input
                    type="text"
                    placeholder="Geburtsdatum"
                    className="px-5 py-2 border border-[#132219] rounded-full text-sm"
                    value={kn.geburtsdatum || ""}
                    onChange={(e) => {
                      const updated = [...data.kreditnehmer];
                      let val = e.target.value.replace(/\D/g, "");
                      if (val.length >= 5) val = val.replace(/(\d{2})(\d{2})(\d+)/, "$1.$2.$3");
                      else if (val.length >= 3) val = val.replace(/(\d{2})(\d+)/, "$1.$2");
                      updated[index].geburtsdatum = val;
                      update("kreditnehmer", updated);
                    }}
                    onBlur={(e) => {
                      const val = e.target.value;
                      const regex = /^\d{2}\.\d{2}\.\d{4}$/;
                      if (!regex.test(val) && val) console.warn("Ungültiges Datum:", val);
                    }}
                  />
                  <div className="relative w-full">
                    <select
                      className="px-5 py-2 rounded-full text-sm w-full bg-white border border-[#132219] appearance-none pr-10"
                      value={kn.zivilstand}
                      onChange={(e) => {
                        const updated = [...data.kreditnehmer];
                        updated[index].zivilstand = e.target.value;
                        update("kreditnehmer", updated);
                      }}
                    >
                      <option value="">Zivilstand</option>
                      <option value="ledig">Ledig</option>
                      <option value="verheiratet">Verheiratet</option>
                      <option value="geschieden">Geschieden</option>
                      <option value="verwitwet">Verwitwet</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-b-2 border-[#132219] rotate-45" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/*  BUTTONS                                                  */}
      {/* ========================================================= */}
      <div className="flex justify-between mt-10">
        <button onClick={back} className="px-6 py-2 border border-[#132219] rounded-full">
          Zurück
        </button>
        <button onClick={saveStep} className="px-6 py-2 bg-[#CAF476] text-[#132219] rounded-full">
          Weiter
        </button>
      </div>
    </div>
  );
}

export default PropertyStep;
