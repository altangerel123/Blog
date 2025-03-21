"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Allblogpost() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setIsloading(false);
      });
  }, [id]);

  return (
    <div className="w-full flex flex-col justify-center items-center bg-white pt-[100px]">
      {isloading && (
        <div className="w-full h-[200px] flex items-center justify-center font-extrabold text-[30px]">
          Loading...
        </div>
      )}
      {!isloading && (
        <>
          {post && <h1 className="font-semibold text-4xl">{post.title}</h1>}
          {post && <img className="" src={post.cover_image} />}
          {post && <p>{post.description}</p>}
          {post && <p>{post.published_timestamp}</p>}
        </>
      )}
    </div>
  );
}
