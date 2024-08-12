import styles from "./index.module.css"

export default function CountryCard({ img, country, num }) {
  return (
    <div className={styles["country"]}>
      <div className={styles["country-img"]}>
        <img src={img} alt={country} />
        <h4>{country}</h4>
      </div>
      <div className={styles["country-num"]}>
        <p>{num}</p>
      </div>
    </div>
  )
}
