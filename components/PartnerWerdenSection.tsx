"use client";

export default function PartnerWerdenSection() {
  return (
    <section className="w-full flex flex-col items-start gap-[48px] px-[24px] md:px-[116px] max-w-[1504px] mx-auto mt-[120px] mb-[120px]">
      {/* Title */}
      <h2 className="text-[#132219] text-[48px] font-[500] leading-[100%] tracking-[-0.48px] font-['SF Pro Display']">
        Ja, ich möchte Partner werden!
      </h2>

      {/* Subtitle */}
      <p className="text-[#132219] text-[20px] font-[600] leading-[22px] font-['SF Pro Display']">
        Du möchtest Hypotheken aktiv vermitteln und mit HYPOTEQ zusammenarbeiten? <br />
        Dann freuen wir uns über deine Anfrage!
      </p>

      {/* Form */}
      <form className="w-full flex flex-col gap-[24px]">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-[17px] w-full">
          <input
            type="text"
            placeholder="Vorname"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[24px] py-[8px] text-[#132219] text-[16px] font-['SF Pro Display']"
          />
          <input
            type="text"
            placeholder="Nachname"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[24px] py-[8px] text-[#132219] text-[16px] font-['SF Pro Display']"
          />
        </div>

        {/* Middle row */}
        <div className="flex flex-col md:flex-row gap-[17px] w-full">
          <input
            type="email"
            placeholder="E-Mail"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[24px] py-[8px] text-[#132219] text-[16px] font-['SF Pro Display']"
          />
          <input
            type="tel"
            placeholder="Telefonnummer"
            className="flex-1 border border-[#132219] opacity-70 rounded-[58px] px-[24px] py-[8px] text-[#132219] text-[16px] font-['SF Pro Display']"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Your message"
          className="w-full border border-[#132219] opacity-70 rounded-[10px] px-[24px] py-[8px] h-[133px] text-[#132219] text-[16px] font-['SF Pro Display']"
        ></textarea>

        {/* Footer info + button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[24px] w-full">
          <p className="text-[#132219] opacity-60 text-[14px] leading-[22px] font-[400] font-['SF Pro Display'] max-w-[1088px]">
            Um Partner zu werden, solltest du ein registriertes Unternehmen mit gültiger Vermittlungsbewilligung sein,
            die regulatorischen Vorgaben (z. B. KYC/AML) einhalten und bereits Erfahrung im operativen Geschäft haben –
            oder unter der Aufsicht einer lizenzierten Organisation stehen.
          </p>

          <button
            type="submit"
            className="flex justify-center items-center px-[24px] py-[8px] rounded-[58px] border border-[#132219] bg-[#132219] text-white font-['SF Pro Display'] text-[16px] font-[600]"
          >
            Absenden
          </button>
        </div>
      </form>
    </section>
  );
}
