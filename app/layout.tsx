import type { Metadata } from "next"
import "@/styles/globals.css"
import Header from "@/components/layout/Header"

export const metadata: Metadata = {
  title: "Hypoteq",
  description: "Mortgage platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sfpro bg-white text-[#132219]">
        <Header />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  )
}
