import styles from "./index.module.css";
import virus from "../../SVGs/virus.svg";

export default function FooterNav() {
  return (
    <div className={styles["footer-nav"]}>
      <div className={styles["footer-nav-logo"]}>
        <div className={styles["footer-nav-logo-img"]}>
          <img src={virus} alt="" />
          <h1>COVID-19</h1>
        </div>
        <p>
          DesignMamba an online marketplace built to cope with promising future
        </p>
      </div>
      <ul className={styles["footer-nav-useful-links"]}>
        <h1>USEFUL LINKS</h1>
        <li>
          <a href="#">Why?</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Carrers</a>
        </li>
        <li>
          <a href="#">Contract</a>
        </li>
      </ul>
      <div className={styles["footer-nav-contact-us-location"]}>
        <div>
          <h1>Contact Us</h1>
          <div>
            <p>Tel: +8801765668561</p>
            <p>support@designmamba.com</p>
          </div>
        </div>
        <div>
          <h1>Location</h1>
          <p>Lalmatia, Dhaka-1207</p>
        </div>
      </div>
      <div className={styles["keep-in-touch"]}>
        <h1>Keep In Touch</h1>
        <ul className={styles["social-media"]}>
          <li>
            <box-icon name="facebook" type="logo" color="#eb0065" />
          </li>
          <li>
            <box-icon name="youtube" type="logo" color="#eb0065" />
          </li>
          <li>
            <box-icon name="instagram" type="logo" color="#eb0065" />
          </li>
        </ul>
      </div>
    </div>
  );
}
