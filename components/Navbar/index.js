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
        <div className={styles.bg} ref={this.bg} style={{ display: "none" }} onClick={() => { this.discordModal.current.style.display = "none"; this.bg.current.style.display = "none"; }}></div>
        <div className={styles.discord} style={{ display: "none" }} ref={this.discordModal} id="discordModal">
          <iframe src="https://discord.com/widget?id=873307975572402207&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          <br />
          <button onClick={() => { window.open("https://vivd.tk/discord") }} className={styles.joindiscord}><a href="#" target="_blank">Join Discord!</a></button>
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
    return (
      <div>
        <div className={styles.logo}>
          <CrossLink href="/">
            <a>
              <h3 className={styles.logoText}>Vivid Hacks<h6 className={styles.subLogo} style={{ display: "inline-block", margin: 0, marginLeft: "10px" }}>v1.5</h6></h3>
            </a>
          </CrossLink>
          <CrossLink href="/">
            <a>
              <img
                src="logo.svg"
                alt="logo"
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
            <Link to="team" smooth="true" duration="500">
              {" "}
              TEAM
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
              href="https://vividhacks-1-5.devpost.com/"
              target="_blank"
              className={styles.alink}
              rel="noreferrer"
            >
              {" "}
              REGISTER
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://2021.vividhacks.org"
              target="_blank"
              className={styles.alink}
              rel="noreferrer"
            >
              {" "}
              2021
            </a>
          </li>
        </ul>
      </div>
    );
  }
}


export default Navbar;
