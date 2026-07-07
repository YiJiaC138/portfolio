`import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Expandable = ({
  title,
  children,
  variant = "default",
  defaultOpen = false,
  expandOnPhaseIn = false,
}: {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "card";
  defaultOpen?: boolean;
  expandOnPhaseIn?: boolean;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isCard = variant === "card";

  useEffect(() => {
    if (expandOnPhaseIn && inView) setIsOpen(true);
  }, [expandOnPhaseIn, inView]);

  return (
    <div ref={ref} className={`expandable ${isCard ? "expandable--card" : ""}`}>
      <motion.div
        className="expandable-header"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ cursor: "pointer" }}
      >
        <h3 className="font-semibold">{title}</h3>
        {isCard ? (
          <span className="expandable-toggle" style={{ fontSize: "1.25rem" }}>
            {isOpen ? "▲" : "▼"}
          </span>
        ) : (
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: "1.5rem", fontWeight: 300 }}
          >
            +
          </motion.span>
        )}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="expandable-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
`