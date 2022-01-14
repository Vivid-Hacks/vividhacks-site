import { useState, useEffect } from "react";
import Member from "./Member";
import styles from "./team.module.css";

const Team = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data) setData(props.data);
  }, [props.data]);

  const mappendItems = data.map((props, i) => <Member key={i} {...props} />);

  return (
    <div className={styles.team__page}>
      <div data-aos="fade-up" className={styles.team__text_wrapper}>
        <h1 className={styles.team__heading}>MEET OUR TEAM</h1>
        <h3 className={styles.team__text}>The people work at</h3>
        <h3 className={styles.team__text} style={{ color: "#35AFF4" }}>
          VIVID HACKS
        </h3>
        <h3 className={styles.team__text}>share the vision of our community</h3>
      </div>
      <div className={styles.card__grid}>{mappendItems}</div>
    </div>
  );
};

export default Team;
