function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            LUTREX<span>DEV</span>
          </div>

          <p>Building digital experiences that stand out.</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/lutrex-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a href="#contact">
            Contact ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Lutrex Dev. All rights reserved.</span>

        <a href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;