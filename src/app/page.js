"use client";

import Carousel from "@/components/Carousel";
import Trending from "@/components/Trending";
import Allblogpost from "@/components/Allblogpost";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="max-w-[1917px]  h-[100%]">
        <Carousel />
        <Trending />
        <Allblogpost />
      </div>
    </div>
  );
}
