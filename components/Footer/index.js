import React from "react";
import Link from "next/link";

import logo from "../../public/logo.png";
import styles from "./footer.module.css";

import { AiFillInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <img className={styles.footer__img} src={logo.src} alt="logo" />
      <div className={styles.footer__socials}>
        <Link href="https://www.instagram.com/vivid_hacks/" passHref>
          <a target="_blank">
            <AiFillInstagram />
          </a>
        </Link>

        <Link href="#" passHref>
          <a target="_blank">
            <SiTwitter />
          </a>
        </Link>
        <Link href="#" disable passHref>
          <a target="_blank">
            <RiLinkedinFill />
          </a>
        </Link>
        <Link href="https://discord.com/invite/yDkSt4VdNj" passHref>
          <a target="_blank">
            <FaDiscord />
          </a>
        </Link>
      </div>
      <div className={styles.footer__msg}>Hacking for everyone</div>
      <div className={styles.footer__copyright}>
        2021 © Vivid Hacks. All rights reserved{" "}
        <span style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>|</span>
        <Link passHref href="https://2021.vividhacks.tech/tos">
          Terms of Service
        </Link>
        <span style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>|</span>
        <Link passHref href="https://2021.vividhacks.tech/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
