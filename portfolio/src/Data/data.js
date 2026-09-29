export const skillGroups = [
  {
    title: "Languages",
    items: [
      "JavaScript (ES6+)",
      "Java",
      "Python",
      "SQL",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Mobile Development",
    items: [
      "React Native",
      "Android Fundamentals (Activities/Services)",
      "Redux",
      "Context API",
    ],
  },
  {
    title: "Web & Backend",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      "PostgreSQL",
      "SQLite",
      "Firebase (Auth, Firestore)",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Core Concepts",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Jest",
      "Data Structures & Algorithms",
      "System Design",
    ],
  },
];

export const skills = skillGroups.flatMap((group) => group.items);

export const experience = [
  {
    company: "Blockstack Pvt Ltd",
    role: "Technical Intern",
    location: "Bengaluru, India",
    duration: "April 2026 – Present",
    contributions: [
      "Developed cross-platform mobile application modules using React Native and Java/Android native bridges, improving render performance across screen densities.",
      "Designed and integrated custom RESTful APIs using Node.js and Express to manage real-time client-server communication and database synchronization.",
      "Built secure user authentication and state management workflows using Firebase Auth, Context API, and encrypted client-side storage.",
      "Profiled application performance and API endpoints using Postman and React Native Debugger to identify payload bottlenecks and optimize JSON responses.",
      "Implemented unit and integration tests using Jest to ensure reliable UI components and API response handling.",
      "Optimized database queries and schemas to improve data retrieval speeds for user session sync.",
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Mobile Application",
    technologies: [
      "React Native",
      "Java",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Async Storage",
      "JWT",
    ],
    contributions: [
      "Developed a full-featured cross-platform mobile shopping application with product catalogs, cart management, and REST API integration.",
      "Implemented secure JWT user authentication, persistent local caching using Async Storage, and push notifications for order updates.",
      "Architected a Node.js/Express backend connected to a PostgreSQL database, utilizing indexed SQL queries for fast search and pagination.",
    ],
  },
  {
    title: "Full-Stack Task & Workflow Management Platform",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    contributions: [
      "Built a responsive web dashboard for real-time project management and team collaboration.",
      "Designed modular RESTful API endpoints supporting multi-user CRUD operations, role-based access control, and request validation.",
      "Integrated MongoDB/Mongoose schemas to handle dynamic user data with low query latency.",
    ],
  },
];

export const certifications = [
  {
    title: "Junior Software Developer",
    issuer: "NSDC Skill India Mission",
  },
];

export const education = [
  {
    institution: "MIET Meerut (AKTU)",
    degree: "Bachelor of Technology (CSE - Data Science)",
    cgpa: "8.08",
    duration: "2022 – 2026",
  },
  {
    qualification: "Intermediate (Class 12)",
    score: "80%",
    year: "2021",
  },
  {
    qualification: "High School (Class 10)",
    score: "83.33%",
    year: "2019",
  },
];