import Header from '../components/Header'

export default function About() {
  return (
    <div className="app-shell">
      <div className="window">
        <div className="title-bar">
          <span>About.exe</span>
          <div className="title-bar-buttons">
            <span className="title-btn">_</span>
            <span className="title-btn">□</span>
            <span className="title-btn">×</span>
          </div>
        </div>

        <div className="window-body">
          <Header />

          <main>
            <section className="about-section">
              <img
                src={`${import.meta.env.BASE_URL}profile.JPG`}
                alt="Brandon Pryor"
                className="about-image"
              />

              <h2>Who I Am</h2>

              <p>
                I am a CompTIA A+ certified IT Support Specialist with hands-on
                experience in troubleshooting hardware and software issues,
                supporting end users, and working with modern IT systems.
              </p>

              <p>
                Through programs like i.c.stars and Per Scholas, I have developed
                practical experience in IT support, system troubleshooting, and
                technical project work. I am passionate about solving technical
                problems, improving user experiences, and continuously growing my
                technical skillset.
              </p>

              <p>
                I am currently seeking opportunities in IT Support or Help Desk
                roles where I can contribute, learn, and grow into more advanced
                technical positions.
              </p>

              {/* 👇 NEW SECTION */}
              <section className="connect-section">
                <h2>Connect</h2>

                <div className="external-links">
                  <a
                    className="win-link"
                    href="https://github.com/brpryor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    className="win-link"
                    href="https://www.linkedin.com/in/brandon-pryor/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}