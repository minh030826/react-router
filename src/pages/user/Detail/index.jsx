import React from "react";
import styles from "./style.module.css";
import { useParams } from "react-router";

export default function Detail() {
  const params = useParams();
  console.log("🚀 ~ Detail ~ params:", params);
  return (
    <div className={styles.detail}>
      <h1>Detail</h1>
      <h3>{params.productId}</h3>
      <h3>{params.optionId}</h3>
    </div>
  );
}
