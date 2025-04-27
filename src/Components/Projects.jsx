import "./Component-Styles/Projects.css";
import "./Component-Styles/Hero.css";
import webScraper from "../assets/Projects-Assets/Crawler-Placeholder.png";
import dhiGif from "../assets/Projects-Assets/Homepage-Recording.gif";
import portfolioGif from "../assets/Projects-Assets/Portfolio-Recording.gif";
import weatherImg from "../assets/Projects-Assets/Weather-app-placeholder.png";

function Projects() {
  return (
    <div className="projects-container">
      <section id="projects">
        <h2 className="projects-title">My projects</h2>
        <div className="projects-body">
          <div className="project-1">
            <div className="project-images">
              <img
                className="project-1-image"
                alt="Homepage Work at DHI Group"
                src={webScraper}
              ></img>
            </div>
            <div className="projects-text-container">
              <h3 className="projects-card-title">Web Scraper</h3>
              <div className="project-languages">
                <span className="c-style">C#</span>,{" "}
                <span className="html-style">HTML</span>,{" "}
                <span className="js-style">Selenium</span>
              </div>
              <p className="projects-text">
                <span className="projects-inverse">
                  I created a web scraper to automatically collect all the
                  images from every page on a website.
                </span>{" "}
                It works by crawling through the site's pages, identifying image
                elements{" "}
                <span className="projects-inverse">(like img tags)</span>, and
                downloading the images to a local folder or database. This is
                helpful for tasks like gathering images for research or backing
                up content.
              </p>
              <div className="view-project-button">
                <a href="https://github.com/JZehms/Web-Page-Scrubber">
                  <button className="project-button">View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-1">
            <div className="project-images">
              <img
                className="project-1-image"
                alt="Homepage Work at DHI Group"
                src={dhiGif}
                loading="lazy"
              ></img>
            </div>
            <div className="projects-text-container">
              <h3 className="projects-card-title">DHI Group Inc Work</h3>
              <div className="project-languages">
                <span className="react-style">React</span>,{" "}
                <span className="java-style">Java</span>,{" "}
                <span className="js-style">JavaScript</span>,{" "}
                <span className="aws-style">AWS</span>
              </div>
              <p className="projects-text">
                At DHI Group, I helped the Content Management Team by{" "}
                <span className="projects-inverse">
                  translating Figma designs into reusable React components and
                  building pages
                </span>{" "}
                using React, JavaScript, Java, HTML, and CSS. One highlight was{" "}
                <span className="projects-inverse">
                  designing and developing the company's new landing page,
                </span>{" "}
                ensuring it made a strong first impression with a clean,
                user-friendly design.
              </p>
              <div className="view-project-button">
                <a href="https://www.dice.com/">
                  <button className="project-button">View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-1">
            <div className="project-images">
              <img
                className="project-1-image"
                alt="Homepage Work at DHI Group"
                src={portfolioGif}
                loading="lazy"
              ></img>
            </div>
            <div className="projects-text-container">
              <h3 className="projects-card-title">Developer Portfolio</h3>
              <div className="project-languages">
                <span className="react-style">ReactJS</span>,{" "}
                <span className="js-style">JavaScript</span>
              </div>
              <p className="projects-text">
                This is the page you're currently viewing.{" "}
                <span className="projects-inverse">
                  I built it to grow my ReactJS skills and create a space to
                  showcase my work.
                </span>{" "}
                I spent a lot of time designing and building it to highlight my
                projects and{" "}
                <span className="projects-inverse">
                  reflect my growth as a developer.
                </span>{" "}
                Each section demonstrates the technologies and techniques I've
                learned. If you’d like to explore the code, click below to view
                the source.
              </p>
              <div className="view-project-button">
                <a href="https://github.com/JZehms/Portfolio-Website">
                  <button className="project-button">View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-1">
            <div className="project-images">
              <img
                className="project-1-image"
                alt="Homepage Work at DHI Group"
                src={weatherImg}
              ></img>
            </div>
            <div className="projects-text-container">
              <h3 className="projects-card-title">Weather Website</h3>
              <div className="project-languages">
                <span className="react-style">ReactJS</span>,{" "}
                <span className="html-style">Express.js</span>,{" "}
                <span className="js-style">Tailwind</span>,{" "}
                <span className="java-style">NodeJS</span>
              </div>
              <p className="projects-text">
                This is my{" "}
                <span className="projects-inverse">current project.</span> I'm
                building a weather website to deepen my knowledge of ReactJS,
                Vite, and React Query for API integration. Along with frontend
                experience, I'm using Node.js and Express to fetch and manage
                API data.{" "}
                <span className="projects-inverse">
                  My goal is to turn this into a mobile app with React Native,
                  gaining experience in cross-platform development.
                </span>{" "}
                By doing this, I’ll learn how to adapt the web app into a mobile
                app, expanding my skills in both web and mobile platforms.
              </p>
              <div className="view-project-button">
                <button className="project-button">In Progress</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
