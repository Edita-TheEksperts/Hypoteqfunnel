"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[845px] flex items-center justify-center">
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

      {/* Content (teksti kryesor) */}
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
          {/* SVG arrow nga Figma */}
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
        {/* Teksti */}
        <span className="text-[24px] font-normal leading-[100%] text-right">
          Collaborating <br /> with:
        </span>

        {/* Logos wrapped në rreth */}
        <div className="flex items-center gap-4">
          {/* R Bank */}
          <div className="w-[81px] h-[81px] rounded-full border-[1.35px] border-white/40 bg-white/20 backdrop-blur-[8.7px] flex items-center justify-center">
            <Image src="/images/rb.png" alt="R Bank" width={40} height={40} />
          </div>

          {/* KB Bank */}
          <div className="w-[81px] h-[81px] rounded-full border-[1.35px] border-white/40 bg-white/20 backdrop-blur-[8.7px] flex items-center justify-center">
            <Image src="/images/kb.png" alt="KB Bank" width={40} height={40} />
          </div>

          {/* Generali */}
          <div className="w-[81px] h-[81px] rounded-full border-[1.35px] border-white/40 bg-white/20 backdrop-blur-[8.7px] flex items-center justify-center">
            <Image src="/images/gen.png" alt="Generali" width={40} height={40} />
          </div>

          {/* UBS */}
          <div className="w-[81px] h-[81px] rounded-full border-[1.35px] border-white/40 bg-white/20 backdrop-blur-[8.7px] flex items-center justify-center">
            <Image src="/images/ubs.png" alt="UBS" width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Offer (absolute bottom-left) */}
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
