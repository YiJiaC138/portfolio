`import type { Project } from "../data/projects";
import placeholderImg from "../assets/images/placeholder.jpg";

type ProjectCardProps = Project & { showImage?: boolean };

export function ProjectCard({ title, description, image, githubUrl, showImage = false }: ProjectCardProps) {
  const imgSrc = image ?? placeholderImg;
  const content = (
    <>
      {showImage && <img src={imgSrc} alt="" className="project-card-image" />}
      <h1 className="project-card-title">{title}</h1>
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
`