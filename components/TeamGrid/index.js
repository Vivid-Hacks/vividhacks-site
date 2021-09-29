import React from "react";
import styles from "./teamgrid.module.css";

const team = [
  {
    index: 0,
    post: "Organizer",
    name: "Eddy Zhu",
    img: "/EddyPFP.jpg",
    github: "https://github.com/Tronbo",
    favoriteLang: "C++, C#",
    yrsTrappedInVim: 12,
    website: "https://eddyzhu.netlify.app/",
    color: "white",
  },
  {
    index: 1,
    post: "Organizer",
    name: "Joshua Zou",
    img: "/joshua.png",
    github: "https://github.com/Joshua-Zou",
    favoriteLang: "Node/C++",
    yrsTrappedInVim: 14,
    website: "https://joshuaz.dev",
    color: "white",
  },
  {
    index: 2,
    post: "Organizer",
    name: "Vansh Gehlot",
    img: "/Vansh.png",
    github: "https://github.com/VanshGehlot",
    favoriteLang: "C++",
    yrsTrappedInVim: 19,
    website: "https://letshack.me/",
    color: "black",
  },
  {
    index: 3,
    post: "Organizer",
    name: "Ivoine Strachan",
    img: "/ivione.png",
    github: "https://github.com/sikethedev",
    favoriteLang: "Javascript",
    yrsTrappedInVim: 16,
    website: "https://ivoinetechs.netlify.app",
    color: "white",
  },
  {
    index: 4,
    post: "Organizer",
    name: "Manish",
    img: "/mePFP.jpg",
    github: "https://github.com/Manish674",
    favoriteLang: "Javascript",
    yrsTrappedInVim: "16",
    website: "",
    color: "white",
  },
];

class Tg extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.addedImg = false;
  }
  render() {
    return (
      <div ref={this.containerRef}>
        <div className={styles.container}>
          {team.map(
            (
              {
                post,
                name,
                img,
                github,
                favoriteLang,
                yrsTrappedInVim,
                website,
                color,
                index,
              },
              i
            ) => {
              return (
                <div
                  key={i}
                  className={`${styles.itemContainer} ${styles.flipContainer}`}
                >
                  <div className={`${styles.flipper}`}>
                    <div className={styles.front}>
                      <div className={styles.header} style={{ color: color }}>
                        {post}
                      </div>
                      <img
                        className={styles.img}
                        src={img}
                        alt="img"
                        data-frontGridIndex={index}
                      />
                      <div className={styles.name} style={{ color: color }}>
                        {name}
                      </div>
                    </div>
                    <div className={styles.back}>
                      <img
                        className={styles.img}
                        src={img}
                        alt="img"
                        data-backGridIndex={index}
                      />
                      <div className={styles.backStats}>
                        <div>
                          <span style={{ color: color }}>Github: </span>
                          <a
                            href={github}
                            target="_blank"
                            className={styles.info}
                          >
                            Click Me
                          </a>
                        </div>
                        <div className={styles.key}>
                          <span style={{ color: color }}>Website: </span>
                          <a
                            href={website}
                            target="_blank"
                            className={styles.info}
                          >
                            Click Me
                          </a>
                        </div>
                        <div className={styles.key}>
                          <span style={{ color: color }}>
                            Favorite Language:{" "}
                          </span>
                          <span className={styles.info}>{favoriteLang}</span>
                        </div>
                        <div className={styles.key}>
                          <span style={{ color: color }}>
                            Years trapped in vim:{" "}
                          </span>
                          <span className={styles.info}>{yrsTrappedInVim}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  }
}

export default Tg;
