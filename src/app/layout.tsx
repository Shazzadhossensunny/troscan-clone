import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const archivoSans = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Troscan Clone - Landing Page",
  description:
    "A pixel-perfect clone of the Troscan Framer website built with Next.js",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Landing Page",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivoSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
