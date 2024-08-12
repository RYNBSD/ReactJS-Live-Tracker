import styles from "./index.module.css";

export default function BlogsCard({ img, title, desc, time }) {
  return (
    <div className={styles["blog-card"]}>
      <div className={styles["blog-card-img"]}>
        <img src={img} alt="image" width="100%" height={174} loading="lazy" />
      </div>
      <div className={styles["blog-card-body"]}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles["details"]}>
          <small className={styles["time"]}>{time}</small>
          <small className={styles["read-more"]}>read more</small>
        </div>
      </div>
    </div>
  );
}
