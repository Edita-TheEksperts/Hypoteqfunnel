"use client";
import { useState } from "react";

export default function AboutSection() {
  const [active, setActive] = useState("mission");

   const buttons = [
    { id: "mission", label: "Unsere Mission" },
    { id: "team", label: "Unser Team" },
    { id: "partners", label: "Unsere Partner" },
    { id: "join", label: "Werde Teil von HYPOTEQ" },
  ];
const handleClick = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };


  return (
    <section className="relative w-full overflow-x-hidden font-sfpro min-h-[500px] sm:min-h-[100vh]">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10 block sm:hidden h-[500px]"
        style={{
          backgroundImage: "url('/images/about-home.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10 hidden sm:block h-full"
        style={{
          backgroundImage: "url('/images/about-home.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className="relative z-10 flex flex-col justify-start h-full w-full mx-auto 
        px-[20px] pt-[70px] gap-[10px]
        sm:max-w-[1579px] sm:px-[118px] sm:pt-[180px]
        max-md:pl-[40px] max-md:pt-[140px]
        max-sm:pt-[120px] max-md:items-center max-md:text-center"
      >
        <div className="flex flex-col max-w-[880px] max-sm:max-w-full">
          <div className="flex flex-col gap-[24px]">
            <h2
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "72px",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "-0.72px",
              }}
              className="text-[#132219] max-md:text-[48px] max-sm:text-[36px]"
            >
              Über uns
            </h2>

            <p className="text-[24px] font-light leading-[1.4] text-[#132219] max-sm:text-[18px]">
              Einfach. Klar. Unabhängig. – Das ist HYPOTEQ.
            </p>
          </div>

          {/* Description */}
          <div className="mt-[55px] max-md:mt-[40px]">
            <p className="text-[24px] font-light leading-[1.4] text-[#132219] max-sm:text-[18px]">
              Wir sind dein Partner für smarte Immobilienfinanzierung in der
              Schweiz. Mit unserer digitalen Plattform erhältst du Zugang zu
              einer Vielzahl geprüfter Finanzierungspartner. Wir helfen dir,
              Hypothekenangebote einfacher zu verstehen und fundierte
              Entscheidungen zu treffen. Mit strukturierten Prozessen und
              persönlichem Support begleiten wir dich durch die wichtigsten
              Schritte deiner Finanzierung. Du behältst den Überblick – wir
              unterstützen im Hintergrund. Keine versteckten Kosten, keine
              Verpflichtung – dafür Transparenz und Effizienz.
            </p>
          </div>
      <div className="flex flex-wrap gap-[10px] mt-[32px] max-md:justify-center">
        {buttons.map((btn) => {
          const isActive = active === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => handleClick(btn.id)}
              className={`border border-[#132219] rounded-[45px] font-semibold text-[20px] 
                transition-all duration-300 px-[24px] py-[8px]
                max-sm:text-[16px] max-sm:px-[18px]
                ${
                  isActive
                    ? "bg-[#CAF476]"
                    : "bg-transparent hover:bg-[#CAF476]/60"
                }`}
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                color: "#132219",
              }}
            >
              {btn.label}
            </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
