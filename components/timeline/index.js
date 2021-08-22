import styles from "./timeline.module.css";
import Iframe from "react-iframe"
const Timeline = () => {
  return (
    <div className={styles.animate}>
  <div>
    <Iframe id="timeline" className={styles.iframe} url="https://time.graphics/embed?v=1&id=537355"/>
  </div>
  </div>
    );
};

export default Timeline;
