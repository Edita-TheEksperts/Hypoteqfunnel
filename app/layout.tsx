import ".././styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hypoteq",
  description: "Hypoteq Funnel and Marketing Pages",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
