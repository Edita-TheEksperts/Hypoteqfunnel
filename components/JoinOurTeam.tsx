"use client";

import React from "react";

const jobs = [
  {
    title: "Praktikum / Werkstudent",
    subtext: "Teilzeit (20–50%), Flexibel\nViel lernen, Keine Langeweile",
    description:
      "Tauche ein in die Welt von FinTech, Projekten und Chaos mit System. Du unterstützt unser Team, bringst Struktur in Prozesse und lernst, wie Digitalisierung wirklich funktioniert.",
  },
  {
    title: "Full Stack Developer",
    subtext: "Full-time, Zürich or remote\nStart-up",
    description:
      "Werde Teil unseres Tech-Teams und gestalte mit uns die Zukunft der digitalen Hypothek. Du entwickelst, automatisierst und machst komplexe Dinge einfach – mit Code, Kreativität und Kaffee.",
  },
];

const JoinOurTeam: React.FC = () => {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-[100px] max-md:px-5">
        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2
            className="font-sfpro mb-3 lg:mb-0"
            style={{
              color: "#132219",
              fontFamily: "SF Pro Display",
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: "120%",
              letterSpacing: "-0.4px",
              minWidth: "250px",
            }}
          >
            Werde Teil <br />
            von HYPOTEQ
          </h2>

          <p
            className="font-sfpro lg:max-w-[630px]"
            style={{
              color: "#132219",
              fontFamily: "SF Pro Display",
              fontSize: "24px",
              fontWeight: 300,
              lineHeight: "140%",
            }}
          >
            Finance, Tech, Transparenz und Teamgeist – das ist unser Antrieb.
            Egal ob Sales, Compliance, Capital Market oder Operations: Bei uns
            zählst du, nicht dein Titel. Bewirb dich jetzt und hilf mit, den
            Hypomarkt neu zu definieren.
          </p>
        </div>

        {/* Job Cards */}
        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-start rounded-[10px] border border-black w-full max-md:flex-col transition-all duration-300"
              style={{
                padding: "32px 24px",
                background:
                  hovered === index
                    ? "linear-gradient(270deg, #CAF476 0%, #E3F4BF 100%)"
                    : "#FFF",
                justifyContent: "space-between",
                gap: "32px",
              }}
            >
              {/* LEFT COLUMN */}
              <div
                className="flex flex-col justify-between"
                style={{
                  width: "493px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  className="font-sfpro"
                  style={{
                    color: "#132219",
                    fontFamily: "SF Pro Display",
                    fontSize: "28px",
                    fontWeight: 500,
                    lineHeight: "140%",
                    letterSpacing: "-0.32px",
                  }}
                >
                  {job.title}
                </h3>

                <p
                  className="font-sfpro"
                  style={{
                    color: "#132219",
                    fontFamily: "SF Pro Display",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "140%",
                    marginTop: "auto",
                  }}
                >
                  {job.subtext.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div
                className="flex flex-col justify-between"
                style={{
                  width: "591px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginLeft: "-24px",
                }}
              >
                <p
                  className="font-sfpro"
                  style={{
                    color: "#132219",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "140%",
                    marginBottom: "32px",
                  }}
                >
                  {job.description}
                </p>

                <div className="flex justify-start mt-auto">
                  <button
                    className="font-sfpro"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      border: "1px solid #000",
                      borderRadius: "58px",
                      padding: "8px 24px",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#132219",
                      background: "transparent",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#132219";
                      e.currentTarget.style.color = "#CAF476";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#132219";
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = "scale(0.98)";
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Jetzt bewerben
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
