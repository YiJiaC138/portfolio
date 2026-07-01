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
