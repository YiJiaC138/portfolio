import "../App.css";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main style={{ margin: "0 auto", padding: 0 }}>
      <div className="section-block section-bg-b">
        <Section>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} showImage />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
