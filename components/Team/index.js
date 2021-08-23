import React from "react";
import styles from "./team.module.css";

class Team extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.containerRef = React.createRef();
  }
  handleScroll() {

    const element = this.containerRef.current;
    const windowOffsetTop = window.innerHeight + window.scrollY;

    const elementBoxOffsetTop = element.offsetTop;
    if (windowOffsetTop >= elementBoxOffsetTop) {
      this.containerRef.current.classList.add("fade")
    } else {
      this.containerRef.current.classList.remove("fade")
    }
  }
  render() {
    if (typeof window === 'object') {
      document.addEventListener("scroll", this.handleScroll, true);
    }
    return (
      <div ref={this.containerRef}>
        <div id="team" className={styles.container}>
          <div className={styles.gradient} />
          <h3 className={styles.heading}>MEET OUR TEAM</h3>

          <div className={styles.pContainer}>
            <p className={styles.para}>
              The people who work at
              <br />
              <span style={{ color: "#35AFF3" }}>VIVID HACKS</span>
              <br />
              share the vision of our community.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Team;
