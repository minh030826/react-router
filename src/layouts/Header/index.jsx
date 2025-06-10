import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="https://placehold.co/40x40" alt="" />
      <h2>Username</h2>
    </div>
  );
}
