"use client";
import { useSearchParams } from "next/navigation";
import JsonWizard from "@/components/JsonWizard";

export default function WizardPage() {
  const searchParams = useSearchParams();
  const version = (searchParams.get("version") as "lite" | "full") || "lite";
  const mandatory = (searchParams.get("mandatory") as "all" | "some") || "all";

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <JsonWizard version={version} mandatory={mandatory} />
      </div>
    </div>
  );
}
