"use client";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../components/function";

export const SearchAll = createContext();

export const useSearch = () => useContext(SearchAll);

export default function RootLayout({ children }) {
  const [value, setValue] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getData(`https://dev.to/api/articles?page=${pages}`);
      setBlogs(data);
    };
    getBlogs();
  }, [pages]);

  return (
    <html lang="en">
      <body className="w-full flex justify-center bg-white">
        <SearchAll.Provider value={{ value, setValue, blogs, setBlogs }}>
          <div className="w-[1500px]">
            <Header />
            {children}
            <Footer />
          </div>
        </SearchAll.Provider>
      </body>
    </html>
  );
}
