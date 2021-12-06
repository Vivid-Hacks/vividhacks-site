import { useState, useEffect } from "react";
import Member from "./Member";
import styles from "./team.module.css";

const Team = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data) setData(props.data);
  }, [props.data]);

  const mappendItems = data.map((props) => <Member {...props} />);

  return <div className={styles.card__grid}>{mappendItems}</div>;
};

export default Team;
