import React, { useState } from "react";
import styles from "./faq.module.css";
import { IoMdArrowDropup } from "react-icons/io";

const FaqComponent = ({ que, ans }) => {
  const [open, setOpen] = useState(false);

  return (
    <div data-aos="fade-right" className={styles.faq__container} onClick={() => setOpen(!open)}>
      <div className={styles.faq__que_wrapper}>
        <div className={styles.faq__que}>{que}</div>
        <IoMdArrowDropup
          style={{ transform: `rotate(${open ? 0 : "180deg"})` }}
          className={styles.faq__arrow}
        />
      </div>
      <div
        className={styles.faq__wrapper}
        style={{ maxHeight: `${open ? "1000px" : 0}`, transition: `${open ? "max-height 1s ease-in-out": ""}` }}
      >
        <div className={styles.faq__ans}>{ans}</div>
      </div>
    </div>
  );
};

export default FaqComponent;
