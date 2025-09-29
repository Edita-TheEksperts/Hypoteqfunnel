// components/FinanceForm.tsx
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FinanceForm: React.FC = () => {
  return (
    <section className="w-full bg-white font-sfpro">
 <div className="w-full max-w-[1820px] mx-auto px-[116px] py-[116px]">

        {/* Header */}
        <div className="flex items-start gap-[164px] mb-[75px]">
          {/* Title */}
          <h2
            className="w-[483px] font-sfpro text-[#132219] font-bold"
            style={{
              fontSize: "48px",
              lineHeight: "50px",
            }}
          >
            Neue Finanzierungsanfrage
          </h2>

          {/* Description */}
          <p
            className="w-[626px] font-sfpro text-[#656565]  ml-[165px]"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22px",
            }}
          >
            Füllen Sie bitte dieses Formular aus, damit HYPOTEC für Sie die
            Finanzierung durchführen kann. Dadurch können wir Ihnen rasch den
            Richtzins mitteilen und das weitere Vorgehen miteinander
            besprechen.
            <br />
            <br />
            Unterstützende Unterlagen für eine Finanzierungsanfrage: Checkliste
            für selbst bewohntes Wohneigentum, Checkliste für Renditeobjekte,
            Auskunftsermächtigung (durch Kunde zu unterzeichnen).
          </p>
        </div>

  {/* Form */}
<form className="mt-[75px] grid grid-cols-2 font-sfpro gap-x-[16px] w-[1550px]">
  {/* Left column (3 inputs) */}
  <div className="flex flex-col gap-[23px]">
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={`left-${i}`}
        className="flex items-center font-sfpro px-[24px] h-[65px] bg-[#F6F6F6] rounded-full"
      >
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent w-full font-sfpro text-[#656565] placeholder-[#656565] text-[16px] font-medium focus:outline-none"
        />
      </div>
    ))}
  </div>

  {/* Right column (2 inputs + progress + buttons) */}
  <div className="flex flex-col gap-[23px]">
    {Array.from({ length: 2 }).map((_, i) => (
      <div
        key={`right-${i}`}
        className="flex items-center  font-sfpro px-[24px] h-[65px] bg-[#F6F6F6] rounded-full"
      >
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent w-full font-sfpro font-sfpro text-[#656565] placeholder-[#656565] text-[16px] font-medium focus:outline-none"
        />
      </div>
    ))}

    {/* Progress + Navigation */}
    <div className="flex justify-between items-center  font-sfpro h-[65px]">
      <span className="text-[#848484] font-sfpro text-[16px] font-medium">1/5</span>

      <div className="flex items-center gap-[24px]">
        <button
          type="button"
          className="flex items-center gap-1 font-sfpro text-[#132219] text-[16px] hover:opacity-80 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="submit"
          className="flex items-center gap-1 font-sfpro bg-[#C6F627] hover:bg-[#b4e822] text-[#132219] text-[16px] px-[24px] py-[12px] rounded-full font-bold transition"
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </div>
</form>


{/* Advantages */}
<div className="mt-[116px] flex flex-col gap-[15px]">
  <h3
    className="text-[#132219] font-sfpro font-bold mb-[75px]"
    style={{
      fontSize: "48px",
      lineHeight: "50px",
    }}
  >
    Your Advantages
  </h3>

 {/* First row → 2 cards */}
<div className="flex gap-[18px]">
{/* Card 1 → Direct path to the best offer */}
<div
  className="flex flex-col justify-between items-start rounded-[10px] bg-[#F6F6F6]"
  style={{
    width: "970px",
    height: "296px",
    padding: "18px 24px",
    gap: "10px",
  }}
>
  <h4
    className="text-[#3D3D3D] font-sfpro"
    style={{
      fontSize: "42px",
      fontWeight: 500,
      lineHeight: "50px",
    }}
  >
    Direct path to the best offer
  </h4>

  <p
    className="text-[#3D3D3D] font-sfpro"
    style={{
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    }}
  >
    You expect fast and reliable solutions—and we deliver them. With HYPOTEC,
    you receive a tailored mortgage offer within a short time, designed to match
    your individual needs. Our digital processes and extensive network of
    financing partners ensure you get the optimal offer without unnecessary
    detours.
  </p>
</div>


  {/* Card 2 → Easy Ownership */}
  <div
    className="flex justify-center items-center rounded-[10px] bg-[#F6F6F6]"
    style={{
      width: "550px",
      height: "296px",
      padding: "24px 16px",
      gap: "10px",
    }}
  >
    <h4
      className="text-[#3D3D3D] text-center font-sfpro"
      style={{
        fontSize: "42px",
        fontWeight: 500,
        lineHeight: "normal",
      }}
    >
      Easy <br/> Ownership
    </h4>
  </div>
</div>
{/* Second row → 2 cards */}
<div className="flex gap-[18px]">
{/* Card 3 → Transparency without image */}
<div
  className="flex flex-col font-sfpro justify-between items-start rounded-[10px] bg-[#F6F6F6]"
  style={{
    width: "914px",
    height: "296px",
    padding: "18px 24px",
    gap: "10px",
  }}
>
      <h4 className="text-[#3D3D3D]  font-sfpro text-[32px] font-semibold">
    Transparency
  </h4>

      <p className="text-[#3D3D3D] text-[14px] font-sfpro leading-[20px]">
    With HYPOTEC you enjoy full transparency and fair <br /> offers—without
    window interest rates.
  </p>
</div>


{/* Card 4 → Transparency (with image) */}
<div
  className="relative rounded-[10px] font-sfpro overflow-hidden"
  style={{
    width: "610px",
    height: "296px",
  }}
>
<img
  src="/images/F1.jpg"
  alt="Transparency"
  className="w-full h-full object-cover object-[center_10%]"
/>



  <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-[24px]">
    <h4 className="text-white font-sfpro text-[32px] font-semibold">
      Transparency
    </h4>
    <p className="text-white text-[14px] font-sfpro leading-[20px]">
      With HYPOTEC you enjoy full transparency and fair offers—
      without window interest rates
    </p>
  </div>
</div>

</div>

</div>


      </div>
    </section>
  );
};

export default FinanceForm;
