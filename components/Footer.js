import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <section className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <div>
                    <img src="/logo.svg" className={footerStyles.logo}/>
                    <br />
                    <span className={footerStyles.copyright}>
                        Copyright 2021 Vivid Hacks. All rights reserved.</span>
                </div>
                <div>
                    <dl>
                        <dt>RESOURCES</dt>
                        <dd>
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Register</a></li>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Calendar</a></li>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">About</a></li>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Submissions</a></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>SOCIAL</dt>
                        <dd>
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Discord</a></li>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Email</a></li>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Youtube</a></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>LEGAL</dt>
                        <dd>
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Service</a></li>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a></li>
                                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Submission Licenses</a></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Footer;