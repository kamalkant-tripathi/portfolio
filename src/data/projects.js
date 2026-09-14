const projects = [
  {
    id: 1,
    number: "01",
    category: "Power BI",
    title: "Sales Performance Intelligence",
    description:
      "An interactive sales analytics dashboard focused on revenue, growth and regional performance.",
    problem:
      "Transform fragmented sales data into a clear view of business performance.",
    approach:
      "Designed a dimensional data model, created reusable DAX measures and built an executive-focused Power BI experience.",
    learning:
      "Improved my understanding of analytical modeling, DAX and designing dashboards around business questions.",
    technologies: ["Power BI", "DAX", "SQL"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 2,
    number: "02",
    category: "Power BI",
    title: "Finance & P&L Intelligence",
    description:
      "A financial reporting experience focused on revenue, expenses, margins and profitability.",
    problem:
      "Make financial performance easier to understand across different business dimensions.",
    approach:
      "Created a structured financial model with calculated measures and interactive reporting views.",
    learning:
      "Strengthened financial analytics, data modeling and dashboard storytelling skills.",
    technologies: ["Power BI", "DAX", "Excel"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 3,
    number: "03",
    category: "Power BI",
    title: "Customer Analytics Dashboard",
    description:
      "Customer segmentation and behavioural analytics dashboard.",
    problem:
      "Understand customer behaviour, retention and revenue contribution.",
    approach:
      "Combined customer, transaction and segmentation data into an interactive analytical model.",
    learning:
      "Learned how to structure customer analytics around actionable business questions.",
    technologies: ["Power BI", "DAX", "SQL"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 4,
    number: "04",
    category: "Power BI",
    title: "Workforce Analytics",
    description:
      "An HR analytics dashboard covering workforce composition and trends.",
    problem:
      "Provide a clearer picture of workforce trends and organizational metrics.",
    approach:
      "Built an HR-focused analytical model and created interactive reporting views.",
    learning:
      "Explored how BI can translate workforce data into meaningful organizational insights.",
    technologies: ["Power BI", "DAX", "Excel"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 5,
    number: "05",
    category: "Power BI",
    title: "Supply Chain Intelligence",
    description:
      "Operational dashboard for inventory, suppliers and delivery performance.",
    problem:
      "Bring operational metrics into a single analytical view.",
    approach:
      "Modeled supply chain data and created KPI-driven reporting.",
    learning:
      "Developed a stronger understanding of operational analytics.",
    technologies: ["Power BI", "SQL", "DAX"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 6,
    number: "06",
    category: "Power BI",
    title: "Marketing Performance",
    description:
      "Marketing analytics dashboard covering campaigns, acquisition and conversion.",
    problem:
      "Understand which marketing activities are driving performance.",
    approach:
      "Combined campaign and conversion data into an interactive dashboard.",
    learning:
      "Explored marketing attribution and performance storytelling.",
    technologies: ["Power BI", "DAX", "SQL"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 7,
    number: "07",
    category: "Power BI",
    title: "Executive KPI Command Center",
    description:
      "Executive-level KPI dashboard designed for quick business decision making.",
    problem:
      "Surface the most important business metrics without overwhelming the user.",
    approach:
      "Designed a compact executive dashboard with drill-through analytical views.",
    learning:
      "Focused on information hierarchy and executive dashboard design.",
    technologies: ["Power BI", "DAX", "SQL"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 8,
    number: "08",
    category: "Power BI",
    title: "Product Analytics Dashboard",
    description:
      "Product usage and performance analytics experience.",
    problem:
      "Understand how users interact with a product.",
    approach:
      "Created product usage metrics and analytical views.",
    learning:
      "Explored product analytics and behavioural metrics.",
    technologies: ["Power BI", "SQL", "DAX"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 9,
    number: "09",
    category: "Power BI",
    title: "Operations Command Center",
    description:
      "Operational monitoring dashboard for performance and trends.",
    problem:
      "Create a central view of operational performance.",
    approach:
      "Built KPI monitoring and drill-down reporting.",
    learning:
      "Explored real-world operational reporting patterns.",
    technologies: ["Power BI", "SQL", "DAX"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 10,
    number: "10",
    category: "AI",
    title: "AI Document Intelligence",
    description:
      "AI workflow for extracting structured information from documents.",
    problem:
      "Reduce manual effort involved in extracting information from unstructured documents.",
    approach:
      "Designed a document processing workflow using Python and AI models.",
    learning:
      "Explored document extraction, structured outputs and AI pipelines.",
    technologies: ["Python", "AI", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 11,
    number: "11",
    category: "AI",
    title: "RAG Knowledge Assistant",
    description:
      "A retrieval-augmented AI assistant for querying a private knowledge base.",
    problem:
      "Allow users to ask questions against a controlled collection of documents.",
    approach:
      "Built a retrieval and generation workflow using embeddings and an LLM.",
    learning:
      "Learned how retrieval, context and generation work together.",
    technologies: ["Python", "RAG", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 12,
    number: "12",
    category: "AI",
    title: "AI Data Analyst",
    description:
      "Natural-language interface for exploring structured datasets.",
    problem:
      "Make analytical questions accessible without requiring users to write queries.",
    approach:
      "Created a workflow that translates natural language into analytical operations.",
    learning:
      "Explored the intersection of AI and traditional data analytics.",
    technologies: ["Python", "SQL", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 13,
    number: "13",
    category: "AI",
    title: "Natural Language SQL Generator",
    description:
      "AI system that converts natural-language questions into SQL.",
    problem:
      "Reduce the barrier between business questions and database queries.",
    approach:
      "Designed prompt and validation workflows around SQL generation.",
    learning:
      "Explored reliability challenges in AI-generated SQL.",
    technologies: ["Python", "SQL", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 14,
    number: "14",
    category: "AI",
    title: "Resume Intelligence",
    description:
      "AI-powered resume analysis and information extraction system.",
    problem:
      "Turn unstructured resumes into useful structured information.",
    approach:
      "Created an extraction and analysis pipeline.",
    learning:
      "Explored structured extraction from unstructured text.",
    technologies: ["Python", "LLM", "NLP"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 15,
    number: "15",
    category: "AI",
    title: "AI Meeting Summarizer",
    description:
      "Automated workflow for turning meeting transcripts into concise summaries.",
    problem:
      "Reduce the effort required to capture meeting outcomes.",
    approach:
      "Designed a transcription-to-summary workflow.",
    learning:
      "Explored summarization and structured AI outputs.",
    technologies: ["Python", "AI", "NLP"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 16,
    number: "16",
    category: "AI",
    title: "Customer Support Copilot",
    description:
      "AI assistant designed to support customer service workflows.",
    problem:
      "Help support teams find relevant information faster.",
    approach:
      "Combined retrieval, context and AI-generated responses.",
    learning:
      "Explored practical AI assistant architecture.",
    technologies: ["Python", "RAG", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 17,
    number: "17",
    category: "AI",
    title: "AI Dashboard Assistant",
    description:
      "Conversational assistant for exploring dashboard data.",
    problem:
      "Allow users to ask analytical questions using natural language.",
    approach:
      "Connected natural-language requests to analytical data workflows.",
    learning:
      "Explored conversational analytics.",
    technologies: ["Python", "Power BI", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 18,
    number: "18",
    category: "AI",
    title: "Image-to-Data Pipeline",
    description:
      "AI workflow for converting visual information into structured data.",
    problem:
      "Extract useful information from image-based inputs.",
    approach:
      "Built an image analysis and structured extraction pipeline.",
    learning:
      "Explored multimodal AI workflows.",
    technologies: ["Python", "Vision AI", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 19,
    number: "19",
    category: "AI",
    title: "AI Research Assistant",
    description:
      "Research workflow designed to organize and summarize information.",
    problem:
      "Reduce the time required to gather and synthesize information.",
    approach:
      "Built a research and summarization workflow.",
    learning:
      "Explored AI-assisted research patterns.",
    technologies: ["Python", "LLM", "RAG"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 20,
    number: "20",
    category: "AI",
    title: "Automated Report Generator",
    description:
      "Automated analytical report generation workflow.",
    problem:
      "Reduce repetitive reporting work.",
    approach:
      "Combined data processing with AI-generated narrative insights.",
    learning:
      "Explored automated analytical storytelling.",
    technologies: ["Python", "AI", "SQL"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 21,
    number: "21",
    category: "AI",
    title: "Multi-Agent Analytics System",
    description:
      "Experimental multi-agent system for analytical workflows.",
    problem:
      "Explore how multiple specialized AI agents can collaborate on data tasks.",
    approach:
      "Designed specialized agents for retrieval, analysis and reporting.",
    learning:
      "Explored multi-agent architecture and orchestration.",
    technologies: ["Python", "Agents", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 22,
    number: "22",
    category: "Data Engineering",
    title: "End-to-End ETL Pipeline",
    description:
      "Complete pipeline for extracting, transforming and loading data.",
    problem:
      "Create a repeatable workflow for moving raw data into an analytical destination.",
    approach:
      "Designed extraction, transformation and loading stages.",
    learning:
      "Strengthened understanding of production-style data pipelines.",
    technologies: ["Python", "SQL", "ETL"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 23,
    number: "23",
    category: "Data Engineering",
    title: "Data Warehouse Pipeline",
    description:
      "Batch pipeline designed around a dimensional data warehouse.",
    problem:
      "Transform operational data into an analytics-ready warehouse.",
    approach:
      "Built ingestion, transformation and dimensional modeling stages.",
    learning:
      "Deepened my understanding of warehouse architecture.",
    technologies: ["SQL", "Python", "Data Warehouse"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 24,
    number: "24",
    category: "Data Engineering",
    title: "API to Data Lake Pipeline",
    description:
      "Pipeline for ingesting data from external APIs into a data lake.",
    problem:
      "Create a repeatable ingestion process for API-based data.",
    approach:
      "Built API extraction, storage and transformation stages.",
    learning:
      "Explored API ingestion and raw data storage patterns.",
    technologies: ["Python", "API", "Data Lake"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 25,
    number: "25",
    category: "Data Engineering",
    title: "Incremental Data Pipeline",
    description:
      "Incremental ingestion pipeline designed to process only changed data.",
    problem:
      "Avoid repeatedly processing large historical datasets.",
    approach:
      "Implemented incremental loading logic based on data changes.",
    learning:
      "Explored efficient data ingestion patterns.",
    technologies: ["Python", "SQL", "ETL"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 26,
    number: "26",
    category: "Data Engineering",
    title: "Data Quality Monitoring",
    description:
      "Automated framework for checking data quality.",
    problem:
      "Detect issues in analytical datasets before they affect downstream reporting.",
    approach:
      "Designed automated validation checks and monitoring logic.",
    learning:
      "Explored practical data quality engineering.",
    technologies: ["Python", "SQL", "Data Quality"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 27,
    number: "27",
    category: "Data Engineering",
    title: "Streaming Analytics Pipeline",
    description:
      "Experimental streaming pipeline for near-real-time analytics.",
    problem:
      "Process continuously arriving data instead of relying only on batch processing.",
    approach:
      "Designed an event-driven ingestion and processing workflow.",
    learning:
      "Explored streaming architecture and real-time analytics.",
    technologies: ["Python", "Streaming", "SQL"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 28,
    number: "28",
    category: "Experiments & Systems",
    title: "Personal Finance Tracker",
    description:
      "Personal analytics system for understanding spending behaviour.",
    problem:
      "Turn personal financial records into useful insights.",
    approach:
      "Created data ingestion, categorization and analytical views.",
    learning:
      "Explored end-to-end personal analytics.",
    technologies: ["Python", "SQL", "Analytics"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 29,
    number: "29",
    category: "Experiments & Systems",
    title: "Automation Platform",
    description:
      "Experimental platform for automating repetitive workflows.",
    problem:
      "Reduce repetitive manual tasks through automation.",
    approach:
      "Designed modular automation workflows.",
    learning:
      "Explored automation architecture.",
    technologies: ["Python", "APIs", "Automation"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 30,
    number: "30",
    category: "Experiments & Systems",
    title: "Web Intelligence System",
    description:
      "System for collecting and transforming information from web sources.",
    problem:
      "Turn scattered online information into structured data.",
    approach:
      "Designed collection, transformation and analysis workflows.",
    learning:
      "Explored web data pipelines.",
    technologies: ["Python", "APIs", "Data"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 31,
    number: "31",
    category: "Experiments & Systems",
    title: "Recommendation Engine",
    description:
      "Experimental recommendation system.",
    problem:
      "Explore how user behaviour can be used to generate recommendations.",
    approach:
      "Built a basic recommendation workflow.",
    learning:
      "Explored recommendation concepts and ranking.",
    technologies: ["Python", "ML", "Data"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 32,
    number: "32",
    category: "Experiments & Systems",
    title: "Productivity Analytics",
    description:
      "Personal productivity analytics experiment.",
    problem:
      "Understand patterns in personal activity and productivity.",
    approach:
      "Collected activity data and created analytical views.",
    learning:
      "Explored behavioural analytics.",
    technologies: ["Python", "SQL", "Analytics"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 33,
    number: "33",
    category: "Experiments & Systems",
    title: "Voice Automation",
    description:
      "Voice-driven automation experiment.",
    problem:
      "Explore voice as an interface for executing useful workflows.",
    approach:
      "Connected speech input with automated actions.",
    learning:
      "Explored voice interfaces and automation.",
    technologies: ["Python", "AI", "Automation"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 34,
    number: "34",
    category: "Experiments & Systems",
    title: "API Monitoring System",
    description:
      "Monitoring experiment for API availability and performance.",
    problem:
      "Detect API failures and performance issues.",
    approach:
      "Created automated checks and monitoring logic.",
    learning:
      "Explored basic reliability monitoring.",
    technologies: ["Python", "APIs", "Automation"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 35,
    number: "35",
    category: "Experiments & Systems",
    title: "Personal Knowledge Base",
    description:
      "Structured knowledge management experiment.",
    problem:
      "Organize personal notes and information for easier retrieval.",
    approach:
      "Created a searchable structured knowledge system.",
    learning:
      "Explored information retrieval and organization.",
    technologies: ["Python", "RAG", "LLM"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 36,
    number: "36",
    category: "Experiments & Systems",
    title: "Developer Productivity Tool",
    description:
      "Small utility designed to improve developer workflows.",
    problem:
      "Reduce repetitive development tasks.",
    approach:
      "Built a lightweight developer-focused automation tool.",
    learning:
      "Explored practical developer tooling.",
    technologies: ["JavaScript", "Python", "Automation"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 37,
    number: "37",
    category: "Experiments & Systems",
    title: "Analytics Experiment",
    description:
      "Exploratory analytics project focused on discovering patterns in data.",
    problem:
      "Investigate relationships and trends within a dataset.",
    approach:
      "Performed exploratory analysis and visualization.",
    learning:
      "Strengthened analytical thinking and visualization.",
    technologies: ["Python", "Pandas", "Visualization"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 38,
    number: "38",
    category: "Experiments & Systems",
    title: "Personal AI Assistant",
    description:
      "Experimental AI assistant combining automation and natural-language interaction.",
    problem:
      "Explore how AI can become a useful interface for everyday workflows.",
    approach:
      "Combined an AI model with tools and automated actions.",
    learning:
      "Explored AI agents, tools and workflow orchestration.",
    technologies: ["Python", "AI", "Agents"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },

  {
    id: 39,
    number: "39",
    category: "Experiments & Systems",
    title: "Portfolio Analytics",
    description:
      "Analytics experiment for understanding portfolio and project activity.",
    problem:
      "Create a structured way to understand project development and outcomes.",
    approach:
      "Combined project metadata and analytics into a single view.",
    learning:
      "Explored how analytics can be applied to personal projects.",
    technologies: ["Python", "SQL", "Analytics"],
    github: "https://github.com/kamalkant-tripathi",
    demo: "",
  },
];

export default projects;