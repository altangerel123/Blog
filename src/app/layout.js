"use client";
import "./globals.css";

import { createContext, useContext } from "react";

export const SearchAll = createContext();

export const useSearch = () => useContext(SearchAll);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full flex justify-center bg-white">
        <div className="w-[1500px]">{children}</div>
      </body>
    </html>
  );
}
