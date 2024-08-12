import Button from "../Button";
import emo from "../../SVGs/emo.svg";
import styles from "./index.module.css";

export default function HeaderBody() {
  return (
    <div className={styles["liveTracker__header-body"]}>
      <div className={`container ${styles["container"]}`}>
        <div className={styles["liveTracker__header-body_right"]}>
          <h1>COVID-19 Live Tracker</h1>
          <p>
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
            in December 2019, the outbreak was later recognized as a pandemic by
            the World Health Organization (WHO) on 11 March 2020.
          </p>
          <div className={styles["liveTracker__header-body_right-button"]}>
            <Button text="How to Protect" />
            <Button text="FIND A DOCTOR" transparent />
          </div>
        </div>
        <div className={styles["liveTracker__header-body_left"]}>
          <img src={emo} alt="emo" />
        </div>
      </div>
    </div>
  );
}
