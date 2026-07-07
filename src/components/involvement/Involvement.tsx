import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { involvement } from "../../data/involvement";
export default function Involvement() {
  return (
    <section id="involvement" className="container-section section-padding">
      <SectionTitle eyebrow="Beyond the Code" title="Clubs & Leadership" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {involvement.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Users size={22} />
              </div>
              <div>
                <h3 className="text-card-title text-text">{item.role}</h3>
                <p className="mt-1 text-body text-primary">{item.club}</p>
                <p className="mt-1 text-small text-text-secondary">
                  {item.duration}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-body text-text-secondary"
                    >
                      <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
