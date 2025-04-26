import "./Component-Styles/Projects.css";
import "./Component-Styles/Hero.css";

function Projects() {
  return (
    //Build in HTML first, then turn it into JavaScript
    <div className="projects-container">
      <section id="projects">
        <h2 className="projects-title">My projects</h2>
        <div className="projects-body">
          <div className="project-1">
            <div className="project-images">
              <img
                className="project-1-image"
                alt="Homepage Work at DHI Group"
                src="src/assets/Projects-Assets/Crawler-Placeholder.png"
              ></img>
            </div>
            <div className="projects-text-container">
              <h3 className="projects-card-title">Web Crawler</h3>
              <div className="project-languages">
                <span className="c-style">C#</span>,{" "}
                <span className="html-style">HTML</span>
              </div>
              <p className="projects-text">
                <span className="projects-inverse">
                  Morbi in sem quis dui placerat ornare.
                </span>{" "}
                Pellentesque odio nisi euismod in pharetra a ultricies in diam.
                Sed arcu. Cras consequat. Praesent dapibus neque id cursus
                faucibus tortor neque egestas auguae eu vulputate magna eros eu
                erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan
                porttitor facilisis luctus metus.
              </p>
              <div className="view-project-button">
                <button className="project-button">View Project</button>
              </div>
            </div>
          </div>
          <div className="project-1">
            <div className="project-images">
              <img
                className="project-1-image"
                alt="Homepage Work at DHI Group"
                src="src/assets/Projects-Assets/Homepage-Recording.gif"
              ></img>
            </div>
            <div className="projects-text-container">
              <h3 className="projects-card-title">
                DHI Group Inc Website Work
              </h3>
              <div className="project-languages">
                <span className="react-style">React</span>,{" "}
                <span className="java-style">Java</span>,{" "}
                <span className="js-style">JavaScript</span>,{" "}
                <span className="aws-style">AWS</span>
              </div>
              <p className="projects-text">
                <span className="projects-inverse">
                  Morbi in sem quis dui placerat ornare.
                </span>{" "}
                Pellentesque odio nisi euismod in pharetra a ultricies in diam.
                Sed arcu. Cras consequat. Praesent dapibus neque id cursus
                faucibus tortor neque egestas auguae eu vulputate magna eros eu
                erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan
                porttitor facilisis luctus metus.
              </p>
              <div className="view-project-button">
                <button className="project-button">View Project</button>
              </div>
            </div>
          </div>
          <div className="project-1">
            <div className="project-images">
              <img
                className="project-1-image"
                alt="Homepage Work at DHI Group"
                src="src/assets/Projects-Assets/Homepage-Recording.gif"
              ></img>
            </div>
            <div className="projects-text-container">
              <h3 className="projects-card-title">Developer Portfolio</h3>
              <div className="project-languages">
                <span className="react-style">ReactJS</span>,{" "}
                <span className="js-style">JavaScript</span>
              </div>
              <p className="projects-text">
                <span className="projects-inverse">
                  Morbi in sem quis dui placerat ornare.
                </span>{" "}
                Pellentesque odio nisi euismod in pharetra a ultricies in diam.
                Sed arcu. Cras consequat. Praesent dapibus neque id cursus
                faucibus tortor neque egestas auguae eu vulputate magna eros eu
                erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan
                porttitor facilisis luctus metus.
              </p>
              <div className="view-project-button">
                <button className="project-button">View Project</button>
              </div>
            </div>
          </div>
          <div className="project-1">
            <div className="project-images">
              <img
                className="project-1-image"
                alt="Homepage Work at DHI Group"
                src="src/assets/Projects-Assets/Homepage-Recording.gif"
              ></img>
            </div>
            <div className="projects-text-container">
              <h3 className="projects-card-title">
                Book Review App
              </h3>
              <div className="project-languages">
                <span className="react-style">Node.js</span>,{" "}
                <span className="html-style">Express.js</span>,{" "}
                <span className="js-style">RESTFUL APIs</span>
              </div>
              <p className="projects-text">
                <span className="projects-inverse">
                  Morbi in sem quis dui placerat ornare.
                </span>{" "}
                Pellentesque odio nisi euismod in pharetra a ultricies in diam.
                Sed arcu. Cras consequat. Praesent dapibus neque id cursus
                faucibus tortor neque egestas auguae eu vulputate magna eros eu
                erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan
                porttitor facilisis luctus metus.
              </p>
              <div className="view-project-button">
                <button className="project-button">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
