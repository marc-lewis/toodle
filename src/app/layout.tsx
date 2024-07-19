import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Toodle",
  description: "Michael Proof Wordle!",
}

/**
 * Default layout for the app
 * @param root0 The RootLayout props
 * @param root0.children The children of the RootLayout
 * @returns The RootLayout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
