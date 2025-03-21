"use client";

import { Search } from "./Search";

export default function Header() {
  return (
    <div className="mx-w-full  flex justify-between  rounded-[5px] py-[20px]">
      <img src="Logo (1).png"></img>
      <div className=" gap-[100px] sm:flex hidden">
        <div className="flex items-center gap-[40px] justify-center">
          <a className="text-[20px] font-medium" href="/">
            Home
          </a>
          <a className="text-[20px] font-medium" href="/blog">
            Blog
          </a>
          <a className="text-[20px] font-medium" href="/contact">
            Contact
          </a>
        </div>
        <div className="flex relative justify-end items-end">
          <Search />
        </div>
      </div>
      <img className="sm:hidden cursor-pointer" src="menu-outline (1).png" />
    </div>
  );
}
