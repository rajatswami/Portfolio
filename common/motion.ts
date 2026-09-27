import type { Variants } from "framer-motion";

/** Shared `viewport` config for `whileInView` scroll-reveal animations. */
export const viewportOnce = { once: true, amount: 0.3 } as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

/** Container variant for staggering direct children (pair with a `show`-keyed child variant). */
export const staggerContainer = (staggerChildren = 0.06): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren } },
});

/** Child variant for use inside a `staggerContainer`. */
export const popIn: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

/**
 * Fade-up variant keyed off a `custom` index, for staggering a list of cards
 * without wrapping them in a `staggerContainer` (e.g. a CSS grid).
 */
export const fadeUpStagger =
  (delay = 0.1, distance = 24, duration = 0.5): Variants => ({
    hidden: { opacity: 0, y: distance },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration, delay: i * delay },
    }),
  });
