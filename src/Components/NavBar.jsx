import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import "./Component-Styles/NavBar.css";

const NavBar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <header className="navbar-header">joshzehms.dev</header>
      <ul>
        <li>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="navbar-link"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="navbar-link"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className="navbar-link"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="navbar-link"
          >
            Contact
          </button>
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
