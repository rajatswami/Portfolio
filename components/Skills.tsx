"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../data/resume";
import { Section, SectionHeading, staggerContainer, popIn } from "../common";

const container = staggerContainer(0.06);

const Skills = () => {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            My <span className="gradient-text">Tech Stack</span>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="card-glow p-6"
          >
            <h3 className="mb-4 font-[var(--font-display)] text-lg font-semibold text-gold-300">
              {group.category}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2.5"
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={popIn}
                  whileHover={{ scale: 1.08 }}
                  className="cursor-default rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-neutral-200 transition-all duration-300 hover:border-gold-400/50 hover:bg-gold-400/10 hover:text-gold-200 hover:shadow-[0_0_15px_rgba(245,181,68,0.25)]"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
