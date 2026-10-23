
import { motion, useReducedMotion } from "framer-motion";
import { benefits } from "../../data/siteData";
import SectionHeading from "../SectionHeading";
import "./WhyChooseUs.css";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-us"
      className="gst-why"
      aria-labelledby="gst-why__section-title"
    >
      <div className="gst-why__container">
        <motion.div
          className="gst-why__heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="WHY TAX HEAD LLP"
            title="Business compliance, made simpler."
            description="Get the clarity, expertise, and ongoing support you need to focus on growing your business."
          />
        </motion.div>

        <div className="gst-why__list">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                className={`gst-why__card ${
                  isReversed ? "gst-why__card--reversed" : ""
                }`}
                key={benefit.title}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 22 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : (index % 2) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                        transition: { duration: 0.2 },
                      }
                }
              >
                <div className="gst-why__visual">
                  <div
                    className="gst-why__visual-glow"
                    aria-hidden="true"
                  />

                  <div className="gst-why__icon-card">
                    <Icon
                      size={32}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="gst-why__content">
                  <span className="gst-why__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="gst-why__title">
                    {benefit.title}
                  </h3>

                  <p className="gst-why__description">
                    {benefit.description}
                  </p>

                  <span
                    className="gst-why__accent"
                    aria-hidden="true"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
