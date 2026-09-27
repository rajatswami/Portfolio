"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, viewportOnce } from "./motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  className?: string;
}

/** The eyebrow + title (+ optional description/CTA) block repeated at the top of every section. */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  cta,
  className = "",
}: SectionHeadingProps) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    className={`mb-14 text-center ${className}`}
  >
    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
      {eyebrow}
    </p>
    <h2 className="section-heading text-white">{title}</h2>
    {description && (
      <p className="mx-auto mt-4 max-w-2xl text-neutral-400">{description}</p>
    )}
    {cta && <div className="mt-7 flex justify-center">{cta}</div>}
  </motion.div>
);

export default SectionHeading;
