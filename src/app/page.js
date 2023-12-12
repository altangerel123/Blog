"use client";

import Carousel from "@/components/Carousel";
import Trending from "@/components/Trending";
import Allblogpost from "@/components/Allblogpost";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-[100%] h-[100%]">
      <Carousel />
      <Trending />
      <Allblogpost />
    </div>
  );
}
