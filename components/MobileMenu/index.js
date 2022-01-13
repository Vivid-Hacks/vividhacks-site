import styles from "./mm.module.css";

const MobileMenu = ({ open, setOpen }) => {
  const displayValue = open ? 0 : "-100";

  return (
    <div
      className={styles.slideContainer}
      style={{ transform: `translateX(${displayValue}%)` }}
    >
      <div className={styles.slideWrapper}>
        <div className={styles.mobileLinks}>
          <a href="#" onClick={() => setOpen(false)} >DEVPOST</a>
          <a href="#" onClick={() => setOpen(false)}>TIMELINE</a>
          <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
          <a href="#" onClick={() => setOpen(false)}>REGISTER</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
