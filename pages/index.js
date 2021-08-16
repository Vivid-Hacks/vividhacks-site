import Navbar from "../components/navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import TeamGrid from "../components/TeamGrid";
import Footer from "../components/Footer";
import * as React from "react";
import { render } from "react-dom";


class index extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  render() {

    return (
      <div>
        <Navbar />
        <Landing />
        <About />
        <Sponsors />
        <Team />
        <TeamGrid />
        <Footer />
      </div >
    );
  }
}

export default index