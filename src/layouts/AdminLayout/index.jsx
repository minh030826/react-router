import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router";
import styles from "./style.module.css";

export default function AdminLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
