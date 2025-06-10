import styles from "./style.module.css";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link to="/admin/dashboard" className={styles.navLink}>
          Dashboard
        </Link>
        <Link to="/admin/chart" className={styles.navLink}>
          Chart
        </Link>
        <Link to="/" className={styles.navLink}>
          Log out
        </Link>
      </nav>
    </div>
  );
}
