"use client";
import { useEffect, useState } from "react";
import styles from "@/components/allblogpost.module.css";
import Link from "next/link";
export default function Allblogpost() {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=12&per_page=12`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsloading(false);
      });
  }, []);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[1917px] flex flex-col gap-[30px] bg-white">
          {isloading && (
            <div className="px-[350px] font-extrabold text-[30px]">
              Loading...
            </div>
          )}
          {!isloading && (
            <>
              <h2 className="text-[24px] px-[350px] font-bold">
                All Blog Post
              </h2>
              <div className={styles.posts}>
                {posts.map((post) => {
                  return (
                    <div key={post.id}>
                      <Link href={`/blog/${post.id}`}>
                        <AllblogpostCard
                          key={post.id}
                          title={post.title}
                          img={post.cover_image}
                          technology={post.type_of}
                          image={post.social_image}
                          timestamp={post.published_timestamp}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <p className="mt-[100px] mb-[50px] px-[20px] rounded-[10px] border-[1px] py-[12px]">
          Load More
        </p>
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
