import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Preloader from "@/components/preloader"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ComingSoon from "@/components/coming-soon"

const geistSans = Geist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "KeelanJon | New Website Coming Soon",
  description:
    "KeelanJon is rebuilding this website. A new portfolio experience is on the way soon.",
}

export default function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <Preloader />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>
            <ComingSoon />
          </main>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
