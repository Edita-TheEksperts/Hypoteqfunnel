"use client";
import Image from "next/image";

const strategieCards = [
  {
    img: "/images/rectangle22.png",
    title: "Simple",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    bg: "#CAF476", 
  },
  {
    img: "/images/Rectangle1.png",
    title: "Swift",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bg: "#6DA9FF", // blue
  },
  {
    img: "/images/22.png",
    title: "Smart",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bg: "#C4F6EF", // light green
  },
  {
    img: "/images/13.png",
    title: "Scalable",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bg: "#BDE0FF", // light blue
  },
];

export default function Strategie() {
  return (
    <section className="w-full px-[116px] py-[100px] bg-white font-sfpro ">
      {/* Header */}
      <div className="flex items-start justify-between mb-[75px]">
        <h2 className="font-bold text-[#132219] text-[48px] leading-[50px]">
          4 Strategie
        </h2>
        <p className="w-[766px] font-sfpro text-[#656565] ml-[155px] text-[24px] font-medium leading-[32px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-[15px] mb-[155px] ">
        {strategieCards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-[10px] overflow-hidden shadow-md"
          >
            {/* Top Section with background image + color */}
            <div
              className="h-[454px] w-full bg-cover bg-center"
              style={{
                backgroundColor: card.bg,
                backgroundImage: `url(${card.img})`,
              }}
            />

            {/* Bottom Content */}
            <div className="bg-[#132219] text-white flex flex-col gap-[16px] p-[24px] h-[304px]">
              <h3 className="text-[24px] font-bold">{card.title}</h3>
              <p className="text-[14px] font-normal leading-[20px]">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
