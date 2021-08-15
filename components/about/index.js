import styles from "./about.module.css";
import { useState } from "react";
import Timeline from "../timeline/";

const About = () => {

    return (
        <div className={styles.container}>
            <span className={styles.bigtext}>What is VividHacks?</span>
            <div className={styles.mainContent}>
                <div className={styles.desc}>
                    Vivid Hacks is a 60 hour hackathon for everybody.
                    We'll provide you with the mentors to bring your dream project to <span style={{color: "#68EB3B"}}>reality</span>.
                    Build something <span style={{color: "#EDC229"}}>crazy</span>.
                    Something <span style={{color: "#E36C6C"}}>game-changing</span>.
                    Something <span style={{color: "#2DC2CC"}}>cutting edge</span>.
                    Vivid Hacks is a weekend experience you won't want to miss. 😛
                    <div className={styles.faqwrapper}>
                        <Timeline />
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default About;