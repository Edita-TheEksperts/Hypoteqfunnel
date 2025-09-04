"use client"

import { useSearchParams } from "next/navigation"
import JsonWizard from "@/components/JsonWizard"

export default function WizardWrapper() {
  const searchParams = useSearchParams()
  const version = (searchParams.get("version") as "lite" | "full") || "lite"
  const mandatory = (searchParams.get("mandatory") as "all" | "some") || "all"

  return <JsonWizard version={version} mandatory={mandatory} />
}
