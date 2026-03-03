import pic from './assets/Chococat.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="header">
        <div className="header-left">
          <img className="avatar" src={pic} alt="Chococat" />
        </div>

        <h1 className="name">Brandon Pryor</h1>
      </header>

      <div>
        <a
          href="https://www.linkedin.com/in/brandon-pryor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <main className="main">
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hello, I'm Brandon, a CompTIA A+ certified IT Specialist with a
            background in healthcare and customer service. I specialize in
            troubleshooting hardware and software issues, supporting end users,
            and improving technical workflows in structured, compliance-driven
            environments. I am actively committed to continuous learning in the
            tech space as I am currently expanding my skills through hands-on
            labs and certifications including Network+, ITILv4, and Microsoft
            AZ-900. I’m building experience in Active Directory, endpoint
            management, virtualization, and scripting. One skill I’m
            particularly proud of is structured problem-solving, breaking down
            complex issues into clear, actionable steps. A project I’m proud of
            is collaborating in an Agile team at i.c.stars to build and present
            a client-facing HR workflow solution from requirements gathering to
            full-stack delivery.
          </p>
        </section>
      </main>

    </div>
  );
}

export default App;