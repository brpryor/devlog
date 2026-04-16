import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="window header-window">
      <div className="title-bar">
        <span>DevLog.exe</span>
        <div className="title-bar-buttons">
          <span className="title-btn">_</span>
          <span className="title-btn">□</span>
          <span className="title-btn">×</span>
        </div>
      </div>

      <div className="window-body header-body">
        <h1 className="app-title">DevLog & Portfolio</h1>

        <div className="nav-row">
          <Link className="win-link" to="/">
            Home
          </Link>
          <Link className="win-link" to="/about">
            About
          </Link>
          <Link className="win-link" to="/entries">
            Entries
          </Link>
          <Link className="win-link" to="/entries/new">
            New Entry
          </Link>
          <Link className="win-link" to="/projects">
            Projects
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header