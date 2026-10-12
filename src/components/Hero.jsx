function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="availability">
          <span></span>
          AVAILABLE FOR PROJECTS
        </div>

        <p className="hero-tag">
          WEB DEVELOPER • CREATIVE DEVELOPER
        </p>

        <h1>
          I BUILD
          <br />
          <span>WEBSITES</span>
          <br />
          THAT STAND OUT.
        </h1>

        <p className="hero-description">
          I create modern, responsive and engaging websites
          that turn ideas into digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Let's Work Together
          </a>
        </div>
      </div>

      <div className="hero-code">
        <div className="code-top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="code-content">
          <p><span>&lt;</span>developer<span>&gt;</span></p>
          <p>&nbsp;&nbsp;name: <b>"Lutrex Dev"</b></p>
          <p>&nbsp;&nbsp;role: <b>"Web Developer"</b></p>
          <p>&nbsp;&nbsp;focus: <b>"Modern Web"</b></p>
          <p><span>&lt;/</span>developer<span>&gt;</span></p>
        </div>
      </div>

      <div className="hero-glow"></div>
    </section>
  );
}

export default Hero;