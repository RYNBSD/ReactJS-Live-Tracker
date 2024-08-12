import { FooterNav } from "../../components";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles["liveTracker__footer"]} id="footer">
      <div className={`container ${styles["container"]}`}>
        <FooterNav />
      </div>
      <div className={styles["split"]} />
      <div className={styles["liveTracker__footer-copyright"]}>
        <h2>&copy; designmamba, All Rights Reserved</h2>
      </div>
    </footer>
  );
}
