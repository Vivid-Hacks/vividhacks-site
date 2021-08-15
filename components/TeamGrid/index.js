import styles from "./teamgrid.module.css";

const team = [
  {
    post: "Organiser",
    name: "Vansh Gehlot",
    img: "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80",
  },
  {
    post: "Organiser",
    name: "EricDaGay",
    img: "https://images.unsplash.com/photo-1605816789011-ec492509c31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  },

  {
    post: "Organiser",
    name: "Ivion",
    img: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    post: "Organiser",
    name: "Joshua-Zou",
    img: "https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
  },
  {
    post: "Organiser",
    name: "Me",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KN_058sUbLsXKHiUx6ZacwHaIU%26pid%3DApi&f=1",
  },
  {
    post: "Organiser",
    name: "ABC",
    img: "https://images.unsplash.com/photo-1574786201468-574f3151871e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=803&q=80",
  },
];
const Tg = () => {
  return (
    <div className={styles.container}>
      {team.map(({ post, name, img }, i) => {
        return (
          <div key={i} className={styles.itemContainer}>
            <div className={styles.header}>{post}</div>
            <img className={styles.img} src={img} alt="img" />
            <div className={styles.name}>{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tg;
