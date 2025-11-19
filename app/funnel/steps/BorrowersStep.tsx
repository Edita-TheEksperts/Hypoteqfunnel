"use client";
import { v4 as uuidv4 } from "uuid";

function BorrowersStep({ borrowers, setBorrowers, saveStep, back }: any) {
  const selectType = (type: "nat" | "jur") => {
    setBorrowers([
      {
        id: borrowers[0]?.id || uuidv4(),
        type: type,
      },
    ]);

    setTimeout(() => {
      saveStep();
    }, 200);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto pl-20 pr-48">

      {/* TITLE */}
      <h2 className="text-[48px] font-semibold text-[#132219] mb-8">
        Kreditnehmer?
      </h2>


      {/* CARDS */}
      <div className="flex gap-[26px] mb-12">

<div
  onClick={() => selectType("nat")}
  className={`
    w-[360px] h-[240px]
    rounded-[10px] cursor-pointer
    flex flex-col justify-between items-center
    p-8
    transition-all duration-200 border

    ${
      borrowers[0]?.type === "nat"
        ? "bg-[#CAF476] border-[#132219]"
        : "bg-white border-[#132219]"
    }

    hover:bg-[#CAF476]
  `}
>

          <img src="/images/44.svg" className="w-[100px] h-[80px]" />

          <div className="flex flex-col w-full items-center">
            <p className="text-[24px] text-[#132219] font-normal">
              Natürliche Person
            </p>
            <div className="w-full h-[1px] bg-[#132219] mt-2"></div>
          </div>
        </div>

        {/* JURISTISCHE PERSON */}

<div
  onClick={() => selectType("jur")}
  className={`
    w-[360px] h-[240px]
    rounded-[10px] cursor-pointer
    flex flex-col justify-between items-center
    p-8
    transition-all duration-200 border

    ${
      borrowers[0]?.type === "jur"
        ? "bg-[#CAF476] border-[#132219]"
        : "bg-white border-[#132219]"
    }

    hover:bg-[#CAF476]
  `}
>

          <img src="/images/43.svg" className="w-[100px] h-[80px]" />

          <div className="flex flex-col w-full items-center">
            <p className="text-[24px] text-[#132219] font-normal">
              Juristische Person
            </p>
            <div className="w-full h-[1px] bg-[#132219] mt-2"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BorrowersStep;
