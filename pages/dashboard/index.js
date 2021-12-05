import styles from "../../components/Navbar/navbar.module.css";
import logo from "../../public/logo.png";
import Dash from "../../components/Dash";
import connectToDb from "../../utils/dbConnect";

const Dashboard = (props) => {
  return (
    <div>
      <div className={styles.container} style={{ marginTop: "2rem" }}>
        <div
          className={styles.wrapper}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className={styles.logo}>
            <img src={logo.src} className={styles.img} alt="logo.png" />
            Vivid Hacks
          </div>
        </div>
      </div>
      <Dash data={props.data} />
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const { db } = await connectToDb();
  const data = await db.collection("data").find().limit(2).toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: {
      msg: "hello world",
      data: properties,
    },
  };
}
