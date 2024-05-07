import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/ui/globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salus",
  description: "Salus OS",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
