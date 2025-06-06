import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";


const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeelanJon | Freelance Web Developer UK",
  description:
    "I'm a UK based Web Developer and creative generalist offering end-to-end digital solutions for businesses. My core focus is on building high-performance websites with SEO and user experience in mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>        
            <Navbar />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
