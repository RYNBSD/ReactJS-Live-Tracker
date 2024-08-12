import { HeaderBody, HeaderFooter, NavBar } from "../../components"
import styles from "./index.module.css"

export default function Header() {
  return (
    <header className={styles.liveTracker__header} id="home">
      <NavBar />
      <HeaderBody />
      <HeaderFooter />
      <div className={styles["more-space"]} />
    </header>
  )
}
