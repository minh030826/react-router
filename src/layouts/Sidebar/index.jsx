import styles from "./style.module.css";
import { Link, useLocation } from "react-router";

export default function Sidebar() {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link
          to="/admin/dashboard"
          className={`${styles.navLink} ${
            isActive("/admin/dashboard") ? styles.active : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/admin/chart"
          className={`${styles.navLink} ${
            isActive("/admin/chart") ? styles.active : ""
          }`}
        >
          Chart
        </Link>
        <Link to="/" className={styles.navLink}>
          Log out
        </Link>
      </nav>
    </div>
  );
}
