import styles from "./teamgrid.module.css";

const team = [
  {
    post: "Organiser",
    name: "Vansh Gehlot",
    img: "https://cdn.discordapp.com/attachments/876623460510605345/878066462324035654/unknown.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "idk"
  },
  {
    post: "Organiser",
    name: "Eric Zhu",
    img: "https://cdn.discordapp.com/attachments/876623460510605345/878066462324035654/unknown.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "https://eddyzhu.netlify.app/"
  },

  {
    post: "Organiser",
    name: "Ivion",
    img: "https://cdn.discordapp.com/attachments/876623460510605345/878066462324035654/unknown.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "idk"
  },
  {
    post: "Organiser",
    name: "Joshua Zou",
    img: "https://cdn.discordapp.com/attachments/876623460510605345/878066462324035654/unknown.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "https://joshuaz.dev"
  },
  {
    post: "Organiser",
    name: "Me",
    img: "https://cdn.discordapp.com/attachments/876623460510605345/878066462324035654/unknown.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "me.person"
  },
  {
    post: "Organiser",
    name: "ABC",
    img: "https://cdn.discordapp.com/attachments/876623460510605345/878066462324035654/unknown.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "asdfasdf"
  },
];
const Tg = () => {
  return (
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
  );
};

export default Tg;
