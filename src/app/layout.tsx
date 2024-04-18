import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SparklesBackground from "@/components/sparkles/sparklesBackground";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aboutapoo",
  description: "my own portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        <SparklesBackground />
        {children}</body>
    </html>
  );
}
