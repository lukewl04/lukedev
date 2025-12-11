import DownloadCV from "../components/Cv";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? 5 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === 5 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="container my-5 about-container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="card space-card shadow-lg">
            <div className="card-header space-card-header">
              <h1 className="text-center space-heading">About Me</h1>
            </div>
            <div className="card-body position-relative">
              {/* Left Arrow Button */}
              <button
                className="nav-arrow d-none d-md-flex align-items-center justify-content-center position-absolute start-0 top-50 translate-middle-y"
                onClick={handlePrev}
                style={{ left: "-40px", zIndex: 1 }}
              >
                <FaArrowLeft size={18} />
              </button>

              {/* Right Arrow Button */}
              <button
                className="nav-arrow d-none d-md-flex align-items-center justify-content-center position-absolute end-0 top-50 translate-middle-y"
                onClick={handleNext}
                style={{ right: "-40px", zIndex: 1 }}
              >
                <FaArrowRight size={18} />
              </button>



              <div id="cvCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {["Profile", "Skills", "Education 1", "Education 2", "Experience", "Hobbies & Projects"].map((label, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#cvCarousel"
                      data-bs-slide-to={index}
                      className={activeIndex === index ? "active" : ""}
                      aria-current={activeIndex === index ? "true" : undefined}
                      aria-label={label}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>

                <div className="carousel-inner">

                  {/* PROFILE SLIDE */}
                  <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                    <section className="mb-4 text-center py-4 space-section text-bright">

                      <h2 className="space-subheading">Luke Livingston</h2>
                      <p className="lead">Software Development Student</p>
                      <p>Paisley | Phone: 07453394350 | Email: lukelukewl@gmail.com</p>
                      <div className="py-4 px-md-5">
                        <p className="fs-5">
                          Motivated and disciplined Software Development student currently pursuing a BSc (Honours) in Software Development at Glasgow Caledonian University. Strong foundation in programming, problem-solving, and teamwork, supported by hands-on academic projects and personal development work. Actively seeking a junior or graduate software engineering role where I can contribute to real-world development projects and continue growing as a developer.
                        </p>
                      </div>
                    </section>
                  </div>

                  {/* SKILLS SLIDE */}
                  <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                    <section className="mb-4 py-4 space-section">
                      <h3 className="border-bottom pb-2 text-center space-subheading">Technical Skills</h3>

                      <div className="row mt-4">
                        <div className="col-md-6">

                          <div className="p-3 rounded mb-3 space-panel">
                            <h5>Languages</h5>
                            <ul>
                              <li>Python, Java, C#, JavaScript, HTML/CSS, Scala</li>
                            </ul>
                          </div>

                          <div className="p-3 rounded space-panel">
                            <h5>Frameworks / Tools</h5>
                            <ul>
                              <li>Git, SQL, React, Visual Studio, IntelliJ</li>
                            </ul>
                          </div>

                        </div>

                        <div className="col-md-6">

                          <div className="p-3 rounded mb-3 space-panel">
                            <h5>Software</h5>
                            <ul>
                              <li>Adobe Premiere Pro, Photoshop, Microsoft Office (Project & Access)</li>
                            </ul>
                          </div>

                          <div className="p-3 rounded space-panel">
                            <h5>Concepts</h5>
                            <ul>
                              <li>Object-Oriented, Functional, Procedural, Declarative Programming</li>
                              <li>Software Development Life Cycle (SDLC)</li>
                              <li>Agile Practices</li>
                            </ul>
                          </div>

                        </div>
                      </div>

                      <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                        <span className="badge space-badge me-2">Problem-Solving</span>
                        <span className="badge space-badge me-2">Team Player</span>
                        <span className="badge space-badge me-2">Adaptable</span>
                        <span className="badge space-badge">Communication</span>
                      </div>
                    </section>
                  </div>

                  {/* EDUCATION SLIDE 1 */}
                  <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                    <section className="mb-4 py-4 space-section">
                      <h3 className="border-bottom pb-2 text-center space-subheading">Education</h3>

                      <div className="p-4 rounded mt-4 space-panel">
                        <h5>Secondary School (St Andrews Academy) — 2019–2021</h5>
                        <ul className="mt-3">
                          <li>Nat5 English – A</li>
                          <li>Higher English, Higher History, Higher Computer Science – B</li>
                          <li>Higher Math, Nat5 History, Nat5 Math – C</li>
                          <li>Level 5 Computer Games Development</li>
                          <li>Performing Engineering Operations</li>
                          <li>National Units – Physics, Chemistry, Numeracy</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded mt-3 space-panel">
                        <h5>City of Glasgow College — 2022–2024</h5>
                        <ul className="mt-3">
                          <li>HNC Software Development</li>
                          <li>HND Software Development</li>
                        </ul>
                      </div>
                    </section>
                  </div>

                  {/* EDUCATION SLIDE 2 */}
                  <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
                    <section className="mb-4 py-4 space-section">
                      <h3 className="border-bottom pb-2 text-center space-subheading">Further Education</h3>

                      <div className="p-4 rounded mt-4 space-panel">
                        <h5>Glasgow Caledonian University — 2024–Present</h5>
                        <ul className="mt-3">
                          <li>3rd Year BSc Software Development</li>
                          <li>4th Year BSc (Honours) Software Development</li>
                        </ul>
                      </div>
                    </section>
                  </div>

                  {/* EXPERIENCE SLIDE */}
                  <div className={`carousel-item ${activeIndex === 4 ? "active" : ""}`}>
                    <section className="mb-4 py-4 space-section">
                      <h3 className="border-bottom pb-2 text-center space-subheading">Work Experience</h3>

                      <div className="p-4 rounded mt-4 space-panel">
                        <h5>Iceland (Paisley Piazza) — Store Assistant (Feb 2023 – Nov 2025)</h5>
                        <ul className="mt-3">
                          <li>Stock management and store support</li>
                          <li>Problem-solving in a fast-paced environment</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded mt-3 space-panel">
                        <h5>Amazon (Glasgow) — Delivery Driver (Nov 2025 – Present)</h5>
                        <ul className="mt-3">
                          <li>Efficient route planning and independent decision-making</li>
                          <li>Strong responsibility and time management</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded mt-3 space-panel">
                        <h5>JD Sports (Paisley) — Sales Assistant (Nov 2021 – Jan 2022)</h5>
                        <ul className="mt-3">
                          <li>Retail experience and team collaboration</li>
                          <li>Storage and stock management</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded mt-3 space-panel">
                        <h5>Five Guys (Braehead) — Crew Member (Jul 2022 – Oct 2022)</h5>
                        <ul className="mt-3">
                          <li>Hospitality and customer service</li>
                          <li>Communication and multitasking</li>
                        </ul>
                      </div>

                    </section>
                  </div>

                  {/* HOBBIES + PERSONAL PROJECTS SLIDE */}
                  <div className={`carousel-item ${activeIndex === 5 ? "active" : ""}`}>
                    <section className="mb-4 py-4 space-section">
                      <h3 className="border-bottom pb-2 text-center space-subheading">Hobbies & Personal Projects</h3>

                      <div className="p-4 rounded mt-4 space-panel">
                        <h5>Personal Projects</h5>
                        <ul className="mt-3">
                          <li><strong>Planet Dashboard</strong> — React website showing planets relative to user location (Python backend)</li>
                          <li><strong>Master XP</strong> — Gamified to-do application using React & JavaScript</li>
                          <li><strong>Neural Network (Flowers)</strong> — Python model detecting flower types based on size/shape</li>
                          <li><strong>Honours Project</strong> — House price prediction system (React + Python)</li>
                          <li><strong>GitHub:</strong> <a href="https://github.com/lukewl04" target="_blank" className="space-link">github.com/lukewl04</a></li>
                        </ul>
                      </div>

                      <div className="p-4 rounded mt-3 space-panel">
                        <h5>Linwood Boxing Club</h5>
                        <p className="mt-3">
                          Amateur boxer training 3 times a week and travelling to train with different clubs. Developing discipline, leadership, motivation, and communication skills.
                        </p>
                      </div>

                      <div className="p-4 rounded mt-3 space-panel">
                        <h5>Fitness & Exercise</h5>
                        <p className="mt-3">
                          Regular gym training focused on strength, conditioning, and long-term health. Fitness is a major part of my lifestyle and personal improvement.
                        </p>
                      </div>

                    </section>
                  </div>

                </div>

              </div>

              <div className="text-center mt-4">
                <DownloadCV />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
