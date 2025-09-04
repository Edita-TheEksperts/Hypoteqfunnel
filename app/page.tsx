"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hypoteq Funnel Setup
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          The funnel system is configured according to project requirements.
          There are two main versions:{" "}
          <span className="font-semibold text-gray-800">
            Full Funnel (Hypoteq Internal)
          </span>{" "}
          and{" "}
          <span className="font-semibold text-gray-800">
            Light Funnel (Sales Partners / Clients)
          </span>
          . Each version includes two setups: one with all mandatory fields, and
          one with only some mandatory fields.
        </p>
      </div>

      {/* Funnel Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Internal Full */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              1. Internal Full
            </h2>
            <p className="text-gray-600 mb-6">
              Hypoteq Internal – all fields mandatory.
            </p>
          </div>
          <Link
            href="/wizard?version=full&mandatory=all"
            className="inline-block px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 text-center"
          >
            Go to Funnel
          </Link>
        </div>

        {/* Internal Light */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              2. Internal Light
            </h2>
            <p className="text-gray-600 mb-6">
              Hypoteq Internal – only some fields mandatory.
            </p>
          </div>
          <Link
            href="/wizard?version=full&mandatory=some"
            className="inline-block px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 text-center"
          >
            Go to Funnel
          </Link>
        </div>

        {/* External Full */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              3. External Full
            </h2>
            <p className="text-gray-600 mb-6">
              Sales Partners / Clients – all fields mandatory.
            </p>
          </div>
          <Link
            href="/wizard?version=lite&mandatory=all"
            className="inline-block px-5 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 text-center"
          >
            Go to Funnel
          </Link>
        </div>

        {/* External Light */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              4. External Light
            </h2>
            <p className="text-gray-600 mb-6">
              Sales Partners / Clients – only some fields mandatory.
            </p>
          </div>
          <Link
            href="/wizard?version=lite&mandatory=some"
            className="inline-block px-5 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 text-center"
          >
            Go to Funnel
          </Link>
        </div>
      </div>

      {/* Footer Explanation */}
      <div className="mt-12 max-w-3xl text-center text-gray-500">
        <p>
          <span className="font-semibold text-gray-700">Result:</span> 4 unique
          URLs created:
          <br />
          1. Internal Full
          <br />
          2. Internal Light
          <br />
          3. External Full
          <br />
          4. External Light
        </p>
      </div>
    </div>
  );
}
