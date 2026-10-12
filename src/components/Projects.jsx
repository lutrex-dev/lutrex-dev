import cineverseImage from "../assets/projects/cineverse.png";
import luxstayImage from "../assets/projects/luxstay.png";
import exploreWorldsImage from "../assets/projects/explore-worlds.png";

const projects = [
  {
    number: "01",
    title: "CineVerse",
    category: "Entertainment Website",
    description:
      "A movie and TV entertainment website featuring movie browsing, TV shows, trending content, genres, watchlist and user authentication pages.",
    tech: ["HTML", "CSS", "JavaScript"],
    button: "Coming Soon",
    image: cineverseImage,
  },
  {
    number: "02",
    title: "LuxStay",
    category: "Hotel Website",
    description:
      "A premium hotel website designed to showcase rooms, booking, restaurant, gallery, services and the overall luxury experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    button: "Coming Soon",
    image: luxstayImage,
  },
  {
    number: "03",
    title: "Explore Worlds Travels",
    category: "Travel Website",
    description:
      "A travel website focused on exploring destinations, discovering experiences and presenting travel services through a modern interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    button: "Coming Soon",
    image: exploreWorldsImage,
  },
  {
    number: "04",
    title: "Voxora",
    category: "In Development",
    description:
      "A multi-service marketplace platform where users can discover and hire people for different digital services.",
    tech: ["React", "JavaScript", "Node.js", "MongoDB"],
    button: "View Progress ↗",
    image: null,
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-label">03 — SELECTED WORK</div>

      <div className="projects-heading">
        <h2>
          THINGS I'VE
          <br />
          <span>BUILT.</span>
        </h2>

        <p>
          A selection of projects that represent my approach
          to design, development and user experience.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-top">
              <span>{project.number}</span>
              <span>{project.category}</span>
            </div>

            {project.image ? (
              <div className="project-visual project-image">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                />
              </div>
            ) : (
              <div className="project-visual">
                <span>VOXORA</span>
                <div className="visual-grid"></div>
              </div>
            )}

            <div className="project-body">
              <div>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className={`project-button ${
                  project.button === "Coming Soon"
                    ? "coming-soon"
                    : ""
                }`}
                disabled={project.button === "Coming Soon"}
              >
                {project.button}
              </button>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;