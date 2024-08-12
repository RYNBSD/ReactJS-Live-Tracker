import styles from "./index.module.css";

export default function Button({ text = "", transparent = false }) {
  return (
    <button
      type="button"
      className={`${styles["btn"]} ${transparent && styles["makeTransparent"]}`}
    >
      {text}
    </button>
  );
}
