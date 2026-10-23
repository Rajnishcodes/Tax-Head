
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

import { stats } from "../../data/siteData";
import "./Stats.css";

function AnimatedStatValue({ value }) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });
  const reduceMotion = useReducedMotion();

  const rawValue = String(value);
  const match = rawValue.match(/^([\d,]+(?:\.\d+)?)(.*)$/);

  const target = match
    ? Number(match[1].replace(/,/g, ""))
    : 0;

  const suffix = match ? match[2] : "";

  const decimalPlaces =
    match && match[1].includes(".")
      ? match[1].split(".")[1].length
      : 0;

  const displayValue = useTransform(count, (latest) => {
    const formatted =
      decimalPlaces > 0
        ? latest.toFixed(decimalPlaces)
        : Math.round(latest).toLocaleString("en-IN");

    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return undefined;

    if (reduceMotion) {
      count.set(target);
      return undefined;
    }

    const controls = animate(count, target, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, count, target]);

  return (
    <motion.span
      ref={ref}
      className="gst-stats__value"
      aria-label={rawValue}
    >
      {displayValue}
    </motion.span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Stats() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="gst-stats"
      aria-label="Business statistics"
    >
      <div className="gst-stats__background" aria-hidden="true" />

      <motion.div
        className="gst-stats__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {stats.map((stat, index) => (
          <motion.article
            className="gst-stats__item"
            key={stat.label}
            variants={
              reduceMotion
                ? {
                    hidden: { opacity: 1, y: 0 },
                    visible: { opacity: 1, y: 0 },
                  }
                : itemVariants
            }
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                    transition: { duration: 0.2 },
                  }
            }
          >
            <div className="gst-stats__topline">
              <span className="gst-stats__index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="gst-stats__indicator" aria-hidden="true" />
            </div>

            <AnimatedStatValue value={stat.value} />

            <span className="gst-stats__label">
              {stat.label}
            </span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
