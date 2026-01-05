import DownloadCV from "../components/Cv";

const About = () => {
  return (
    <div className="container my-5 about-container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card space-card shadow-lg">
            <div className="card-header space-card-header">
              <h1 className="text-center space-heading">About Me</h1>
            </div>

            <div className="card-body">
              {/* Bootstrap Carousel */}
              <div style={{ position: "relative", paddingLeft: "80px", paddingRight: "80px" }}>
                <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators */}
                <div className="carousel-indicators">
                  {[
                    { index: 0, label: "Profile" },
                    { index: 1, label: "Skills" },
                    { index: 2, label: "Education" },
                    { index: 3, label: "Experience" },
                    { index: 4, label: "Interests" },
                  ].map((item) => (
                    <button
                      key={item.index}
                      type="button"
                      data-bs-target="#aboutCarousel"
                      data-bs-slide-to={item.index}
                      className={item.index === 0 ? "active" : ""}
                      aria-label={item.label}
                    />
                  ))}
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                  {/* PROFILE */}
                  <div className="carousel-item active">
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
                  </div>

                  {/* SKILLS */}
                  <div className="carousel-item">
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
                  </div>

                  {/* EDUCATION */}
                  <div className="carousel-item">
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
                  </div>


                  {/* EXPERIENCE */}
                  <div className="carousel-item">
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
                  </div>

                  {/* INTERESTS */}
                  <div className="carousel-item">
                    <section className="space-section">
                        <h3 className="text-center space-subheading mb-4">
                        Interests
                      </h3>

                      <div className="space-panel p-4 mb-3">
                        <ul>
                          <li>Programming</li>
                          <li>Health and Fitness</li>
                          <li>Martial Arts (Boxing, Kickboxing)</li>
                          <li>Gym</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
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
