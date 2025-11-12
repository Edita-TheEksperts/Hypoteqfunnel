"use client";

export default function PartnerWerdenSection() {
  return (
    <section className="w-full flex flex-col items-start gap-[32px] sm:gap-[40px] md:gap-[48px] px-[16px] sm:px-[24px] md:px-[116px] max-w-[1504px] mx-auto mt-[80px] sm:mt-[100px] md:mt-[120px] mb-[80px] sm:mb-[100px] md:mb-[120px]">
      {/* Title */}
      <h2 className="text-[#132219] text-[32px] sm:text-[40px] md:text-[48px] font-[500] leading-[110%] md:leading-[100%] tracking-[-0.48px] font-['SF Pro Display'] text-center md:text-left">
        Ja, ich möchte Partner werden!
      </h2>

      {/* Subtitle */}
      <p className="text-[#132219] text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[140%] md:leading-[22px] font-['SF Pro Display'] text-center md:text-left">
        Du möchtest Hypotheken aktiv vermitteln und mit HYPOTEQ zusammenarbeiten?
        <br className="hidden sm:block" />
        Dann freuen wir uns über deine Anfrage!
      </p>

      {/* Form */}
      <form className="w-full flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-[12px] sm:gap-[17px] w-full">
          <input
            type="text"
            placeholder="Vorname"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
          />
          <input
            type="text"
            placeholder="Nachname"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
          />
        </div>

        {/* Middle row */}
        <div className="flex flex-col md:flex-row gap-[12px] sm:gap-[17px] w-full">
          <input
            type="email"
            placeholder="E-Mail"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
          />
          <input
            type="tel"
            placeholder="Telefonnummer"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Your message"
          className="w-full border border-[#132219] opacity-70 rounded-[10px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] h-[110px] sm:h-[133px] text-[#132219] text-[14px] sm:text-[15px] md:text-[16px] font-['SF Pro Display']"
        ></textarea>

        {/* Footer info + button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] sm:gap-[20px] md:gap-[24px] w-full">
          <p className="text-[#132219] opacity-60 text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[22px] font-[400] font-['SF Pro Display'] max-w-[1088px] text-center md:text-left">
            Um Partner zu werden, solltest du ein registriertes Unternehmen mit gültiger Vermittlungsbewilligung sein,
            die regulatorischen Vorgaben (z. B. KYC/AML) einhalten und bereits Erfahrung im operativen Geschäft haben –
            oder unter der Aufsicht einer lizenzierten Organisation stehen.
          </p>

          <button
            type="submit"
            className="self-center md:self-auto flex justify-center items-center px-[20px] sm:px-[24px] py-[8px] rounded-[58px] border border-[#132219] bg-[#132219] text-white font-['SF Pro Display'] text-[14px] sm:text-[15px] md:text-[16px] font-[600] hover:opacity-90 transition"
          >
            Absenden
          </button>
        </div>
      </form>
    </section>
  );
}
