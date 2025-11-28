"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1C14] text-white font-sfpro px-[116px] pt-[60px] pb-[80px]">

      {/* LOGO */}
      <div className="w-full flex justify-start">
        <Image
          src="/images/whitelogo.png"
          width={168}
          height={42}
          alt="Logo"
          className="object-contain"
        />
      </div>

      {/* TOP SECTION */}
      <div className="mt-[60px] flex flex-col gap-[48px]">

        {/* TITLE + INPUT */}
        <div className="flex items-end gap-[173px]">
          <h2 className="text-[40px] font-[400] leading-[110%] tracking-[-0.4px]">
             Zuerst vergleichen.<br />
            Dann entscheiden.
          </h2>

          {/* INPUT */}
          <div className="flex items-center gap-[22px]">
            <div className="flex items-center w-[356px] h-[40px] rounded-[50px] bg-[#2A3B2C] px-[16px]">
              <input
                className="flex-1 bg-transparent text-white placeholder-white/70 outline-none"
                placeholder=
"Melde dich  für unseren Newsletter an"
              />
            </div>

            <button className="w-[159px] h-[40px] flex items-center justify-center bg-[#CAF476] 
              rounded-[50px] text-[#132219] font-medium hover:opacity-90 transition">
              Senden
            </button>
          </div>
        </div>

        <div className="w-full border-b border-white/40 mt-[24px]"></div>
      </div>

      {/* 3 COLUMNS */}
      <div className="mt-[24px] flex justify-start gap-[317px] text-[18px]">

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-[24px]">
          <Link href="/" className="hover:underline">Home Page</Link>
          <Link href="/hypotheken" className="hover:underline">
            Hypotheken  leicht gemacht
          </Link>
          <Link href="/documents" className="hover:underline">Dokumente</Link>
          <Link href="/mezzanine" className="hover:underline">Mezzanine-Finanzierung</Link>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-[24px]">
          <Link href="/about" className="hover:underline">Über uns</Link>
          <Link href="/contact" className="hover:underline">Kontaktiere uns</Link>
          <Link href="/partner" className="hover:underline">Werde HYPOTEQ Partner</Link>
          <Link href="/impressum" className="hover:underline">Impressum & Datenschutz</Link>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-[24px]">
          <Link href="/calc" className="hover:underline">Hypothekenrechner</Link>
          <Link href="/faq" className="hover:underline">Frequently Asked Questions</Link>
          <Link href="/advisory" className="hover:underline">HYPOTEQ Advisory</Link>
          <Link
            href="https://www.linkedin.com/company/hypoteq-ag/"
            target="_blank"
            className="hover:underline"
          >
            Neuigkeiten
          </Link>
        </div>

      </div>

    </footer>
  );
}
