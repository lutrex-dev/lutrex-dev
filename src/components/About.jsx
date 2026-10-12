import Reveal from "./Reveal";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-label">01 — ABOUT ME</div>

      <div className="about-content">
        <div className="about-heading">
          <h2>
            I DON'T JUST
            <br />
            BUILD <span>WEBSITES.</span>
          </h2>
        </div>

        <div className="about-text">
          <p>
            I'm a web developer who enjoys turning ideas into
            modern and interactive digital experiences.
          </p>

          <p>
            I focus on creating websites that look good,
            work smoothly and feel great to use across
            different devices.
          </p>

          <p>
            From simple landing pages to complete web
            applications, I'm constantly learning and
            improving my craft.
          </p>

          <div className="about-stats">
            <div>
              <strong>01+</strong>
              <span>Years Learning</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Projects Built</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Learning Mode</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;