"use client";

import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineCheckCircle } from "react-icons/hi2";
import { experience } from "../data/resume";
import { Section, SectionHeading, fadeInLeft, viewportOnce } from "../common";

const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </>
        }
      />

      <div className="relative border-l-2 border-gold-400/20 pl-8 sm:pl-10">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <span className="absolute -left-[42px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-neutral-950 shadow-[0_0_20px_rgba(245,181,68,0.5)] sm:-left-[50px]">
            <HiOutlineBriefcase size={18} />
          </span>

          <div className="card-glow p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-[var(--font-display)] text-xl font-bold text-white sm:text-2xl">
                {experience.role}
              </h3>
              <span className="rounded-full border border-gold-400/30 bg-gold-400/5 px-3 py-1 text-xs font-semibold text-gold-300">
                {experience.duration}
              </span>
            </div>
            <p className="mt-1 font-medium text-accent-400">
              {experience.company}
            </p>

            <ul className="mt-5 space-y-2.5">
              {experience.bullets.map((bullet, i) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 text-sm text-neutral-300 sm:text-base"
                >
                  <HiOutlineCheckCircle
                    className="mt-0.5 shrink-0 text-gold-400"
                    size={18}
                  />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;
