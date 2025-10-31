"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Pages where menu should be white on desktop
  const whiteMenu = (pathname === "/hypotheken" || pathname === "/partner") && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full font-sfpro transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-white/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <div
        className="
        w-full max-w-[1600px] mx-auto 
        h-[70px] sm:h-[80px] md:h-[90px]
        px-4 sm:px-6 md:px-12 lg:px-[118px]
        flex items-center justify-between
      "
      >
        <div className="flex items-center gap-[32px] xl:gap-[48px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={
                whiteMenu
                  ? "/images/whitelogo.png" 
                  : "/images/logo.png"
              }
              alt="Hypoteq"
              width={168}
              height={42}
              priority
              className="w-[105px] sm:w-[130px] md:w-[168px] h-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-[32px] xl:gap-[48px]">
            <Link
              href="/homeevaluation"
              className={`text-[17px] xl:text-[19px] font-semibold hover:opacity-70 transition ${
                whiteMenu ? "text-white" : "text-[#132219]"
              }`}
            >
              Immobilie bewerten
            </Link>

            <Link
              href="/partner"
              className={`text-[17px] xl:text-[19px] font-semibold hover:opacity-70 transition ${
                whiteMenu ? "text-white" : "text-[#132219]"
              }`}
            >
              Partner werden
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Phone icon desktop only */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="22"
            fill="none"
            viewBox="0 0 18 24"
            className="hidden md:block"
          >
            <path
              fill={whiteMenu ? "#fff" : "#132219"}
              d="M0.46 2.92L3.48 1.09c.22-.13.45-.15.69-.07.24.08.42.24.54.48l2.36 4.74c.19.38.14.84-.13 1.15L5.04 9.53c-.27.31-.33.75-.15 1.12 1 2.08 2.9 4.55 4.6 5.93.31.25.72.26 1.04.03l2.25-1.68c.33-.25.75-.24 1.09.06l3.86 3.34c.2.17.31.39.34.66.03.27-.04.51-.2.73l-2.15 2.96c-.21.29-.53.41-.87.35C7.66 21.63.06 11.75 0 3.79c-.01-.37.17-.69.46-.88z"
            />
          </svg>

          {/* CTA Button */}
          <button
            className="
              h-[34px] sm:h-[38px] md:h-[40px]
              px-4 sm:px-5 md:px-6
              rounded-full bg-[#CAF476] text-[#132219]
              text-[13px] sm:text-[15px] md:text-[16px] font-semibold
              hover:opacity-80 transition whitespace-nowrap
            "
          >
            Hypothek anfragen
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col justify-center items-center w-[30px] h-[30px] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-[22px] h-[2px] bg-[#132219] transition ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
            <span className={`block w-[22px] h-[2px] bg-[#132219] my-[5px] transition ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-[22px] h-[2px] bg-[#132219] transition ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[70px] sm:top-[80px] left-0 w-full bg-white/95 backdrop-blur-lg shadow-md py-6 flex flex-col items-center gap-6 text-center">
          <Link
            href="/homeevaluation"
            className="text-[#132219] text-[18px] font-semibold hover:opacity-70 transition"
            onClick={() => setMenuOpen(false)}
          >
            Immobilie bewerten
          </Link>

          <Link
            href="/partner"
            className="text-[#132219] text-[18px] font-semibold hover:opacity-70 transition"
            onClick={() => setMenuOpen(false)}
          >
            Partner werden
          </Link>
        </div>
      )}
    </header>
  );
}
