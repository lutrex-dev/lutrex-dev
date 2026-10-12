const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Modern and visually appealing website designs built around your brand and goals.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Responsive and interactive websites built with clean, modern frontend technologies.",
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to present your product, service or idea.",
  },
  {
    number: "04",
    title: "Responsive Websites",
    description:
      "Websites that look and work properly across phones, tablets, laptops and desktops.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-label">02 — SERVICES</div>

      <div className="services-intro">
        <h2>
          WHAT I
          <br />
          <span>CAN DO.</span>
        </h2>

        <p>
          I create digital experiences focused on clean design,
          usability and performance.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <div className="service-arrow">↗</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;