import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { socialLinks } from "../shared/SocialLinks";
export default function Contact() {
  return (
    <section id="contact" className="container-section section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-10 text-center md:p-14"
      >
        <h2 className="text-section-title text-text">
          Interested in working together?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-body text-text-secondary">
          I'm always open to discussing new projects, opportunities, or just
          talking about software.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={socialLinks.email}
            className="w-full rounded-lg bg-primary px-6 py-3 text-small font-medium text-text transition-colors duration-200 hover:bg-primary-hover sm:w-auto"
          >
            Email Me
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-lg border border-border px-6 py-3 text-small font-medium text-text transition-colors duration-200 hover:border-primary hover:text-primary sm:w-auto"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-lg border border-border px-6 py-3 text-small font-medium text-text transition-colors duration-200 hover:border-primary hover:text-primary sm:w-auto"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/11fL843VVq1LEutxB4I8kNQ8Uzs9tHeLk/view?usp=sharing"
          target="_blank"
          className="mt-6 inline-flex items-center gap-2 text-small font-medium text-text-secondary transition-colors duration-200 hover:text-text"
        >
          Link to Resume
        </a>
      </motion.div>
    </section>
  );
}
