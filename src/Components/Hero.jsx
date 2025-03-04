import "./Component-Styles/Hero.css";

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
          <h2 className="landing-intro-name">
            Joshua <span className="hero-inverse">Zehms</span>
          </h2>
        </h1>
        <h2 className="hero-title">
          <span className="hero-inverse">Full-Stack</span> Developer
        </h2>
        <p className="hero-sub-text">
          I build beautfiul and functional web experiences,
          <br></br>so please feel free to reach out. I would love to connect
          with you!
        </p>
        <a href="#contact" className="contact-button">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
