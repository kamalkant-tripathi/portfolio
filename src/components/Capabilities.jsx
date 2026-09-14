const capabilities = [
  {
    number: "01",
    title: "Business Intelligence",
    description:
      "I build analytical experiences that turn complex business data into clear, interactive and decision-ready insights.",
    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Tableau",
      "Spotfire",
      "Report Builder",
    ],
  },
  {
    number: "02",
    title: "Data Engineering & Transformation",
    description:
      "I work across the data layer to clean, transform, validate and prepare reliable datasets for analytics and reporting.",
    tools: [
      "Databricks",
      "SQL",
      "PySpark",
      "Python",
      "ETL / ELT",
      "Delta Lake",
    ],
  },
  {
    number: "03",
    title: "Analytics Engineering",
    description:
      "I connect data platforms, business systems and reporting layers to create scalable analytical workflows.",
    tools: [
      "Azure",
      "Snowflake",
      "ADLS",
      "Azure SQL",
      "APIs",
      "Data Quality",
    ],
  },
  {
    number: "04",
    title: "AI & Intelligent Systems",
    description:
      "I explore practical applications of AI, automation and intelligent interfaces that make analytical workflows more useful.",
    tools: [
      "Python",
      "AI APIs",
      "Chatbots",
      "Automation",
      "Dataiku",
      "UiPath",
    ],
  },
];

function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="section-heading">
        <span>03</span>
        <h2>What I Work With</h2>
      </div>

      <div className="capabilities-intro">
        <p>
          My work sits at the intersection of business intelligence,
          data engineering and intelligent systems.
        </p>
      </div>

      <div className="capabilities-list">
        {capabilities.map((item) => (
          <article className="capability" key={item.number}>
            <div className="capability-number">
              {item.number}
            </div>

            <div className="capability-main">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="capability-tools">
                {item.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>

            <div className="capability-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;