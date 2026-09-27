"use client";

import { motion } from "framer-motion";
import { HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";
import { profile } from "../data/resume";
import {
  Section,
  SectionHeading,
  fadeUpStagger,
  fadeInLeft,
  viewportOnce,
} from "../common";

const facts = [
  { icon: HiOutlineMapPin, label: "Location", value: profile.location },
  { icon: HiOutlineEnvelope, label: "Email", value: profile.email },
];

const fadeUp = fadeUpStagger(0.12, 30, 0.6);

const About = () => {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title={
          <>
            Get to know <span className="gradient-text">me</span>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="card-glow p-8 sm:p-10"
        >
          <h3 className="mb-4 font-[var(--font-display)] text-2xl font-bold text-white">
            {profile.title}
          </h3>
          <p className="leading-relaxed text-neutral-300">{profile.summary}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {facts.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="card-glow flex items-center gap-4 p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
                <Icon size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  {label}
                </p>
                <p className="truncate text-sm font-medium text-neutral-200">
                  {value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
