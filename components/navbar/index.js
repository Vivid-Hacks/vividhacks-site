
import { Link } from "react-scroll";
import Image from "next/image";
import * as fa from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import * as React from "react"
import Svg from "../../public/logo.svg";
import styles from "./navbar.module.css";

var lineLeft = styles.lineLeft;
var lineRight = styles.lineRight;
var lineMiddle = styles.lineMiddle;

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
    if (this.menuStyling.transform !== undefined) {
      this.menuStyling = {}
      lineLeft = styles.lineLeft;
      lineRight = styles.lineRight;
      lineMiddle = styles.lineMiddle;
    } else {
      lineLeft = styles.lineLeftClose;
      lineRight = styles.lineRightClose;
      lineMiddle = styles.lineMiddleClose;
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
      if (thing.target.tagName === "A" || thing.target.tagName === "HR") return;
      elm.menuStyling = {};
      lineLeft = styles.lineLeft;
      lineRight = styles.lineRight;
      lineMiddle = styles.lineMiddle;
      elm.forceUpdate()
    })
  }

  render() {

    return (
      <div className={styles.animate}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/"><h3 className={styles.logoText}>Vivid Hacks</h3></a>
          <a href="/"><img src="logo.svg" alt="logo.svg" style={{ width: "5rem" }} /></a>
          <a onClick={this.toggleMobileNavbar} className={styles.menuIcon} >
            <hr className={lineLeft}></hr>
            <hr className={lineMiddle}></hr>
            <hr className={lineRight}></hr>
          </a>
        </div>
        <ul className={this.menu} style={this.menuStyling}>
          <li className={styles.link}>
            <a href="https://vividhacks.devpost.com/" className={styles.alink} target="_blank"> DEVPOST</a>
          </li>
          <li className={styles.link}>
            <Link to="team" smooth="true" duration="500"> TEAM</Link>
          </li>
          <li className={styles.link}>
            <Link to="timeline" smooth="true" duration="500" className={styles.alink}> TIMELINE</Link>
          </li>
          <li className={styles.link}>
            <Link to="about" smooth="true" duration="500" className={styles.alink}> ABOUT</Link>
          </li>
          <li className={styles.link}>
            <Link to="faqs" smooth="true" duration="500" className={styles.alink}> FAQs</Link>
          </li>
          <li className={styles.link}>
            <a href="https://vividhacks.devpost.com/" target="_blank" className={styles.alink}> REGISTER</a>
          </li>
        </ul>
      </div>
      </div>
    );
  }
};

export default Navbar;
