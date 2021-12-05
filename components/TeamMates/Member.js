import styles from "./team.module.css";

const Member = (props) => {
  console.log(props);
  return (
    <div className={styles.card}>
      <div className={styles.card__front}>
        <div className={styles.cardHeader}>
          <div>{props.position}</div>
        </div>
        <div className={styles.imgWrapper}>
          <img
            src={props.mediaUrl}
            style={{ width: "19rem", height: "22rem", objectFit: "cover" }}
            className={styles.img}
          />
          <div className={styles.backContent}>Socials here</div>
        </div>
        <div className={styles.cardAbout}>
          <div>
            {props.name}
            {props.age}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
