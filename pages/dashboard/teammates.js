import styles from "../../styles/teammates.module.css";
import { useState, useEffect } from "react";
import clientPromise from "../../utils/dbConnect";
import Teammates from "../../components/TeamMates";

const TeamMate = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(props.data);
  }, []);

  const [mate, setMate] = useState({
    name: "",
    position: "",
    age: "",
  });

  const [previewUrl, setPrivewUrl] = useState();
  const [media, setMedia] = useState();

  const handleOnChange = (e) => {
    setMate({ ...mate, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // file to upload
    formData.append("file", media);
    formData.append("upload_preset", "vividHack");
    formData.append("cloud_name", "manny404");

    const promise = await fetch(
      "https://api.cloudinary.com/v1_1/manny404/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());

    const mediaUrl = promise.url;

    const { name, position, age } = mate;

    fetch("/api/teammember/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        position,
        age,
        mediaUrl,
      }),
    });
  };

  const handleImgChange = (e) => {
    setMedia(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setPrivewUrl(url);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
        <input
          className={styles.input}
          name="name"
          placeholder="name"
          value={mate.name}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className={styles.input}
          name="position"
          placeholder="position"
          value={mate.position}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className={styles.input}
          name="age"
          type="number"
          placeholder="age"
          value={mate.age}
          onChange={(e) => handleOnChange(e)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImgChange(e)}
          className={styles.input}
        />
        <button type="submit">Submit</button>
      </form>
      {previewUrl ? <img src={previewUrl} className={styles.previewImg} /> : ""}
      <Teammates data={data} />
    </div>
  );
};

export default TeamMate;

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("vividhacksDB");
  const data = await db.collection("team members").find().toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: {
      msg: "hello world",
      data: properties,
    },
  };
}
