import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import "./styles/App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
