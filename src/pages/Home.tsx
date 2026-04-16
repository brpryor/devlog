import Header from '../components/Header'

export default function Home() {
  return (
    <div className="app-shell">
      <div className="window">
        <div className="title-bar">
          <span>Home.exe</span>
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
              <h2>Welcome</h2>
              <p>
                Hello, I’m Brandon Pryor — a CompTIA A+ certified IT Support
                Specialist with a growing background in troubleshooting,
                technical support, and development.
              </p>
              <p>
                This site is a space where I share my projects, document my
                learning journey, and highlight the skills I am continuing to
                build as I work toward opportunities in IT support and help desk
                roles.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}