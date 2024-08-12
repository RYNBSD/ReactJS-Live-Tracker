import styles from "./index.module.css";

export default function StatusCard({ img, title, num, percent, trend, red = false }) {
  return (
    <div className={styles["status"]}>
      <div className={styles["status-img"]}>
        <img src={img} alt={title} />
      </div>
      <div className={styles["status-body"]}>
        <h4>{title}</h4>
        <h1>{num}</h1>
        <div className={styles["percent"]}>
          <img src={trend} alt="trending" />
          <small className={`${styles.blue} ${red && styles.red}`}>
            {percent}
          </small>
        </div>
      </div>
    </div>
  );
}
