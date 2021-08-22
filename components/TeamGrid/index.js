import styles from "./teamgrid.module.css";

const team = [
  {
    post: "Organiser",
    name: "Vansh Gehlot",
    img: "/rick.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "idk"
  },
  {
    post: "Organiser",
    name: "Eddy Zhu",
    img: "/rick.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "https://eddyzhu.netlify.app/"
  },

  {
    post: "Organiser",
    name: "Ivion",
    img: "/rick.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "idk"
  },
  {
    post: "Organiser",
    name: "Joshua Zou",
    img: "/rick.png",
    github: "https://github.com/Joshua-Zou",
    favoriteLang: "Node/C++",
    yrsTrappedInVim: 14,
    website: "https://joshuaz.dev"
  },
  {
    post: "Organiser",
    name: "Me",
    img: "/rick.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "me.person"
  },
  {
    post: "Organizer",
    name: "Rajan",
    img: "/rick.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "ReactJS",
    yrsTrappedInVim: 16,
    website: "heyrajan.com"
  },
];
const Tg = () => {
  return (
    <div className={styles.animate}>
    <div className={styles.container}>
      {team.map(({ post, name, img, github, favoriteLang, yrsTrappedInVim, website }, i) => {
        return (
          <div key={i} className={`${styles.itemContainer} ${styles.flipContainer}`}>
            <div className={`${styles.flipper}`}>
              <div className={styles.front}>
                <div className={styles.header}>{post}</div>
                <img className={styles.img} src={img} alt="img" />
                <div className={styles.name}>{name}</div>
              </div>
              <div className={styles.back}>
              <img className={styles.img} src={img} alt="img" />
                <div className={styles.backStats}>
                  <div><span>Github: </span><a href={github} target="_blank" className={styles.info}>___Click_Me___</a></div>
                  <div className={styles.key}><span>Website: </span><a href={website} target="_blank" className={styles.info}>___Click_Me___</a></div>
                  <div className={styles.key}><span>Favorite Language: </span><span className={styles.info}>{favoriteLang}</span></div>
                  <div className={styles.key}><span>Years trapped in vim: </span><span className={styles.info}>{yrsTrappedInVim}</span></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Tg;
