"use client";

import Carousel from "@/components/Carousel";
import Trending from "@/components/Trending";
import Allblogpost from "@/components/Allblogpost";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Carousel />
      <Trending />
      <Allblogpost />
    </>
  );
}
