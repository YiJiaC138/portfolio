export interface ProjectItem {
  id: number;
  title: string;
  ProjectType:string;
  description: string;
  technologies: string[];
  github: string;
  demoAvailable?:Boolean;
  demolabel: string;
  demo: string;
  image: string;
  features?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Smart Bulletin Board",
    description: "Centralized interactive digital noticeboard for campus with hand gesture control. Final year capstone; top 10 best project award (2025).",
    ProjectType:"Final Year Project",
    technologies: ["React", "FastAPI", "PostgreSQL"],
    github: "https://github.com/yourusername/smart-bulletin-board",
    demoAvailable:true,
    demolabel:"Live demo",
    demo: "https://yijiac138.github.io/fyp-smartbulletinboard/",
    image: "/assets/images/project-placeholder.svg",
    features: [
      "Real-time updates via WebSockets",
      "Role-based admin dashboard",
      "Responsive display view for shared screens",
    ],
  },
  {
    id: 2,
    title: "AI-Incident Tracker",
    description: "AI-powered IT Service Management (ITSM) platform to automate incident handling workflows.",
    ProjectType: "UM Hackathon 2026",
    technologies: ["React", "Python", "Z.AI"],
    github: "https://github.com/YiJiaC138/AI-Incident-Tracker",
    demoAvailable: false,
    demolabel: "Live Demo",
    demo: "https://your-demo-link.com",
    image: "/assets/images/project-placeholder.svg",
    features: [
      "Designed to automate incident handling workflows by generating structured and actionable outputs.", 
      "Automated incident intake, classification, routing, and escalation processes.", 
      "Context caching, tool calling, and multi-turn reasoning"],
  },
  {
    id: 3,
    title: "AI Trip Planner Agent",
    description: "AI-powered personalized trip planning assistant.",
    ProjectType: " Kaggle x Google Capstone Project 2025",
    technologies: ["Python,", "Google ADK"],
    github: "https://github.com/YiJiaC138/smart-trip-planner",
    demoAvailable:true,
    demolabel: "Kaggle Link",
    demo: "https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/travelsmart",
    image: "/assets/images/project-placeholder.svg",
    features: [
      "Multi-agent hiearchical architecture with specialized agents.", 
      "Implemented agent orchestration to coordinate task delegation and response generation"],
  },
  {
    id: 4,
    title: "MindMosaic",
    description: "AI-assisted note-taking application inspired by Notion.",
    ProjectType: "UniHack 2024",
    technologies: ["Python", "Gemini"],
    github: "https://github.com/joeljosephreji/mind-mosaic-backend",
    demolabel: "Devpost",
    demoAvailable: true,
    demo: "https://devpost.com/software/mindmosaic-l0vqpa",
    image: "/assets/images/project-placeholder.svg",
    features: [
      "Transform and organize notes into structured, retention-focused content.", ],
  },
  {
    id: 5,
    title: "Chess Engines & Game Logic Projects",
    description: "Full-Stack Chess Web App",
    ProjectType: "Personal",
    technologies: ["Python", "FastAPI", "Docker", "Java", "TypeScript"],
    github: "https://github.com/yourusername/project-four",
    demoAvailable: true,
    demolabel: "Live Demo",
    demo: "https://xiangqi-front.onrender.com/",
    image: "/assets/images/project-placeholder.svg",
    features: [
      "Real-time move validation, game-state management, and Stockfish AI integration.", 
      "Custom Chinese Chess (Xiangqi) engine in Java with complete game rules and object-oriented architecture.", 
      "WebSocket-based frontend-backend communication for real-time gameplay"],
  },
];

`
export interface Project {
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Smart Bulletin Board",
    description: "Centralized interactive digital noticeboard for campus with hand gesture control. Final year capstone; top 10 best project award (2025).",
    githubUrl: undefined,
  },
  {
    title: "Chess Engines & Game Logic",
    description: "Full-stack chess web app; Xiangqi (Chinese chess) custom engine in Java with full game logic using websocket.",
    githubUrl: "https://xiangqi-front.onrender.com",
  },
  {
    title: "Smart Trip Planner",
    description: "AI-powered trip planner with React and Node.js; Kaggle x Google Capstone.",
    githubUrl: "https://github.com/YiJiaC138/smart-trip-planner",
  },
  {
    title:"AI-Incident Tracker",
    description:"AI-Incident Tracker is an AI-powered ticket orchestration platform that automates the intake, classification, routing, and escalation of incident reports.",
    githubUrl: "https://github.com/YiJiaC138/AI-Incident-Tracker"
  },
  {
    title:"MindMosaic",
    description:"AI-assisted note-taking app inspired by Notion.",
    githubUrl: "https://devpost.com/software/mindmosaic-l0vqpa"
  },
];
`