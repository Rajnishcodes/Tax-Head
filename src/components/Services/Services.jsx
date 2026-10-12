import { ArrowRight } from "lucide-react";
import { services } from "../../data/siteData";
import SectionHeading from "../SectionHeading";
import "./Services.css";

export default function Services() {
  return (
    <section
      id="services"
      className="gst-section gst-section--white gst-services"
    >
      <div className="gst-container gst-services__container">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to start and run a compliant business."
          description="From GST registration to company incorporation and brand protection, get expert support under one roof."
        />

        <div className="gst-services__grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className={`gst-services__card ${
                  service.featured
                    ? "gst-services__card--featured"
                    : ""
                }`}
                key={service.title}
              >
                {/* Service Icon */}
                <div className="gst-services__icon">
                  <Icon size={23} strokeWidth={2} />
                </div>

                {/* Service Content */}
                <div className="gst-services__content">
                  <h3 className="gst-services__title">
                    {service.title}
                  </h3>

                  <p className="gst-services__description">
                    {service.description}
                  </p>
                </div>

                {/* Service Button */}
                <a
                  href="#contact"
                  className="gst-services__button"
                  aria-label={`Explore ${service.title}`}
                >
                  <span>Explore Service</span>

                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}