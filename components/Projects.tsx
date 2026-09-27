"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { projects } from "../data/resume";
import { Section, SectionHeading } from "../common";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title={
          <>
            Things I&apos;ve <span className="gradient-text">Built</span>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:border-transparent"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-accent-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-gold-400/10 group-hover:to-accent-500/10" />
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(130deg,rgba(245,181,68,0.4),transparent_40%,transparent_60%,rgba(34,211,238,0.4))] [mask:linear-gradient(#fff,#fff)_content-box,linear-gradient(#fff,#fff)] [mask-composite:exclude] [-webkit-mask-composite:xor] p-px" />

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[var(--font-display)] text-xl font-bold text-white">
                  {project.title}
                </h3>
                <HiOutlineArrowUpRight
                  className="mt-1 shrink-0 text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-300"
                  size={20}
                />
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                {project.duration && (
                  <span className="rounded-full border border-white/10 px-2.5 py-0.5">
                    {project.duration}
                  </span>
                )}
                {project.role && (
                  <span className="rounded-full border border-accent-500/30 px-2.5 py-0.5 text-accent-400">
                    {project.role}
                  </span>
                )}
              </div>

              {project.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gold-400/10 px-2.5 py-1 text-xs font-medium text-gold-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-4 space-y-1.5">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-neutral-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
