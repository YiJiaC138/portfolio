import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { education } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="container-section section-padding">
      <SectionTitle eyebrow="Academics" title="Education" />

      <div className="flex flex-col gap-6">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-card-title text-text">{item.degree}</h3>
                <p className="mt-1 text-body text-primary">
                  {item.institution}
                </p>
                <p className="mt-1 text-small text-text-secondary">
                  {item.graduation}
                </p>

                {item.coursework.length > 0 && (
                  <div className="mt-5">
                    <p className="mb-2 text-small font-medium text-text">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-border px-3 py-1 text-small text-text-secondary"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.achievements.length > 0 && (
                  <ul className="mt-5 space-y-2">
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
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
