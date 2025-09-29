"use client";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function YourBenefits() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 32 },
    loop: true,
  });

  const cards = [
    {
      img: "/images/benefit1.png",
      title: "Quick access to the best offer",

    },
    {
      img: "/images/benefit2.png",
      title: "Transparency",
    },
    {
      img: "/images/benefit3.png",
      title: "Easy home Ownership",
    },
  ];

  return (
    <section className="w-full px-[116px] py-[100px] bg-white">
      {/* Header */}
      <div className="flex items-start gap-[164px] mb-[75px]">
        <h2
          className="w-[483px] font-sfpro text-[#132219] font-bold"
          style={{ fontSize: "48px", lineHeight: "50px" }}
        >
          Your Benefits
        </h2>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="keen-slider__slide relative flex flex-col justify-end w-[4325px] h-[760px] rounded-[10px] overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={card.img}
              alt={card.title}
              fill
        className="object-cover object-[center_5%] rounded-[10px]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[10px]" />

            {/* Text + Arrow */}
            <div className="relative z-10 flex justify-between items-center w-full px-[32px] pb-[32px]">
              <p className="text-white font-sfpro text-[24px] font-medium">
                {card.title}
              </p>
              {/* Figma arrow */}
       <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M9 6L15 12L9 18"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
