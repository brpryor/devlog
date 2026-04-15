import type { Entry } from '../data/entries'
import EntryCard from '../components/EntryCard'
import { Link } from 'react-router-dom'

type EntriesProps = {
  entries: Entry[]
}

function Entries({ entries }: EntriesProps) {
  return (
    <div className="app-shell">
      <div className="window">
        <div className="title-bar">
          <span>DevLog.exe</span>
          <div className="title-bar-buttons">
            <span className="title-btn">_</span>
            <span className="title-btn">□</span>
            <span className="title-btn">×</span>
          </div>
        </div>

        <div className="window-body">
          <div className="nav-row">
            <Link className="win-link" to="/about">About</Link>
            <Link className="win-link" to="/">Home</Link>
            <Link className="win-link" to="/entries/new">New Entry</Link>
          </div>

          <h2>All Entries ({entries.length})</h2>

          {entries.length === 0 && (
            <p className="empty-state">No entries yet. Add one!</p>
          )}

          <div className="entries-list">
            {entries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entries