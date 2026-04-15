export default function Footer() {
  return (
    <footer className="status-bar">
      <span>© {new Date().getFullYear()} DevLog</span>
      <span>Online</span>
      <span>{new Date().toLocaleTimeString()}</span>
    </footer>
  )
}