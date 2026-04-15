export type Mood = 'happy' | 'curious' | 'frustrated' | 'neutral'

export interface Entry {
  id: number
  title: string
  summary: string
  mood: Mood
  tags: string[]
  createdAt: string
}

const seedEntries: Entry[] = [
  {
    id: 1,
    title: 'My computer got stolen but at least my devlog project is set up',
    summary: 'Scaffolded a Vite + React + TypeScript app before my computer was stolen',
    mood: 'frustrated',
    tags: ['setup', 'vite'],
    createdAt: '2025-06-01T09:00:00.000Z',
  },
  {
    id: 2,
    title: 'Seriously someone please give me back my computer',
    summary: 'While using my old laptop, I updated my seed data',
    mood: 'neutral',
    tags: ['setup', 'seed data'],
    createdAt: '2025-06-01T09:00:00.000Z',
  },
  {
    id: 3,
    title: 'I will pay you $10 if you return my computer',
    summary: 'Scaffolded a Vite + React + TypeScript app...',
    mood: 'curious',
    tags: ['setup', 'vite'],
    createdAt: '2025-06-01T09:00:00.000Z',
  }
]

export default seedEntries