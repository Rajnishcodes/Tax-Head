
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

import LiquidReveal from "./LiquidReveal";
import "./Hero.css";

const trustPoints = [
  "Clear guidance",
  "Transparent process",
  "Personalised support",
];

const headlineLines = [
  "Build your business.",
  "We'll handle the",
  "compliance.",
];

const headingVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.25,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 65,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const headingAnimation = reduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : headingVariants;

  const lineAnimation = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }
    : lineVariants;

  const fadeAnimation = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : fadeUpVariants;

  return (
    <section
      id="home"
      className="gst-hero"
      aria-labelledby="gst-hero-title"
    >
      {/* Full-screen photographic background */}
      <LiquidReveal
        baseSrc="/hero/hero-base.jpg"
        revealSrc="/hero/hero-reveal.jpg"
      />

      <div className="gst-hero__overlay" aria-hidden="true" />

      {/* Oversized background lettering */}
      <div className="gst-hero__watermark" aria-hidden="true">
        TAX HEAD
      </div>

      <div className="gst-hero__content">
        <motion.div
          className="gst-hero__eyebrow"
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <span className="gst-hero__eyebrow-dot" />
          Your partner in business compliance
        </motion.div>

        <motion.h1
          id="gst-hero-title"
          className="gst-hero__title"
          variants={headingAnimation}
          initial="hidden"
          animate="visible"
        >
          {headlineLines.map((line, index) => (
            <span
              className="gst-hero__title-line"
              key={line}
            >
              <motion.span
                className={
                  index === 2
                    ? "gst-hero__title-accent"
                    : ""
                }
                variants={lineAnimation}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="gst-hero__description"
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          From GST registration to company incorporation and
          ongoing filings, get clear guidance for every stage
          of your business journey.
        </motion.p>

        <motion.div
          className="gst-hero__actions"
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.98 }}
        >
          <a
            href="/enquiry"
            className="gst-hero__button gst-hero__button--primary"
          >
            Talk to an Expert
          </a>

          <a
            href="#services"
            className="gst-hero__button gst-hero__button--secondary"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          className="gst-hero__trust"
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.15 }}
        >
          {trustPoints.map((point) => (
            <span key={point}>
              <CheckCircle2
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              {point}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="gst-hero__bottom"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="gst-hero__bottom-brand">
            <ShieldCheck size={15} />
            Business first. Compliance simplified.
          </span>

          <a href="#services" className="gst-hero__scroll">
            Discover our services
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
