// import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Toup from "./components/toup";
// import Slider from "./components/slider";
export const metadata: Metadata = {
  title: "The College Reviews",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        DT20256796004
        <Toup/>
        <Footer/>
      </body>
    </html>
  );
}