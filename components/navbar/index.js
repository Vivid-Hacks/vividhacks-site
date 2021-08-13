import styles from "./navbar.module.css";
import Image from "next/image";
import Svg from "../../public/logo.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3 className={styles.logoText}>Vivid Hacks</h3>
        <a href="/"><img src="logo.svg" alt="logo.svg" style={{ width: "5rem" }} /></a>
      </div>
      <ul className={styles.linkContainer}>
        <li className={styles.link}>
          <Link href="#"> DEVPOST</Link>
        </li>
        <li className={styles.link}>
          <Link href="#"> TIMELINE</Link>
        </li>
        <li className={styles.link}>
          <Link href="#about"> ABOUT</Link>
        </li>
        <li className={styles.link}>
          <Link href="#faqs"> FAQs</Link>
        </li>
        <li className={styles.link}>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> REGISTER</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
