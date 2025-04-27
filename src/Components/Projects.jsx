import "./Component-Styles/Projects.css";
import "./Component-Styles/Hero.css";

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
                src="src/assets/Projects-Assets/Crawler-Placeholder.png"
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
                src="src/assets/Projects-Assets/Homepage-Recording.gif"
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
                During my time at DHI Group, I was part of the Content
                Management Team, where I was responsible for{" "}
                <span className="projects-inverse">
                  translating Figma designs into reusable React components and
                  building entire pages for the website.
                </span>{" "}
                My work involved a combination of React, JavaScript, Java, HTML,
                and CSS to deliver dynamic and user-friendly content. One of my
                proudest accomplishments was designing and developing the
                company’s landing page.{" "}
                <span className="projects-inverse">
                  It was a key project since it was the first impression
                  visitors would have when they arrived at the site,
                </span>{" "}
                and I was focused on ensuring it was visually appealing and
                highly functional.
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
                src="src/assets/Projects-Assets/Portfolio-Recording.gif"
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
                This is the page you are currently viewing.{" "}
                <span className="projects-inverse">
                  My goal with this project was to expand my knowledge and
                  skills in ReactJS while creating something that effectively
                  showcases my past and present work.
                </span>{" "}
                I spent a significant amount of time designing and building this
                page, ensuring it not only highlights the projects I've worked
                on but also reflects my growth as a developer. Each section of
                this page is a{" "}
                <span className="projects-inverse">
                  direct reflection of the technologies and techniques I've
                  learned along the way.
                </span>{" "}
                If you're interested in exploring the code behind it, feel free
                to click the button below to view the source code.
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
                src="src/assets/Projects-Assets/Weather-app-placeholder.png"
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
                building a weather website to deepen my understanding of
                ReactJS, Vite, and how to integrate React Query for working with
                APIs. Along with gaining experience In frontend technologies,
                I'm also working with Node.js and Express will fetch and manage
                data from the API.{" "}
                <span className="projects-inverse">
                  My end goal is to transform this website into a mobile app
                  using React Native, which will give me hands-on experience
                  with cross-platform development.
                </span>{" "}
                By doing so, I’ll be able to learn how to adapt my web app into
                a fully functional mobile application, further expanding my
                development skills across both web and mobile platforms.
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
