"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center mb-[200px] bg-white py-[100px] md:py-[140px]px-4 md:px-[116px]
 text-[#132219] font-['SF Pro Display']">
      {/* ===== TITLE + TEXT SECTION ===== */}
      <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-[1300px] gap-[60px] md:gap-[108px] mx-auto">
        {/* LEFT SIDE - TITLE */}
        <div className="flex flex-col w-full max-w-[536px] gap-[20px] md:gap-[28px]">
          <h1 className="text-[36px] md:text-[62px] font-medium leading-none mb-4 md:mb-6">
            Kontaktiere uns
          </h1>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="flex flex-col w-full max-w-[629px] mt-0 gap-[24px] md:gap-[34px]">
          <p className="text-[20px] md:text-[24px] leading-[140%] font-normal text-[#132219]">
          Hast du Fragen zur Immobilienfinanzierung oder möchtest du Teil unseres Partnernetzwerks werden?
            <br />
            In unseren{" "}
            <Link
              href="/faq"
              className="font-medium underline underline-offset-[2px] decoration-solid hover:text-[#CAF476] transition-colors duration-200"
            >
              FAQ
            </Link>{" "}
           findest du Antworten zu den wichtigsten Themen – von Voraussetzungen und Dokumenten bis zu Abläufen und Provisionen.
           <br/>Falls deine Frage offen bleibt:<br/>Füll einfach das Formular mit ein paar Infos zu deinem Anliegen aus.<br/>Wir prüfen deine Nachricht und melden uns mit dem <strong>nächsten passenden Schritt </strong>bei dir.
       
          </p>
        </div>
      </div>

      {/* ===== FORM + BOOK CALL ===== */}
<div className="flex flex-col lg:flex-row justify-center items-start 
w-full max-w-[1300px] 
gap-[60px] md:gap-[108px] 
mx-auto mt-[100px] md:mt-[160px] 
px-[40px] md:px-[10px]">
        {/* LEFT SIDE - FORM */}
        <div className="flex flex-col w-full max-w-[700px] gap-[24px]">
          <div className="relative">
            <span
              className="block md:absolute md:-top-[80px] left-0 text-[#132219] 
                         text-[32px] md:text-[48px] font-[500] leading-[100%] tracking-[-0.48px] mb-2 md:mb-0"
            >
              Fragen?
            </span>

            <h3 className="text-[28px] md:text-[36px] font-normal leading-[40px] md:leading-[50px]">
              Schreib uns direkt . . .
            </h3>
          </div>

          <form className="flex flex-col gap-[16px]">
            {/* Vorname */}
            <input
              type="text"
              placeholder="Vorname"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 
                         text-[16px] font-medium text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />
            {/* Nachname */}
            <input
              type="text"
              placeholder="Nachname"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 
                         text-[16px] font-medium text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />
            {/* Company Name */}
            <input
              type="text"
              placeholder="Firmenname (optional)"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 
                         text-[16px] font-medium text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />
            {/* Email */}
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 
                         text-[16px] font-medium text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />
            {/* Phone */}
            <input
              type="text"
              placeholder="Telefonnummer"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 
                         text-[16px] font-medium text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />

            {/* Inquiry Type */}
            <div className="relative">
              <select
                className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 
                           text-[16px] font-medium text-[#132219]/70 outline-none appearance-none bg-white"
              >
                <option value="">Thema deiner Anfrage</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="financing">Financing</option>
              </select>

              {/* Dropdown icon */}
              <svg
                className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 w-[12px] h-[7px] fill-[#132219]/70 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 7"
              >
                <path d="M6 7L0 0.71875L0.28125 0L6 5.28125L11.7188 0L12 0.71875L6 7Z" />
              </svg>
            </div>

            {/* Message */}
            <textarea
              placeholder="Deine Nachricht"
              className="w-full h-[120px] border border-[#132219] rounded-[10px] px-[20px] md:px-[24px] py-[8px] 
                         text-[16px] font-medium text-[#132219]/70 outline-none placeholder:text-[#132219]/70 resize-none"
            ></textarea>

            {/* Send Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex justify-center items-center w-[130px] md:w-[170px] px-[20px] md:px-[24px] py-[8px] 
                           border border-[#132219] rounded-full text-[#132219] text-[16px] font-medium 
                           opacity-70 hover:opacity-100 transition"
              >
                Senden
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - BOOK CALL */}
        <div className="flex flex-col w-full max-w-[629px] gap-[20px] md:gap-[24px] mt-[80px] lg:mt-0">
          <h3 className="text-[28px] md:text-[36px] font-normal leading-[40px] md:leading-[50px]">
            oder buche einen Call!
          </h3>

          <div className="w-full h-[420px] md:h-[480px] border border-[#132219] rounded-[10px] 
                          flex items-center justify-center overflow-hidden">
            <img
              src="/images/kalendly.png"
              alt="Calendly preview"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

<div className="w-full max-w-[1300px] px-[40px] md:px-[10px] mt-[100px] md:mt-[140px] rounded-[10px] overflow-hidden border border-[#132219]/10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.903054835955!2d8.533314476619616!3d47.374810571169505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a05ce8582db%3A0x8227a52e01443909!2sL%C3%B6wenstrasse%2029%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2s!4v1764146163573!5m2!1sen!2s"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </section>
  );
}
