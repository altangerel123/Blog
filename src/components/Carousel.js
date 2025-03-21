"use client";
import { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import Link from "next/link";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(3);
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isOnTransition, setIsOnTransition] = useState(false);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=10000&per_page=${pages}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="sm:block hidden max-w-[1917px] m-auto overflow-hidden ">
        <div
          className="w-[600%] m-auto flex "
          onTransitionStart={() => {
            setIsOnTransition(true);
          }}
          onTransitionEnd={() => {
            if (carouselIndex === 4) {
              setCarouselIndex(1);
              setWithTransition(false);
            }
            if (carouselIndex === 0) {
              setCarouselIndex(3);
              setWithTransition(false);
            }
            setIsOnTransition(false);
          }}
          style={{
            transform: `translateX(-${(100 * carouselIndex) / 6}%)`,
            transition: withTransition ? "300ms" : "none",
          }}
        >
          {posts.map((home) => (
            <div key={home.id}>
              <Link href={`/${home.id}`}>
                <CarouselCard
                  img={home.cover_image}
                  {...home}
                  date={home.readable_publish_date}
                />
              </Link>
            </div>
          ))}
          {posts.map((home) => (
            <div key={home.id}>
              <Link href={`/${home.id}`}>
                <CarouselCard
                  img={home.cover_image}
                  {...home}
                  date={home.readable_publish_date}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-end m-7">
          <button
            className="border-[1px] border-[#000] p-[20px] rounded-[100%] hover:bg-black hover:text-white"
            onClick={() => {
              if (isOnTransition) return;
              setCarouselIndex((prev) => prev - 1);
              setWithTransition(true);
              setIsOnTransition(true);
            }}
          >
            {"<"}
          </button>
          <button
            className="border-[1px] border-[#000] p-[20px] rounded-[100%] hover:bg-black hover:text-white"
            onClick={() => {
              if (isOnTransition) return;
              setCarouselIndex((prev) => prev + 1);
              setWithTransition(true);
              setIsOnTransition(true);
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

const CarouselCard = (props) => {
  return (
    <>
      <div className={styles.card1}>
        <div className={styles.section}>
          <div className={styles.text1}>
            <h1 className={styles.title1}>{props.title}</h1>
            <p className={styles.type1}>{props.technology}</p>
          </div>
        </div>
        <img className={styles.image1} src={props.img} />
      </div>
    </>
  );
};
