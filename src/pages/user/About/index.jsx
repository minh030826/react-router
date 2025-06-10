import React from "react";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>
        <Link to="/">Go to Home page</Link>
      </p>
      <button style={{ marginTop: 12 }} onClick={() => navigate("/")}>
        Go to Home page
      </button>
    </div>
  );
}
