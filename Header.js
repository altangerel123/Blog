"use client";

export default function Header() {
  return (
    <div className=" max-w-full flex gap-[200px] rounded-[5px] py-[20px] fixed z-[1]">
      <img src="Logo (1).png"></img>
      <div className=" gap-[100px] sm:flex hidden">
        <div className="flex items-center gap-[40px] justify-center">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="flex relative">
          <input
            type="search"
            placeholder="search"
            className="border-[#000] border-[2px] rounded-[5px]"
          ></input>
        </div>
      </div>
      <img className="sm:hidden flex justify-end" src="menu-outline.png" />
    </div>
  );
}
