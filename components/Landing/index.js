/* eslint-disable @next/next/no-img-element */
import styles from "./landing.module.css";
import Image from "next/image";
import Svg from "../../public/logo.svg";
import scrollSvg from "../../public/scroll.svg";
import Countdown from "../countdown/";
import Register from "../register/";
import About from "../about/";
import { useState } from "react";

import * as fa from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter from 'typewriter-effect';

const Landing = () => {

  return (
    <div className={styles.container}>
      <span className={styles.heading}>
        <h1 className={styles.topHeading}>
          Hacking for <br />
          <Typewriter
            options={{
              strings: ['EVERYONE.', 'HUSTLERS.', 'LEARNERS', 'DREAMERS.'],
              autoStart: true,
              loop: true,
              deleteSpeed: 'natural'
            }}
          />
        </h1>
      </span>

      <Register />
      <h3 className={styles.date}>October 12, 2021</h3>
      <p>
        A 60-Hour Student Lead Hackathon Designed For{" "}
        <span className={styles.text}>Everybody.</span>
      </p>
      <div className={styles.scrollDown}>
        <div>
          <span className={styles.scrollMsg1}>Scroll Down <span className={styles.scrollArr}>-&gt;</span></span>
        </div>
        <div>
          <span className={styles.scrollMsg2}>Scroll Down <span className={styles.scrollArr}>-&gt;</span></span>
        </div>
      </div>
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
  );
};

export default Landing;
