import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Mood } from '../data/entries'

type NewEntryFormProps = {
  onAddEntry: (
    title: string,
    content: string,
    mood: Mood,
    tags: string[]
  ) => void
}

function NewEntryForm({ onAddEntry }: NewEntryFormProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState<Mood>('neutral')
  const [tagsInput, setTagsInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const titleError = title.trim() === '' ? 'Title is required' : ''
  const contentError = content.trim() === '' ? 'Content is required.' : ''
  const isValid = titleError === '' && contentError === ''

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)

    if (!isValid) return

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t !== '')

    onAddEntry(title.trim(), content.trim(), mood, tags)

    setTitle('')
    setContent('')
    setMood('neutral')
    setTagsInput('')
    setSubmitted(false)
  }

  return (
    <div className="app-shell">
      <div className="window">
        <div className="title-bar">
          <span>NewEntry.exe</span>
          <div className="title-bar-buttons">
            <span className="title-btn">_</span>
            <span className="title-btn">□</span>
            <span className="title-btn">×</span>
          </div>
        </div>

        <div className="window-body">
          <h2>Create New Entry</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                aria-invalid={submitted && titleError !== '' ? true : undefined}
                aria-describedby={submitted && titleError ? 'title-error' : undefined}
              />
              {submitted && titleError && (
                <strong className="error-text" id="title-error" role="alert">
                  {titleError}
                </strong>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="entry-content">Content</label>
              <textarea
                id="entry-content"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                aria-invalid={submitted && contentError !== '' ? true : undefined}
                aria-describedby={submitted && contentError ? 'content-error' : undefined}
              />
              {submitted && contentError && (
                <strong className="error-text" id="content-error" role="alert">
                  {contentError}
                </strong>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="mood">Mood:</label>
              <select
                id="mood"
                value={mood}
                onChange={(e) => setMood(e.target.value as Mood)}
              >
                <option value="happy">Happy</option>
                <option value="curious">Curious</option>
                <option value="frustrated">Frustrated</option>
                <option value="neutral">Neutral</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="tags">Tags:</label>
              <input
                type="text"
                id="tags"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="e.g. react, routing, css"
              />
            </div>

            <button type="submit" disabled={submitted && !isValid}>
              Save Entry
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewEntryForm