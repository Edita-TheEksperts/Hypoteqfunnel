"use client";
import Image from "next/image";

interface StepProps {
  step?: string;
  title: string;
  text: string;
  image?: string;
  highlightBox?: boolean;
}

const Step: React.FC<StepProps> = ({ step, title, text, image, highlightBox }) => {
  return (
    <div className="flex justify-between items-start w-[1272px] mb-[115px] font-[var(--font-sfpro)]">
      {/* Left Text Section */}
      <div className="w-[536px] text-left text-[var(--Secondary-Color,#132219)]">
        {/* Step Label (optional) */}
        {step && (
          <p className="text-[16px] font-[500] leading-[140%] tracking-[-0.16px] mb-[4px] text-[var(--Secondary-Color,#132219)]">
            {step}
          </p>
        )}

        {/* Step Title */}
        <h3 className="text-[28px] font-[600] leading-[140%] mb-[16px] text-[var(--Secondary-Color,#132219)]">
          {title}
        </h3>

        {/* Step Paragraph */}
        <p className="text-[24px] font-[200] leading-[140%] text-[var(--Secondary-Color,#132219)]/90 antialiased">
          {text}
        </p>
      </div>

      {/* Space between text and image */}
      <div className="w-[199px]" />

{highlightBox ? (
  <div
    className="flex flex-col justify-between items-center 
               w-[535px] h-[293px] px-[105px] py-[40px] 
               bg-[var(--Main-Color,#CAF476)] rounded-[10px] flex-shrink-0"
  >
    {/* Text */}
 <p
  className="w-[35px] text-center text-[var(--Secondary-Color,#132219)] 
             font-[var(--font-sfpro)] text-[32px] font-[400] 
             leading-[140%] tracking-[-0.32px] break-keep"
>
  Start now in just 3 clicks.
  <br />
  We’ll guide you, step by step.
</p>


    {/* Button */}
    <button
      className="flex items-center justify-center gap-[10px]
                 border border-[var(--Secondary-Color,#132219)] 
                 rounded-[58px] px-[24px] py-[8px]
                 text-[20px] font-[600] text-[var(--Secondary-Color,#132219)]
                 bg-[var(--Main-Color,#CAF476)] hover:opacity-90 transition-all"
    >
      Find my best offer
    </button>
  </div>
) : (
  image && (
    <div className="flex-shrink-0 w-[533px] h-[359px] aspect-[533/359] rounded-[10px] overflow-hidden">
      <Image
        src={image}
        alt={`${title} illustration`}
        width={533}
        height={359}
        className="w-full h-full object-cover rounded-[10px]"
      />
    </div>
  )
)}

    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full bg-[#FFF] pt-[100px] pb-[120px] font-[var(--font-sfpro)]">
      {/* Section Title */}
      <h2 className="w-[1272px] text-left text-[40px] font-[500] leading-[140%] tracking-[-0.4px] text-[var(--Secondary-Color,#132219)] mb-[80px]">
        How it works
      </h2>

      {/* Step 1 */}
      <Step
        step="Step 1"
        title="Inquiry"
        text="Start with a quick, no-obligation inquiry. Tell us about your property, budget, income, and timeline—either via our secure online form or a short call with an advisor. We’ll listen, clarify your goals, and capture only what’s needed to assess options. No fees, no pressure—just a clear first step."
        image="/images/h1.png"
      />

      {/* Step 2 */}
      <Step
        step="Step 2"
        title="Analysis"
        text="Once we have your details, our team gets to work. We evaluate affordability, credit profile, and property documentation to determine eligibility. Using advanced comparison tools, we review offers from partner banks and outline clear scenarios for you. Every rate, fee, and term is explained—transparent, accurate, and tailored to your needs."
        image="/images/how-it-works-2.png"
      />

      {/* Step 3 */}
      <Step
        step="Step 3"
        title="Offer"
        text="Once we’ve completed the analysis, we present tailored mortgage offers based on your financial profile and property details. You’ll receive side-by-side comparisons of interest rates, terms, and monthly payments from our network of trusted banks. Each option is explained clearly—so you understand the benefits, trade-offs, and total costs before making a decision. Transparent, data-driven, and fully personalized."
        image="/images/how-it-works-3.png"
      />

      {/* ✅ Step 4 */}
      <Step
        title="Congratulations on Your Mortgage"
        text="After we complete our review, we share a tailored set of mortgage offers matched to your profile and property. You’ll see side-by-side comparisons of rates, terms, fees, and projected monthly payments. We highlight the pros, trade-offs, and total cost over time. You choose with confidence—no jargon, no pressure."
        highlightBox
      />
    </section>
  );
};

export default HowItWorks;
