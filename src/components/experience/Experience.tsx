import SectionTitle from "../shared/SectionTitle";
import { experience } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="container-section section-padding">
      <SectionTitle
        eyebrow="Career"
        title="Experience"
        description="A summary of roles and responsibilities I've taken on so far."
      />

      <div className="flex flex-col gap-6">
        {experience.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
