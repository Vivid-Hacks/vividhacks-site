import Home from "../components/Home";
import About from "../components/About";
import TeamMates from "../components/TeamMates";
import Sponsors from "../components/Sponsor";
import Faq from "../components/Faq";

// images
import eddy from "../public/team/eddy.jpg";
import joshua from "../public/team/joshua.jpg";
import sike from "../public/team/sike.jpg";
import simon from "../public/team/Simon.png";
import emily from "../public/team/emily.jpg";
import manish from "../public/team/manish.png";
import Head from 'next/head'

const data = [
  {
    name: "Eddy Zhu",
    mediaUrl: eddy.src,
    position: "Organizer",
    github: "https://github.com/Tronbo",
    favLang: "C#/C++",
    age: 12
  },
  {
    name: "Joshua Zhu",
    mediaUrl: joshua.src,
    position: "Oraganizer",
    github: "https://github.com/Joshua-Zou",
    favLang: "Node/C++",
    age: 14
  },
  {
    name: "Ivoine Strachan",
    mediaUrl: sike.src,
    position: "Organizer",
    github: "https://github.com/sikethedev",
    favLang: "Javascript",
    age: 16
  },
  {
    name: "Emily Cai",
    mediaUrl: emily.src,
    position: "Sponsership",
    github: "https://github.com/itzEmily",
    favLang: "Javascript",
    age: 17
  },
  {
    name: "Manish",
    mediaUrl: manish.src,
    position: "lead developer",
    github: "https://github.com/Manish674",
    favLang: "Javascript",
    age: 16
  },
  {
    name: "Simon",
    mediaUrl: simon.src,
    position: "Sponsership",
    github: "https://github.com/SimonZhao7",
    favLang: "Python",
    age: 17
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
      <Head>
        <title>Vivid Hacks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <meta name="description" content="Some description."></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Vivid Hacks"></meta>
        <link rel="icon" type="image/png" href="/logo.png"/>
        <meta
          property="og:description"
          content="Vivid Hacks is 65 hour hackathon for everyone"
        ></meta>
        <meta property="og:url" content="https://vividhacks.tech"></meta>
        <meta
          property="og:image"
          content="/logo.png"
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
      <Home />
      <About />
      <Sponsors />
      <TeamMates data={data} />
      <Faq data={qna} />
    </>
  );
};

export default Index;
