import React from "react";

interface TeamMember {
  name: string;
  position?: string;
  image?: string;
  bgColor?: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Markus Abele", position: "CEO", image: "/images/Markus.png" },
  { name: "Marco Circelli", position: "Chief Credit Officer", image: "/images/Marco.png" },
  { name: "Davide Iuorno", position: "CMO", image: "/images/Davide.png" },
  { name: "Christian Wyss", position: "Beirat & Sales Coach", image: "/images/ChrsitianW.png" },
  { name: "Cyril Kägi", position: "Initiant und Beirat", image: "/images/Cyril.png" },
  { name: "Christian Neff", position: "Verwaltungsrat", image: "/images/Christian.png" },
  { name: "Marco Patera", position: "Key Account Manager", image: "/images/MarcoP.png" },
  { name: "Fisnik Salihu", position: "Chief Technology Officer", image: "/images/Fisnik.png" },
  { name: "Claudio Schneider", position: "Präsident des Verwaltungsrates", image: "/images/Claudio.png" },
  { name: "Alexander von Arx", position: "Head Business Development", image: "/images/Alexander.png" },
  {
    name: "HYPOTEQ",
    bgColor: "#CAF476",
    description:
      "We’ve built Hypoteq to earn your trust: transparent comparisons, expert guidance, and bank partnerships that open real options. Your data stays secure, and your goals drive every recommendation. Clear rates, clear steps — no surprises.",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-white font-sfpro">
      <div className="w-full max-w-[1320px] px-8">
        <h2 className="text-[40px] font-medium text-[#132219] mb-10">Team</h2>

        {/* ✅ Responsive grid */}
        <div className="
          grid grid-cols-4 gap-x-8 gap-y-20 justify-items-center
          max-xl:grid-cols-3
          max-lg:grid-cols-2
          max-md:grid-cols-1
        ">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-start 
              w-[304px] 
              max-lg:w-[260px]
              max-md:w-full
            ">
              
              {/* ✅ Box responsive width */}
<div
  className={`
    rounded-[10px] overflow-hidden
    ${member.bgColor ? "border-2 border-[#132219]" : "bg-gray-100"}
    ${member.bgColor ? "w-full md:w-[627px]" : "w-full md:w-[304px]"}
  `}
  style={{
    height: "283px",
    backgroundColor: member.bgColor,
    backgroundImage: member.image ? `url(${member.image})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: member.bgColor ? "flex" : undefined,
    flexDirection: member.bgColor ? "column" : undefined,
    alignItems: member.bgColor ? "flex-start" : undefined,
    padding: member.bgColor ? "23.552px 24px" : undefined,
    gap: member.bgColor ? "7.36px" : undefined,
  }}
>

                {member.bgColor && (
                  <>
                    <h3 className="text-[#132219] font-semibold text-[20px] mb-6">
                      {member.name}
                    </h3>

                    <p className="text-[#132219] text-[18px] font-light leading-[150%] text-justify">
                      {member.description}
                    </p>
                  </>
                )}
              </div>

              {!member.bgColor && (
                <div className="mt-4 w-full flex items-start justify-between">
                  <div className="flex flex-col items-start">
                    <h3 className="inline-flex items-center justify-center text-[#132219] text-[20px] font-bold border border-black rounded-[42px] px-[12px] py-[4px] leading-[24px]">
                      {member.name}
                    </h3>
                    <p className="inline-flex items-center justify-center text-[#132219] text-[16px] border border-black rounded-[42px] px-[12px] py-[4px] mt-[10px] leading-[22px] font-light">
                      {member.position}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-[10px] mt-1">
                    <button className="flex justify-center items-center w-[34px] h-[34px] border border-black rounded-full bg-white hover:bg-gray-100">
                      <img src="/images/linkedin.svg" alt="LinkedIn" className="w-[16px] h-[16px]" />
                    </button>
                    <button className="flex justify-center items-center w-[34px] h-[28px] border border-black rounded-[10px] bg-white hover:bg-gray-100">
                      <img src="/images/email.svg" alt="Email" className="w-[16px] h-[14px]" />
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
