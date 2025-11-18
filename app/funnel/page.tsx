"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFunnelStore } from "@/lib/funnelStore";

export default function StartFunnel() {
  const router = useRouter();
  const { customerType, setCustomerType, setClient } = useFunnelStore();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Erforderlich";
    if (!formData.lastName.trim()) newErrors.lastName = "Erforderlich";
    if (!formData.email.trim()) newErrors.email = "Erforderlich";
    if (!formData.zip.trim()) newErrors.zip = "Erforderlich";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleWeiter = () => {
  if (!validateForm()) return;

  setCustomerType("direct");  // ← FIX
  setClient(formData);

  router.push("/funnel/project");
};



  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="max-w-[820px] w-full flex flex-col items-center text-center">

        {/* TITLE */}
        <h1
          className="
            text-[#132219]
            font-normal
            text-[48px]
            leading-[57px]
            tracking-[-0.5px]
            font-[SF Pro Display]
          "
        >
          Starten Sie Ihre Hypothekanfrage
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            text-[#132219]
            text-[24px]
            leading-[28px]
            mt-2
            mb-10
          "
        >
          Teilen Sie uns ein paar Basisdaten mit, damit wir Ihr Angebot vorbereiten können.
        </p>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">

          {/* firstName */}
          <div>
            <label className="text-sm font-medium">Vorname</label>
            <input
              type="text"
              name="firstName"
              placeholder="Bitte geben Sie Ihren Vornamen ein"
              onChange={handleChange}
              className={`mt-1 w-full rounded-full border px-4 py-2 focus:ring-2 focus:ring-black outline-none
                ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          {/* lastName */}
          <div>
            <label className="text-sm font-medium">Nachname</label>
            <input
              type="text"
              name="lastName"
              placeholder="Nachname"
              onChange={handleChange}
              className={`mt-1 w-full rounded-full border px-4 py-2 focus:ring-2 focus:ring-black outline-none
                ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>

          {/* email */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className={`mt-1 w-full rounded-full border px-4 py-2 focus:ring-2 focus:ring-black outline-none
                ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* zip */}
          <div>
            <label className="text-sm font-medium">ZIP Code</label>
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              onChange={handleChange}
              className={`mt-1 w-full rounded-full border px-4 py-2 focus:ring-2 focus:ring-black outline-none
                ${errors.zip ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
          </div>

        </div>
        <div className="w-full flex items-center justify-between mt-10">

<p className="text-sm text-gray-600">
  Sind Sie Partner?{" "}
  <span
    className="underline cursor-pointer"
    onClick={() => {
      if (!validateForm()) return;

      setClient(formData);
      setCustomerType("partner");
   router.push("/funnel/project"); 

    }}
  >
    Hier klicken, um fortzufahren
  </span>
</p>


          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-6 py-2 rounded-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100 transition"
            >
              Go to home page
            </Link>

            <button
              className="px-8 py-2 rounded-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium transition"
              onClick={handleWeiter}
            >
              Weiter
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
