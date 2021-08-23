import styles from "./team.module.css";
import * as useOnScreen from "../Hooks/isVisible";

const Team = () => {
  return (
    <div className={styles.animate}>
    <div id="team" className={styles.container}>
      <div className={styles.gradient} />
      <h3 className={styles.heading}>
        Meet the Staff <br /></h3>

      <div className={styles.pContainer}>
        <p className={styles.para}>
          People who work at
          <br />
          <br />
          <span style={{ color: "#35AFF3"}}>VIVID HACKS</span>
          <br />
          <br />
          Share the vision of the community.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Team;
