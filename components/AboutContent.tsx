export default function AboutSection() {
  return (
    <section
      className="relative w-full h-screen flex items-start justify-start bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/about-home.png')",
      }}
    >
      {/* Overlay (nëse nevojitet) */}
      <div className="absolute inset-0"></div>

      {/* Përmbajtja */}
<div className="relative z-10 max-w-[1200px] pl-[100px] pt-[180px] flex flex-col gap-[32px] text-[#132219]">
        <div className="flex flex-col max-w-[600px]">
          {/* Titulli */}
          <div className="flex flex-col gap-[24px]">
            <h2
              className="text-[#132219]"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "72px",
                lineHeight: "100%",
                fontWeight: 500,
                letterSpacing: "-0.72px",
              }}
            >
              About Us
            </h2>
            <p className="text-[24px] font-light leading-[1.4] text-[#132219]">
              Clarity, technology, and real experts—built around you.
            </p>
          </div>

          {/* Përshkrimi */}
          <div className="mt-[95px]">
            <p className="text-[24px] font-light leading-[1.4] text-[#132219]">
              Home financing shouldn’t feel mysterious. We turn complex terms
              into plain language, surface the few numbers that actually matter,
              and keep everything in one clear dashboard. You stay in control
              while our team handles the legwork behind the scenes—so your path
              to homeownership feels simple, transparent, and fully guided from
              start to finish.
            </p>
          </div>

          {/* Butonat */}
          <div className="flex items-center justify-start gap-[10px] mt-[32px] flex-wrap">
            <button
              className="flex items-center justify-center rounded-[45px] border border-[#132219] bg-transparent hover:bg-[#CAF476] transition-all duration-300"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "20px",
                fontWeight: 600,
                color: "#132219",
                padding: "8px 24px",
              }}
            >
              Our mission
            </button>

            <button
              className="flex items-center justify-center rounded-[45px] border border-[#132219] bg-[rgba(202,244,118,0.60)] hover:bg-[#CAF476] transition-all duration-300"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "20px",
                fontWeight: 600,
                color: "#132219",
                padding: "8px 24px",
              }}
            >
              Our Partners
            </button>

            <button
              className="flex items-center justify-center rounded-[45px] border border-[#132219] bg-[#CAF476] hover:bg-[rgba(202,244,118,0.60)] transition-all duration-300"
              style={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "20px",
                fontWeight: 600,
                color: "#132219",
                padding: "8px 24px",
              }}
            >
              The Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
