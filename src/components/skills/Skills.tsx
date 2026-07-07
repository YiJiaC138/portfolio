import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";
import { skills } from "../../data/skills";
import SkillBadge from "./SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="container-section section-padding">
      <SectionTitle
        eyebrow="Toolbox"
        title="Skills"
        description="Technologies I use regularly, organized by category."
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="mb-4 text-card-title text-text">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item} name={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
