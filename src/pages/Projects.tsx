import React, { useState } from "react";
import "../styles/projects.scss";
import { TopTitle } from "../uitils/TopTitle";
import { FcBiotech } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCodepenCircle } from "react-icons/ai";
import Loading from "../uitils/Loading";
import { DarkModeContext } from "../contexts/DarkModeContext";
import '../responsivestyles/projects.scss'

type ProjectBoxType = {
  id: number;
  title: string;
  image: string;
  description: string;
  equipments: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
  image9?: string;
  image10?: string;
  image11?: string;
  image12?: string;
  image13?: string;
};

const Projects = () => {
  //my project box list
  //my project box list
  const MyProjectList: ProjectBoxType[] = [
    {
      id: 1,
      title: "E-Commerce Project",
      image: "../aldim1.png",
      image2: "../aldim2.png",
      image3: "../aldim3.png",
      image4: "../aldim4.png",
      image6: "../aldim6.png",
      image7: "../aldim7.png",
      image8: "../aldim8.png",
      image9: "../aldim9.png",
      image10: "../aldim10.png",
      image11: "../aldim11.png",
      equipments:
        "ReactJS, NodeJS, ExpressJS, MySQL, SASS/SCSS, FIGMA, BOOTSTRAP",
      description:
        "The design and other features of this project were made by me. I prepared it in 2 days. The project includes registration, login, product addition, deletion, update and various other features. I tried to keep the design simple. I made a simple trading site on my own to reinforce what I had learned.",
    },
    {
      id: 2,
      title: "Goko Project",
      image: "../goko1.png",
      image2: "../goko2.png",
      image3: "../goko3.png",
      image4: "../goko4.png",
      image5: "../goko5.png",
      image6: "../goko6.png",
      equipments:
        "ReactJS, NodeJS, ExpressJS, MySQL, SASS/SCSS, JWT, FIGMA, BOOTSTRAP",
      description:
        "I don't have a complete idea about this project😄It is a project I did in order to reinforce and further develop what I have learned. This project contains various functional features such as login, registration system, database connection, user login process using jsonwebtoken.",
    },
    {
      id: 3,
      title: "Mathematic Exam Project",
      image: "../math1.png",
      equipments: "ReactJS, SASS/SCSS, FIGMA, BOOTSTRAP",
      description:
        "This project is a project that emerged as a result of the task given to me in my Front End practical course. Actually, I was able to learn new things and improve my skills here too. ",
    },
    {
      id: 4,
      title: "Ebay Clone",
      image: "../ebay1.png",
      equipments: "HTML, CSS, JavaScript",
      description:
        "As you can see, I made a copy of the famous Ebay site. I was just learning JavaScripting when I did this. I was only in my second month. Obviously it was a great way for me to learn event listeners! 😄",
    },
    {
      id: 5,
      title: "Simple Landing Page",
      image: "../sakit1.png",
      equipments: "ReactJS, SASS/SCSS, FIGMA, BOOTSTRAP",
      description:
        "Actually, this project was a very simple project. I had just started learning React and it was a project given from the practice course for me to get used to. I tried to put it into code by looking at the Figma design. Although it was simple, it taught me a lot of things.",
    },
    {
      id: 6,
      title: "Instagram Clone",
      image: "../instagram.jpeg",
      equipments: "HTML, CSS, JavaScript",
      description:
        "This is a new copy😁 I tried to make the interface (login interface) of Instagram. It may not be obvious from the picture, but I say take a look at the codes 😄",
    },
  ];

  const { darkmode } = React.useContext(DarkModeContext)!;


  return (
    <React.Fragment>
      <Loading>Projects</Loading>
      <div className={`my-projects ${darkmode ? 'activeMyProjectsDarkMode' : ""}`}>   
        <TopTitle>
          <h1>My Projects</h1>
        </TopTitle>
        {MyProjectList.map((project) => (
          <div className="project-box" key={project.id}>
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="content-area">
              <section className="title">{project.title}</section>
              <section className="description">{project.description}</section>
              <section className="equips">
                <span id="techs">
                  <FcBiotech id="techicon" />
                  Technologies
                </span>
                <span id="skill">{project.equipments}</span>
              </section>
              <div className="social22">
                <Link
                  to={
                    project.id === 1
                      ? "https://github.com/azadikk/E-commerce"
                      : project.id === 2
                      ? "https://github.com/azadikk/Goko-Website"
                      : project.id === 3
                      ? "https://github.com/azadikk/MathematicWebsite"
                      : project.id === 4
                      ? "https://github.com/azadikk/EbayWebsiteClone"
                      : project.id === 5
                      ? "https://github.com/azadikk/sakitliksayti"
                      : project.id === 6
                      ? ""
                      : ""
                  }
                  target="_blank"
                >
                  <BsGithub
                    id="github2"
                    visibility={project.id === 6 ? "hidden" : ""}
                  />
                </Link>
                <Link
                  to={
                    project.id === 1
                      ? ""
                      : project.id === 2
                      ? ""
                      : project.id === 3
                      ? ""
                      : project.id === 4
                      ? "https://codepen.io/azadikk/pen/KKGrxzY"
                      : project.id === 5
                      ? ""
                      : project.id === 6
                      ? "https://codepen.io/azadikk/pen/MWPzPJp"
                      : ""
                  }
                  target="_blank"
                >
                  <AiOutlineCodepenCircle
                    id="codepen2"
                    visibility={
                      project.id === 1
                        ? "hidden"
                        : project.id === 2
                        ? "hidden"
                        : project.id === 3
                        ? "hidden"
                        : project.id === 5
                        ? "hidden"
                        : ""
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Projects;
