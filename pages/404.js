import styles from "../css/404.module.css";
import CrossLink from 'next/link'


export default function Custom404() {
    if (typeof window === "object"){
        var pName = window.location.pathname.slice(1);
    }else{
        var pName = "..."
    }
    return (
        <div className={styles.notfoundContainer}>
            <div className={styles.notfound}>
                <div className={styles.notfound404}>
                    <h1>Oops!</h1>
                    <h2>404 - Our server can't find that page!</h2>
                </div>
                <span><a href="https://github.com/new" target="_blank">Create</a> a hackathon project called <span style={{backgroundColor: "#383838", paddingLeft: "5px", paddingRight: "5px", borderRadius: "5px"}}>{pName}</span>?</span>
                <br></br>
                <a className={styles.gohome}><CrossLink href="/"><span className={styles.goHome}>Get me out of here!</span></CrossLink></a>
            </div>
        </div>
    )
}