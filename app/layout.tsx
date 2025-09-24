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
      <body>
        <Header />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  )
}
