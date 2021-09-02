import styles from "./sponser.module.css";
import * as useOnScreen from "../Hooks/isVisible";
import React, { useRef, useState } from "react"
class Sponsor extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    const element = this.containerRef.current;
    if (element) {
      const windowOffsetTop = window.innerHeight + window.scrollY;

      const elementBoxOffsetTop = element.offsetTop;
      if (windowOffsetTop >= elementBoxOffsetTop) {
        this.containerRef.current.classList.add("fade")
      } else {
        this.containerRef.current.classList.remove("fade")
      }
    }
  }
  render() {
    if (typeof window === 'object') {
      document.addEventListener("scroll", this.handleScroll, true);
    }
    return (
      <div ref={this.containerRef}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Sponsors</h2>
          <div className={styles.sponsorGrid}>
            <div className={styles.sponsor}>
              <a href="https://www.echoar.xyz/" target="_blank"><img src="/echoarlogo.png"></img></a>
              <div><span>Echo AR</span></div>
            </div>
            <div className={styles.sponsor}>
              <a href="https://hackclub.org" target="_blank"><img src="/hackclublogo.svg" width="318"></img></a>
              <div><span>Hack Club</span></div>
            </div>
          </div>
          <p className={styles.para}>Want to be our partner?</p>
          <button className={styles.button}><a href="mailto:vividhacks@gmail.com">LEARN MORE</a></button>
        </div>
      </div>
    );
  }
};

export default Sponsor;
