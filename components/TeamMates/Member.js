import styles from "./team.module.css";
import Link from "next/link";

const Member = (props) => {
  return (
    <div data-aos="fade-down" className={styles.card}>
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
                Github:
                <Link href={props.github} passHref>
                  <button className={styles.link_button}>Click me</button>
                </Link>
              </div>
              <div className={styles.card__link}>
                Website:
                <button className={styles.link_button}>Click me</button>
              </div>
              <div className={styles.card__about_back}>
                Favorite Language:
                <div className={styles.card__response}>{props.favLang}</div>
              </div>
              <div className={styles.card__about_back}>
                Age
                <div className={styles.card__response}>{props.age}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
