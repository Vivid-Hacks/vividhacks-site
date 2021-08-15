import Navbar from "../components/navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import TeamGrid from "../components/TeamGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Timeline />
      <Sponsors />
      <Team />
      <TeamGrid />
      <Footer />
    </>
  );
}
