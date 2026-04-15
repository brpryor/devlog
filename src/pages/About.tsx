import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
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

          <div className="nav-row">
            <Link className="win-link" to="/">
              Home
            </Link>
            <Link className="win-link" to="/entries">
              Entries
            </Link>
            <Link className="win-link" to="/entries/new">
              New Entry
            </Link>
          </div>

          <main>
            <h2>About Me</h2>
            <p>
              I am a passionate developer building web applications with React
              and TypeScript.
            </p>
            <p>
              This DevLog project tracks entries with moods, tags, and timestamps
              in a retro Y2K Windows-style interface.
            </p>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default About