interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="rounded-lg border border-border bg-surface px-4 py-2 text-small text-text transition-colors duration-200 hover:border-primary hover:text-primary">
      {name}
    </span>
  );
}
