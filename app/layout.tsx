import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "NexaLab — Building Digital Systems of Tomorrow",
  description: "We craft high-performance digital systems, web platforms, and AI-powered solutions for enterprises and startups.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white text-slate-800">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
