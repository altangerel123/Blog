"use client";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.blog}>
        <div className={styles.navbar}>
          <img src="Logo (1).png" className={styles.image}></img>
          <div className="w-[667px] flex items-center gap-[40px] justify-center">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="flex relative">
            <input
              type="search"
              placeholder="search"
              className={styles.input}
            ></input>
            <img
              src="search-outline.png"
              className="w-[25px] h-[25px] absolute top-[5px] left-[170px]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
