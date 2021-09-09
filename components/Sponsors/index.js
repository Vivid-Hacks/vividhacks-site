import styles from "./sponser.module.css";
import * as useOnScreen from "../Hooks/isVisible";
import React, { useRef, useState } from "react"
class Sponsor extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.modalRef = React.createRef();
    this.modalBtn = React.createRef();
    this.coverBG = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
    this.openModal = this.openModal.bind(this);
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
  openModal(){
    this.modalRef.current.style.display = "block";
    this.coverBG.current.style.display = "block";
  }
  render() {
    var classThis = this;
    if (typeof window === 'object') {
      document.addEventListener("scroll", this.handleScroll, true);
      document.addEventListener("click", function(event){
        if (classThis.modalRef.current.contains(event.target)){
        }else{
          if (classThis.modalBtn.current.contains(event.target)) return;
          classThis.modalRef.current.style.display = "none"
          classThis.coverBG.current.style.display = "none"
        }
      })
    }
    return (
      <div ref={this.containerRef}>
        <div className={styles.modal} ref={this.modalRef} style={{display: "none"}}>
          <iframe src="https://bank.hackclub.com/donations/start/vivid-hacks"></iframe>
        </div>
        <div className={styles.cover} ref={this.coverBG} style={{display: "none"}}></div>
        <div className={styles.container}>
          <h2 className={styles.heading}>Sponsors</h2>
          <div className={styles.sponsorGrid}>
            {/* <div className={styles.sponsor}>
              <a href="https://www.echoar.xyz/" target="_blank"><img src="/echoarlogo.png"></img></a>
              <div><span>Echo AR</span></div>
            </div> */}
            <div className={styles.sponsor}>
              <a href="https://hackclub.org" target="_blank"><img src="/hackclublogo.svg" width="318"></img></a>
              <div><span>Hack Club</span></div>
            </div>
          </div>
          <p className={styles.para}>Want to be our partner?</p>
          <button className={styles.button} style={{marginBottom: 0}}><a href="mailto:vividhacks@gmail.com">LEARN MORE</a></button>
          <p className={styles.para}>Or </p>
          <button className={styles.button} ref={this.modalBtn}><a onClick={this.openModal} style={{cursor: "pointer"}}>Donate to us!</a></button>
        </div>
      </div>
    );
  }
};

export default Sponsor;
