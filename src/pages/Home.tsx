import { Link } from 'react-router-dom'
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

          <div className="nav-row">
            <Link className="win-link" to="/about">
              About
            </Link>
            <Link className="win-link" to="/entries">
              Entries
            </Link>
            <Link className="win-link" to="/entries/new">
              New Entry
            </Link>
          </div>

          <main>
            <section>
              <h2>Welcome</h2>
              <p>This is the Home page of my DevLog.</p>
              <p>
                Track your coding progress, moods, tags, and notes in a retro
                Windows-inspired journal.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}