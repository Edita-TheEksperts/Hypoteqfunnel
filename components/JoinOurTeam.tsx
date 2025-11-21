"use client";

import React from "react";

const jobs = [
  {
    title: "Praktikum / Werkstudent:int",
    subtext: "Teilzeit (20–50%), Flexibel\nViel lernen, Keine Langeweile",
    description:
      "Tauche ein in die Welt von FinTech, Projekten und Chaos mit System. Du unterstützt unser Team, bringst Struktur in Prozesse und lernst, wie Digitalisierung wirklich funktioniert.",
  },
  {
    title: "Full Stack Developer",
    subtext: "Vollzeit, Zürich oder Remote\nStart Up",
    description:
      "Werde Teil unseres Tech-Teams und gestalte mit uns die Zukunft der digitalen Hypothek. Du entwickelst, automatisierst und machst komplexe Dinge einfach – mit Code, Kreativität und Kaffee.",
  },
];

const JoinOurTeam: React.FC = () => {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  // detect mobile
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 bg-white">
      {/* MAIN CONTAINER WITH 116PX SIDE SPACING */}
      <div className="w-full max-w-[1579px] mx-auto px-[20px] md:px-[116px]">

        {/* HEADER */}
        <div className="mb-16 flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* Left title */}
          <h2
            style={{
              color: "#132219",
              fontFamily: "SF Pro Display",
              fontSize: isMobile ? "32px" : "40px",
              fontWeight: 500,
              lineHeight: "120%",
              letterSpacing: "-0.4px",
            }}
          >
            Werde Teil <br /> von HYPOTEQ
          </h2>

          {/* Right paragraph */}
          <p
            style={{
              color: "#132219",
              fontFamily: "SF Pro Display",
              fontSize: isMobile ? "18px" : "24px",
              fontWeight: 400,
              lineHeight: "140%",
              maxWidth: "628px", // EXACT LIKE FIGMA
            }}
          >
            Finance, Tech, Transparenz und Teamgeist – das ist unser Antrieb.
            Egal ob Sales, Compliance, Capital Market oder Operations: Bei uns
            zählst du, nicht dein Titel.
            <br />
            Bewirb dich jetzt und hilf mit, den Hypomarkt neu zu definieren.
          </p>
        </div>

        {/* JOB CARDS */}
        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="flex rounded-[10px] border border-[#132219] w-full transition-all duration-300 flex-wrap"
              style={{
                padding: isMobile ? "20px" : "24px",
                background:
                  hovered === index
                    ? "linear-gradient(270deg, #CAF476 0%, #E0F4BF 100%)"
                    : "#FFFFFF",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "16px" : "32px",
                justifyContent: "space-between",
              }}
            >
              {/* LEFT SIDE */}
              <div
                style={{
                  width: isMobile ? "100%" : "493px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    fontFamily: "SF Pro Display",
                    color: "#132219",
                    fontSize: isMobile ? "20px" : "28px",
                    fontWeight: 500,
                    lineHeight: "140%",
                  }}
                >
                  {job.title}
                </h3>

                <p
                  style={{
                    fontFamily: "SF Pro Display",
                    color: "#132219",
                    fontSize: isMobile ? "14px" : "20px",
                    fontWeight: 400,
                    lineHeight: "140%",
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

              {/* RIGHT SIDE */}
              <div
                style={{
                  width: isMobile ? "100%" : "591px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontFamily: "SF Pro Display",
                    color: "#132219",
                    fontSize: isMobile ? "14px" : "20px",
                    fontWeight: 400,
                    lineHeight: "140%",
                    marginBottom: isMobile ? "16px" : "32px",
                  }}
                >
                  {job.description}
                </p>
<a
  href="https://www.linkedin.com/company/hypoteq-ag/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ width: "100%" }}
>
  <button
    className="font-sfpro"
    style={{
      width: "100%",
      alignSelf: "stretch",
      textAlign: "center",
      border: "1px solid #000",
      borderRadius: "58px",
      padding: isMobile ? "6px 16px" : "8px 24px",
      fontSize: isMobile ? "14px" : "20px",
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
</a>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
