"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full font-sfpro transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div
        className="w-full max-w-[1600px] mx-auto h-[90px] 
                   px-[130px] flex items-center justify-between"
      >
        {/* Logo + Navigation group */}
        <div className="flex items-center gap-[64px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Hypoteq"
              width={168}
              height={42}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-[48px]">
            <Link
              href="#"
              className="text-[#132219] text-[19px] font-semibold leading-none hover:opacity-70 transition"
            >
              Immobilie bewerten
            </Link>
            <Link
              href="#"
              className="text-[#132219] text-[19px] font-semibold leading-none hover:opacity-70 transition"
            >
              Partner werden
            </Link>
          </nav>
        </div>

        {/* Right side: icon + button */}
        <div className="flex items-center gap-[23px]">
          {/* SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="22"
            viewBox="0 0 18 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.463399 2.91649L3.48085 1.08526C3.69737 0.953999 3.92759 0.926025 4.16568 1.00134C4.40375 1.07773 4.58402 1.23589 4.70255 1.47476L7.05778 6.21314C7.24784 6.59617 7.19298 7.0513 6.91866 7.36654L5.03663 9.52703C4.76917 9.83475 4.7094 10.2726 4.8838 10.6524C5.83999 12.7301 7.74349 15.2046 9.44922 16.5873C9.76077 16.8402 10.1644 16.8488 10.4848 16.6099L12.7381 14.9336C13.0673 14.6894 13.4847 14.7055 13.7962 14.9756L17.6574 18.3175C17.8524 18.4864 17.965 18.707 17.9934 18.9781C18.0218 19.2482 17.9582 19.4924 17.8043 19.7054L15.6558 22.6675C15.4452 22.958 15.1297 23.0882 14.7976 23.0236C7.65738 21.6325 0.0569497 11.7532 1.67062e-05 3.78919C-0.00194259 3.41583 0.168496 3.09619 0.463399 2.91649Z"
              fill="#132219"
            />
          </svg>

          {/* Button */}
          <button
            className="h-[40px] px-[24px] rounded-full
                       bg-[#CAF476] text-[#132219]
                       text-[16px] font-semibold leading-none
                       hover:opacity-80 transition"
          >
            Hypothek anfragen
          </button>
        </div>
      </div>
    </header>
  );
}
