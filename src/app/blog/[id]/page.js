"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Allblogpost() {
  const { id } = useParams();
  const [post, setPost] = useState();
  if (!id) return;

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [id]);

  console.log(post);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1917px] flex flex-col gap-[30px] bg-white">
        <div className="px-[350px]">
          {post && <h1 className="font-semibold text-4xl">{post.title}</h1>}
          {post && <img className="" src={post.cover_image} />}
          {post && <p>{post.description}</p>}
          {post && <p>{post.published_timestamp}</p>}
        </div>
      </div>
    </div>
  );
}
