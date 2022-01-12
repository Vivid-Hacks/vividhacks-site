import React from "react";
import styles from "./faq.module.css";

const FaqComponent = ({que, ans}) => {
  return (
    <div className={styles.faq__container}>
      <div className={styles.faq__que_wrapper}>
        <div className={styles.faq__que}>{que}</div>
      </div>
      <div className={styles.faq__wrapper}>
        <div className={styles.faq__ans}>{ans}</div>
      </div>
    </div>
  )
}

export default FaqComponent;
