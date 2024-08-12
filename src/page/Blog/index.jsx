import { BlogsCard, Button } from "../../components";
import { blogs } from "../../data/data";
import styles from "./index.module.css";

export default function Blog() {
  return (
    <div className={styles["liveTracker__blogs"]} id="blogs">
      <div className={`container ${styles["container"]}`}>
        <div className={styles["liveTracker__blogs-head"]}>
          <h1>Blog topics</h1>
        </div>
        <div className={styles["liveTracker__blogs-cards"]}>
          {blogs.map((blog) => (
            <BlogsCard key={blog.title} {...blog} />
          ))}
        </div>
        <div>
          <Button text="View all" />
        </div>
      </div>
    </div>
  );
}
