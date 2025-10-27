"use client";
import React from "react";

export default function HomeEvaluation() {
  return (
    <section
      className="relative bg-no-repeat text-white px-6 md:px-[118px] py-[48px] md:py-[60px]"
      style={{
        backgroundImage: "url('/images/vV_.png')",
        backgroundSize: "115%",
        backgroundPosition: "30% center",
      }}
    >
      {/* Text content */}
      <div className="max-w-[700px]">
        <h1 className="font-sfpro text-[#132219] font-[500] text-[40px] md:text-[56px] leading-[140%] tracking-[-0.4px] mb-3">
          Home Evaluation
        </h1>
        <p
          className="font-sfpro text-[#132219] text-[20px] font-[300] leading-[140%] mb-8 self-stretch"
          style={{
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
        >
          Find out what your home could be worth today. Our smart valuation tool
          compares local listings and market data to give you an instant
          estimate.
        </p>

        <button className="bg-[#132219] hover:bg-[#1C2B1F] text-white text-[20px] font-normal rounded-full px-[24px] py-[8px] w-[328px] h-[40px] flex items-center justify-center transition">
          Enter your address
        </button>
      </div>

      {/* Steps section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[110px] text-[#132219]">
        {/* Step 1 */}
        <Step
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.811"
              height="48"
              viewBox="0 0 34 48"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M28.8592 4.95211C25.6662 1.75907 21.4224 0 16.9057 0C7.582 0 0 7.582 0 16.9057C0 17.1089 0.00580578 17.3179 0.0116113 17.5152C0.075472 19.2395 0.394776 20.9347 0.963717 22.5486C4.23803 33.2308 14.8853 46.6763 15.3382 47.2453C15.7155 47.7213 16.2961 48 16.9057 48C17.5152 48 18.0958 47.7213 18.4732 47.2453C18.926 46.6763 29.5733 33.2308 32.8418 22.5486C33.4107 20.9347 33.7359 19.2453 33.7939 17.5385C33.8055 17.3237 33.8113 17.1147 33.8113 16.9057C33.8113 12.389 32.0522 8.14514 28.8592 4.95211Z"
                fill="#132219"
              />
            </svg>
          }
          title="Address Lookup"
          text="Type your street and number; we auto-complete and pinpoint your exact property."
        />

        {/* Step 2 */}
        <Step
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="48"
              viewBox="0 0 68 48"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M66.922 0.00013891H60.3615C59.7682 0.00013891 59.2868 0.479866 59.2868 1.07115C59.2868 1.66243 59.7682 2.14216 60.3615 2.14216H64.2044L54.9708 11.3436L50.96 8.24771C50.5317 7.91581 49.9244 7.95485 49.5409 8.33696L45.8968 11.9683L36.2634 4.68045C36.2634 4.68045 36.2326 4.64977 36.199 4.64977L36.1039 4.61909C36.0395 4.58842 36.0087 4.55495 35.9779 4.55495L35.7568 4.46012H35.6924C35.628 4.42944 35.5329 4.42944 35.4713 4.42944H35.3454C35.281 4.42944 35.2194 4.42944 35.1243 4.46012C34.9983 4.4908 34.9032 4.52427 34.8696 4.55495C34.8388 4.58563 34.8052 4.58563 34.7436 4.61909L34.6485 4.68324L20.8191 15.1449C20.5337 15.3652 20.3741 15.6832 20.3125 16.029C20.2818 16.3777 20.3769 16.7235 20.5672 17.008C20.8219 17.3232 21.2334 17.5463 21.614 17.5463C21.8995 17.5463 22.185 17.4515 22.4061 17.2925V32.5794L18.4849 36.4869L15.0227 33.0368C14.6029 32.6185 13.9227 32.6185 13.5029 33.0368L0.314873 46.1731C-0.104958 46.5915 -0.104958 47.2693 0.314873 47.6876C0.524788 47.8968 0.799074 48 1.07616 48C1.35045 48 1.62474 47.8968 1.83745 47.6876L14.2588 35.3096L17.721 38.7597C18.1408 39.178 18.821 39.178 19.2408 38.7597L23.9401 34.0768H47.1793C47.9098 34.0768 48.5115 33.5078 48.5115 32.7492V17.2616C48.7327 17.4206 49.0181 17.5155 49.3036 17.5155C49.7151 17.5155 50.0957 17.3258 50.3504 16.9772C50.7954 16.4082 50.6667 15.5854 50.0957 15.1447L47.6271 13.276L50.3924 10.5204L54.4032 13.6163C54.8314 13.9454 55.4388 13.9091 55.8222 13.527L65.8505 3.53376V7.6086C65.8505 8.19988 66.3319 8.67961 66.9252 8.67961C67.5186 8.67961 68 8.19988 68 7.6086V1.07101C68 0.479727 67.5186 0 66.9252 0L66.922 0.00013891Z"
                fill="#132219"
              />
            </svg>
          }
          title="Property match"
          text="We confirm parcel, unit, and living area from official records and maps."
        />

        {/* Step 3 */}
        <Step
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="48"
              viewBox="0 0 44 48"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.24 48V31.6351C9.24 31.1453 9.63424 30.7478 10.12 30.7478H19.8C20.2858 30.7478 20.68 31.1453 20.68 31.6351V48H38.28C38.7658 48 39.16 47.6025 39.16 47.1126V24.2913L22 9.80587L4.84 24.2913V47.1126C4.84 47.6025 5.23424 48 5.72 48H9.24ZM11 48V32.5225H18.92V48H11ZM34.76 24.041C34.76 23.5512 34.3658 23.1537 33.88 23.1537H24.2C23.7142 23.1537 23.32 23.5512 23.32 24.041V38.7341C23.32 39.2239 23.7142 39.6215 24.2 39.6215H33.88C34.3658 39.6215 34.76 39.2239 34.76 38.7341V24.041ZM33 24.9284V37.8467H25.08V24.9284H33ZM44 18.7168C44 18.4542 43.8838 18.2057 43.685 18.0371L22.565 0.206313C22.2376 -0.0687711 21.7624 -0.0687711 21.435 0.206313L0.31504 18.0371C0.11616 18.2057 0 18.4542 0 18.7168V25.3206C0 25.6649 0.19712 25.9791 0.50688 26.1246C0.81664 26.2701 1.18272 26.2222 1.44496 26.0004L22 8.64874L42.555 26.0004C42.8173 26.2222 43.1834 26.2701 43.4931 26.1246C43.8029 25.9791 44 25.6649 44 25.3206V18.7168ZM30.36 5.62991L39.16 13.059V2.74419C39.16 2.25436 38.7658 1.85682 38.28 1.85682H31.24C30.7542 1.85682 30.36 2.25436 30.36 2.74419V5.62991Z"
                fill="#132219"
              />
            </svg>
          }
          title="Market comps"
          text="Recent nearby sales and active listings with similar size and features."
        />

        {/* Step 4 */}
        <Step
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.425 8.1958V2.71651L34.6456 8.97868H29.2027C28.7743 8.97868 28.4229 8.62505 28.4229 8.19376L28.425 8.1958ZM28.4036 42.3827L37.3447 44.7935V46.4324C37.3447 47.2949 36.6464 48 35.7874 48H1.55725C0.700429 48 0 47.2971 0 46.4324V1.56764C0 0.705102 0.698291 0 1.55725 0H24.5717C25.9405 0 26.868 0.774105 26.868 2.14125V8.19641C26.868 9.4924 27.9154 10.5468 29.2028 10.5468H35.2047C36.5649 10.5468 37.3446 11.4784 37.3446 12.8584V18.0056L35.0547 17.3889C32.7305 16.7614 30.3036 18.1717 29.6803 20.5113L25.2997 36.9726C24.6764 39.3123 26.0773 41.7554 28.4014 42.3829L28.4036 42.3827Z"
                fill="#132219"
              />
            </svg>
          }
          title="Instant estimate"
          text="We combine comps with local trends to calculate today's value range."
        />
      </div>
    </section>
  );
}

// ✅ FIXED: Add proper TypeScript types for the props
interface StepProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}
function Step({ icon, title, text }: StepProps) {
  return (
    <div className="flex flex-col items-start text-left p-4 max-w-[250px]">
      <div className="mb-[19px]">{icon}</div>

<h3
  className="font-sfpro text-[20px] font-[500] leading-[140%] mb-[30px] text-[#132219]"
>
  {title}
</h3>

      <p
        style={{
          color: "var(--Secondary-Color, #132219)",
          fontFamily: '"SF Pro Display"',
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 300,
          lineHeight: "140%",
        }}
        className="tracking-[-0.2px]"
      >
        {text}
      </p>
    </div>
  );
}
