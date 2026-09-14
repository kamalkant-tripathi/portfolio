const experience = [
  {
    period: "May 2026 — Present",
    company: "Brookfield",
    title: "Data Analyst",
    description:
      "Working across data analytics and business intelligence, using Snowflake, SQL, Power BI and CRM analytics to work with business data and support analytical reporting.",
    technologies: [
      "Snowflake",
      "SQL",
      "Power BI",
      "Salesforce",
      "CRM Analytics",
      "Alteryx",
      "Tableau",
      "Python",
      "Excel",
      "ETL",
    ],
  },

  {
    period: "Jan 2025 — May 2026",
    company: "KPMG Global Services",
    title: "Associate Consultant",
    subtitle: "Data Analyst / Analytics Engineer",
    description:
      "Worked across healthcare analytics, data transformation and business intelligence, building analytical workflows and interactive Power BI reporting.",
    technologies: [
      "Databricks",
      "SQL",
      "PySpark",
      "Python",
      "Alteryx",
      "Power BI",
      "ADLS",
    ],
  },

  {
    period: "Sep 2021 — Dec 2024",
    company: "I2E Consulting",
    title: "Career Progression",
    progression: [
      {
        role: "Data Engineer / Dataiku Developer",
        period: "Aug 2023 — Dec 2024",
      },
      {
        role: "Data Analyst",
        period: "Mar 2022 — Jul 2023",
      },
      {
        role: "Data Analyst Intern",
        period: "Sep 2021 — Feb 2022",
      },
    ],
    description:
      "Progressed across data analytics, data engineering and Dataiku development, working on business intelligence, ETL workflows, data transformation and analytical solutions across pharma and life sciences projects.",
    technologies: [
      "Power BI",
      "DAX",
      "Power Query",
      "Tableau",
      "Spotfire",
      "Power BI Report Builder",
      "Databricks",
      "SQL",
      "PySpark",
      "Python",
      "Dataiku",
      "Alteryx",
      "ETL",
      "Delta Lake",
      "APIs",
      "Azure",
      "SharePoint",
      "Dynamics 365",
      "OData",
      "UiPath",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-heading">
        <span>04</span>
        <h2>Experience</h2>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article
            className="experience-item"
            key={`${item.company}-${item.period}`}
          >
            <div className="experience-period">
              {item.period}
            </div>

            <div className="experience-content">
              <p className="experience-company">
                {item.company}
              </p>

              <h3>{item.title}</h3>

              {item.subtitle && (
                <p className="experience-subtitle">
                  {item.subtitle}
                </p>
              )}

              {item.progression && (
                <div className="experience-progression">
                  {item.progression.map((role) => (
                    <div
                      className="progression-item"
                      key={`${role.role}-${role.period}`}
                    >
                      <div className="progression-dot"></div>

                      <div className="progression-details">
                        <strong>{role.role}</strong>
                        <span>{role.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-tech">
                {item.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="experience-arrow">
              ↗
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;