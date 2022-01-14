import styles from "./dash.module.css";
import { useState, useEffect } from "react";

const Dash = (props) => {
  const [data, setData] = useState({ date: "", time: "" });

  useEffect(() => {
    props.data.map((el) => setData(el));
  }, []);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.grp}>
          <label htmlFor="date">Date</label>
          <input
            name="date"
            id="date"
            type="date"
            className={styles.input}
            value={data.date}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <input
            name="time"
            type="text"
            id="time"
            className={styles.input}
            value={data.time}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <button className={styles.button}>Edit</button>
        <h1>Sponsors</h1>
      </form>
    </div>
  );
};

export default Dash;
