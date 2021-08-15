import earth from "../../public/earth.png";
import styles from "./about.module.css";
import { Link as sLink } from 'react-scroll';

const About = () => {
  return (
    <>
      <div className={styles.container} id="about">
        <h2 className={styles.heading}>What is Vivid Hacks?</h2>
        <div className={styles.wrapper}>
          <img src={earth.src} alt="earth.png" className={styles.earth} />
          <p className={styles.para}>
            Vivid Hacks is a 60 hour hackathon for everybody. We’ll provide you
            with the mentors to bring your dream project to{" "}
            <span style={{ color: "#68EB3B" }}>reality</span>. Build something{" "}
            <span style={{ color: "#68EB3B" }}>crazy</span>. Something{" "}
            <span style={{ color: "#E36C6C" }}>game-changing</span>. Something{" "}
            <span style={{ color: "#2DC2CC" }}>cutting edge</span>. Vivid Hacks
            is a weekend experience you won’t want to miss. 😛
          </p>
        </div>
      </div>
      <div className={styles.gradient} />
    </>
  );
};
export default About;
