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
                <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel" style={{ paddingBottom: "60px" }}>
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
                        Final-year Software Development student at Glasgow Caledonian University,
                        passionate about building real-world applications that combine machine learning,
                        full-stack development, and clean software engineering.
                      </p>

                      <hr style={{ borderColor: "rgba(120,180,255,0.25)", margin: "1rem auto", width: "60%" }} />

                      <p className="px-md-5">
                        I've shipped end-to-end projects across multiple domains — from a
                        <strong> property price prediction platform</strong> trained on 2M+ UK government
                        records and deployed on Vercel &amp; Render, to a <strong>real-time planet visibility
                        tracker</strong> using Python and Astropy, to a <strong>gamified task manager</strong> with
                        Auth0 authentication and a live XP levelling system.
                      </p>

                      <p className="px-md-5">
                        I'm comfortable working across the full stack — designing REST APIs with FastAPI,
                        building responsive UIs in React &amp; TypeScript, engineering ML pipelines with
                        XGBoost and scikit-learn, and deploying production-ready services with Docker and CI/CD.
                      </p>
                    </section>
                  </div>

                  {/* SKILLS */}
                  <div className="carousel-item">
                    <section className="space-section">
                      <h3 className="text-center space-subheading mb-3">
                        Technical Skills
                      </h3>

                      <div className="row g-2 skills-grid">
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Languages</h5>
                            <p>Python, Java, C#, JavaScript, HTML/CSS, Scala</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Frameworks/Tools</h5>
                            <p>Git, React, FastAPI, Visual Studio, IntelliJ</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Databases</h5>
                            <p>MySQL, SQLite, MongoDB, Supabase, Microsoft Access</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Data &amp; ML</h5>
                            <p>pandas, NumPy, scikit-learn, XGBoost, Matplotlib/Seaborn</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Cloud &amp; DevOps</h5>
                            <p>AWS, Azure, Google Cloud, Vercel, Docker, GitHub Actions, CI/CD Pipelines</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Testing</h5>
                            <p>Jest, JUnit, PyTest</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Software</h5>
                            <p>Adobe Premiere Pro, Photoshop, Microsoft Office Suite (including Project and Access)</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Concepts</h5>
                            <p>OOP, Functional, Procedural and Declarative Programming, SDLC, Agile Practices</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="space-panel p-2 skills-panel">
                            <h5>Soft Skills</h5>
                            <p>Strong Problem-Solving, Team Player, Adaptable, Strong Communication</p>
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
                      <div className="about-panel-stack">
                        <div className="space-panel p-4 about-panel">
                          <h5>Glasgow Caledonian University</h5>
                          <p>BSc (Hons) Software Development</p>
                          <p>What Knowledge I Gained?</p>
                          <p>Devops Pipelines - Functional Programming - Machine Learning - Full Stack Development</p>
                        </div>
                        <div className="space-panel p-4 about-panel">
                          <h5>City of Glasgow College</h5>
                          <p>HNC / HND Software Development</p>
                        </div>
                        <div className="space-panel p-4 about-panel">
                          <h5>St Andrew’s Academy</h5>
                          <p>Higher & National Qualifications</p>
                        </div>
                      </div>
                    </section>
                  </div>


                  {/* EXPERIENCE */}
                  <div className="carousel-item">
                    <section className="space-section">
                      <h3 className="text-center space-subheading mb-4">
                        Work Experience
                      </h3>

                      <div className="about-panel-stack">
                        <div className="space-panel p-4 about-panel">
                          <h5>Amazon — Delivery Driver</h5>
                          <p>
                            Worked independently in a fast-paced delivery environment, managing daily
                            routes, deadlines, and customer drop-offs across changing conditions.
                          </p>
                          <p>
                            This strengthened my time management, self-discipline, and problem-solving,
                            as I had to adapt quickly to traffic, route changes, and delivery issues while
                            maintaining reliability and efficiency.
                          </p>
                        </div>

                        <div className="space-panel p-4 about-panel">
                          <h5>Iceland — Store Assistant</h5>
                          <p>
                            Supported day-to-day store operations including customer service, stock handling,
                            and working efficiently as part of a team in a busy retail environment.
                          </p>
                          <p>
                            This helped me build strong communication, teamwork, and adaptability while
                            staying effective under pressure and maintaining a high standard of service.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* INTERESTS */}
                  <div className="carousel-item">
                    <section className="space-section">
                      <h3 className="text-center space-subheading mb-2">
                        Interests
                      </h3>

                      <div className="about-panel-stack interests-stack">
                        <div className="space-panel about-panel interests-panel">
                          <h5>Martial Arts — Boxing &amp; Kickboxing</h5>
                          <ul>
                            <li>Actively train in boxing and kickboxing with different clubs and environments.</li>
                            <li>Developed discipline, mental toughness, and the ability to perform under pressure through consistent training and progression.</li>
                            <li>Regularly training with varied groups, building adaptability, communication, and resilience.</li>
                          </ul>
                        </div>
                        <div className="space-panel about-panel interests-panel">
                          <h5>Running &amp; Endurance</h5>
                          <ul>
                            <li>Completed the Glasgow Half Marathon, demonstrating commitment to long-distance endurance training and goal setting.</li>
                            <li>Currently training towards further running events, maintaining a consistent schedule combining cardio and recovery.</li>
                          </ul>
                        </div>
                        <div className="space-panel about-panel interests-panel">
                          <h5>Gym &amp; Strength Training</h5>
                          <ul>
                            <li>Follows a structured gym routine focused on strength, endurance, and overall fitness.</li>
                            <li>Balances multiple training disciplines alongside university and work, requiring strong time management and consistency.</li>
                          </ul>
                        </div>
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
