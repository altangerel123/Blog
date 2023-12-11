"use client";

import styles from "./carousel.module.css";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=9&per_page=9`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1917px] flex flex-col gap-[30px] bg-white">
        <div className="flex px-[350px] gap-[1000px] mt-[100px]">
          {posts.map((post) => {
            return (
              <div>
                <CarouselCard
                  img={post.cover_image}
                  title={post.title}
                  technology={post.type_of}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const CarouselCard = (props) => {
  return (
    <div>
      <div className={styles.card1}>
        <div className={styles.section}>
          <div className={styles.text1}>
            <p className={styles.type1}>{props.technology}</p>
            <h1 className={styles.title1}>{props.title}</h1>
          </div>
        </div>
        <img className={styles.image1} src={props.img} />
      </div>
      <div className="flex gap-[10px] w-full justify-end mt-[20px]">
        <button className="border-2 border-black px-[15px] py-[5px] rounded-[10px]">
          Left
        </button>
        <button className="border-2 border-black px-[15px] py-[5px] rounded-[10px]">
          Right
        </button>
      </div>
    </div>
  );
};
