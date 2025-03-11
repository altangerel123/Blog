"use client";
import { SearchAll } from "@/app/layout";
import { useContext } from "react";

export function Search() {
  const { searchValue, setSearchValue } = useContext(SearchAll);
  const inputHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="relative">
      <input
        className="text-black bg-[#F4F4F5] p-[10px]  mx:w-[114px] md:h-[36px] rounded-[10px]]"
        input="text"
        placeholder="Search"
        onChange={inputHandler}
        value={searchValue}
      ></input>
    </div>
  );
}
