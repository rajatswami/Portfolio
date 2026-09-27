"use client";

import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineSparkles, HiOutlineLanguage, HiOutlineHeart, HiOutlineArrowDownTray } from "react-icons/hi2";
import { education, strengths, hobbies, languages } from "../data/resume";
import { resumePdfUrl } from "../api/axios";
import { Section, SectionHeading, fadeUpStagger } from "../common";

const fadeUp = fadeUpStagger(0.1, 24, 0.5);

const Resume = () => {
  return (
    <Section id="resume">
      <SectionHeading
        eyebrow="Resume"
        title={
          <>
            My <span className="gradient-text">Résumé</span>
          </>
        }
        description="A quick overview of my education, strengths and interests — or grab the full PDF below."
        cta={
          <a href={resumePdfUrl} className="btn-primary inline-flex">
            <HiOutlineArrowDownTray size={18} />
            Download Resume
          </a>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card-glow p-7"
        >
          <h3 className="mb-5 flex items-center gap-2 font-[var(--font-display)] text-lg font-semibold text-gold-300">
            <HiOutlineAcademicCap size={22} /> Education
          </h3>
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.degree} className="border-l-2 border-gold-400/30 pl-4">
                <p className="font-medium text-white">{edu.degree}</p>
                <p className="text-sm text-neutral-400">{edu.institute}</p>
                {edu.note && (
                  <p className="text-xs text-neutral-500">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card-glow p-7"
        >
          <h3 className="mb-5 flex items-center gap-2 font-[var(--font-display)] text-lg font-semibold text-gold-300">
            <HiOutlineSparkles size={22} /> Strengths
          </h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <li
                key={s}
                className="flex items-center justify-center rounded-lg bg-white/5 px-4 py-6 text-center text-sm text-neutral-200"
              >
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card-glow flex h-full flex-col p-7"
        >
          <h3 className="mb-5 flex shrink-0 items-center gap-2 font-[var(--font-display)] text-lg font-semibold text-gold-300">
            <HiOutlineLanguage size={22} /> Languages
          </h3>
          <div className="grid flex-1 grid-cols-1 grid-rows-2 gap-4">
            {languages.map((lang) => (
              <div
                key={lang}
                className="flex items-center justify-center rounded-lg bg-white/5 px-4 py-8 text-center text-lg text-neutral-200"
              >
                {lang}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card-glow p-7"
        >
          <h3 className="mb-5 flex items-center gap-2 font-[var(--font-display)] text-lg font-semibold text-gold-300">
            <HiOutlineHeart size={22} /> Hobbies
          </h3>
          <ul className="space-y-4">
            {hobbies.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm text-neutral-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default Resume;
