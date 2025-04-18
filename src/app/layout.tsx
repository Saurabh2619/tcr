import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Toup from "./components/toup";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Guru Mantra",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NextTopLoader speed={1000} color="#2196f3" />
        <Navbar />
        
        {/* Content section with flex-grow to push footer down */}
        <main className="pt-16">{children}</main>

        <Toup />
        <Footer />
      </body>
    </html>
  );
}
