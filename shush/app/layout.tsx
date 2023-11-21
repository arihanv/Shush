import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: "Shush",
  description:
    "A demo showcasing the power of WhisperV3 with enhancements from Insanely-Fast-Whisper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Toaster />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
