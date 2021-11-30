import styles from "../components/Navbar/navbar.module.css";
import logo from "../public/logo.png";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
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
      <Sidebar />
    </div>
  );
};

export default Dashboard;
