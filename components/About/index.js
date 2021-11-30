import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>What is VividHacks ?</h1>
        <div className={styles.textWrapper}>
          <p className={styles.para}>
            Vivid Hacks is a 65 hour hackathon for everybody. We will provide
            you with the mentors to bring your dream project to{" "}
            <span style={{ color: "#68EB3B" }}>reality</span>. Build something{" "}
            <span style={{ color: "#EDC229" }}>crazy</span>. Something{" "}
            <span style={{ color: "#E36C6C" }}>game-changing</span>. Something
            cutting edge. Vivid Hacks is a weekend experience you will not want
            to miss. 😛
          </p>
          <iframe
            src="https://www.youtube.com/embed/KUIigF_7P5c"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ height: "200px", margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
