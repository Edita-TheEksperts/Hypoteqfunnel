import { NextResponse } from "next/server";
import "dotenv/config";

// 1. GET ACCESS TOKEN
async function getAccessToken() {
  const tenantId = process.env.SHAREPOINT_TENANT_ID!;
  const clientId = process.env.SHAREPOINT_CLIENT_ID!;
  const clientSecret = process.env.SHAREPOINT_CLIENT_SECRET!;

  const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials",
    scope: "https://graph.microsoft.com/.default",
  });

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = await res.json();
  if (!res.ok) throw new Error("Failed to get access token");

  return data.access_token;
}

// 2. UPLOAD DOCUMENT
export async function POST(req: Request) {
  try {
    console.log("📥 FILE UPLOAD REQUEST RECEIVED");

    const form = await req.formData();
    const file = form.get("file") as File;
const inquiryId = form.get("inquiryId") as string;
const email = form.get("email") as string;

if (!email) {
  return NextResponse.json({ error: "Missing email" }, { status: 400 });
}


    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    if (!inquiryId) {
      return NextResponse.json({ error: "Missing inquiryId" }, { status: 400 });
    }

    console.log("📄 File:", file.name, "Size:", file.size);
    console.log("🧩 Inquiry ID:", inquiryId);

    const token = await getAccessToken();

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const DRIVE_ID = process.env.DRIVE_ID!;
    const ROOT_FOLDER_ID = process.env.FOLDER_ID!;

    // ------------------------------------------
    // 1️⃣ CREATE INQUIRY FOLDER IF NOT EXISTS
    // ------------------------------------------
    console.log("📁 Creating folder for inquiry:", inquiryId);

    const folderCreateUrl = `https://graph.microsoft.com/v1.0/drives/${DRIVE_ID}/items/${ROOT_FOLDER_ID}/children`;

    const folderRes = await fetch(folderCreateUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
     name: email,

        folder: {},
        "@microsoft.graph.conflictBehavior": "rename",
      }),
    });

    const folderData = await folderRes.json();

    if (!folderRes.ok) {
      console.error("❌ FOLDER CREATION FAILED:", folderData);
      return NextResponse.json(folderData, { status: 500 });
    }

    const newFolderId = folderData.id;
    console.log("📂 Inquiry folder created:", newFolderId);

    // ------------------------------------------
    // 2️⃣ UPLOAD FILE INTO THAT FOLDER
    // ------------------------------------------
    const uploadUrl = `https://graph.microsoft.com/v1.0/drives/${DRIVE_ID}/items/${newFolderId}:/${file.name}:/content`;

    console.log("📡 Upload URL:", uploadUrl);

    const uploadRes = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": file.type || "application/octet-stream",
      },
      body: buffer,
    });

    const uploadData = await uploadRes.json();
    console.log("📤 SHAREPOINT RESPONSE:", uploadData);

    if (!uploadRes.ok) {
      console.error("❌ Upload failed:", uploadData);
      return NextResponse.json(uploadData, { status: 500 });
    }

    console.log("✅ FILE UPLOADED SUCCESSFULLY!");

    return NextResponse.json(uploadData);
  } catch (err) {
    console.error("💥 SERVER ERROR:", err);
    return NextResponse.json({ error: "Server error", details: err }, { status: 500 });
  }
}
