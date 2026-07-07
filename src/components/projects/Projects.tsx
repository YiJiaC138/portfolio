import SectionTitle from "../shared/SectionTitle";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="container-section section-padding">
      <SectionTitle
        eyebrow="Featured Work"
        title="Projects"
        description="A selection of projects that show how I approach building software end to end."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
