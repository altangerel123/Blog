"use client";
import { useEffect, useState } from "react";
import styles from "@/components/allblogpost.module.css";
import Link from "next/link";
export default function Allblogpost() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(12);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?per_page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsloading(false);
      });
  }, [page]);

  function handleMore() {
    setPage(page + 3);
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center bg-white">
        {isloading && (
          <div className="w-full h-[200px] flex items-center justify-center font-extrabold text-[30px]">
            Loading...
          </div>
        )}
        {!isloading && (
          <>
            <h2 className="text-[24px] font-bold my-[48px]">All Blog Post</h2>
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
            <div className="w-full flex justify-center">
              <button
                onClick={handleMore}
                className="mt-[100px] mb-[50px] px-[20px] rounded-[10px] border-[1px] py-[12px]"
              >
                Load More
              </button>
            </div>
          </>
        )}
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
