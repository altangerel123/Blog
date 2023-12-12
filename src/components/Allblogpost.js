"use client";
import { useEffect, useState } from "react";
import styles from "./allblogpost.module.css";
import { getData } from "./function";
import Link from "next/link";

export default function Allblogpost() {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(3);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("all");

  const getBlogs = async () => {
    try {
      const data = await getData(
        `https://dev.to/api/articles?per_page=${pages}&tag=${category}`
      );
      console.log(data);
      setPosts(data);
    } catch (err) {
      setError("Error, please try again");
    }
  };

  function handleMore() {
    setPages(pages + 3);
  }

  function getCategory(event) {
    setCategory(event.target.textContent.toLowerCase());
  }

  useEffect(() => {
    getBlogs();
  }, [pages, category]);

  return (
    <>
      <div className="w-full px-[350px]  flex flex-col justify-center bg-white">
        <h2 className="text-[24px] font-bold mb-[32px]">All Blog Post</h2>
        <div className="flex text-[20px] font-bold justify-between mb-[32px]">
          <div className="flex gap-[20px]">
            <button onClick={getCategory}>All</button>
            <button onClick={getCategory}>Design</button>
            <button onClick={getCategory}>Travel</button>
            <button onClick={getCategory}>Fashion</button>
            <button onClick={getCategory}>Trending</button>
          </div>
          <p>View All</p>
        </div>
        <div className={styles.posts}>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <AllblogpostCard
                    img={post.cover_image}
                    title={post.title}
                    technology={post.type_of}
                    timestamp={post.type_of}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center bg-white">
        <button
          onClick={handleMore}
          className="mt-[100px] mb-[50px] px-[20px] rounded-[10px] border-[1px] py-[12px]"
        >
          Load More
        </button>
      </div>
    </>
  );
}
const AllblogpostCard = (props) => {
  return (
    <div className={styles.cards}>
      <img src={props.img} className={styles.img} />
      <p className={styles.article}>{props.technology}</p>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.timestamp}>{props.timestamp}</p>
    </div>
  );
};
