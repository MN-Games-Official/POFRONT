import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: "Superior — AI-Powered Roblox Group Management",
    template: "%s | Superior",
  },
  description:
    "The premium AI-powered operations platform for serious Roblox groups. Applications, interviews, rank systems, and training — all in one platform.",
  keywords: [
    "Roblox",
    "group management",
    "AI",
    "applications",
    "interviews",
    "rank systems",
    "training",
  ],
  openGraph: {
    title: "Superior — AI-Powered Roblox Group Management",
    description:
      "The calm of efficient, secure Roblox management. Applications, interviews, rank systems, and training — all in one AI-powered platform.",
    type: "website",
    siteName: "Superior",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
