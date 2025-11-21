"use client";
import { useState } from "react";

export default function AboutSection() {
  const [active, setActive] = useState("dna");

  const buttons = [
    { id: "dna", label: "Unsere DNA" },
    { id: "team", label: "Unser Team" },
    { id: "partners", label: "Unsere Partner" },
    { id: "join", label: "Werde Teil von HYPOTEQ" },
  ];

  const handleClick = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 120;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-x-hidden font-sfpro h-auto sm:h-[957px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10"
        style={{
          backgroundImage: "url('/images/8329269237.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Content */}
<div
  className="
    relative z-10 w-full
    h-auto md:h-[957px]
    flex flex-col justify-start
    px-[20px] sm:px-[116px]
    pt-[100px] sm:pt-[160px]
    gap-[10px] text-[#132219]
    max-w-[1579px] mx-auto
  "
>

<div className="flex flex-col w-full">

          {/* Heading */}
          <div className="flex flex-col gap-[24px]">
            <h2
              className="
                font-sfpro text-[#fff]
                text-[72px] leading-[100%] font-medium tracking-[-0.02em]
                max-md:text-[48px] max-sm:text-[32px]
              "
            >
              Über uns
            </h2>

            <p className="font-sfpro text-[24px] font-medium leading-[140%] text-[#fff]
              max-sm:text-[18px] max-sm:leading-[150%]">
              Einfach. Klar. Unabhängig. – Das ist HYPOTEQ.
            </p>
          </div>

          {/* Description */}
          <div className="mt-[55px] max-md:mt-[40px]">
            <p
              className="
                font-sfpro text-white text-[24px] font-light leading-[140%]
                max-sm:text-[16px] max-sm:leading-[160%]
                max-sm:text-center max-sm:px-[10px]
              "
            >
              Wir sind dein Partner für smarte Immobilienfinanzierung in der <br />
              Schweiz.<br />
              Mit unserer digitalen Plattform erhältst du Zugang zu einer Vielzahl <br />
              geprüfter Finanzierungspartner.<br />
              Wir helfen dir, Hypothekenangebote einfacher zu verstehen und <br />
              fundierte Entscheidungen zu treffen.<br />
              Mit strukturierten Prozessen und persönlichem Support begleiten wir<br />
              dich durch die wichtigsten Schritte deiner Finanzierung.<br />
              Du behältst den Überblick – wir unterstützen im Hintergrund.<br />
              Keine versteckten Kosten, keine Verpflichtung – dafür Transparenz <br />
              und Effizienz.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-[24px] mt-[32px] max-sm:mt-[-30px]">

            {/* Row 1 */}
            <div className="flex flex-wrap gap-[12px] mt-[46px] justify-center sm:justify-start">
              {buttons.slice(0, 2).map((btn) => {
                const isActive = active === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => handleClick(btn.id)}
                    className={`
                      font-sfpro text-[20px] font-semibold px-[28px] py-[10px]
                      rounded-[45px] border border-[#fff]
                      transition-all duration-300
                      max-sm:text-[16px] max-sm:px-[20px] max-sm:w-full
                      ${
                        isActive
                          ? "bg-[#CAF476] text-[#132219]"
                          : "bg-transparent hover:bg-[#CAF476]/60 text-[#fff]"
                      }
                    `}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-[12px] justify-center sm:justify-start">
              {buttons.slice(2).map((btn) => {
                const isActive = active === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => handleClick(btn.id)}
                    className={`
                      font-sfpro text-[20px] font-semibold px-[28px] py-[10px]
                      rounded-[45px] border border-[#fff]
                      transition-all duration-300
                      max-sm:text-[16px] max-sm:px-[20px] max-sm:w-full
                      ${
                        isActive
                          ? "bg-[#CAF476] text-[#132219]"
                          : "bg-transparent hover:bg-[#CAF476]/60 text-[#fff]"
                      }
                    `}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
