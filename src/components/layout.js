"use client";
import "./globals.css";
import Header from "@/components/HeaderSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full flex justify-center bg-white">
        <div className="max-w-[1517px]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
