"use client";
import React from "react";

interface TeamMember {
  name: string;
  position?: string;
  image?: string;
  bgColor?: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Marco Circelli", position: "CEO", image: "/images/Marco.png" },
  { name: "Davide Iuorno", position: "Deputy CEO", image: "/images/Davide.png" },
  { name: "Fisnik Salihu", position: "Chief Technology Officer", image: "/images/Fisnik.png" },
  { name: "Alexander von Arx", position: "Head of Business Development", image: "/images/Alexander.png" },

  { name: "Claudio Schneider", position: "Präsident des Verwaltungsrates", image: "/images/Claudio.png" },
  { name: "Christian Neff", position: "Verwaltungsrat", image: "/images/Christian.png" },
  { name: "Cyril Kägi", position: "Initiant und Beirat", image: "/images/Cyril.png" },

  { name: "Christian Wyss", position: "Beirat & Sales Coach", image: "/images/ChrsitianW.png" },
  { name: "Markus Abele", position: "Consultant", image: "/images/Markus.png" },

  {
    name: "HYPOTEQ",
    bgColor: "#CAF476",
    description:
      "Besuchen Sie uns auf LinkedIn, um über unsere neuesten Neuigkeiten, Einblicke und Updates auf dem Laufenden zu bleiben.",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-[120px] bg-white font-sfpro">

      {/* Container with left/right spacing */}
      <div className="w-full max-w-[1579px] px-[20px] lg:px-[116px] mx-auto">

        {/* Title */}
        <h2 className="text-[40px] font-medium text-[#132219] mb-[60px]">
          Management Team
        </h2>

        {/* Grid */}
        <div
          className="
            grid grid-cols-4 gap-x-[40px] gap-y-[80px]
            justify-items-start
            max-xl:grid-cols-3
            max-lg:grid-cols-2
            max-md:grid-cols-1
          "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-[304px] max-lg:w-[260px] max-md:w-full"
            >
              {member.bgColor ? (
                /* Green box */
                <div
                  className="flex flex-col justify-between w-[970px] h-[283px] rounded-[10px]"
                  style={{
                    backgroundColor: "#CAF476",
                    padding: "14px 24px",
                  }}
                >
                  <p className="text-[#132219] text-[32px] leading-[120%] font-normal font-sfpro">
                    {member.description}
                  </p>

          <a
  href="https://www.linkedin.com/company/hypoteq-ag/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-block
    w-fit
    border border-[#132219] rounded-[58px] 
    bg-[#CAF476] text-[#132219]
    transition-all duration-300
    hover:bg-[#dffb9b]
  "
  style={{
    fontSize: "20px",
    lineHeight: "120%",
    padding: "8px 24px",
  }}
>
  Bestes Angebot finden
</a>

                </div>
              ) : (
                /* Image box */
                <div
                  className="rounded-[10px] overflow-hidden w-[304px] h-[283px]"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              )}

        {/* Text + Social icons */}
{!member.bgColor && (
  <div className="mt-4 w-full flex flex-col gap-[10px]">

    {/* Row 1: Name + LinkedIn */}
    <div className="flex items-center justify-between w-full">
      <h3 className="text-[#132219] text-[20px] font-semibold leading-[24px] 
                     border border-black rounded-[42px] px-[12px] py-[4px]">
        {member.name}
      </h3>

      {/* LinkedIn */}
      <button
        className="
          flex justify-center items-center
          w-[42px] h-[42px]
          rounded-full border border-black
          bg-white hover:bg-gray-100 transition
        "
      >
        <img
          src="/images/linkedin.svg"
          alt="LinkedIn"
          className="w-[18px] h-[18px]"
        />
      </button>
    </div>

    {/* Row 2: Position + Email */}
    <div className="flex items-center justify-between w-full">
      <p className="text-[#132219] text-[16px] font-light leading-[22px] 
                    border border-black rounded-[42px] px-[12px] py-[4px]">
        {member.position}
      </p>

      {/* Email */}
      <button
        className="
          flex justify-center items-center
          w-[42px] h-[42px]
          rounded-full border border-black
          bg-white hover:bg-gray-100 transition
        "
      >
        <img
          src="/images/email.svg"
          alt="Email"
          className="w-[18px] h-[18px]"
        />
      </button>
    </div>

  </div>
)}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
