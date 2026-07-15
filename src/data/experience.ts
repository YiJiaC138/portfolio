//import skIntellix from "../assets/SK_intellix_Logo.png";
//import Monash from "../assets/Monash_University_logo.svg";
import skIntellix from "../assets/SK_logo.svg"
import Monash from "../assets/MonashLogo.jpg"
export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyLogo?: string;
  duration: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Teaching Assistant",
    company: "Monash University Malaysia",
    companyLogo: Monash,
    duration: "Feb 2026 – Jun 2026",
    bullets: [
      
      "Guided 100+ studens in java fundamentals and object-oriented programming (OOP) concepts",
      "Helped students identify logic, syntax, and runtime errors through guided debugging.",
      "Reviewed student code and provided feedback to improve code quality and problem-solving approaches.",
    ],
  },
  {
    id: 2,
    role: "IT developer intern",
    company: "SK Intellix Sdn Bhd",
    companyLogo: skIntellix,
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
