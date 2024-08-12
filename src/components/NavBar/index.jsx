import styles from "./index.module.css";

import virus from "../../SVGs/virus.svg";

export default function NavBar() {
  return (
    <nav className={styles["liverTracker__header-navbar"]}>
      <div className={`container ${styles["container"]}`}>
        <div className={styles["liveTracker__header-navbar_logo"]}>
          <img src={virus} alt="Virus logo" />
          <h1>COVID-19</h1>
        </div>
        <ul className={styles["liveTracker__header-navbar_list"]}>
          <li className={styles["liveTacker__header-navbar_list-item"]}>
            <a
              href="#home"
              className={styles["liveTracker__header-navbar_list-link"]}
            >
              Home
            </a>
          </li>
          <li className={styles["liveTacker__header-navbar_list-item"]}>
            <a
              href="#home"
              className={styles["liveTracker__header-navbar_list-link"]}
            >
              Our Results
            </a>
          </li>
          <li className={styles["liveTacker__header-navbar_list-item"]}>
            <a
              href="#home"
              className={styles["liveTracker__header-navbar_list-link"]}
            >
              Blogs
            </a>
          </li>
          <li className={styles["liveTacker__header-navbar_list-item"]}>
            <a
              href="#home"
              className={styles["liveTracker__header-navbar_list-link"]}
            >
              Footer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
