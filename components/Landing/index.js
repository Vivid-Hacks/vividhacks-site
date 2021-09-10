/* eslint-disable @next/next/no-img-element */
import styles from "./landing.module.css";
import Countdown from "../countdown/";
import Register from "../register/";
import About from "../about/";
import { useState } from "react";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className={styles.animate}>
      <div className={styles.container}>
        <span className={styles.heading}>
          <img src="/accent1.svg" className={styles.accent1}></img>
          <img src="/accent2.svg" className={styles.accent2}></img>
          <h1 className={styles.topHeading}>
            Hacking for <br />
            <Typewriter
              options={{
                strings: [
                  "EVERYONE.",
                  "HUSTLERS.",
                  "LEARNERS",
                  "DREAMERS.",
                  "BEGINNERS",
                  "EXPERTS",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: "natural",
              }}
            />
          </h1>
        </span>

        <Register />
        <h3 className={styles.date}>October 15, 2021, 5PM EST</h3>
        <p>
          A 60-Hour Student Lead Hackathon Designed For{" "}
          <span className={styles.text}>Everybody.</span>
        </p>
        {/* <div className={styles.scrollDown}>
        <div>
          <span className={styles.scrollMsg1}>Scroll Down <span className={styles.scrollArr}>-&gt;</span></span>
        </div>
        <div>
          <span className={styles.scrollMsg2}>Scroll Down <span className={styles.scrollArr}>-&gt;</span></span>
        </div>
      </div> */}
        <div className={styles.horizontalRule}>
          <div className={styles.line} />
          <img
            src="logo.svg"
            alt="logo.svg"
            style={{
              width: "4.5rem",
              marginRight: "0.5rem",
            }}
          />
          <div className={styles.line} />
        </div>
        <Countdown />
        <div className={styles.scrollSvgContainer}>
          <img
            src="scroll.svg"
            alt="scroll svg"
            style={{ width: "2rem", marginRight: "0.5rem" }}
          />
          Scroll down
        </div>
      </div>
    </div>
  );
};

export default Landing;
