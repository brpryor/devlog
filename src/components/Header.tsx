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
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <h1 className="app-title">DevLog</h1>
      </div>
    </header>
  )
}

export default Header