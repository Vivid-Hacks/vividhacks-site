import styles from "./mm.module.css";

const MobileMenu = ({ open }) => {
  const displayValue = open ? 0 : "-100";

  return (
    <div
      className={styles.slideContainer}
      style={{ transform: `translateX(${displayValue}%)` }}
    >
      <div className={styles.slideWrapper}>
        <div className={styles.mobileLinks}>
          <a href="#">DEVPOST</a>
          <a href="#">TIMELINE</a>
          <a href="#">ABOUT</a>
          <a href="#">REGISTER</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
