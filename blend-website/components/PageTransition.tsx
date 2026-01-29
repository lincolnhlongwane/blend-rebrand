"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 };
  const animate = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const exit = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
