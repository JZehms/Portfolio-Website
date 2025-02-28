import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <header className="navbar-header">joshzehms.dev</header>
      <ul>
        <li>
          <a href="#about" className="navbar-link">
            {" "}
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">
            {" "}
            Contact Me
          </a>
        </li>
        <li>
          <a href="#resume" className="navbar-link">
            {" "}
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joshua-zehms/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JZehms"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
          >
            <FaGithubAlt />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
