import { motion } from "framer-motion";
import type { ExperienceItem } from "../../data/experience";
import OrgLogo from "../shared/OrgLogo";
interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.015 }}
      className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5 md:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-start gap-4">
          <OrgLogo src={item.companyLogo} name={item.company} />
          <div>
            <h3 className="text-card-title text-text">{item.role}</h3>
            <p className="mt-1 text-body text-primary">{item.company}</p>
          </div>
        </div>
        <span className="whitespace-nowrap rounded-full border border-border px-3 py-1 text-small text-text-secondary">
          {item.duration}
        </span>
      </div>

      <ul className="mt-5 space-y-2">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-body text-text-secondary">
            <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
