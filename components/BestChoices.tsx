"use client";
import React, { useEffect, useRef } from "react";

const BestChoices: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.5; // shpejtësia e scroll
    let direction = 1;

    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += speed * direction;

      // Ndërron drejtimin kur arrin fund ose fillim
      if (
        container.scrollLeft + container.clientWidth >= container.scrollWidth ||
        container.scrollLeft <= 0
      ) {
        direction *= -1;
      }

      requestAnimationFrame(scrollStep);
    };

    const animation = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="bg-[#132219] text-white font-sfpro py-[80px] pl-[120px]">
      {/* Header */}
      <div className="flex justify-between items-start mb-[100px]">
        <h2 className="text-[72px] font-medium leading-[72px] w-[451px]">
          Hypoteq’s Best Choices
        </h2>
      </div>

      {/* Rates */}
      <div className="flex gap-[69px] mb-[85px]">
        <div className="space-y-[8px] w-[352px]">
          <h3 className="text-[24px] text-white/60">Saron</h3>
          <p className="text-[120px]">0.86%</p>
          <p className="text-[24px] text-white/60">Monthly CHF: 0.00</p>
        </div>
        <div className="space-y-[8px] w-[352px]">
          <h3 className="text-[24px] text-white/60">2 Years</h3>
          <p className="text-[120px]">1.0%</p>
          <p className="text-[24px] text-white/60">Monthly CHF: 0.00</p>
        </div>
        <div className="space-y-[8px] w-[352px]">
          <h3 className="text-[24px] text-white/60">3 Years</h3>
          <p className="text-[120px]">1.4%</p>
          <p className="text-[24px] text-white/60">Monthly CHF: 0.00</p>
        </div>
        <div className="space-y-[8px] w-[352px]">
          <h3 className="text-[24px] text-white/60">4 Years</h3>
          <p className="text-[120px]">1.4%</p>
          <p className="text-[24px] text-white/60">Monthly CHF: 0.00</p>
        </div>
      </div>

      {/* Compare Section */}
      <h4 className="text-[32px] text-white/60 mb-[40px]">
        Compared to other banks
      </h4>

      {/* Boxes auto-scroll */}
      <div
        ref={scrollRef}
        className="flex gap-[16px] overflow-x-auto flex-nowrap pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/20 rounded-[8px] w-[330px] h-[216px] p-[14px_18px] flex-shrink-0 flex flex-col justify-between"
          >
            <h5 className="text-[25px] font-medium leading-[30px] text-white">
              Raiffeisen
            </h5>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[20px] text-white">
                Monthly CHF {i + 1}.00
              </p>
              <p className="text-[20px] text-white">
                Amortization CHF {i + 1}.00
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestChoices;
