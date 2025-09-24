"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="fixed top-4 left-1/2 z-50 w-[1271px] max-w-[90%] -translate-x-1/2
      flex items-center justify-between px-[18px] py-[16px]
      rounded-[33px] border border-white/40
      bg-white/40 backdrop-blur-[20px]"
    >
      {/* Logo */}
      <div className="font-bold text-lg">HYPOTEQ</div>

      {/* Navigation */}
      <nav className="flex gap-6 text-[16px] font-semibold">
        <Link href="/" className="text-gray-600/50 hover:text-black transition">
          Home
        </Link>
        <Link
          href="/advantages"
          className="text-gray-600/50 hover:text-black transition"
        >
          Your advantages
        </Link>
        <Link
          href="/mortgage"
          className="text-gray-600/50 hover:text-black transition"
        >
          Mortgage
        </Link>
        <Link
          href="/calculator"
          className="text-gray-600/50 hover:text-black transition"
        >
          Mortgage calculator
        </Link>
        <Link
          href="/services"
          className="text-gray-600/50 hover:text-black transition"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="text-gray-600/50 hover:text-black transition"
        >
          About Us
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="text-[14px] font-semibold text-[#132219] hover:text-black transition">
          Log In
        </button>

   <button
className="flex items-center justify-center w-[99px] h-[34px] px-[21px] py-[7px] gap-[10px] rounded-[20px] bg-[#CAF476] text-[#132219] text-[14px] font-semibold"
>
  Calculate
</button>

      </div>
    </header>
  );
}
