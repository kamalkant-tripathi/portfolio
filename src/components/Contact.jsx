const socialLinks = [
  {
    name: "GitHub",
    url: "YOUR_GITHUB_LINK",
  },
  {
    name: "LinkedIn",
    url: "YOUR_LINKEDIN_LINK",
  },
  {
    name: "Medium",
    url: "YOUR_MEDIUM_LINK",
  },
  {
    name: "YouTube",
    url: "YOUR_YOUTUBE_LINK",
  },
  {
    name: "Topmate",
    url: "YOUR_TOPMATE_LINK",
  },
  {
    name: "X",
    url: "YOUR_X_LINK",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <span>05</span>
        <h2>Contact</h2>
      </div>

      <div className="contact-content">
        <div className="contact-intro">
          <p className="contact-label">LET'S CONNECT</p>

          <h3>
            Have something
            <br />
            <span>interesting in mind?</span>
          </h3>

          <p className="contact-description">
            Whether it's a project, an idea, or just a conversation
            around data and technology, feel free to reach out.
          </p>

          <a
            className="contact-email"
            href="mailto:tripathikamalkant1405@gmail.com"
          >
            tripathikamalkant1405@gmail.com ↗
          </a>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xeaqygjp"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me what's on your mind..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            Send Message ↗
          </button>
        </form>
      </div>

      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            {social.name} ↗
          </a>
        ))}
      </div>

      <footer className="footer">
        <p>© 2026 Kamalkant Tripathi</p>
        <p>Built with curiosity & code.</p>
      </footer>
    </section>
  );
}

export default Contact;