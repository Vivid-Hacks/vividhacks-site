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


const index = () => {


    return (
      <div>
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