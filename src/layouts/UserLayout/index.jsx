import React from "react";
import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./style.module.css";

export default function UserLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
