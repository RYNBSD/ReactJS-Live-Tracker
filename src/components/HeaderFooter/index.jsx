import global from "../../SVGs/global.svg";
import live from "../../SVGs/live.svg";
import styles from "./index.module.css";
import { virusStatus } from "../../data/data";
import StatusCard from "../StatusCard/index"

export default function HeaderFooter() {
  return (
    <div className={styles["liveTracker__header-footer"]}>
      <div className={styles["liveTracker__header-footer_global"]}>
        <div className={styles["liveTracker__header-footer_global-img"]}>
          <img src={global} alt="global" />
        </div>
        <div className={styles["liveTracker__header-footer_global-body"]}>
          <div
            className={styles["liveTracker__header-footer_global-body_title"]}
          >
            <h4>Status Overview</h4>
            <img src={live} alt="live" />
          </div>
          <div
            className={styles["liveTracker__header-footer_global-body_desc"]}
          >
            <h1>Global</h1>
            <box-icon name="chevron-down" />
          </div>
        </div>
      </div>
      {virusStatus.map((virus) => (
        <StatusCard key={virus.title} {...virus} />
      ))}
    </div>
  );
}
