import styles from "./index.module.css";

export default function Cards({ title, topic }) {
  return (
    <div className={styles["liveTracker__card"]}>
      <h1>{title}</h1>
      <div className={`container ${styles["container"]}`}>
        {topic.map((t) => (
          <div key={t.title} className={styles["liveTracker__card-topic"]}>
            <img src={t.img} alt={t.title} />
            <h1>{t.title}</h1>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
