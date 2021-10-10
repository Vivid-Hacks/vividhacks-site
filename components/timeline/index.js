import styles from "./timeline.module.css";
import Iframe from "react-iframe"
const Timeline = () => {
  return (
    <div className={styles.animate}>
  <div>
    <Iframe id="timeline" className={styles.iframe} url="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8XwSSuZdAx-zYcyx7GXmapbLviY45NL-f6CEIYLUmkfrq0wE1FjMWeSBBP9KvIRlfwJZezZ1Pw2NR/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"/>
  </div>
  </div>
    );
};

export default Timeline;
