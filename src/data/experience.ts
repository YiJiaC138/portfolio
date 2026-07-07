export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Teaching Assistant",
    company: "Monash University Malaysia",
    duration: "Feb 2026 – Jun 2026",
    bullets: [
      "Supported coursework delivery for computer science students and assisted in weekly lab sessions",
      "Guided 100+ studens in java fundamentals and object-oriented programming (OOP) concepts",
      "Guided students in troubleshooting code issues and improving program correctness",
      "Provided hands-on support during lab sessions to resolve programming errors",
    ],
  },
  {
    id: 2,
    role: "IT developer intern",
    company: "SK Intellix Sdn Bhd",
    duration: "Nov 2025 – Feb 2026",
    bullets: [
      "Developed 2 new product pages for upcoming store product lines using Vue.js",
      "Debugged and resolved 5 UI/UX issues such as layout overlap and responsive CSS design bugs",
      "Documented the development process to improve code readability and maintainability",
      "Refactored legacy code to improve readibility and maintainability under supervision",
      "Collaborated with the team and suggested improvements to the frontend codebase",
      "Exposed to tools that handles API integration and web application development",
      "Assisted with evaluation and testing of SK intellix's AI-powered product; NamuhX",
    ],
  },
  
];
