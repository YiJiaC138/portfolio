import type { Project } from "../data/projects";

export function ProjectCard({ title, description, githubUrl }: Project) {
  const content = (
    <>
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
    </>
  );

  if (githubUrl) {
    return (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card project-card--clickable"
      >
        {content}
      </a>
    );
  }

  return <div className="project-card">{content}</div>;
}
