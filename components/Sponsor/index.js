import styles from "./sponsor.module.css";
import React, { useRef, useState } from "react";
class Sponsor extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.modalRef = React.createRef();
    this.modalBtn = React.createRef();
    this.coverBG = React.createRef();
    this.hackclubIframe = React.createRef();

    this.openModal = this.openModal.bind(this);
    this.clickListener = this.clickListener.bind(this);
  }

  openModal() {
    this.hackclubIframe.current.src =
      "https://bank.hackclub.com/donations/start/vivid-hacks";
    this.modalRef.current.style.display = "block";
    this.coverBG.current.style.display = "block";
  }

  componentDidMount() {
    document.addEventListener("click", () => this.clickListener(event))
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.clickListener)
  }

  clickListener(event) {
    if (!this.modalRef.current) return;
    if (this.modalRef.current.contains(event.target)) {
    } else {
      if (this.modalBtn.current.contains(event.target)) return;
      this.modalRef.current.style.display = "none";
      this.coverBG.current.style.display = "none";
    }
  }
  render() {
    return (
      <div ref={this.containerRef}>
        <div
          className={styles.modal}
          ref={this.modalRef}
          style={{ display: "none" }}
        >
          <iframe ref={this.hackclubIframe}></iframe>
        </div>
        <div
          className={styles.cover}
          ref={this.coverBG}
          style={{ display: "none" }}
        ></div>
        <div className={styles.container}>
          <h2 className={styles.heading}>Sponsors</h2>
          <div className={styles.sponsorGrid}>
            <div className={styles.sponsor}>
              <a rel="noreferrer" href="https://hackclub.org" target="_blank">
                <img src="/hackclublogo.svg" width="318"></img>
              </a>
              <div><span>Hack Club</span></div>
            </div>
          </div>
          <h2 className={styles.heading2}>Supporters</h2>
          <div className={styles.sponsorGrid}>
            <div className={styles.supporter}>
              <a rel="noreferrer" href="https://artofproblemsolving.com/" target="_blank">
                <img src="/AoPS_Main_Logo.png" width="200"></img>
              </a>
              <div><span>Art of Problem Solving</span></div>
            </div>
            <div className={styles.supporter}>
              <a rel="noreferrer" href="https://leading-learners.com/" target="_blank">
                <img src="/leading_learners.png" width="80"></img>
              </a>
              <div><span>Leading Learners</span></div>
            </div>
          </div>
          <h4 style={{fontSize: "1.5em"}} className={styles.heading2}>Outreach Partners</h4>
          <div className={styles.sponsorGrid}>
            <div className={styles.supporter}>
              <a rel="noreferrer" href="https://www.kuhackfest.com/" target="_blank">
                <img src="/kuhackfest.png" width="80"></img>
              </a>
              <div><span>KuHackfest</span></div>
            </div>
            <div className={styles.supporter}>
              <a rel="noreferrer" href="https://www.youtube.com/c/Cararra" target="_blank">
                <img src="/carrara.png" width="80"></img>
              </a>
              <div><span>Carrara</span></div>
            </div>
            <div className={styles.supporter}>
              <a rel="noreferrer" href="https://www.teamscode.org/" target="_blank">
                <img src="/teamscode.png" width="75"></img>
              </a>
              <div><span>Teams Code</span></div>
            </div>
          </div>
          <p className={styles.para}>Want to be our partner?</p>
          <button className={styles.button} style={{ marginBottom: 0 }}>
            <a rel="noreferrer" href="https://vivd.tk/prospectus" target="_blank">
              LEARN MORE
            </a>
          </button>
          <p className={styles.para}>Or </p>
          <button className={styles.button} ref={this.modalBtn}>
            <a onClick={this.openModal} style={{ cursor: "pointer" }}>
              Donate to us!
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Sponsor;