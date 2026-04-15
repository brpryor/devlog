import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import seedEntries from './data/entries'
import type { Entry, Mood } from './data/entries'
import About from './pages/About'
import Home from './pages/Home'
import NewEntryForm from './components/NewEntryForm'
import Entries from './pages/Entries'

export default function App() {
  const [entries, setEntries] = useState<Entry[]>(seedEntries)
  const navigate = useNavigate()

  function handleAddEntry(
    title: string,
    content: string,
    mood: Mood,
    tags: string[]
  ) {
    const newEntry: Entry = {
      id: Date.now(),
      title,
      summary: content,
      mood,
      tags,
      createdAt: new Date().toISOString(),
    }

    setEntries((prev) => [newEntry, ...prev])
    navigate('/entries')
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/entries/new"
        element={<NewEntryForm onAddEntry={handleAddEntry} />}
      />
      <Route
        path="/entries"
        element={<Entries entries={entries} />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}