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
  { name: "Rosanna Mancina", position: "Key Account Manager", image: "/images/Rosanna.png" },
  { name: "Christian Neff", position: "Verwaltungsrat", image: "/images/Christian.png" },
  { name: "Cyril Kägi", position: "Initiant und Beirat", image: "/images/Cyril.png" },

  { name: "Christian Wyss", position: "Beirat & Sales Coach", image: "/images/ChrsitianW.png" },
  { name: "Dren Haxha", position: "Key Account Manager", image: "/images/Dren.png" },
  { name: "Markus Abele", position: "Consultant", image: "/images/Markus.png" },
  {
    name: "HYPOTEQ",
    bgColor: "#CAF476",
    description:
      "Visit us on LinkedIn to stay informed with our latest news, insights, and updates.",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-white font-sfpro">
   <div className="w-full max-w-[1320px] px-4 md:px-6 lg:px-4">

        <h2 className="text-[40px] font-medium text-[#132219] mb-10">Team</h2>

        <div
          className="
            grid grid-cols-4 gap-x-8 gap-y-20 justify-items-center
            max-xl:grid-cols-3
            max-lg:grid-cols-2
            max-md:grid-cols-1
          "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-start 
              w-[304px] 
              max-lg:w-[260px]
              max-md:w-full"
            >
              {/* ✅ Conditional box rendering */}
              {member.bgColor ? (
                // Green box
                <div
                  className="flex flex-col justify-between items-start w-[304px] h-[283px] rounded-[10px]"
                  style={{
                    backgroundColor: "#CAF476",
                    padding: "14px 24px",
                  }}
                >
                  <p
                    className="text-[#132219]"
                    style={{
                      fontFamily: '"SF Pro Display", sans-serif',
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "120%",
                    }}
                  >
                    {member.description}
                  </p>

                  <button
                    className="border border-[#132219] rounded-[58px] bg-[#CAF476] text-[#132219] transition-all duration-300 hover:bg-[#dffb9b]"
                    style={{
                      fontFamily: '"SF Pro Display", sans-serif',
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "120%",
                      padding: "8px 24px",
                    }}
                  >
                    Find my best offer
                  </button>
                </div>
              ) : (
                // Standard team member box
                <div
                  className="rounded-[10px] overflow-hidden bg-gray-100 w-[304px] h-[283px]"
                  style={{
                    backgroundImage: member.image
                      ? `url(${member.image})`
                      : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}

              {/* Text and icons under the box */}
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
                      <img
                        src="/images/linkedin.svg"
                        alt="LinkedIn"
                        className="w-[16px] h-[16px]"
                      />
                    </button>
                    <button className="flex justify-center items-center w-[34px] h-[28px] border border-black rounded-[10px] bg-white hover:bg-gray-100">
                      <img
                        src="/images/email.svg"
                        alt="Email"
                        className="w-[16px] h-[14px]"
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
