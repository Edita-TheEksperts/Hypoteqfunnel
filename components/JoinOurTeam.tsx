'use client';

import React from "react";

const jobs = [
  {
    title: "Loan Officer",
    description:
      "Join our growing mortgage advisory team and help clients find the best financing solutions for their homes. You’ll guide borrowers through each step—from pre-approval to closing",
    tags: ["Competitive salary", "Full Time", "Training", "Commission/OTE"],
    highlight: true,
  },
  {
    title: "Loan Processor",
    description:
      "Own the file from application to clear-to-close. Collect and verify documents, clear conditions, and coordinate appraisals, title, and disclosures—keeping borrowers informed at every step. Organized multitaskers with great communication welcome.",
    tags: ["Competitive salary", "Full Time", "Training", "Commission/OTE"],
    highlight: false,
  },
  {
    title: "Pricing Analyst",
    description:
      "Set daily pricing, manage locks and concessions, and monitor pipeline risk. Analyze market movements and support execution strategies that optimize margins while staying customer-centric. Excel/SQL skills a plus.",
    tags: ["Competitive salary", "Full Time", "Training", "Commission/OTE"],
    highlight: false,
  },
];

const filters = ["Sales", "Compliance", "Capital Market", "Operations"];

const JoinOurTeam: React.FC = () => {
  return (
    <section className="py-20 bg-white">
<div className="w-full px-[100px]">

        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-sfpro mb-3"
            style={{
              color: "#132219",
              fontFamily: "SF Pro Display",
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: "120%",
              letterSpacing: "-0.4px",
            }}
          >
            Join Our Team!
          </h2>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-2">
            <p
              className="font-sfpro max-w-lg"
              style={{
                color: "#132219",
                fontFamily: "SF Pro Display",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "140%",
              }}
            >
              We’re always looking for motivated people who share our passion
              for transparency, technology.
            </p>
<div className="flex flex-wrap gap-[17px]">
  {filters.map((f, index) => (
    <button
      key={index}
      className={`font-sfpro flex items-center justify-center gap-[10px] rounded-[58px] border ${
        f === "Sales"
          ? "bg-[#132219] text-white border-[#132219]"
          : "text-[#132219] border-[#132219] hover:bg-gray-100"
      }`}
      style={{
        padding: "8px 24px",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "normal",
        transition: "0.3s ease",
      }}
      onMouseEnter={(e) => {
        if (f !== "Sales") {
          e.currentTarget.style.background = "#132219";
          e.currentTarget.style.color = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        if (f !== "Sales") {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#132219";
        }
      }}
    >
      {f}
    </button>
  ))}
</div>

          </div>
        </div>

        {/* Job Cards */}
        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex justify-between items-start rounded-[10px] border border-black w-full"
              style={{
                background: job.highlight
                  ? "linear-gradient(270deg, #CAF476 0%, #E3F4BF 100%)"
                  : "#FFF",
                padding: "16px 15px 16px 16px",
          minHeight: "fit-content",

              }}
            >
      {/* Kolona Majtas */}
<div className="flex flex-col justify-start w-[40%]">
  <h3
    className="font-sfpro"
    style={{
      color: "#132219",
      fontFamily: "SF Pro Display",
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "140%",
      letterSpacing: "-0.32px",
      marginBottom: "12px",
    }}
  >
    {job.title}
  </h3>

  <div className="flex flex-wrap gap-[10px]">
    {job.tags.map((tag, i) => (
      <span
        key={i}
        className="font-sfpro"
        style={{
          color: "#132219",
          fontFamily: "SF Pro Display",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "normal",
          border: "1px solid #132219",
          borderRadius: "58px",
          padding: "8px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {tag}
      </span>
    ))}
  </div>
</div>


              {/* Kolona Djathtas */}
           <div className="flex flex-col justify-between w-[55%]" style={{ minHeight: "100%" }}>
  <p
    className="font-sfpro"
    style={{
      color: "#132219",
      fontSize: "24px",
      fontWeight: 300,
      lineHeight: "140%",
      marginBottom: "24px", // shton pak hapësirë midis tekstit dhe butonit
    }}
  >
    {job.description}
  </p>

  <div className="flex justify-end mt-auto">
    <button
      className="font-sfpro"
      style={{
        border: "1px solid #000",
        borderRadius: "58px",
        padding: "8px 24px",
        fontSize: "20px",
        fontWeight: 600,
        color: "#132219",
        background: "transparent",
        transition: "0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#132219";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "#132219";
      }}
    >
      Apply now
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
