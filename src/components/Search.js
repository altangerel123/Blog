"use client";
import { SearchAll } from "@/app/layout";
import { useContext } from "react";

export function Search() {
  const { setBlogs, dlogs } = useContext(SearchAll);
  const inputHandler = (e) => {
    setBlogs(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="relative">
      <input
        className="text-black bg-[#F4F4F5] p-[10px]  mx:w-[114px] md:h-[36px] rounded-[20px]]"
        input="text"
        placeholder="Search..."
        onChange={inputHandler}
        value={dlogs}
      ></input>
    </div>
  );
}
