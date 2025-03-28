"use client";

import Link from "next/link";
import styles from "./trending.module.css";
import { useEffect, useState } from "react";

export default function Trending() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=10000&per_page=4`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="flex justify-center flex-col py-[20px] gap-[20px] bg-white">
      <h1 className="text-[24px] font-bold">Trending</h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-[30px]">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <TrendingCard
                  img={post.cover_image}
                  title={post.title}
                  technology={post.type_of}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const TrendingCard = (props) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.text}>
          <p className={styles.type}>{props.technology}</p>
          <h1 className={styles.title}>{props.title}</h1>
        </div>
        <img className={styles.image} src={props.img}></img>
      </div>
    </div>
  );
};
