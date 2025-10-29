"use client";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center bg-white py-[100px] md:py-[140px] px-4 md:px-8 font-sfpro text-[#132219]">
      {/* ===== TITLE + TEXT SECTION ===== */}
      <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-[1300px] gap-[60px] md:gap-[108px] mx-auto">
        {/* LEFT SIDE - TITLE */}
        <div className="flex flex-col w-full max-w-[536px] gap-[20px] md:gap-[28px]">
          <h1 className="text-[36px] md:text-[72px] font-medium leading-none mb-4 md:mb-6">
            Contact us
          </h1>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="flex flex-col w-full max-w-[629px] mt-0 gap-[24px] md:gap-[34px]">
          <p className="text-[15px] md:text-[16px] leading-[150%] font-medium opacity-[0.87]">
            Have a question about property financing or thinking about joining
            our partner network?{" "}
            <span className="font-semibold underline underline-offset-[2px]">
              Our FAQ covers the most common topics
            </span>
            —eligibility, documents, timelines, commissions, and more. If you’ve
            checked the FAQ and still need clarity, complete the form with a few
            details about your request. We’ll review your message and get back
            to you with the next best step.
          </p>
        </div>
      </div>

      {/* ===== FORM + BOOK CALL ===== */}
      <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-[1300px] gap-[60px] md:gap-[108px] mx-auto mt-[100px] md:mt-[160px]">
        {/* LEFT SIDE - FORM */}
        <div className="flex flex-col w-full max-w-[700px] gap-[24px]">
          <div className="relative">
            <span
              className="block md:absolute md:-top-[80px] left-0 text-[#132219] font-['SF Pro Display'] 
                         text-[32px] md:text-[48px] font-[500] leading-[100%] tracking-[-0.48px] mb-2 md:mb-0"
            >
              Questions?
            </span>

            <h3 className="text-[28px] md:text-[36px] font-normal leading-[40px] md:leading-[50px] text-[#132219] font-sfpro">
              Text us...
            </h3>
          </div>

          <form className="flex flex-col gap-[16px]">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 text-[15px] md:text-[16px] font-semibold text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 text-[15px] md:text-[16px] font-semibold text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 text-[15px] md:text-[16px] font-semibold text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 text-[15px] md:text-[16px] font-semibold text-[#132219]/70 outline-none placeholder:text-[#132219]/70"
            />

            <div className="relative">
              <select className="w-full h-[50px] border border-[#132219] rounded-full px-5 md:px-6 text-[15px] md:text-[16px] font-semibold text-[#132219]/70 outline-none appearance-none bg-white">
                <option value="">Inquiry Type</option>
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

            <textarea
              placeholder="Your message"
              className="w-full h-[120px] border border-[#132219] rounded-[10px] px-[20px] md:px-[24px] py-[8px] text-[15px] md:text-[16px] font-semibold text-[#132219]/70 outline-none placeholder:text-[#132219]/70 resize-none"
            ></textarea>

            {/* Button aligned to the right */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex justify-center items-center w-[130px] md:w-[170px] px-[20px] md:px-[24px] py-[8px] border border-[#132219] rounded-full text-[#132219] text-[15px] md:text-[16px] font-medium opacity-70 hover:opacity-100 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - BOOK CALL */}
        {/* RIGHT SIDE - BOOK CALL */}
<div className="flex flex-col w-full max-w-[629px] gap-[20px] md:gap-[24px] mt-[80px] lg:mt-0">
  <h3 className="text-[28px] md:text-[36px] font-normal leading-[40px] md:leading-[50px] text-[#132219] font-sfpro">
    Or Book a Call!
  </h3>

  <div className="w-full h-[420px] md:h-[480px] border border-[#132219] rounded-[10px] flex items-center justify-center overflow-hidden">
    <img
      src="/images/kalendly.png"
      alt="Calendly preview"
      className="w-full h-full  object-contain"
    />
  </div>
</div>

      </div>

      {/* ===== MAP SECTION ===== */}
      <div className="w-full max-w-[1300px] mt-[100px] md:mt-[140px] rounded-[10px] overflow-hidden border border-[#132219]/10">
        <iframe
          title="Google Map - Kemptpark 12, Lindau, Schweiz"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.139007689383!2d8.67884367608563!3d47.44480590122277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa8a9e6e3f5d3%3A0x1b2b7b2dfdbb1d5!2sKemptpark%2012%2C%208310%20Lindau%2C%20Schweiz!5e0!3m2!1sen!2sch!4v1730050000000!5m2!1sen!2sch"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
