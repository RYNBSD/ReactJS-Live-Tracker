import world from "../../SVGs/world.svg";
import mostEffected from "../../SVGs/mostEffected.svg";
import lessEffected from "../../SVGs/lessEffected.svg";
import styles from "./incex.module.css";

export default function AreasLeft() {
  return (
    <div className={styles["areas-left"]}>
      <div className={styles["areas-right-title"]}>
        <h1>Covid-19 Affected Areas</h1>
        <div className={styles["areas-right-title-affected"]}>
          <div className={styles["areas-right-title-affected-right"]}>
            <h3>Most affected</h3>
            <img src={mostEffected} alt="" />
          </div>
          <div className={styles["areas-right-title-affected-left"]}>
            <h3>Less Affected</h3>
            <img src={lessEffected} alt="" />
          </div>
        </div>
      </div>
      <div className={styles["areas-right-img"]}>
        <img src={world} alt="" />
      </div>
    </div>
  );
}
