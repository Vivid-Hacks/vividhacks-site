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
    const windowOffsetTop = window.innerHeight + window.scrollY;

    const elementBoxOffsetTop = element.offsetTop;
    if (windowOffsetTop >= elementBoxOffsetTop) {
      this.containerRef.current.classList.add("fade");
      console.log("added!");
    } else {
      this.containerRef.current.classList.remove("fade")
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
          <p className={styles.para}>Want to be our partner?</p>
          <button className={styles.button}>LEARN MORE</button>
        </div>
      </div>
    );
  }
};

export default Sponsor;
