import type { Entry } from '../data/entries'
import EntryCard from '../components/EntryCard'
import Header from '../components/Header'

type EntriesProps = {
  entries: Entry[]
}

function Entries({ entries }: EntriesProps) {
  return (
    <div className="app-shell">
      <div className="window">
        <div className="title-bar">
          <span>Entries.exe</span>
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
              <h2>All Entries ({entries.length})</h2>

              {entries.length === 0 && (
                <p className="empty-state">No entries yet. Add one!</p>
              )}

              <div className="entries-list">
                {entries.map((entry) => (
                  <EntryCard key={entry.id} entry={entry} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Entries