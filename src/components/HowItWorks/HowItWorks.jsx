
import { motion, useReducedMotion } from "framer-motion";
import "./HowItWorks.css";

const processSteps = [
  {
    number: "01",
    title: "Submit Requirement",
    description:
      "Pick a service and share basic details — it takes under 2 minutes.",
  },
  {
    number: "02",
    title: "Document Verification",
    description:
      "Our experts review and prepare your documents for filing.",
  },
  {
    number: "03",
    title: "Government Filing",
    description:
      "We file with MCA / GSTN / IPO and follow up until approval.",
  },
  {
    number: "04",
    title: "Approval & Certificate",
    description:
      "Get your certificate digitally — and a clean compliance kit.",
  },
  {
    number: "05",
    title: "Post Registration Support",
    description:
      "Ongoing compliance, filings and growth advisory — always on.",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stepsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  const staticVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="how-it-works"
      className="gst-process"
      aria-labelledby="gst-process__title"
    >
      <div className="gst-process__container">
        <motion.header
          className="gst-process__header"
          variants={reduceMotion ? staticVariants : headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="gst-process__eyebrow">
            HOW IT WORKS
          </span>

          <h2
            id="gst-process__title"
            className="gst-process__heading"
          >
            Five simple steps. Zero
            <br className="gst-process__desktop-break" />
            guesswork.
          </h2>
        </motion.header>

        <motion.ol
          className="gst-process__timeline"
          variants={reduceMotion ? staticVariants : stepsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {processSteps.map((step) => (
            <motion.li
              className="gst-process__step"
              key={step.number}
              variants={reduceMotion ? staticVariants : stepVariants}
            >
              <div className="gst-process__marker">
                <span className="gst-process__number">
                  {step.number}
                </span>
              </div>

              <div className="gst-process__content">
                <h3 className="gst-process__step-title">
                  {step.title}
                </h3>

                <p className="gst-process__description">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
