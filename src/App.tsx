import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MyNavbar from "./components/Navbar";
import StarField from "./components/StarField";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/themes.css";
import NebulaParallax from "./components/NebulaParallax";
function App() {
  return (
    <div className="app-container">
      <div className="nebula-back" />
      <div className="nebula-front" />
      <NebulaParallax /> 
      {/* ⭐ Dynamic Starfield Background */}
      <StarField />
      {/* Navbar */}
      <MyNavbar />

      {/* Main Content – single scrolling page */}
      <main className="main-content">
        <section id="home" className="page-section">
          <Home />
        </section>
        <section id="about" className="page-section">
          <About />
        </section>

        <section id="projects" className="page-section">
          <Projects />
        </section>


        <section id="contact" className="page-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
