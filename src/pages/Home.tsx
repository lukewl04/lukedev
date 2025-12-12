const Home: React.FC = () => {
  return (
    <div className="container text-center">
      <div className="card-space mx-auto home-hero" style={{ maxWidth: "650px" }}>
        <p className="text-uppercase mb-2" style={{ letterSpacing: "0.15em", fontSize: "0.8rem" }}>
          Software Development • React • Python
        </p>

        <h1 className="space-text mb-3">Hello, I'm Luke!</h1>

        <p className="mt-2">
          Software development student at Glasgow Caledonian University focused on machine learning, full-stack development, and data-driven solutions with Python.
          Feel free to explore my projects!
        </p>

        {/* CTA buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <a href="#projects" className="btn space-button">
            Projects
          </a>
          <a href="#about" className="btn space-button">
            About Me
          </a>
        </div>

        {/* GitHub pill */}
        <div className="mt-4 d-flex justify-content-center">
          <a
            href="https://github.com/lukewl04"
            target="_blank"
            rel="noreferrer"
            className="github-pill"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub logo"
              className="github-logo"
            />
            <div className="text-start">
              <div className="github-label">View my GitHub</div>
              <div className="github-handle">@lukewl04</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
