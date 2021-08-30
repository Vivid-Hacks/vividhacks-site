import Navbar from "../components/navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import TeamGrid from "../components/TeamGrid";
import Faqs from "../components/faqs"
import Footer from "../components/Footer";
import * as React from "react";
import { render } from "react-dom";
import MetaTags from 'react-meta-tags';


const index = () => {


  return (
    <div>
      <MetaTags>
        <title>Vivid Hacks</title>
        <meta name="description" content="Some description."></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Vivid Hacks" ></meta>
        <meta property="og:description" content="Vivid Hacks is 65 hour hackathon for everyone"></meta>
        <meta property="og:url" content="https://vividhacks.tech"></meta>
        <meta property="og:image" content="https://www.vividhacks.tech/logo.svg"></meta>
      </MetaTags>
      <Navbar />
      <Landing />
      <About />
      <Sponsors />
      <Team />
      <TeamGrid />
      <Faqs />
      <Footer />
    </div >
  );
}

export default index