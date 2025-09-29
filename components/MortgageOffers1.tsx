"use client";
import Image from "next/image";

export default function MortgageOffers() {
  return (
    <section className="relative w-full flex flex-col justify-start overflow-hidden bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/images/morgage.png"
          alt="Mortgage background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Center Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center text-center gap-[32px] px-6">
          <h1 className="w-full max-w-[828px] text-white text-[64px] md:text-[80px] font-sfpro font-bold leading-[100%]">
            Our Products
          </h1>

          {/* Button */}
          <button className="h-10 px-5 bg-white/20 rounded-[70px] outline outline-1 outline-offset-[-1px] outline-white/40 backdrop-blur-[6.5px] inline-flex justify-center items-center gap-[10px] cursor-pointer hover:bg-white/30 transition">
            <span className="text-white text-[14px] font-semibold leading-normal">
              Send Request
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M4.5 2L8 6L4.5 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-[32px] left-0 right-0 flex justify-between items-end px-[116px] text-white z-10">
          {/* Offer Section */}
          <div className="flex flex-col w-[220px] items-start gap-[8px]">
            <p className="text-[18px] font-light leading-[100%]">
              Today’s best offer:
            </p>
            <p className="text-[40px] font-bold leading-[100%]">0.19%</p>
            <p className="text-[20px] font-light leading-[120%]">
              Our loans compared <br /> to other banks
            </p>
          </div>

          {/* Collaborating Logos */}
          <div className="flex items-center gap-6">
            <span className="text-[20px] md:text-[24px] font-normal leading-[120%] text-right">
              Collaborating <br /> with:
            </span>

            <div className="flex items-center">
              {[  
                { src: "/images/rb.png", alt: "R Bank" },
                { src: "/images/banca.png", alt: "Banca Migros" },
                { src: "/images/kb.png", alt: "KB Bank" },
                { src: "/images/gen.png", alt: "Generali" },
                { src: "/images/ubs.png", alt: "UBS" },
              ].map((logo, i) => (
                <div
                  key={i}
                  className={`w-[81px] h-[81px] rounded-full border border-white/40 bg-white/20 backdrop-blur-[8.7px] flex items-center justify-center overflow-hidden ${
                    i !== 0 ? "-ml-6" : ""
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={54}
                    height={54}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="w-full flex flex-col gap-[60px] py-[100px] px-[116px] items-center">
        {[ 
          {
            img: "/images/F1.png",
            title: "New Mortgage/ Purchase",
            text: "For many people, buying a home is the largest financial investment of their lives. It is therefore essential to define a clear financial framework in advance and understand your possibilities based on key data. Our mortgage consultants are here to support you in finding the financing solution that fits your needs best.",
          },
          {
            img: "/images/F2.png",
            title: "Refinancing/ Mortgage Payoff",
            text: "Your mortgage is about to expire, and you want to secure your budget planning while benefiting from attractive interest rates? Rely on our expertise and plan the extension or redemption of your mortgage together with us.",
          },
          {
            img: "/images/F3.png",
            title: "New Construction",
            text: "Your mortgage is about to expire, and you want to secure your budget planning while benefiting from attractive interest rates? Rely on our expertise and plan the extension or redemption of your mortgage together with us.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="flex items-center gap-[130px] max-w-[1200px] w-full"
          >
            {/* Left Image */}
            <div className="w-[750px] h-[350px] relative flex-shrink-0 rounded-[10px] ml-[-180px] overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content - takes rest of space */}
            <div className="flex flex-col justify-center gap-5 flex-1">
              <h3 className="text-[#3D3D3D] font-sfpro text-[49px] font-bold leading-[60px]">
                {card.title}
              </h3>
              <p className="text-[#3D3D3D] font-sfpro text-[16px] leading-[22px] font-medium">
                {card.text}
              </p>
              <button className="flex items-center gap-2 px-[21px] py-[7px] h-[34px] bg-[#CAF476] rounded-[19px] text-black font-sfpro font-semibold text-[14px] leading-[20px]" style={{ width: '135px', marginTop: '60px'}}>
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="4"
                  viewBox="0 0 7 4"
                  fill="none"
                >
                  <path
                    d="M4 0L6.5 2L4 4"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
