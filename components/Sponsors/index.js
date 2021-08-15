import styles from "./sponser.module.css";

const Sponsor = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sponsors</h2>
      <p className={styles.para}>Want to be our partner?</p>
      <button className={styles.button}>LEARN MORE</button>
    </div>
  );
};

export default Sponsor;
