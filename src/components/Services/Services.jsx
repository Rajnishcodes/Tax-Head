
import { motion, useReducedMotion } from "framer-motion";
import { services } from "../../data/siteData";
import SectionHeading from "../SectionHeading";
import "./Services.css";

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="gst-services"
      aria-labelledby="gst-services__title"
    >
      <div className="gst-services__container">
        <motion.div
          className="gst-services__heading"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Everything your business needs, in one place."
            description="Explore registration, compliance and business support services with guidance at every step."
          />
        </motion.div>

        <div className="gst-services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className={`gst-services__card gst-services__card--${service.color || "blue"}`}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : (index % 4) * 0.07,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.2 },
                      }
                }
              >
                <div className="gst-services__icon">
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="gst-services__title">
                  {service.title}
                </h3>

                <p className="gst-services__description">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="gst-services__button"
                  aria-label={`Make an enquiry about ${service.title}`}
                >
                  Make an Enquiry
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
