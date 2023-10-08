import React from "react";
import "../styles/cvcertificates.scss";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsYoutube, BsBackspaceReverse } from "react-icons/bs";
import { AiFillCodepenCircle } from "react-icons/ai";
import { TopTitle } from "../uitils/TopTitle";
import { BiArrowBack } from 'react-icons/bi'
import Loading from "../uitils/Loading";
import '../responsivestyles/cv.scss'
import { DarkModeContext } from "../contexts/DarkModeContext";

type skillBoxType = {
  id: number;
  skil: string;
};

const Cv = () => {
  //skillbox left
  const skillBoxLeft: skillBoxType[] = [
    {
      id: 1,
      skil: "Html",
    },
    {
      id: 2,
      skil: "JavaScript",
    },
    {
      id: 3,
      skil: "Node.js",
    },
    {
      id: 4,
      skil: "MySQL",
    },
    {
      id: 5,
      skil: "Git",
    },
    {
      id: 6,
      skil: "React Native",
    },
    {
      id: 7,
      skil: "Sass/Scss",
    },
    {
      id: 8,
      skil: "Figma",
    },
    {
      id: 9,
      skil: "Api | RestFulAPI",
    },
    {
      id: 10,
      skil: "Debugging | Fix",
    },
  ];
  //skill box
  const skillBoxRight: skillBoxType[] = [
    {
      id: 1,
      skil: "Css",
    },
    {
      id: 2,
      skil: "React.js",
    },
    {
      id: 3,
      skil: "Express.js",
    },
    {
      id: 4,
      skil: "MongoDB",
    },
    {
      id: 5,
      skil: "TypeScript",
    },
    {
      id: 6,
      skil: "RESTfulAPIs",
    },
    {
      id: 7,
      skil: "Bootstrap",
    },
    {
      id: 8,
      skil: "WebSocket",
    },
    {
      id: 9,
      skil: "Mobile Development",
    },
  ];

  const { darkmode } = React.useContext(DarkModeContext)!;

  return (
    <div className={`cv-container ${darkmode ? 'cv-container-dark-mode' : ""}`}>
      <Loading>CV - Curriculum Vitae</Loading>
      <div className="cv">
          <Link to='/cv-certificates'><BiArrowBack id="getBack"/></Link>
        <header className="cv-header-area">
          <div className="contact-area">
            <section className="tel">
              <Link to="https://wa.me/994513641920?text=Salam.%20Sizin%20n%C3%B6mr%C9%99nizi%20portfolio%20s%C9%99hif%C9%99nizd%C9%99n%20ald%C4%B1m.%20Siz%C9%99%20t%C9%99klifim%20/%20sual%C4%B1m%20var." id="tel-num">
                +994513641920
              </Link>
              <span id="rectangle"></span>
            </section>

            <section className="mail">
              <Link to="mailto:azad.miri6@gmail.com" id="mail-adr">
                azad.miri6@gmail.com
              </Link>
              <span id="rectangle"></span>
            </section>

            <section className="place">
              <span>Mashtaga, Baku, Azerbaycan, AZ1104</span>
            </section>
          </div>

          <div className="photo-name-area">
            <div className="box1">
              <div className="name">
                <h1>Azad</h1>
                <h1>Mirheydarzade</h1>
              </div>
              <span>Full Stack Developer</span>
            </div>
            <div className="box">
              <img src="../me.jpg" />
            </div>
          </div>
        </header>

        <main className="main-area-cv">
          <div className="top-area">
            <div className="left">
              <div className="links">
                <Link to="https://github.com/azadikk" target="_BLANK" className="github">
                  <BsGithub />
                  <span>/azadikk</span>
                </Link>

                <Link to="https://www.linkedin.com/in/azad-mirheydarzada-4aa1a9279/" target="_BLANK" className="linkedin">
                  <BsLinkedin />
                  <span>/azad-mirheydarzada</span>
                </Link>

                <Link to="https://codepen.io/azadikk" target="_BLANK" className="codepen">
                  <AiFillCodepenCircle />
                  <span>/azadikk</span>
                </Link>

                <Link to="https://www.youtube.com/@azadevv" target="_BLANK" className="youtube">
                  <BsYoutube />
                  <span>/azadevv</span>
                </Link>
              </div>
              <div className="skills">
                <TopTitle>
                  <h1>Skills</h1>
                </TopTitle>
                <div className="skills-main">
                  <section className="left-skil">
                    {skillBoxLeft.map((skils) => (
                      <div className="skilbox" key={skils.id}>
                        <span id="rectangle"></span>
                        <div className="skil-exp">
                          <span id="skil">{skils.skil}</span>
                        </div>
                      </div>
                    ))}
                  </section>
                  <section className="left-skil">
                    {skillBoxRight.map((skils) => (
                      <div className="skilbox" key={skils.id}>
                        <span id="rectangle"></span>
                        <div className="skil-exp">
                          <span id="skil">{skils.skil}</span>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </div>

              <div className="education">
                <h1>Education</h1>
                <div className="education-content">
                  <div className="content">
                    <p>Future Learn Academy / Azerbaijan Baku</p>
                    <p>Complete Secondary School No.71</p>
                    <p>Jed Academy / Azerbaijan, Baku</p>
                    <p>Narimanov District Baku Vocational High School No.2</p>
                  </div>
                  <div className="line">
                    <span id="rectangle1">.</span>
                    <span id="rectangle2">.</span>
                    <span id="rectangle3">.</span>
                    <span id="rectangle4">.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="summary">
                <h1>Professional summary</h1>
                <p>
                  Although I started my career in October 2022, I have been
                  involved in various computer-related tasks since I was 10
                  years old. This includes design, editing, small coding
                  projects and more. Since the beginning of my career I have
                  worked and continue to work as a responsible professional,
                  striving for continuous improvement
                </p>
              </div>

              <div className="experience">
                <h1>Experience</h1>
                <div className="main-area">
                  <div className="line">
                    <span id="rectangle">.</span>
                    <span id="rectangle2">.</span>
                  </div>
                  <div className="main-area-exp">
                    <div className="front-end-exp">
                      <div className="top-title-exp">
                        <span>April 2021 - May 2022</span>
                        <h1>Front End Developer</h1>
                        <span>Massi / Azerbaijan, Baku</span>
                      </div>
                      <div className="content">
                        <p>
                          Front End Developer at Massi, Azerbaijan 4202150:
                          5202250: My responsibilities included=
                        </p>
                        <p>Designing user interfaces</p>
                        <p>Developing websites and web applications</p>
                        <p>Creating and configuring databases</p>
                        <p>Testing and debugging front end code</p>
                        <p>Collaborating with the back end development team</p>
                        <p>Implementing cross-browser compatibility fixes</p>
                      </div>
                    </div>

                    <div className="full-stack-practice-exp">
                      <div className="top-title-exp">
                        <span>April 2022 - May 2023</span>
                        <h1>Full Stack Practice</h1>
                        <span>Jed Academy / Azerbaijan, Baku</span>
                      </div>
                      <div className="content">
                        <p>
                          Full Stack Practice at Jed Academy, Azerbaijan:
                          Possessed a comprehensive understanding of the full
                          stack software development process. Developed and
                          maintained production-level software applications with
                          modern technologies. Collaborated closely with teams
                          to deliver high-quality products
                        </p>
                        <p>
                          • Developed server side applications using Node.js,
                          Express, and MongoDB.
                        </p>
                        <p>
                          • Implemented frontend web UI using React, Redux,
                          HTML5, and CSS3.
                        </p>
                        <p>
                          • Provided maintenance and support for existing
                          applications.
                        </p>
                        <p>
                          • Created automated tests to ensure quality of
                          codebase.
                        </p>
                        <p>• Developed RESTful APIs for mobile applications.</p>
                        <p>
                          • Optimized application performance and scalability.
                        </p>
                        <p>
                          • Integrated various external APIs into web
                          applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cv;
