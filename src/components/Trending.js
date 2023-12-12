"use client";

import styles from "./trending.module.css";
import { useEffect, useState } from "react";

export default function Trending() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=5&per_page=4`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="w-full flex justify-center flex-col py-[100px] gap-[20px] bg-white">
      <h1 className="text-[24px] font-bold px-[350px]">Trending</h1>
      <div className="flex min-[390px]:gap-[30px] min-[390]:flex-col gap-[20px] px-[350px]">
        {posts.map((post) => {
          return (
            <div>
              <TrendingCard
                img={post.cover_image}
                title={post.title}
                technology={post.type_of}
              />
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
