"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [language, setLanguage] = useState("de");

  const whiteMenu =
    (pathname === "/hypotheken" || pathname === "/about") && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelect = (lang: string) => {
    setLanguage(lang);
    setOpenLang(false);
  };

  return (
<header
  className={`fixed top-0 left-0 z-50 w-full font-sfpro transition-all duration-300 ${
    isScrolled ? "backdrop-blur-lg bg-white/60 shadow-sm" : "bg-transparent"
  }`}
>
  <div
    className="
      w-full h-[65px] sm:h-[80px] md:h-[90px]
      px-[16px] sm:px-6 md:px-8 lg:px-[118px]
      flex items-center justify-between
      max-sm:px-[16px] max-sm:h-[70px]
      overflow-visible
    "
  >


        {/* Left side */}
        <div className="flex items-center gap-[20px] sm:gap-[32px] xl:gap-[48px]">
          <Link href="/" className="flex items-center">
            <Image
              src={whiteMenu ? "/images/whitelogo.png" : "/images/logo.png"}
              alt="Hypoteq"
              width={168}
              height={42}
              priority
              className="w-[95px] sm:w-[130px] md:w-[168px] h-auto max-sm:w-[105px]"
            />
          </Link>

          {/* Desktop Menu (hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-[32px] xl:gap-[48px]">
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
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 ml-auto relative">
          {/* Phone icon (hidden on mobile) */}
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

          {/* Hypothek Button (hidden on small) */}
<Link
  href="/funnel"
  className="hidden sm:flex items-center justify-center gap-[10px] 
    w-[200px] sm:w-[219px] h-[38px] sm:h-[40px]
    rounded-[58px] bg-[#CAF476] text-[#132219]
    text-[17px] sm:text-[20px] font-semibold hover:opacity-90 transition-all"
>
  Hypothek anfragen
</Link>


          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-center"
            >
              <Image
                src={
                  language === "de"
                    ? "/images/german.png"
                    : "/images/united-kingdom.png"
                }
                alt={language === "de" ? "Deutsch" : "English"}
                width={38}
                height={38}
                className="object-cover object-center"
                unoptimized
              />
            </button>

            {openLang && (
              <div className="absolute right-0 mt-2 w-[140px] bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden animate-fadeIn max-sm:right-auto max-sm:left-0 max-sm:mt-[10px]">
                <button
                  onClick={() => handleSelect("de")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-[#132219] hover:bg-gray-50 text-[15px]"
                >
                  <Image
                    src="/images/german.png"
                    alt="Deutsch"
                    width={20}
                    height={16}
                    className="rounded-sm"
                    unoptimized
                  />
                  Deutsch
                </button>
                <button
                  onClick={() => handleSelect("en")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-[#132219] hover:bg-gray-50 text-[15px]"
                >
                  <Image
                    src="/images/united-kingdom.png"
                    alt="English"
                    width={20}
                    height={16}
                    className="rounded-sm"
                    unoptimized
                  />
                  Englisch
                </button>
              </div>
            )}
          </div>

          {/* Hamburger menu */}
          <button
            className="flex flex-col justify-center items-center w-[30px] h-[30px] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-[22px] h-[2px] bg-[#132219] transition ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`block w-[22px] h-[2px] bg-[#132219] my-[5px] transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-[22px] h-[2px] bg-[#132219] transition ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="
            lg:hidden bg-white border-t border-gray-100 shadow-md 
            px-6 py-6 flex flex-col gap-4 animate-fadeIn 
            max-sm:px-[24px] max-sm:py-[18px] max-sm:gap-[14px]
          "
        >
          <Link
            href="/partner"
            onClick={() => setMenuOpen(false)}
            className="text-[#132219] text-[16px] font-semibold hover:opacity-70 transition max-sm:text-[15px]"
          >
            Partner werden
          </Link>
          <Link
            href="/hypotheken"
            onClick={() => setMenuOpen(false)}
            className="text-[#132219] text-[16px] font-semibold hover:opacity-70 transition max-sm:text-[15px]"
          >
            Hypothek anfragen
          </Link>
        </div>
      )}
    </header>
  );
}
