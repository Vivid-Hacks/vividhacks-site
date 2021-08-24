import Link from "next/link";
import logo from "../../public/logo.svg";
import styles from "./footer.module.css";
import { SiTwitter } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImLinkedin } from "react-icons/im";
import { SiDiscord } from "react-icons/si";
import React from "react";

class Footer extends React.Component {
  render() {
    if (typeof window === "object") {
      document.addEventListener("scroll", async function () {
        if (window.scrolledToBottom === true) return;
        function sleep(ms){
          return new Promise(resolve => setTimeout(resolve, ms))
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          window.scrolledToBottom = true;
          document.getElementById("footerFirst").style.transition = "1s all";
          document.getElementById("footerFirst").style.opacity = "0";
          await sleep(1000);
          document.getElementById("footerFirst").style.display = "none";
          document.getElementById("footerSecond").style.transition = "1s all";
          document.getElementById("footerSecond").style.display = "inline-flex";
          document.getElementById("footerSecond").style.opacity = "1";

        }
      })
    }
    return (
      <div className={styles.animate}>
        <div className={styles.container}>
          <img
            src="logo.svg"
            alt="logo.svg"
            style={{ width: "4rem", marginLeft: "auto", marginRight: "auto" }}
          />
          <div>
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
            <div id="footerFirst">
              Looks like you've reached the bottom of the page!<br></br> Here's some dumb legal jargon that no one understands
            </div>
            <div className={styles.bottom} id="footerSecond" style={{display: "none"}}>
              <p className={styles.copyright}>
                2021 © Vivid Hacks. All rights reserved &nbsp; |
              </p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link href="/tos">ToS</Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
