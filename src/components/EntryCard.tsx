import type { Entry } from '../data/entries'

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="entry-card">
      <h3>{entry.title}</h3>

      <p className="entry-meta">
        <time dateTime={entry.createdAt}>
          {new Date(entry.createdAt).toLocaleDateString()}
        </time>
        {' · '}
        <span className={`mood-badge mood-${entry.mood}`}>
          {entry.mood}
        </span>
      </p>

      <p className="entry-summary">{entry.summary}</p>

      {entry.tags.length > 0 && (
        <div className="tags">
          {entry.tags.map((tag) => (
            <span className="tag" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default EntryCard