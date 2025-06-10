import React from "react";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <p>
        <Link to="/about">Go to About page</Link>
      </p>
      <button style={{ marginTop: 12 }} onClick={() => navigate("/about")}>
        Go to About page
      </button>
    </div>
  );
}
