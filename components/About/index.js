import styles from "./about.module.css";
import { useState } from "react";
import Timeline from "../timeline/";
import * as React from "react";
import { render } from "react-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="about" className={styles.body} onClick={this.handleScroll}>
          <div className={styles.division}>
            <hr className={styles.growingLine} style={{ width: "60vw" }}></hr>
          </div>
          <div className={styles.container}>
            <span className={styles.bigtext}>What is VividHacks?</span>
            <div className={styles.mainContent}>
              <iframe
                src="https://www.youtube.com/embed/KUIigF_7P5c"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={styles.desc}>
                Vivid Hacks is a 65 hour hackathon for everybody. We&apos;ll provide
                you with the mentors to bring your dream project to{" "}
                <span style={{ color: "#68EB3B" }}>reality</span>. Build
                something <span style={{ color: "#EDC229" }}>crazy</span>.
                Something{" "}
                <span style={{ color: "#E36C6C" }}>game-changing</span>.
                Something <span style={{ color: "#2DC2CC" }}>cutting edge</span>
                . Vivid Hacks is a weekend experience you won&apos;t want to miss. 😛
                <div className={styles.faqwrapper}>
                  <Timeline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//About.prototype.reRender()

export default About;