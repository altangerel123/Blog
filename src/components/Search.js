import { useContext, useState } from "react";

import { Searchh } from "@/app/layout";


export function Search() {
  const { searchValue, setSearchValue, blogs } = useContext(Searchh);

  const inputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="relative">
      <div className="md:flex md:justify-center md:items-center bg-[#F4F4F5] gap-[12px] md:pl-4 md:pt-2 md:pr-2 md:pb-2 md:w-[166px] h-[36px] md:mr-[50px]">
        <input
          className="text-black bg-[#F4F4F5]  md:w-[114px] md:h-[36px] border-0"
          input="text"
          placeholder="Search"
          onChange={inputHandler}
          value={searchValue}
        ></input>
      </div>
    </div>
  );
}
