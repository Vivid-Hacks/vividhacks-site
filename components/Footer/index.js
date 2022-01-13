import React from "react";
import Link from "next/link";

import logo from "../../public/logo.png";
import styles from "./footer.module.css"; 

import { AiFillInstagram} from "react-icons/ai";
import { SiTwitter} from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri"
import { FaDiscord } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <img className={styles.footer__img} src={logo.src} alt="logo"/>
      <div className={styles.footer__socials}>

        <Link href="https://instagram.com" passHref>
          <a target="_blank">
            <AiFillInstagram />
          </a>
        </Link>

        <Link href="https://instagram.com" passHref>
          <a target="_blank">
            <SiTwitter />
          </a>
        </Link>
        <Link href="https://instagram.com" passHref>
          <a target="_blank">
            <RiLinkedinFill />
          </a>
        </Link>
        <Link href="https://instagram.com" passHref>
          <a target="_blank">
            <FaDiscord /> 
          </a>
        </Link>
      </div>
      <div className={styles.footer__msg}>
        Hacking for everyone
      </div>
      <div className={styles.footer__copyright}>
        2021 © Vivid Hacks. All rights reserved
      </div>
    </div>
  )
}

export default Footer;
