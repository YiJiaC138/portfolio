import { useState } from "react";
import { cn } from "../../lib/utils";

interface OrgLogoProps {
  /** Path to the logo image, e.g. "/assets/images/logos/monash.svg" */
  src?: string;
  /** Organization name — used for alt text and the initials fallback */
  name: string;
  size?: number;
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/**
 * Displays an organization's logo. If no `src` is provided, or the image
 * fails to load, it falls back to a badge with the org's initials so the
 * layout never breaks while logos are still being collected.
 */
export default function OrgLogo({ src, name, size = 72, className }: OrgLogoProps) {
  const [errored, setErrored] = useState(false);
  const showFallback = !src || errored;

  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        "flex flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background",
        className
      )}
    >
      {showFallback ? (
        <span
          className="font-semibold text-primary"
          style={{ fontSize: size * 0.36 }}
        >
          {getInitials(name)}
        </span>
      ) : (
        <img
          src={src}
          alt={`${name} logo`}
          className="h-full w-full object-contain p-1.5"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}