import { useState } from "react";
import { FaLinkedinIn, FaGithubAlt, FaBars } from "react-icons/fa";
import "./Component-Styles/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <section id="navbar">
      <nav className="navbar">
        <div className="navbar-container">
          <button
            className="navbar-header"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ cursor: "pointer", background: "none", border: "none" }}
            aria-label="Scroll to top"
          >
            joshzehms.dev
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
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
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
