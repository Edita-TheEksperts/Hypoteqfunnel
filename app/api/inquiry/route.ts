import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    // Parse the incoming request body (JSON)
    const data = await req.json();
    console.log('Received data:', data); // Debugging step to ensure proper structure

const saved = await prisma.inquiry.create({
  data: {
    customerType: data.customerType || null,
    client: data.client ? { create: data.client } : undefined,
    project: data.project ? { create: data.project } : undefined,
    property: data.property
      ? {
          create: {
            artImmobilie: data.property.artImmobilie,
            artLiegenschaft: data.property.artLiegenschaft,
            nutzung: data.property.nutzung,
            renovation: data.property.renovation,
            renovationsBetrag: data.property.renovationsBetrag,
            reserviert: data.property.reserviert,
            finanzierungsangebote: data.property.finanzierungsangebote,
            angeboteListe: data.property.angeboteListe,
            kreditnehmer: {
              create: data.property.kreditnehmer, // Correctly nested "create"
            },
            firmen: {
              create: data.property.firmen,
            },
          },
        }
      : undefined,
    financing: data.financing ? { create: data.financing } : undefined,
    borrowers: data.borrowers
      ? { createMany: { data: data.borrowers } }
      : undefined,
  },
});

    // Return a success response
    return NextResponse.json({ success: true, inquiry: saved });
  } catch (err) {
    // Log error and return an error response
    console.error("❌ Failed to save inquiry:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
