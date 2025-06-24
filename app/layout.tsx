import type React from "react"
import type { Metadata } from "next"
import { Bodoni_Moda, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Amaraa Aviation Group - Excellence in Aviation",
  description:
    "Premium aviation services including passenger flights, cargo operations, and charter services. Part of the Amaraa Holding network.",
  keywords: "aviation, flights, cargo, charter, Amaraa, airline, transportation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodoniModa.variable} ${montserrat.variable} font-montserrat antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
