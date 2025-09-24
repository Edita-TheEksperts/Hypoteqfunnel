"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 px-6">
        {/* Title */}
        <div className="w-[639px] h-[240px] text-center text-white text-[80px] font-normal font-['SF_Pro_Display'] leading-[80px]">
          Send a financing <br />
          request quickly <br /> & easily
        </div>

        {/* Button */}
        <div className="h-10 px-5 bg-white/20 rounded-[70px] outline outline-1 outline-offset-[-1px] outline-white/40 backdrop-blur-[6.5px] inline-flex justify-center items-center gap-[10px] cursor-pointer hover:bg-white/30 transition">
          <span className="text-white text-[14px] font-semibold font-['Inter']">
            Send Request
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M4.5 2L8 6L4.5 10"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Logos & text */}
      <div className="absolute bottom-10 right-10 flex items-center gap-6 text-white">
        <span className="text-[24px] font-normal leading-[100%] text-right">
          Collaborating <br /> with:
        </span>

        {/* Logos overlapped */}
        <div className="flex items-center">
          {[
            { src: "/images/rb.png", alt: "R Bank" },
            { src: "/images/banca.png", alt: "Banca Migros" }, // new
            { src: "/images/kb.png", alt: "KB Bank" },
            { src: "/images/gen.png", alt: "Generali" },
            { src: "/images/ubs.png", alt: "UBS" },
          ].map((logo, i) => (
            <div
              key={i}
              className={`w-[81px] h-[81px] rounded-full border border-white/40 bg-white/20 backdrop-blur-[8.7px] flex items-center justify-center overflow-hidden ${
                i !== 0 ? "-ml-6" : ""
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={54}
                height={54}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Offer */}
      <div className="absolute bottom-10 left-10 text-left text-white">
        <p className="text-[18px] font-light">Todays best offer:</p>
        <p className="text-[40px] font-normal leading-[100%]">0.19%</p>
        <p className="text-[20px] font-light max-w-xs">
          Our loans compared to other banks
        </p>
      </div>
    </section>
  );
}
