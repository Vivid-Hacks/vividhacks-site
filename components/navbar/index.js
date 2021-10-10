import { Link } from "react-scroll";
import CrossLink from "next/link";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import * as React from "react";
import styles from "./navbar.module.css";
import { render } from "react-dom";

var lineLeft = styles.lineLeft;
var lineRight = styles.lineRight;
var lineMiddle = styles.lineMiddle;

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.addEvLisner = this.addEvLisner.bind(this);
    this.menu = styles.linkContainer;
    this.menuStyling = {};
    this.navbarRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.discordModal = React.createRef();
    this.bg = React.createRef();
    this.callback = this.callback.bind(this)
  }

  addEvLisner() {
    if (this.addedEvLisnr === true) return;
    this.addedEvLisnr = true;
  }
  componentDidMount() {
    if (window.location.hostname.includes(".tk")){
      return window.location.href = "https://www.vividhacks.tech"+window.location.pathname
    }
    var oldThis = this;
    if (window.pageYOffset === 0) {
      this.navbarRef.current.style.background = "rgba(0, 0, 0, 0)"
    }
    window.addEventListener('scroll', this.handleScroll);
  }
  callback() {
    this.discordModal.current.style.display = "block"; this.bg.current.style.display = "inherit";
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if (!this.navbarRef.current) return;
    if (window.pageYOffset === 0) {
      this.navbarRef.current.style.background = "rgba(0, 0, 0, 0)"
    } else {
      this.navbarRef.current.style.background = ""
    }
  }
  render() {
    return (
      <div className={styles.container} ref={this.navbarRef}>
        <div className={styles.bg} ref={this.bg} style={{display: "none"}} onClick={() => { this.discordModal.current.style.display = "none"; this.bg.current.style.display = "none"; }}></div>
        <div className={styles.discord} style={{display: "none"}} ref={this.discordModal} id="discordModal">
          <iframe src="https://discord.com/widget?id=873307975572402207&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          <br />
          <button onClick={() => { window.open("https://discord.com/invite/yhHRz8ng") }} className={styles.joindiscord}><a href="#" target="_blank">Join Discord!</a></button>
        </div>
        <Content callback={this.callback} />
      </div>
    )
  }
}


class Content extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.toggleMobileNavbar = this.toggleMobileNavbar.bind(this);
    this.menu = styles.linkContainer;
    this.menuStyling = {};
  }


  toggleMobileNavbar(close) {
    if (this.menuStyling.transform !== undefined) {
      this.menuStyling = {};
      lineLeft = styles.lineLeft;
      lineRight = styles.lineRight;
      lineMiddle = styles.lineMiddle;
    } else {
      lineLeft = styles.lineLeftClose;
      lineRight = styles.lineRightClose;
      lineMiddle = styles.lineMiddleClose;
      this.menuStyling = {
        transform: "translateX(200px)",
      };
    }
    this.forceUpdate();
  }
  componentDidMount() {
    let elm = this;
    window.addEventListener("click", function (thing) {
      if (thing.target.tagName === "A" || thing.target.tagName === "HR") return;
      elm.menuStyling = {};
      lineLeft = styles.lineLeft;
      lineRight = styles.lineRight;
      lineMiddle = styles.lineMiddle;
      elm.forceUpdate();
    });
  }
  render() {
    if (typeof window !== "object") {
      return <div></div>
    }
    if (window.location.pathname === "/") {
      return (
        <div>
          <div className={styles.logo}>
            <CrossLink href="/">
              <a>
                <h3 className={styles.logoText}>Vivid Hacks</h3>
              </a>
            </CrossLink>
            <CrossLink href="/">
              <a>
                <img
                  src="logo.svg"
                  alt="logo.svg"
                  style={{ width: "5rem" }}
                />
              </a>
            </CrossLink>
            <a
              onClick={this.toggleMobileNavbar}
              className={styles.menuIcon}
            >
              <hr className={lineLeft}></hr>
              <hr className={lineMiddle}></hr>
              <hr className={lineRight}></hr>
            </a>
          </div>
          <ul className={this.menu} style={this.menuStyling}
            onClick={this.props.callback}
          >
            <li className={styles.link}>
              <a
                className={styles.alink}
                target="_blank"
              >
                {" "}
                DISCORD
              </a>
            </li>
            <li className={styles.link}>
              <Link href="/" smooth="true" duration="500">
                {" "}
                TEAM
              </Link>
            </li>
            <li className={styles.link}>
              <Link
                to="timeline"
                smooth="true"
                duration="500"
                className={styles.alink}
              >
                {" "}
                TIMELINE
              </Link>
            </li>
            <li className={styles.link}>
              <Link
                to="about"
                smooth="true"
                duration="500"
                className={styles.alink}
              >
                {" "}
                ABOUT
              </Link>
            </li>
            <li className={styles.link}>
              <Link
                to="faqs"
                smooth="true"
                duration="500"
                className={styles.alink}
              >
                {" "}
                FAQs
              </Link>
            </li>
            <li className={styles.link}>
              <a
                href="https://vividhacks.devpost.com/"
                target="_blank"
                className={styles.alink}
              >
                {" "}
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <div className={styles.logo}>
            <CrossLink href="/">
              <a>
                <h3 className={styles.logoText}>Vivid Hacks</h3>
              </a>
            </CrossLink>
            <CrossLink href="/">
              <a>
                <img
                  src="logo.svg"
                  alt="logo.svg"
                  style={{ width: "5rem" }}
                />
              </a>
            </CrossLink>
            <a
              onClick={this.toggleMobileNavbar}
              className={styles.menuIcon}
            >
              <hr className={lineLeft}></hr>
              <hr className={lineMiddle}></hr>
              <hr className={lineRight}></hr>
            </a>
          </div>
          <ul className={this.menu} style={this.menuStyling} onClick={this.props.callback}>
            <li className={styles.link}>
              <a
                className={styles.alink}
                target="_blank"
              >
                DISCORD
              </a>
            </li>
            <li className={styles.link}>
              <CrossLink href="/#team">
                <a> TEAM</a>
              </CrossLink>
            </li>
            <li className={styles.link}>
              <CrossLink href="/#timeline">
                <a className={styles.alink}> TIMELINE</a>
              </CrossLink>
            </li>
            <li className={styles.link}>
              <CrossLink href="/#about">
                <a className={styles.alink}> ABOUT</a>
              </CrossLink>
            </li>
            <li className={styles.link}>
              <CrossLink href="/#faqs">
                <a className={styles.alink}> FAQs</a>
              </CrossLink>
            </li>
            <li className={styles.link}>
              <a
                href="https://vividhacks.devpost.com/"
                target="_blank"
                className={styles.alink}
              >
                {" "}
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      );
    }
  }
}


export default Navbar;
