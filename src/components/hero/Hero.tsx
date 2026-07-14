import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";
import SocialLinks from "../shared/SocialLinks";
import HeroAnimation from "./HeroAnimation";

const roles = [
  "Software Engineer",
  2000,
  "Full Stack Developer",
  2000,
  "Backend Developer",
  2000,
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="container-section flex min-h-screen flex-col-reverse items-center justify-center gap-12 pt-24 md:flex-row md:justify-between md:gap-8 md:pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl text-center md:text-left"
      >
        <p className="mb-3 text-body text-text-secondary">Hi, I'm</p>
        <h1 className="text-hero-title text-text">Yi Jia Chiew</h1>

        <div className="mt-2 h-10 text-hero-subtitle text-primary">
          <TypeAnimation
            sequence={roles}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-6 text-body text-text-secondary">
          I build scalable web applications using React, FastAPI and
          Laravel. I enjoy designing systems, solving complex problems and
          learning new technologies.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-small font-medium text-text transition-colors duration-200 hover:bg-primary-hover"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="https://drive.google.com/file/d/11fL843VVq1LEutxB4I8kNQ8Uzs9tHeLk/view?usp=sharing"
            
            className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-small font-medium text-text transition-colors duration-200 hover:border-primary hover:text-primary"
            target="_blank"
          >
            
            View Resume
          </a>
        </div>

        <SocialLinks className="mt-8 justify-center md:justify-start" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="w-full max-w-sm md:max-w-md"
      >
        <HeroAnimation />
      </motion.div>
    </section>
  );
}
