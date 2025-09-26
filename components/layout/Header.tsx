"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/advantages", label: "Your advantages" },
    { href: "/mortgage", label: "Mortgage" },
    { href: "/calculator", label: "Mortgage calculator" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header
      className="fixed top-[32px] left-1/2 z-50 w-[1271px] max-w-[90%] -translate-x-1/2
      flex items-center justify-between px-[18px] py-[16px]
      rounded-[33px] border border-white/40
      bg-white/40 backdrop-blur-[20px]"
    >
      {/* Logo */}
      <div className="font-bold text-lg">HYPOTEQ</div>

      {/* Navigation */}
      <nav className="flex gap-6 text-[16px] font-semibold">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                isActive
                  ? "text-black font-bold" // stays black when active
                  : "text-gray-600/50 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="text-[14px] font-semibold text-[#132219] hover:text-black transition">
          Log In
        </button>
        <button
          className="flex items-center justify-center w-[99px] h-[34px] px-[21px] py-[7px] gap-[10px]
          rounded-[20px] bg-[#CAF476] text-[#132219] text-[14px] font-semibold"
        >
          Calculate
        </button>
      </div>
    </header>
  );
}
