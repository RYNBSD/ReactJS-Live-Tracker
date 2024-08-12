import { countries } from "../../data/data";
import CountryCard from "../CountryCard/index";
import styles from "./index.module.css";

export default function AreasRight() {
  return (
    <div className={styles["areas-right"]}>
      <div className={styles["areas-right-search"]}>
        <div className={styles["areas-right-search-input"]}>
          <input type="search" placeholder="Filter to a location" />
        </div>
        <div className={styles["areas-right-search-global"]}>
          <h4>Global</h4>
          <h4>1,245,347</h4>
        </div>
      </div>
      <div />
      <div className={styles["areas-right-countries"]}>
        {countries.map((country) => (
          <CountryCard key={country.country} {...country} />
        ))}
      </div>
    </div>
  );
}
