"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white font-inter w-full">
      <div className="max-w-[1380px] mx-auto px-[60px] py-[70px] flex justify-between items-start">
        
        {/* Left Side: Logo + Copyright */}
        <div className="flex flex-col justify-between h-[460px] ml-[-70px]">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Hypoteq Logo"
            className="w-[300px] h-[75px] object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />

          {/* Copyright */}
          <p className="text-[#CAF476] text-[18px] font-semibold leading-[26px] mt-[20px]">
            © 2025 HYPOTEQ Alle Rechte vorbehalten
          </p>
        </div>

        {/* Right Side: Newsletter + Info + Links */}
        <div className="flex flex-col gap-[50px]">
          {/* Newsletter */}
          <div className="flex flex-col gap-[14px]">
            <p className="text-[16px] leading-[150%] text-white/70">
              Subscribe to our newsletter:
            </p>
            <div className="flex flex-col gap-[14px]">
              <input
                type="email"
                placeholder="Write your email"
                className="w-[520px] h-[52px] bg-white/10 border border-white/10 rounded-[10px] px-[22px] text-white text-[16px] placeholder-white/50 focus:outline-none"
              />
              <button className="flex items-center mb-5 justify-center gap-[10px] px-[24px] py-[12px] rounded-full bg-[#CAF476] text-black text-[15px] font-medium w-fit">
                Send
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Info + Links */}
          <div className="flex gap-[100px] text-[18px] leading-[160%] font-semibold">
            {/* Company Info */}
            <div className="flex flex-col gap-[10px] text-white/70">
              <p className="text-white mb-12">HYPOTEQ AG</p>
              <p>Löwenstrasse 29</p>
              <p className="mb-5">8001 Zürich</p>
              <p>044 554 41 00</p>
              <p>info@hypoteq.ch</p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col text-white/70">
              <a href="#" className="text-[#CAF476] mb-3">Home</a>
              <a href="#" className="hover:text-white mb-3">Ihre Vorteile</a>
              <a href="#" className="hover:text-white mb-3">Hypothekenrechner</a>
              <a href="#" className="hover:text-white mb-8">Über uns</a>
              <a href="#" className="hover:text-white mb-3">Impressum</a>
              <a href="#" className="hover:text-white">Datenschutzerklärung</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
