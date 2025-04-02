import "./Component-Styles/About.css";

const timelineData = [
  {
    id: "timeline-jet",
    date: "2011-2021",
    iconClass: "fas fa-jet-fighter-up",
    title: "US Air Force",
    location: "Las Vegas, South Korea, Afganistan, and the United Kingdom",
    description:
      "I began my military career as a logistician and quickly advanced to the role of Supervisor, where I managed a team of 80 personnel. This experience honed my leadership skills, emphasizing the importance of effective communication, teamwork, and adaptability in high-pressure environments.\n" +
      "I played a key role in ensuring operational efficiency and making strategic decisions. My passion for technology grew as I sought out tools and systems to improve logistics operations and enhance team collaboration, ultimately driving my decision to pursue a degree in IT.\n"
  },
  {
    id: "timeline-edu",
    date: "2019-2023",
    iconClass: "fas fa-school",
    title: "B.S. in Computer Software Technology",
    location: "The University of Arizona Global Campus",
    description:
      "Earned my degree in Computer Software Technology with a specialization in web development, databases, and core programming principles.\n" +
      "Gained hands-on experience with core web technologies including HTML, CSS, JavaScript, PHP, and frameworks like React, specializing in both front-end and back-end development.\n" +
      "Developed a strong expertise in relational databases and SQL, gaining a deep understanding of database management, optimization, and querying techniques.\n"
  },
  {
    id: "timeline-work",
    date: "2021-2025",
    iconClass: "fas fa-code",
    title: "Software Development Experience",
    location: "ACS Technologies, Shaw Industries, and DHI Group Inc.",
    description:
      "Gained hands-on experience building and optimizing web applications on AWS, along with creating a C# web crawler for efficient data and image extraction.\n" +
      "Designed, developed, and maintained custom Content Management Systems (CMS), taking ownership of front-end and back-end development. Created intuitive, user-friendly components for content management using React, JavaScript, HTML, and CSS. Developed secure APIs, integrated databases, and implemented advanced features like user authentication, role-based access, and media management to provide clients with scalable and flexible solutions for managing digital content.\n",
  },
  {
    id: "timeline-self-dev",
    date: "2025-Present",
    iconClass: "fas fa-gear fa-lg",
    title: "Self-Development & Learning",
    location: "Continuing Education",
    description:
      "Dedicated to continuous learning, leveraging projects like this portfolio to enhance my skills and gain deeper familiarity with React and its ecosystem.\n" +
      "Exploring modern frameworks, tools, and libraries such as Next.js, Redux, and TypeScript to broaden my knowledge and optimize my development workflow.\n",
  },
];

const techStackData = {
  "Front-End": [
    { icon: "fab fa-js-square", name: "JavaScript", tooltip: "JavaScript" },
    { icon: "fab fa-react", name: "React", tooltip: "React" },
    { icon: "fab fa-html5", name: "HTML5", tooltip: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3", tooltip: "CSS3" },
    { icon: "fab fa-bootstrap", name: "Bootstrap", tooltip: "Bootstrap" },
  ],
  "Back-End": [
    { icon: "fab fa-java", name: "Java", tooltip: "Java" },
    { icon: "fab fa-node", name: "Node.js", tooltip: "Node.js" },
    { name: "SQL", tooltip: "SQL", imageSrc: "/src/assets/sql-icon.svg" },
    { icon: "fab fa-aws", name: "AWS", tooltip: "AWS" },
    { name: "Vite", tooltip: "Vite", imageSrc: "/src/assets/vite-icon.svg" },
  ],
  Testing: [
    {
      name: "Cypress",
      tooltip: "Cypress",
      imageSrc: "/src/assets/Cypress-Logo-White.png",
    },
    {
      name: "Selenium",
      tooltip: "Selenium",
      imageSrc: "/src/assets/Selenium-Icon.svg",
    },
    {
      icon: "fas fa-list-check",
      name: "Unit Testing",
      tooltip: "Unit Testing",
    },
    { icon: "fas fa-bug", name: "Debugging", tooltip: "Debugging" },
  ],
  Software: [
    { icon: "fab fa-git", name: "Git", tooltip: "Git" },
    { icon: "fab fa-github", name: "Github", tooltip: "Github" },
    { name: "SEO", tooltip: "SEO", imageSrc: "/src/assets/seo-icon.svg" },
    { icon: "fab fa-figma", name: "Figma", tooltip: "Figma" },
    { icon: "fab fa-bitbucket", name: "Bitbucket", tooltip: "Bitbucket" },
    { name: "Jira", tooltip: "Jira", imageSrc: "/src/assets/jira-icon.svg" },
  ],
};

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
                learning and building with React, HTML, and CSS but I'm
                constantly dabbling with and exploring new frameworks to better
                understand the front-end landscape. When I'm building a backend
                I'll usually reach for my go-to pairing, Javascript/NodeJS, and
                AWS.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-wrapper">
          <h3 className="timeline-title">My Professional Journey so far...</h3>
          <ul className="timeline-container">
            {timelineData.map((item, index) => (
              <li key={item.id} className={`timeline-item ${item.id}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="timeline-left">
                      <span className="timeline-date">{item.date}</span>
                    </div>
                    <div className="timeline-center">
                      <i className={item.iconClass}></i>
                      <hr className="timeline-separator" />
                    </div>
                    <div className="timeline-right">
                      <span className="timeline-sub-title">{item.title}</span>
                      <br />
                      <span className="timeline-sub-text">{item.location}</span>
                      {item.description.split("\n").map((line) => (
                        <p key={`${item.id}-${line}`}>{line}</p>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="timeline-right">
                      <span className="timeline-sub-title">{item.title}</span>
                      <br />
                      <span className="timeline-sub-text">{item.location}</span>
                      {item.description.split("\n").map((line) => (
                        <p key={`${item.id}-${line}`}>{line}</p>
                      ))}
                    </div>
                    <div className="timeline-center">
                      <i className={item.iconClass}></i>
                      <hr className="timeline-separator" />
                    </div>
                    <div className="timeline-left">
                      <span className="timeline-date">{item.date}</span>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="tech-stack-wrapper">
          <h3 className="tech-title">My Tech Stack</h3>
          <div className="tech-stack-container">
            {Object.keys(techStackData).map((category) => (
              <div className="tech-stack-category" key={category}>
                <h4>{category}</h4>
                <div className="tech-stack">
                  {techStackData[category].map((item) => (
                    <div className="tech-item" key={item.name}>
                      <div className="icon-container">
                        {item.imageSrc ? (
                          <img
                            src={item.imageSrc}
                            alt={item.name}
                            className={`${item.name.toLowerCase()}-icon`}
                          />
                        ) : (
                          <i className={item.icon}></i>
                        )}
                        <span className="tooltip-text">{item.tooltip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
