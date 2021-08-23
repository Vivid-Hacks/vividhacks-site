import React from "react";
import styles from "./teamgrid.module.css";

const team = [
  {
    post: "Organizer",
    name: "Vansh Gehlot",
    img: "https://cdn.discordapp.com/attachments/870833961218236450/879443381565161533/Vansh.png.png",
    github: "https://github.com/VanshGehlot",
    favoriteLang: "C++/HTML",
    yrsTrappedInVim: 19,
    website: "https://letshack.me/",
    color: "black"
  },

  {
    post: "Organizer",
    name: "Eddy Zhu",
    img: "/EddyPFP.jpg",
    github: "https://github.com/Tronbo",
    favoriteLang: "Python",
    yrsTrappedInVim: 13,
    website: "https://eddyzhu.netlify.app/",
    color: "white"
  },

  {
    post: "Organizer",
    name: "Ivion",
    img: "/rick.png",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 69,
    website: "idk",
    color: "white"
  },
  {
    post: "Organizer",
    name: "Joshua Zou",
    img: "/joshua.png",
    github: "https://github.com/Joshua-Zou",
    favoriteLang: "Node/C++",
    yrsTrappedInVim: 14,
    website: "https://joshuaz.dev",
    color: "white"
  },
  {
    post: "Organizer",
    name: "Manish",
    img: "https://cdn.discordapp.com/avatars/720865999242657792/970b391d9ce6daff5f8ec6a94930fe84.webp?size=256",
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    favoriteLang: "urmom",
    yrsTrappedInVim: 15,
    website: "me.person",
    color: "white"
  },
  {
    post: "Organizer",
    name: "Rajan",
    img: "https://avatars.githubusercontent.com/u/64426829?v=4",
    github: "https://github.com/itsrajan",
    favoriteLang: "ReactJS",
    yrsTrappedInVim: 16,
    website: "https://devpost.com/itsrajan",
    color: "white"
  },
];
class Tg extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.containerRef = React.createRef();
  }
  handleScroll() {

    const element = this.containerRef.current;
    if (element){
      const windowOffsetTop = window.innerHeight + window.scrollY;
      
      const elementBoxOffsetTop = element.offsetTop;
      if (windowOffsetTop >= elementBoxOffsetTop) {
        this.containerRef.current.classList.add("fade")
      }else{
        this.containerRef.current.classList.remove("fade")
      }
    }
  }
  render(){
    if (typeof window === 'object') {
      document.addEventListener("scroll", this.handleScroll, true);
    }
    return (
      <div ref={this.containerRef}>
      <div className={styles.container}>
        {team.map(({ post, name, img, github, favoriteLang, yrsTrappedInVim, website, color }, i) => {
          return (
            <div key={i} className={`${styles.itemContainer} ${styles.flipContainer}`}>
              <div className={`${styles.flipper}`}>
                <div className={styles.front}>
                  <div className={styles.header} style={{color: color}}>{post}</div>
                  <img className={styles.img} src={img} alt="img" />
                  <div className={styles.name} style={{color: color}}>{name}</div>
                </div>
                <div className={styles.back}>
                <img className={styles.img} src={img} alt="img" />
                  <div className={styles.backStats}>
                    <div><span style={{color: color}}>Github: </span><a href={github} target="_blank" className={styles.info}>___Click_Me___</a></div>
                    <div className={styles.key}><span style={{color: color}}>Website: </span><a href={website} target="_blank" className={styles.info}>___Click_Me___</a></div>
                    <div className={styles.key}><span style={{color: color}}>Favorite Language: </span><span className={styles.info}>{favoriteLang}</span></div>
                    <div className={styles.key}><span style={{color: color}}>Years trapped in vim: </span><span className={styles.info}>{yrsTrappedInVim}</span></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
};

export default Tg;
