import { AreasLeft, AreasRight } from "../../components"
import styles from "./index.module.css";

export default function Areas() {
  return (
    <div className={styles["liveTracker__areas"]}>
      <div className={`container ${styles["container"]}`}>
        <div className={styles["liveTracker__ares-left"]}>
          <AreasLeft />
        </div>
        <div className={styles["liveTracker__ares-right"]}>
          <AreasRight />
        </div>
      </div>
    </div>
  );
}
