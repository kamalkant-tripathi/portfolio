function Navbar() {
  return (
    <nav>
      <div className="nav-logo">KT.</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Resume ↓
      </a>
    </nav>
  );
}

export default Navbar;