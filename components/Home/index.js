import styles from "./home.module.css";
import Countdown from "../Countdown";
import logo from "../../public/logo.png";
import scroll from "../../public/scroll.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Hacking for <br />
          Everyone
        </h1>
        <button className={styles.button}>Register Now</button>
        <div className={styles.date}>November 19, 2021, 5PM EST</div>
        <div className={styles.text}>
          A 65-Hour Student Lead Hackathon <br /> Designed For{" "}
          <span style={{ color: "#FF9900" }}>Everybody</span>
        </div>
        <div className={styles.horizontalRule}>
          <div className={styles.line} />
          <img
            src={logo.src}
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
            src={scroll.src}
            alt="scroll svg"
            style={{ width: "2rem", marginRight: "0.5rem" }}
          />
          Scroll down
        </div>
      </div>
    </div>
  );
};

export default Home;
