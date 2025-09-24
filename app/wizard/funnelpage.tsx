/*"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center px-6 py-12">
    
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hypoteq Funnel Setup
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          The funnel system provides two main versions:{" "}
          <span className="font-semibold text-gray-800">
            Internal Funnel (Hypoteq Internal)
          </span>{" "}
          and{" "}
          <span className="font-semibold text-gray-800">
            External Funnel (Sales Partners / Clients)
          </span>
          . Both versions are configured without mandatory fields.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">

        <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              1. Internal Funnel
            </h2>
            <p className="text-gray-600 mb-6">
              Hypoteq Internal – no mandatory fields.
            </p>
          </div>
          <Link
            href="/wizard?version=internal"
            className="inline-block px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 text-center"
          >
            Go to Funnel
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              2. External Funnel
            </h2>
            <p className="text-gray-600 mb-6">
              Sales Partners / Clients – no mandatory fields.
            </p>
          </div>
          <Link
            href="/wizard?version=external"
            className="inline-block px-5 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 text-center"
          >
            Go to Funnel
          </Link>
        </div>
      </div>

      <div className="mt-12 max-w-3xl text-center text-gray-500">
        <p>
          <span className="font-semibold text-gray-700">Result:</span> 2 unique
          URLs created:
          <br />
          1. Internal Funnel – no mandatory fields
          <br />
          2. External Funnel – no mandatory fields
        </p>
      </div>
    </div>
  );
}*/
