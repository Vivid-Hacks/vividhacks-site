import styles from "./navbar.module.css";
import Image from "next/image";
import Svg from "../../public/logo.svg";
// import Link from "next/link";
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3 className={styles.logoText}>Vivid Hacks</h3>
        <img src={Svg.src} alt="logo.svg" style={{ width: "5rem" }} />
      </div>
      <ul className={styles.linkContainer}>
        <li className={styles.link}>
          <Link  href="#"> DEVPOST</Link>
        </li>
        <li className={styles.link}>
          <Link  to="team" smooth="true" duration="500" > TEAM</Link>
        </li>
        <li className={styles.link}>
          <Link   to="timeline" smooth="true" duration="500"> TIMELINE</Link>
        </li>
        <li className={styles.link}>
          <Link to="about" smooth="true" duration="500"> ABOUT</Link>
        </li>
        <li className={styles.link}>
          <Link  to="faqs" smooth="true" duration="500" > FAQs</Link>
        </li>
        <li className={styles.link}>
          <Link href="#"> REGISTER</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
