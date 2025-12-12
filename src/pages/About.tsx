import DownloadCV from "../components/Cv";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SLIDE_COUNT = 5;

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SLIDE_COUNT - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SLIDE_COUNT - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="container my-5 about-container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card space-card shadow-lg">
            <div className="card-header space-card-header">
              <h1 className="text-center space-heading">About Me</h1>
            </div>

            <div className="card-body">
              {/* Indicators */}
              <div className="carousel-indicators position-static mb-4">
                {[
                  "Profile",
                  "Skills",
                  "Education",
                  "Experience",
                  "Projects",
                ].map((label, index) => (
                  <button
                    key={index}
                    type="button"
                    className={activeIndex === index ? "active" : ""}
                    aria-current={activeIndex === index}
                    aria-label={label}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              {/* Layout: Arrow | Content | Arrow */}
              <div className="about-carousel-layout">
                {/* Left Arrow */}
                <button
                  className="nav-arrow carousel-arrow"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  type="button"
                >
                  <FaArrowLeft size={18} />
                </button>

                {/* Slide Content */}
                <div className="carousel-content">
                  {/* PROFILE */}
                  {activeIndex === 0 && (
                    <section className="space-section text-center text-bright">
                      <h2 className="space-subheading">Luke Livingston</h2>
                      <p className="lead">Software Development Student</p>
                      <p>Paisley · lukelukewl@gmail.com</p>

                      <p className="fs-5 px-md-5">
                        Software Development student at Glasgow Caledonian
                        University with interests in machine learning, full-stack
                        development, and data-driven solutions using Python.
                      </p>
                    </section>
                  )}

                  {/* SKILLS */}
                  {activeIndex === 1 && (
                    <section className="space-section">
                      <h3 className="text-center space-subheading mb-4">
                        Technical Skills
                      </h3>

                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="space-panel p-3">
                            <h5>Languages</h5>
                            <p>Python, Java, C#, JavaScript, HTML/CSS, Scala</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="space-panel p-3">
                            <h5>Frameworks & Tools</h5>
                            <p>DevOps Pipelines, Iot Pipelines</p>
                            <p>React, SQL, Git, Visual Studio, IntelliJ</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* EDUCATION */}
                  {activeIndex === 2 && (
                    <section className="space-section">
                      <h3 className="text-center space-subheading mb-4">
                        Education
                      </h3>
                        <div className="space-panel p-4">
                        <h5>Glasgow Caledonian University</h5>
                        <p>BSc (Hons) Software Development</p>
                        <p>What Knowledge I Gained?</p>
                        <p>Devops Pipelines - Functional Programming - Machine Learning - Full Stack Development</p>
                      </div>
                      <div className="space-panel p-4 mb-3">
                        <h5>City of Glasgow College</h5>
                        <p>HNC / HND Software Development</p>
                      </div>

                      <div className="space-panel p-4">
                        <h5>St Andrew’s Academy</h5>
                        <p>Higher & National Qualifications</p>
                      </div>
                    </section>
                  )}


                  {/* EXPERIENCE */}
                  {activeIndex === 3 && (
                    <section className="space-section">
                      <h3 className="text-center space-subheading mb-4">
                        Work Experience
                      </h3>

                      <div className="space-panel p-4 mb-3">
                        <h5>Amazon — Delivery Driver</h5>
                        <p>
                          Time management, independence, problem-solving
                        </p>
                      </div>

                      <div className="space-panel p-4">
                        <h5>Iceland — Store Assistant</h5>
                        <p>
                          Fast-paced teamwork and customer service
                        </p>
                      </div>
                    </section>
                  )}

                  {/* PROJECTS / INTERESTS */}
                  {activeIndex === 4 && (
                    <section className="space-section">
                      <h3 className="text-center space-subheading mb-4">
                        Intrests
                      </h3>

                      <div className="space-panel p-4 mb-3">
                        <ul>
                          <li>Programming</li>
                          <li>Health and Fitness</li>
                          <li>Martial Arts (Boxing,Kickboxing)</li>
                          <li>Gym</li>
                        </ul>
                      </div>
                    </section>
                  )}
                </div>

                {/* Right Arrow */}
                <button
                  className="nav-arrow carousel-arrow"
                  onClick={handleNext}
                  aria-label="Next slide"
                  type="button"
                >
                  <FaArrowRight size={18} />
                </button>
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
