import styles from "./team.module.css";

const Member = (props) => {
  console.log(props);
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__front}>
          <img
            className={styles.card__img}
            src={props.mediaUrl}
            alt={props.name}
          />
          <div className={styles.card__text}>
            <h2 className={styles.card__position}>{props.position}</h2>
            <div className={styles.horizontal} />

            <h2 className={styles.card__name}>{props.name}</h2>
          </div>
        </div>
        <div className={styles.card__back}>
          <img
            className={styles.card__img}
            src={props.mediaUrl}
            alt={props.name}
          />
          <div className={styles.card__text_back}>
            <div className={styles.text_wrapper}>
              <div className={styles.card__link}>
                Github: <button className={styles.link_button}>Click me</button>
              </div>
              <div className={styles.card__link}>
                Website:
                <button className={styles.link_button}>Click me</button>
              </div>
              <div className={styles.card__about_back}>
                Favorite Language:
                <div className={styles.card__response}>Java</div>
              </div>
              <div className={styles.card__about_back}>
                Age
                <div className={styles.card__response}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
