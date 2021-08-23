import Link from "next/link";
import logo from "../../public/logo.svg";
import styles from "./footer.module.css";
import { SiTwitter } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImLinkedin } from "react-icons/im";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.animate}>
    <div className={styles.container}>
      <img
        src="logo.svg"
        alt="logo.svg"
        style={{ width: "3rem", marginLeft: "auto", marginRight: "auto" }}
      />
      <p className={styles.heading}>Vivid Hacks</p>
      <div className={styles.iconLinks}>
        <Link href="#" passHref>
          <SiTwitter className={styles.link} />
        </Link>
        <Link href="#" passHref>
          <CgInstagram className={styles.link} />
        </Link>
        <Link href="#" passHref>
          <ImLinkedin className={styles.link} />
        </Link>
        <a href="https://discord.gg/yDkSt4VdNj" target="_blank">
          <SiDiscord className={styles.link} />
        </a>
      </div>
      <p className={styles.para}>Hacking For Everyone</p>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          2021 © Vivid Hacks. All rights reserved &nbsp; |
        </p>
        <Link href="/privacy-policy">Privacy Policy</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/tos">ToS</Link>
      </div>
    </div>
    </div>
  );
};

export default Footer;
