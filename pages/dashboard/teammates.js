import styles from "../../styles/teammates.module.css";
import { useState } from "react";
import connectToDb from "../../utils/dbConnect";

const TeamMate = (props) => {
  const [mate, setMate] = useState({
    name: "",
    position: "",
    age: "",
  });

  const [media, setMedia] = useState();

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

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
        <input name="name" placeholder="name" />
        <input name="position" placeholder="position" />
        <input name="age" type="number" placeholder="age" />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setMedia(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TeamMate;

export async function getServerSideProps(context) {
  const { db } = await connectToDb();
  const data = await db.collection("team members").find().toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: {
      msg: "hello world",
      data: properties,
    },
  };
}
