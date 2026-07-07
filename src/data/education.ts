export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  graduation: string;
  coursework: string[];
  achievements: string[];
}

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "Monash University Malaysia",
    graduation: "2023-2026",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Web Application Development",
    ],
    achievements: [
      "Top 10 Best FYP Awards",
      "Letter of commendation 2024",
    ],
  },
];
