"use client";

import Trending from "@/components/Trending";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?per_page=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1917px] flex flex-col gap-[30px] bg-white">
        <h1 className="text-[24px] font-bold px-[350px]">Trending</h1>
        <div className="flex gap-[20px] px-[350px]">
          {posts.map((post) => {
            return (
              <Trending
                title={post.title}
                img={post.cover_image}
                technology={post.type_of}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
