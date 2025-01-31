import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb Clone Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* ✅ Header */}
          <Header />

          {/* ✅ Navbar (Add Navbar Component Here) */}
          <Navbar />

          {/* ✅ SearchBox (Add SearchBox Component Here) */}

          {/* ✅ Main Content */}
          <main className="container mx-auto px-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
