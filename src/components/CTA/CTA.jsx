import { ArrowRight } from "lucide-react";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-section__container">

        <div className="cta-section__content">
          <span className="cta-section__eyebrow">
            Ready to register
          </span>

          <h2 className="cta-section__title">
            your business?
          </h2>

          <p className="cta-section__description">
            Talk to our experts today and get a free, no-obligation
            consultation.
          </p>
        </div>

        <div className="cta-section__actions">

          <a
            href="#contact"
            className="cta-section__button cta-section__button--primary"
          >
            <span>Get Started</span>
            <ArrowRight size={17} />
          </a>

          <a
            href="tel:+919800012345"
            className="cta-section__button cta-section__button--secondary"
          >
            Schedule Call
          </a>

        </div>

      </div>
    </section>
  );
}