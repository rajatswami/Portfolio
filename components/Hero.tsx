"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi2";
import { profile } from "../data/resume";
import { resumePdfUrl } from "../api/axios";
import { SocialLinks } from "../common";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)]" />
      </div>

      <div className="relative mx-auto grid max-w-[1536px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-sm font-medium text-gold-300"
          >
            Available for new opportunities
          </motion.p>

          <h1 className="font-[var(--font-display)] text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="mt-3 h-10 sm:h-12">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-semibold text-accent-400 sm:text-2xl md:text-3xl"
              >
                {profile.roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="mt-5 max-w-2xl text-base text-neutral-400 sm:text-lg">
            {profile.tagline}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button onClick={() => scrollTo("projects")} className="btn-primary">
              View Projects
            </button>
            <a href={resumePdfUrl} className="btn-outline">
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-400 via-gold-500 to-accent-500 opacity-30 blur-2xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/30"
          />
          <div className="relative h-52 w-52 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-accent-500 p-1.5 shadow-[0_0_60px_rgba(245,181,68,0.4)] ring-4 ring-neutral-950 sm:h-64 sm:w-64">
            {/* eslint-disable-next-line @next/next/no-img-element -- plain img keeps 1:1 parity with the original site, avoids next/image config */}
            <img
              src="/profile.jpg"
              alt={profile.name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400"
      >
        <HiOutlineArrowDown size={26} />
      </motion.button>
    </section>
  );
};

export default Hero;
