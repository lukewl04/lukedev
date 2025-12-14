const projects = [
  {
    title: "Planet Tracker",
    image: "/planet_tracker.png", 
    description:
      "A real-time planet visibility tracker built with React, FastAPI, and Astropy. Calculates planetary positions based on user location and visualises the solar system in 2D.",
    tech: ["React", "FastAPI", "Python", "Astropy"],
    link: "https://github.com/lukewl04/Planet-Dashboard",
  },
];

const Projects = () => (
  <div className="container py-5">
    <h1 className="space-heading text-center mb-5">Projects</h1>

    <div className="row justify-content-center">
      {projects.map((project) => (
        <div key={project.title} className="col-md-6 col-lg-4 mb-4">
          <div className="project-card h-100">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <p>More Coming Soon!</p>
  </div>
);

export default Projects;
