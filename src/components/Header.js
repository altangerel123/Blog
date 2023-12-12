"use client";

export default function Header() {
  return (
    <div className=" max-w-full  flex border-[1px] justify-between px-[350px] bg-white py-[35px]">
      <img src="Logo (1).png"></img>
      <div className="flex items-center gap-[40px] justify-center">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex relative">
        <input type="search" placeholder="search" className=""></input>
        <img
          src="search-outline.png"
          className="w-[25px] h-[25px] absolute top-[5px] left-[170px]"
        ></img>
      </div>
    </div>
  );
}
