import styles from "./about.module.css";
import { useState } from "react";
import Timeline from "../timeline/";
import * as React from "react";
import { render } from "react-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.addEvLisner = this.addEvLisner.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.growingLine = { width: 0 };
    this.lastScrollTop = 0;
    this.containerRef = React.createRef();
    this.youtubeIframe = React.createRef();
  }
  handleScroll() {

    const element = this.containerRef.current;
    if (element){
      const windowOffsetTop = window.innerHeight + window.scrollY;
      
      const elementBoxOffsetTop = element.offsetTop;
      if (windowOffsetTop >= elementBoxOffsetTop) {
        this.containerRef.current.classList.add("fade")
        this.youtubeIframe.current.src="https://www.youtube.com/embed/KUIigF_7P5c" 
      }else{
        this.containerRef.current.classList.remove("fade")
      }
    }
    var st = window.scrollY;
    if (st > this.lastScrollTop) {
      let newWidth = Number(this.growingLine.width.toString().slice(0, this.growingLine.width.toString().length - 2)) + 0.4;
      this.growingLine = {
        width: newWidth + "vw"
      }
      this.forceUpdate();
    } else {
      let newWidth = Number(this.growingLine.width.toString().slice(0, this.growingLine.width.toString().length - 2)) - 0.4;
      if (newWidth < 0) newWidth = 0
      this.growingLine = {
        width: newWidth + "vw"
      }
      this.forceUpdate()
    }
    this.lastScrollTop = st;
  }

  addEvLisner() {
    if (this.addedEvLisnr === true) return;
    this.addedEvLisnr = true;

    let elm = this;
  }
  render() {
    if (typeof window === 'object') {
      document.addEventListener("scroll", this.handleScroll, true);
    }
    return (
      <div ref={this.containerRef}>
        <div id="about" className={styles.body} onClick={this.handleScroll}>
          <div className={styles.division}>
            <hr className={styles.growingLine} style={this.growingLine}></hr>
          </div>
          <div className={styles.container}>
            <span className={styles.bigtext}>What is VividHacks?</span>
            <div className={styles.mainContent}>
              <div className={styles.desc}>
                Vivid Hacks is a 60 hour hackathon for everybody.
                We'll provide you with the mentors to bring your dream project to <span style={{ color: "#68EB3B" }}>reality</span>.
                Build something <span style={{ color: "#EDC229" }}>crazy</span>.
                Something <span style={{ color: "#E36C6C" }}>game-changing</span>.
                Something <span style={{ color: "#2DC2CC" }}>cutting edge</span>.
                Vivid Hacks is a weekend experience you won't want to miss. 😛
                <div className={styles.faqwrapper}>
                  <Timeline />
                </div>
              </div>
              <iframe ref={this.youtubeIframe} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

//About.prototype.reRender()

export default About;
