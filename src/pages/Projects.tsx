import Header from '../components/Header'

export default function Projects() {
  return (
    <div className="app-shell">
      <div className="window">
        <div className="title-bar">
          <span>Projects.exe</span>
          <div className="title-bar-buttons">
            <span className="title-btn">_</span>
            <span className="title-btn">□</span>
            <span className="title-btn">×</span>
          </div>
        </div>

        <div className="window-body">
          <Header />

          <main>
            <section>
              <h2>Projects</h2>
              <p>
                Here are some of the technical projects I have worked on as I
                continue building my skills in IT support, troubleshooting, and
                development.
              </p>

              <div className="projects-list">
                <a
                  className="project-card project-link"
                  href="PASTE_YOUR_BLIR_LINK_HERE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>Blir SmartSupport MVP</h3>
                  <p>
                    An IT support automation MVP focused on ticket routing,
                    incident handling, and onboarding workflows. Built to show
                    how support processes can be streamlined through automation.
                  </p>
                </a>

                <a
                  className="project-card project-link"
                  href="PASTE_YOUR_DEVLOG_LINK_HERE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>DevLog Portfolio</h3>
                  <p>
                    A retro-inspired personal portfolio and journal site built
                    to showcase my projects, technical growth, and learning
                    journey.
                  </p>
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}