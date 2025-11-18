"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFunnelStore } from "@/lib/funnelStore";

export default function StartFunnel() {
  const router = useRouter();
  const { customerType, setCustomerType, setClient, reset } = useFunnelStore();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  // ❗ Heqim komplet errors
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWeiter = () => {
    // ❗ Nuk bëjmë më validim — direkt ruajmë dhe kalojmë
    setCustomerType("direct");
    setClient(formData);

    router.push("/funnel/project");
  };

  return (
    <div className="W-full min-h-screen flex items-center justify-center px-4">
      <div className="max-w-[820px] w-full flex flex-col items-center text-center">

        {/* MESAZHI KUR JEMI PARTNER */}
        {customerType === "partner" && (
          <p className="text-green-700 text-lg font-medium mb-4">
            Sie befinden sich im Partner-Modus.
          </p>
        )}

        <h1 className="text-[#132219] font-normal text-[48px] leading-[57px] tracking-[-0.5px]">
          Starten Sie Ihre Hypothekanfrage
        </h1>

        <p className="text-[#132219] text-[24px] leading-[28px] mt-2 mb-10">
   ar Basisdaten mit, damit wir Ihr Angebot vorbereiten können.
        </p>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
          <div>
            <label className="text-sm font-medium">Vorname</label>
            <input
              type="text"
              name="firstName"
              placeholder="Bitte geben Sie Ihren Vornamen ein"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full rounded-full border px-4 py-2 outline-none border-gray-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Nachname</label>
            <input
              type="text"
              name="lastName"
              placeholder="Nachname"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full rounded-full border px-4 py-2 outline-none border-gray-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-full border px-4 py-2 outline-none border-gray-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium">ZIP Code</label>
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              className="mt-1 w-full rounded-full border px-4 py-2 outline-none border-gray-300"
            />
          </div>
        </div>

        {/* PARTNER LINK */}
        <div className="w-full mt-6 text-left">
          <p className="text-sm text-gray-600">
            Sind Sie Partner?{" "}
            <button
              type="button"
              className="text-blue-600 underline"
              onClick={() => {
                reset();
                setCustomerType("partner");
              }}
            >
              Hier klicken, um fortzufahren
            </button>
          </p>
        </div>

        <div className="w-full flex items-center justify-between mt-10">
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
  );
}
