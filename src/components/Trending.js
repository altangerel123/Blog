import { useEffect, useState } from "react";
import styles from "./trending.module.css";
export default function Trending(props) {
  return (
    <div className={styles.card}>
      <div className="gap-[16px]">
        <p className={styles.type}>{props.technology}</p>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
      <img className={styles.image} src={props.img}></img>
    </div>
  );
}
