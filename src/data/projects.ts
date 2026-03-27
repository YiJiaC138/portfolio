export interface Project {
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Smart Bulletin Board (React + Firebase + MediaPipe)",
    description: "Centralized interactive digital noticeboard for campus with hand gesture control. Final year capstone; top 10 best project award (2025).",
    githubUrl: undefined,
  },
  {
    title: "Xiangi Engine & Game Logic (Frontend & Backend)",
    description: "Full-stack chess web app; Xiangqi (Chinese chess) engine in Java with full game logic using websocket.",
    githubUrl: "https://xiangqi-front.onrender.com",
  },
  {
    title: "Smart Trip Planner",
    description: "AI-powered trip planner with React and Node.js; Kaggle x Google Capstone.",
    githubUrl: "https://github.com/YiJiaC138/smart-trip-planner",
  },
];
