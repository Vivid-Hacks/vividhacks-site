import styles from "./faqs.module.css";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQs",
  rows: [
    {
      title: "What is a hackathon?",
      content: `Simply put, a hackathon is a programming competition! Entrants will have a theme and work over the weekend to build projects relating to it. They're a ton of fun!`,
    },
    {
      title: "Who is eligible to enter?",
      content:
        "Anyone is welcome to enter! There are no restraints on geographic location, or level of experience. We encourage beginners to register, too! The only thing we ask is for participants to be between the ages of 13 and 20.",
    },
    {
      title: "How many people can form a team?",
      content: `A team can be comprised of 1-5 people. If you want to work alone, you can indicate that on the form. Likewise, if you have a team or want to be on one, you'll be able to work in a group!`,
    },
    {
      title: "What will the topic be?",
      content:
        "The topic will be realeased the first day of the event at the opening ceremony! This way, everyone has the same amount of time to brainstorm and create.",
    },
    {
      title: "Is the hackathon physical or online?",
      content:
        "The hackathon will be virtual, both accomodating for concerns about COVID-19 and ensuring that it's as accessible to as many people as possible! Wherever you are, we'd love for you to come online with us.",
    },
    {
      title: "What if I don't have a team?",
      content: `There are two options for you! If you prefer to work alone, that's awesome, and you're able to do so. If you want to meet new people, we will work to coordinate teams of entrants who want to work with others.
            Vivid Hacks`,
    },
  ],
};

const stylesX = {
  bgColor: "rgba(0, 0, 0, 0)",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "#a3cce3",
  arrowColor: "#29edbe",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function Faqs() {
  return (
    <div className={styles.animate}>
      <div className={styles.container} id="faqs">
        <Faq data={data} styles={stylesX} config={config} />
      </div>
    </div>
  );
}
