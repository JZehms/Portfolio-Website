import "./Component-Styles/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-contianer">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-body">
            <div className="about-img-container">
              <img
                className="about-me-img"
                alt="About Me"
                src="src/assets/Placeholder-Image.jpg"
              />
            </div>
            <div className="about-text-container">
              <p>
                Hi, I'm Joshua Zehms, a passionate full-stack developer with a
                love for creating beautiful, functional, and user-friendly
                applications. I specialize in building responsive and
                interactive interfaces using modern technologies and frameworks.
              </p>
              <p>
                On the front end I focus most of my time and energy into
                learning and building with React, but I'm constantly dabbling
                with and exploring new frameworks to better understand the
                front-end landscape. When I'm building a backend I'll usually
                reach for my go-to pairing, Javascript/NodeJS, and AWS.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-wrapper">
          <h3 className="timeline-title">My Professional Journey so far...</h3>
          <ul className="timeline-container">
            <li className="timeline-jet">
              <div className="timeline-jet-left">Here</div>
              <div className="timeline-center">
                <i className="fas fa-jet-fighter-up"></i>
                <hr className="timeline-separator" />
              </div>
              <div className="timeline-jet-right">Here</div>
            </li>
            <li className="timeline-edu">
              <div className="timeline-edu-left">Here</div>
              <div className="timeline-center">
                <i className="fas fa-school"></i>
                <hr className="timeline-separator" />
              </div>
              <div className="timeline-edu-right">Here</div>
            </li>
            <li className="timeline-work">
              <div className="timeline-work-left">Here</div>
              <div className="timeline-center">
                <i className="fas fa-code"></i>
                <hr className="timeline-separator" />
              </div>
              <div className="timeline-work-right">Here</div>
            </li>
            <li className="timeline-self-dev">
              <div className="timeline-self-dev-left">Here</div>
              <div className="timeline-center">
                <i className="fas fa-chalkboard"></i>
                <hr className="timeline-separator" />
              </div>
              <div className="timeline-self-dev-right">Here</div>
            </li>
          </ul>
        </div>

        <div className="tech-stack-wrapper">
          <h3 className="tech-title">My Tech Stack</h3>
          <div className="tech-stack-container">
            <div className="tech-stack-category">
              <h4>Front-End</h4>
              <div className="tech-stack">
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-js-square"></i>
                    <span className="tooltip-text">JavaScript</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <img
                      src="/src/assets/react.svg"
                      alt="React"
                      className="react-icon"
                    />
                    <span className="tooltip-text">React</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-html5"></i>
                    <span className="tooltip-text">HTML5</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-css3-alt"></i>
                    <span className="tooltip-text">CSS3</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-bootstrap"></i>
                    <span className="tooltip-text">Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-stack-category">
              <h4>Back-End</h4>
              <div className="tech-stack">
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-java"></i>
                    <span className="tooltip-text">Java</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-node"></i>
                    <span className="tooltip-text">Node.js</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <img
                      src="/src/assets/sql-icon.svg"
                      alt="SQL"
                      className="sql-icon"
                    />
                    <span className="tooltip-text">SQL</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-aws"></i>
                    <span className="tooltip-text">AWS</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <img
                      src="/src/assets/vite-icon.svg"
                      alt="Vite"
                      className="vite-icon"
                    />
                    <span className="tooltip-text">Vite</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-stack-category">
              <h4>Testing</h4>
              <div className="tech-stack">
                <div className="tech-item">
                  <div className="icon-container">
                    <img
                      src="/src/assets/Cypress-Logo-White.png"
                      alt="Cypress"
                      className="cypress-icon"
                    />
                    <span className="tooltip-text">Cypress</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <img
                      src="/src/assets/Selenium-Icon.svg"
                      alt="Selenium"
                      className="selenium-icon"
                    />
                    <span className="tooltip-text">Selenium</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fas fa-list-check"></i>
                    <span className="tooltip-text">Unit Testing</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fas fa-bug"></i>
                    <span className="tooltip-text">Debugging</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-stack-category">
              <h4>Software</h4>
              <div className="tech-stack">
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-git"></i>
                    <span className="tooltip-text">Git</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-github"></i>
                    <span className="tooltip-text">Github</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <img
                      src="/src/assets/seo-icon.svg"
                      alt="SEO"
                      className="seo-icon"
                    />
                    <span className="tooltip-text">SEO</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-figma"></i>
                    <span className="tooltip-text">Figma</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <i className="fab fa-bitbucket"></i>
                    <span className="tooltip-text">Bitbucket</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="icon-container">
                    <img
                      src="/src/assets/jira-icon.svg"
                      alt="Jira"
                      className="jira-icon"
                    />
                    <span className="tooltip-text">Jira</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
