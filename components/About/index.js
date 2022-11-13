import styles from "./about.module.css";
import { useState } from "react";
import Timeline from "../Timeline/";
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
                                Vivid Hacks is a 3 day long hackathon for anyone ages 13-21. You&apos;ll be will be given a final product (that you can interact with but not see the code for), and try to replicate it within the time frame of 60 minutes. Vivid Hacks is a weekend experience you won&apos;t want to miss. 

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
