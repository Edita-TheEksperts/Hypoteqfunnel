"use client"

import { useSearchParams } from "next/navigation"
import JsonWizard from "@/components/JsonWizard"

export default function WizardWrapper() {
  const searchParams = useSearchParams()
  const version = (searchParams.get("version") as "internal" | "external") || "internal"

  return <JsonWizard version={version} />
}
