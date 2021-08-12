import styles from "./register.module.css";

import Link from "next/link";

function showModal() {

}

const Register = () => {
    return (
        <div>
            <button onClick={showModal} className={styles.offset}><span className={styles.buttonSpan}>Register Now</span></button>
            <div className={styles.invisible, styles.modal}>
                asdf
            </div>
        </div>
    );
};

export default Register;
