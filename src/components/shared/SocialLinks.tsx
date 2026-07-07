import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "../../lib/utils";

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yi-jia-chiew-5a290b2a3",
  email: "mailto:chyj218@gmail.com",
};

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({
  className,
  iconSize = 20,
}: SocialLinksProps) {
  const links = [
    { href: socialLinks.github, label: "GitHub", icon: Github },
    { href: socialLinks.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: socialLinks.email, label: "Email", icon: Mail },
  ];

  return (
    <div className={cn("flex items-center gap-5", className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="group flex items-center gap-2 text-text-secondary transition-colors duration-200 hover:text-text"
        >
          <Icon size={iconSize} className="transition-transform duration-200 group-hover:scale-110" />
          <span className="text-small">{label}</span>
        </a>
      ))}
    </div>
  );
}
