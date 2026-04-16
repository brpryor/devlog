export type Mood = 'Happy' | 'Curious' | 'Frustrated' | 'Neutral'

export type Entry = {
  id: number
  title: string
  summary: string
  mood: Mood
  tags: string[]
  createdAt: string
}

export const seedEntries: Entry[] = [
  {
    id: 1,
    title: 'Deploying a React Website with GitHub',
    summary:
      'Today I learned how to deploy a React website using GitHub Pages, which helped me understand how to take a project from local development to a live site.',
    mood: 'Curious',
    tags: ['React', 'GitHub', 'Deployment'],
    createdAt: '2026-04-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'Building My DevLog Portfolio',
    summary:
      'I started transforming my DevLog into a personal portfolio to showcase my projects, skills, and growth in IT support and development.',
    mood: 'Happy',
    tags: ['Portfolio', 'React', 'Learning'],
    createdAt: '2026-04-16T09:00:00Z',
  },
  {
    id: 3,
    title: 'Fixing Navigation Issues',
    summary:
      'Worked through duplicate navigation issues and learned how to centralize components like headers to keep the UI clean and consistent.',
    mood: 'Frustrated',
    tags: ['React', 'Debugging', 'UI'],
    createdAt: '2026-04-16T12:00:00Z',
  },
]