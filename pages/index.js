import Navbar from "../components/navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import TeamGrid from "../components/TeamGrid";
import Faqs from "../components/faqs";
import Footer from "../components/Footer";
import * as React from "react";
import { render } from "react-dom";
import Head from "next/head";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


const index = () => {
  return (
    <div>
      <Head>
        <title>2021 | Vivid Hacks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <meta name="description" content="Some description."></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Vivid Hacks"></meta>
        <meta
          property="og:description"
          content="Vivid Hacks is 65 hour hackathon for everyone"
        ></meta>
        <meta property="og:url" content="https://vividhacks.net"></meta>
        <meta
          property="og:image"
          content="https://www.vividhacks.net/logo.svg"
        ></meta>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-32HZRLPPZT`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-32HZRLPPZT', {
                      page_path: window.location.pathname,
                    });
                  `,
          }}
        />
      </Head>

      <Navbar />


      <FadeInSection>
        <Landing />
      </FadeInSection>

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Sponsors />
      </FadeInSection>

      <FadeInSection>
        <Team />
        <TeamGrid />
      </FadeInSection>

      <FadeInSection>
        <Faqs />
      </FadeInSection>
      <Footer />
    </div>
  );
};

export default index;
