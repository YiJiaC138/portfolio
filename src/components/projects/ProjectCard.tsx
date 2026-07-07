import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { ProjectItem } from "../../data/projects";
interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.015 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
    >
      {
      //  
      //<div className="aspect-video w-full overflow-hidden bg-background">
      //  <img
      //    src={project.image}
      //    alt={`${project.title} screenshot`}
      //    loading="lazy"
      //    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      //  />
      //</div>
//
      }
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-card-title text-text">{project.title}</h3>
        <p className="mt-1 text-body text-primary">{project.ProjectType}</p>
        <p className="mt-2 text-body text-text-secondary">
          {project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {project.features.slice(0, 3).map((feature, i) => (
              <li
                key={i}
                className="flex gap-2 text-small text-text-secondary"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-small text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-small font-medium text-text-secondary transition-colors duration-200 hover:text-text"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-small font-medium text-primary transition-colors duration-200 hover:text-primary-hover"
          >
            <ExternalLink size={16} />
            <p>{project.demolabel}</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
