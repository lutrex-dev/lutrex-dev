function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-label">05 — CONTACT</div>

      <div className="contact-content">
        <h2>
          HAVE A PROJECT
          <br />
          <span>IN MIND?</span>
        </h2>

        <p>
          Have an idea, a project or just want to talk about
          a website? Let's turn your idea into something real.
        </p>

        <div className="contact-buttons">
          <a
            href="https://wa.me/2349077925156"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button primary-contact"
          >
            WhatsApp ↗
          </a>

          <a
            href="mailto:lutormela@gmail.com"
            className="contact-button"
          >
            Send an Email ↗
          </a>
        </div>

        <div className="contact-details">
          <div>
            <span>Email</span>
            <a href="mailto:lutormela@gmail.com">
              lutormela@gmail.com
            </a>
          </div>

          <div>
            <span>WhatsApp</span>
            <a
              href="https://wa.me/2349077925156"
              target="_blank"
              rel="noopener noreferrer"
            >
              +234 907 792 5156
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;