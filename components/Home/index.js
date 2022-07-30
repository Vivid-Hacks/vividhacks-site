import styles from "./home.module.css";
import Countdown from "../Countdown";
import logo from "../../public/logo.png";
import scroll from "../../public/scroll.svg";
import Typewriter from "typewriter-effect";

const Home = () => {
  const register = () => {
    window.open("https://vividhacks-1-5.devpost.com/");
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.gradient} ${styles.left}`}></div>
      <div className={`${styles.gradient} ${styles.right}`}></div>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Hacking for <br />
          <div className={styles.typewriterContainer}>
            <Typewriter
              className={styles.typewriter}
              options={{
                strings: [
                  "EVERYONE",
                  "HUSTLERS",
                  "LEARNERS",
                  "DREAMERS",
                  "BEGINNERS",
                  "EXPERTS",
                  "DESIGNERS",
                  "DEVELOPERS",
                  "STUDENTS"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: "natural",
              }}
            />
          </div>
        </h1>
        <div className={styles.animate}>
          <button onClick={register} className={styles.offset}>
            <span className={styles.buttonSpan}>Register Now</span>
          </button>
        </div>{" "}
        <div className={styles.date}>August 5, 2022, 5PM EST</div>
        <div className={styles.text}>
          Vividhacks v1.0 was a huge success, with over 200 participants, and <span style={{ color: "rgb(88 175 224)" }}>$25,000</span> in prizes given away!
        </div>
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
