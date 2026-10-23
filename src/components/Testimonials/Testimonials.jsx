
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/siteData";
import "./Testimonials.css";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const activeTestimonial = testimonials[activeIndex];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const goToTestimonial = (index) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="gst-testimonials"
      aria-labelledby="gst-testimonials__title"
    >
      <div className="gst-testimonials__container">
        <div className="gst-testimonials__layout">
          {/* Featured testimonial */}
          <motion.article
            className="gst-testimonials__featured"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTestimonial.name}
                className="gst-testimonials__featured-content"
                initial={
                  reduceMotion ? false : { opacity: 0, y: 8 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduceMotion ? undefined : { opacity: 0, y: -6 }
                }
                transition={{ duration: 0.22 }}
              >
                <div
                  className="gst-testimonials__stars"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>

                <Quote
                  className="gst-testimonials__quote-icon"
                  size={27}
                  aria-hidden="true"
                />

                <blockquote className="gst-testimonials__quote">
                  “{activeTestimonial.quote}”
                </blockquote>

                <div className="gst-testimonials__author">
                  <span className="gst-testimonials__avatar">
                    {getInitials(activeTestimonial.name)}
                  </span>

                  <div className="gst-testimonials__author-info">
                    <strong>{activeTestimonial.name}</strong>
                    <span>{activeTestimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="gst-testimonials__controls">
              <button
                type="button"
                className="gst-testimonials__arrow gst-testimonials__arrow--light"
                onClick={() => goToTestimonial(activeIndex - 1)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={17} />
              </button>

              <button
                type="button"
                className="gst-testimonials__arrow gst-testimonials__arrow--dark"
                onClick={() => goToTestimonial(activeIndex + 1)}
                aria-label="Next testimonial"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </motion.article>

          {/* Testimonial selector */}
          <div
            className="gst-testimonials__list"
            role="group"
            aria-label="Choose a customer testimonial"
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={testimonial.name}
                  type="button"
                  className={[
                    "gst-testimonials__person",
                    isActive
                      ? "gst-testimonials__person--active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  initial={
                    reduceMotion ? false : { opacity: 0, x: 12 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.3,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  whileHover={
                    reduceMotion ? undefined : { x: -2 }
                  }
                >
                  <span className="gst-testimonials__person-avatar">
                    {getInitials(testimonial.name)}
                  </span>

                  <span className="gst-testimonials__person-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
