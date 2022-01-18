import MobileMenu from "../MobileMenu";
import styles from "./navbar.module.css";
import logo from "../../public/logo.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logo.src} className={styles.img} alt="logo.png" />
          Vivid Hacks
        </div>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            DEVPOST
          </a>
          <a href="#" className={styles.link}>
            TIMELINE
          </a>
          <a href="#about" className={styles.link}>
            ABOUT
          </a>
          <a href="#" className={styles.link}>
            REGISTER
          </a>
          <a href="//2021.vividhacks.tk" className={styles.link}>
            2021 SITE
          </a>
        </div>
        <AiOutlineMenu
          onClick={() => setOpen(!open)}
          className={styles.menuButton}
        />
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
