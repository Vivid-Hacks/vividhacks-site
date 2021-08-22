import styles from "./register.module.css";

import Link from "next/link";

function register() {
    window.open("https://vividhacks.devpost.com/")
}

const Register = () => {
    return (
        <div className={styles.animate}>
            <button onClick={register} className={styles.offset}><span className={styles.buttonSpan}>Register Now</span></button>
            <div className={styles.invisible, styles.modal}>
                asdf
            </div>
        </div>
    );
};

export default Register;
