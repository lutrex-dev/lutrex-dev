const skills = [
  {
    number: "01",
    name: "HTML",
    level: "Structure & Semantics",
  },
  {
    number: "02",
    name: "CSS",
    level: "Responsive Design",
  },
  {
    number: "03",
    name: "JavaScript",
    level: "Interactive Web Apps",
  },
  {
    number: "04",
    name: "React",
    level: "Frontend Development",
  },
  {
    number: "05",
    name: "Git & GitHub",
    level: "Version Control",
  },
  {
    number: "06",
    name: "Node.js",
    level: "Backend Development",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-label">04 — TECH STACK</div>

      <div className="skills-heading">
        <h2>
          TOOLS I
          <br />
          <span>USE.</span>
        </h2>

        <p>
          Technologies I use to design, build and bring
          digital ideas to life.
        </p>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.number}>
            <span className="skill-number">{skill.number}</span>

            <h3>{skill.name}</h3>

            <span className="skill-level">{skill.level}</span>

            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;