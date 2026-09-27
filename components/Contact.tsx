"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { sendContactMessage } from "../api/contact.api";
import { profile, socials } from "../data/resume";
import {
  Section,
  SectionHeading,
  FormField,
  FormAlert,
  SocialLinks,
  fadeInLeft,
  fadeInRight,
  viewportOnce,
} from "../common";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContactMessage(form);
      setStatus("success");
      setFeedback("Thanks! Your message has been sent — I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Couldn't send your message. Please try again later."
      );
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="gradient-text">Connect</span>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="card-glow flex flex-col justify-between p-8"
        >
          <div>
            <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold text-white">
              Get in touch
            </h3>
            <p className="text-neutral-400">
              Have a project in mind or just want to say hi? My inbox is
              always open.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <a
              href={socials.email}
              className="flex items-center gap-3 text-neutral-300 transition-colors hover:text-gold-300"
            >
              <MdEmail size={20} /> {profile.email}
            </a>
          </div>

          <SocialLinks excludeEmail className="mt-8" />
        </motion.div>

        <motion.form
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          className="card-glow space-y-5 p-8"
        >
          <FormField
            label="Name"
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          <FormField
            label="Email"
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <FormField
            as="textarea"
            label="Message"
            required
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <FormAlert
            status={status === "success" || status === "error" ? status : null}
            message={feedback}
          />
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
