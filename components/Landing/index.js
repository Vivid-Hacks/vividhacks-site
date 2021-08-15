/* eslint-disable @next/next/no-img-element */
import styles from "./landing.module.css";
import Image from "next/image";
import Svg from "../../public/logo.svg";
import scrollSvg from "../../public/scroll.svg";
import Countdown from "../countdown/";

const Landing = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>
        <h1 className={styles.topHeading}>
          Hacking for <br />
          EVERYONE.
        </h1>
      </span>
      <div className={styles.rightGradient} />
      <div className={styles.leftGradient} />
      <button className={styles.button}>Register Now</button>
      <h3 className={styles.date}>October 12, 2021</h3>
      <p>
        A 60-Hour Student Lead Hackathon Designed For{" "}
        <span className={styles.text}>Everybody.</span>
      </p>
      <div className={styles.horizontalRule}>
        <div className={styles.line} />
        <img
          src={Svg.src}
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
          src={scrollSvg.src}
          alt="scroll svg"
          style={{ width: "2rem", marginRight: "0.5rem" }}
        />
        Scroll down
      </div>
    </div>
  );
};

export default Landing;
