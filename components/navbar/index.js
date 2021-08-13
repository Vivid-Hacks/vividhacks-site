import styles from "./navbar.module.css";
import Image from "next/image";
import Svg from "../../public/logo.svg";
import Link from "next/link";
import * as fa from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import * as React from "react"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.toggleMobileNavbar = this.toggleMobileNavbar.bind(this);
    this.addEvLisner = this.addEvLisner.bind(this);
    this.menu = styles.linkContainer;
    this.menuStyling = {};
  }

  toggleMobileNavbar(close) {
    if (this.menuStyling.transform !== undefined || close === true) {
      this.menuStyling = {}
    } else {
      this.menuStyling = {
        transform: "translateX(200px)"
      }
    }
    this.forceUpdate();
    this.addEvLisner()
  }

  addEvLisner() {
    if (this.addedEvLisnr === true) return;
    this.addedEvLisnr = true;
    let elm = this;
    window.addEventListener("click", function (thing) {
      if (thing.target.tagName === "svg") return;
      elm.menuStyling = {};
      elm.forceUpdate()
    })
  }

  render() {

    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/"><h3 className={styles.logoText}>Vivid Hacks</h3></a>
          <a href="/"><img src="logo.svg" alt="logo.svg" style={{ width: "5rem" }} /></a>
          <a onClick={this.toggleMobileNavbar} className={styles.menuIcon} > <FontAwesomeIcon icon={fa.faBars} /></a>
        </div>
        <ul className={this.menu} style={this.menuStyling}>
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
  }
};

export default Navbar;
