import React, { useEffect, useState } from "react";
import FaqComponent from "./FaqComponent";
import styles from "./faq.module.css";

const Faq = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("ran or running");
    setData(props.data);
  }, [props.data]);

  const mappedData = data.map((props, i) => (
    <FaqComponent key={i} {...props} />
  ));

  return (
    <div id="faqs">
      <h2 data-aos="fade-up" className={styles.faq__heading}>FAQs</h2>
      {mappedData}
    </div>
  );
};

export default Faq;
