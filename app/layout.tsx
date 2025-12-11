import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cepot Blower Bekasi – Jasa Blower & Events Premium",
  description:
    "Cepot Blower Bekasi menyediakan layanan blower berkualitas tinggi untuk event dan kebutuhan industri di Bekasi. Profesional, cepat, dan premium.",
  keywords: [
    "Cepot Blower Bekasi",
    "Blower Event Bekasi",
    "Layanan Blower Premium",
    "Event Bekasi",
    "Blower Profesional",
  ],
  authors: [{ name: "Cepot Blower Bekasi", url: "https://cepotblower.com" }],
  creator: "Cepot Blower Bekasi",
  metadataBase: new URL("https://cepotblower.com"),
  openGraph: {
    title: "Cepot Blower Bekasi – Jasa Blower & Events Premium",
    description:
      "Cepot Blower Bekasi menyediakan layanan blower berkualitas tinggi untuk event dan kebutuhan industri di Bekasi.",
    url: "https://cepotblower.com",
    siteName: "Cepot Blower Bekasi",
    images: [
      {
        url: "https://cepotblower.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cepot Blower Bekasi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cepot Blower Bekasi – Jasa Blower & Events Premium",
    description:
      "Cepot Blower Bekasi menyediakan layanan blower berkualitas tinggi untuk event dan kebutuhan industri di Bekasi.",
    images: ["https://cepotblower.com/og-image.jpg"],
    site: "@CepotBlower",
    creator: "@CepotBlower",
  },
  themeColor: "#f3efe7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
