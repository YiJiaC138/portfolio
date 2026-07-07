export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  features?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Smart Bulletin Board",
    description: "Real-time digital noticeboard system.",
    technologies: ["React", "FastAPI", "PostgreSQL"],
    github: "https://github.com/yourusername/smart-bulletin-board",
    demo: "https://your-demo-link.com",
    image: "/assets/images/project-placeholder.svg",
    features: [
      "Real-time updates via WebSockets",
      "Role-based admin dashboard",
      "Responsive display view for shared screens",
    ],
  },
  {
    id: 2,
    title: "Add your project title",
    description: "One sentence summary of what this project does.",
    technologies: ["React", "Node.js", "MySQL"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://your-demo-link.com",
    image: "/assets/images/project-placeholder.svg",
    features: ["Key feature one", "Key feature two", "Key feature three"],
  },
  {
    id: 3,
    title: "Add your project title",
    description: "One sentence summary of what this project does.",
    technologies: ["Vue", "Laravel", "AWS"],
    github: "https://github.com/yourusername/project-three",
    demo: "https://your-demo-link.com",
    image: "/assets/images/project-placeholder.svg",
    features: ["Key feature one", "Key feature two", "Key feature three"],
  },
  {
    id: 4,
    title: "Add your project title",
    description: "One sentence summary of what this project does.",
    technologies: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/yourusername/project-four",
    demo: "https://your-demo-link.com",
    image: "/assets/images/project-placeholder.svg",
    features: ["Key feature one", "Key feature two", "Key feature three"],
  },
];
