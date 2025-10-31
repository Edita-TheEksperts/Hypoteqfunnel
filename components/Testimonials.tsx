"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anna Schmidt",
    date: "07.10.2025",
    image: "/images/testimonial-1.svg",
    text: "The team made everything simple from the start. They helped me understand my options and find a mortgage that actually fit my budget.",
  },
  {
    id: 2,
    name: "Martin Müller",
    date: "19.4.2023",
    image: "/images/testimonial-2.svg",
    text: "I wasn’t sure where to begin, but their experts guided me through every step. The advice was clear, personal, and saved me valuable time.",
  },
  {
    id: 3,
    name: "Clara Wagner",
    date: "09.12.2025",
    image: "/images/testimonial-3.svg",
    text: "Thanks to their support, I finally understood the full costs and felt confident moving forward with my purchase. Highly recommended.",
  },
  {
    id: 4,
    name: "Jonas Becker",
    date: "15.01.2024",
    image: "/images/testimonial-4.svg",
    text: "A very professional team that really listens. They helped me find the best mortgage deal for my situation — stress-free and efficient.",
  },
  {
    id: 5,
    name: "Laura Hoffmann",
    date: "28.02.2024",
    image: "/images/testimonial-5.svg",
    text: "Clear, friendly, and transparent advice. I would absolutely recommend their service to anyone buying their first home.",
  },
  {
    id: 6,
    name: "Stefan Bauer",
    date: "05.03.2025",
    image: "/images/testimonial-6.svg",
    text: "The guidance was practical and well-explained. I felt like I was talking to someone who really cared about helping me decide wisely.",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // desktop stays same

  const nextSlide = () => {
    if (currentIndex < testimonials.length - visibleCount) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full flex flex-col items-center bg-white py-[100px]   mt-[48px] md:mt-[120px] overflow-hidden">

      {/* Title */}
      <div className="w-[1274px] max-w-full px-4 flex flex-col md:flex-row justify-between items-start mb-[56px]">

        <div>
          <h2 className="text-[#132219] text-[32px] md:text-[40px] font-[500]">
            Testimonials
          </h2>
          <p className="text-[#132219] text-[18px] md:text-[24px] font-[300] leading-[140%] mt-[8px] max-w-[1154px]">
            Real experiences from people who found clarity, confidence <br />
            and better decisions with our mortgage and property tools.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-[12px] mt-[20px] md:mt-[8px] self-start md:self-auto">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-[36px] h-[36px] rounded-full bg-[#132219] flex items-center justify-center transition ${
              currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"
            }`}
          >
            <ChevronLeft size={20} color="#fff" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - visibleCount}
            className={`w-[36px] h-[36px] rounded-full bg-[#132219] flex items-center justify-center transition ${
              currentIndex >= testimonials.length - visibleCount
                ? "opacity-40 cursor-not-allowed"
                : "hover:opacity-80"
            }`}
          >
            <ChevronRight size={20} color="#fff" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="w-[1274px] max-w-full overflow-hidden px-2">
        <div
          className="flex gap-[20px] transition-transform duration-500 ease-in-out"

          style={{
            transform: `translateX(-${
              currentIndex * (409 + 20)
            }px)`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col items-start gap-[30px] w-[409px] min-w-[280px] rounded-[10px] bg-[#E2E2E2]
              p-[24px] shadow-lg flex-shrink-0"
            >
              {/* Header */}
              <div className="flex items-center gap-[12px]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-[48px] h-[48px] rounded-full object-cover"
                />
                <h3 className="text-[18px] md:text-[20px] font-[600] text-[#000]">
                  {t.name}
                </h3>
              </div>

              {/* Text */}
              <p className="text-[16px] md:text-[20px] leading-[150%] text-[#000]/80">
                {t.text}
              </p>

              {/* Date */}
              <p className="text-[14px] md:text-[17px] text-[#000]/70 font-light">
                {t.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
