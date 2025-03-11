import "./Component-Styles/Hero.css";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1>
          <span className="landing-intro">
            <span className="hero-inverse">Hi</span>, my{" "}
            <span className="hero-inverse">name</span> is{" "}
          </span>
          <br></br>
        </h1>
        <h2 className="landing-intro-name">
          Joshua <span className="hero-inverse">Zehms</span>
        </h2>

        <h2 className="hero-title">
          <span className="hero-inverse">Full-Stack</span> Developer
        </h2>
        <p className="hero-sub-text">
          I build beautiful and functional web experiences,
          <br></br>so please feel free to reach out. I would love to connect
          with you!
        </p>
        <div className="hero-buttons">
          <button
            onClick={() => scrollToSection("contact")}
            className="contact-button"
          >
            Contact Me<span className="fas fa-arrow-right"></span>
          </button>
          <a
            href="./docs/Joshua-Zehms-Resume.pdf"
            className="contact-resume"
            target="_blank"
            download="Joshua-Zehms-Resume.pdf"
          >
            Download Resume<span className="fas fa-download"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
