import { motion } from "framer-motion";

/**
 * Lightweight abstract illustration for the hero section: a floating
 * "editor window" card with animated code lines. Keeps the palette
 * consistent with the rest of the site and avoids stock imagery.
 */
export default function HeroAnimation() {
  const lines = [
    { width: "60%", color: "bg-primary/70" },
    { width: "85%", color: "bg-text-secondary/40" },
    { width: "40%", color: "bg-success/60" },
    { width: "70%", color: "bg-text-secondary/40" },
    { width: "50%", color: "bg-primary/70" },
    { width: "30%", color: "bg-text-secondary/40" },
  ];

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="rounded-2xl border border-border bg-surface p-5 shadow-2xl shadow-black/40"
    >
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
      </div>

      <div className="space-y-3">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3, scaleX: 0.9 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            style={{ width: line.width }}
            className={`h-3 rounded-full ${line.color}`}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
        <span className="text-small text-success">$ build passing</span>
        <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
      </div>
    </motion.div>
  );
}
