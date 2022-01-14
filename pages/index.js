import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import TeamMates from "../components/TeamMates";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

// images
import eddy from "../public/team/eddy.jpg";
import joshua from "../public/team/joshua.jpg";
import sike from "../public/team/sike.jpg";
import simon from "../public/team/Simon.png";
import emily from "../public/team/emily.jpg";
import manish from "../public/team/manish.png";

const data = [
  {
    name: "Eddy Zhu",
    mediaUrl: eddy.src,
    position: "Organizer",
  },
  {
    name: "Joshua Zhu",
    mediaUrl: joshua.src,
    position: "Oraganizer",
  },
  {
    name: "Ivoine Strachan",
    mediaUrl: sike.src,
    position: "Organizer",
  },
  {
    name: "Emily Cai",
    mediaUrl: emily.src,
    position: "Sponsership",
  },
  {
    name: "Manish",
    mediaUrl: manish.src,
    position: "lead developer",
  },
  {
    name: "Simon",
    mediaUrl: simon.src,
    position: "Sponsership",
  },
];

const qna = [
  {
    que: "What is a hackathon ?",
    ans: "Simply put, a hackathon is a programming competition! Entrants will have a theme and work over the weekend to build projects relating to it. They're a ton of fun!",
  },
  {
    que: "Who is eligible to enter ?",
    ans: "Anyone is welcome to enter! There are no restraints on geographic location, or level of experience. We encourage beginners to register, too! The only thing we ask is for participants to be between the ages of 13 and 20.",
  },
  {
    que: "How many people can form a team ?",
    ans: "A team can be comprised of 1-5 people. If you want to work alone, you can indicate that on the form. Likewise, if you have a team or want to be on one, you'll be able to work in a group!",
  },
  {
    que: "What will the topic be ?",
    ans: "The topic will be realeased the first day of the event at the opening ceremony! This way, everyone has the same amount of time to brainstorm and create.",
  },
  {
    que: "Is the hackathon physical or online ?",
    ans: "The hackathon will be virtual, both accomodating for concerns about COVID-19 and ensuring that it's as accessible to as many people as possible! Wherever you are, we'd love for you to come online with us.",
  },
  {
    que: "What if I don't have a team ?",
    ans: "There are two options for you! If you prefer to work alone, that's awesome, and you're able to do so. If you want to meet new people, we will work to coordinate teams of entrants who want to work with others. Vivid Hacks",
  },
];

const Index = () => {
  return (
    <>
      <Home />
      <About />
      <TeamMates data={data} />
      <Faq data={qna} />
    </>
  );
};

export default Index;
