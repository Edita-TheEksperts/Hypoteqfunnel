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
    image: "/images/testimonial.-3.svg",
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
  const visibleCount = 3;

  const nextSlide = () => {
    if (currentIndex + visibleCount < testimonials.length) {
      setCurrentIndex((prev) => prev + visibleCount);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - visibleCount);
    }
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section className="w-full flex flex-col items-center bg-white py-[100px] font-[var(--font-sfpro)]">
      {/* Title */}
      <div className="w-[1274px] flex justify-between items-start mb-[56px]">
        <div>
          <h2 className="text-[#132219] text-[40px] font-[500] leading-[56px] tracking-[-0.4px] font-['SF Pro Display']">
            Testimonials
          </h2>
          <p className="text-[#132219] text-[24px] font-[300] leading-[140%] font-['SF Pro Display'] max-w-[1154px] mt-[8px]">
            Real experiences from people who found clarity,  confidence <br /> and
            better decisions with our mortgage and property tools.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-[16px] mt-[8px]">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-[36px] h-[36px] rounded-full bg-[#132219] flex items-center justify-center transition ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:opacity-80"
            }`}
          >
            <ChevronLeft size={20} color="#fff" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + visibleCount >= testimonials.length}
            className={`w-[36px] h-[36px] rounded-full bg-[#132219] flex items-center justify-center transition ${
              currentIndex + visibleCount >= testimonials.length
                ? "opacity-40 cursor-not-allowed"
                : "hover:opacity-80"
            }`}
          >
            <ChevronRight size={20} color="#fff" />
          </button>
        </div>
      </div>

      {/* Cards */}
<div className="w-[1274px] flex justify-between gap-[20px] transition-all duration-500 ease-in-out">
        {visibleTestimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col items-start gap-[66.55px] w-[409px] rounded-[9.933px] bg-[#E2E2E2] 
                       p-[23.839px_19.866px] shadow-[4px_6px_8.4px_0_rgba(0,0,0,0.25)]"
          >
            {/* Header */}
            <div className="flex items-center gap-[12px]">
              <img
                src={t.image}
                alt={t.name}
                className="w-[48px] h-[48px] rounded-full object-cover"
              />
              <h3 className="text-[20px] font-[600] text-[#000] font-['SF Pro Display']">
                {t.name}
              </h3>
            </div>

            {/* Text */}
            <p className="text-[20.18px] font-[400] leading-[140%] text-[#000] opacity-80 font-['SF Pro Rounded']">
              {t.text}
            </p>

            {/* Date */}
            <p className="text-[17.65px] font-[300] leading-[140%] text-[#000] opacity-80 font-['SF Pro Rounded']">
              {t.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
