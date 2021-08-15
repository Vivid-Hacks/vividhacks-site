import styles from "./team.module.css";

const Team = () => {
  return (
    <div id="team" className={styles.container}>
      <div className={styles.gradient} />
      <h3 className={styles.heading}>MEET OUR TEAM</h3>

      <div className={styles.pContainer}>
        <p className={styles.para}>
          The people who work at
          <br />
          <span style={{ color: "#35AFF3" }}>VIVID HACKS</span>
          <br />
          share the vision of our community.
        </p>
      </div>
    </div>
  );
};

export default Team;
