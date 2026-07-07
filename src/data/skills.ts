export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vue"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Laravel", "Node.js"],
  },
  {
    category: "Languages",
    items: ["Java", "Python", "PHP"],
  },
  {
    category: "Cloud",
    items: ["AWS"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma"],
  },
];
