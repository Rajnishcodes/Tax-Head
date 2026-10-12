import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="gst-hero">
      <div className="gst-hero__container">
        {/* =========================
            HERO CONTENT
        ========================== */}
        <div className="gst-hero__content">
          <span className="gst-hero__eyebrow">
            <Sparkles size={14} strokeWidth={2.2} />
            India's Trusted Compliance Partner
          </span>

          <h1 className="gst-hero__title">
            Your Business.
            <br />
            <span>Our Compliance.</span>
          </h1>

          <p className="gst-hero__description">
            Launch, register and grow your business without the compliance
            hassle. Get expert support for GST, registrations, filings and
            business protection.
          </p>

          {/* CTA Buttons */}
          <div className="gst-hero__actions">
            <a href="#services" className="gst-hero__primary-button">
              Get Started
              <ArrowRight size={17} strokeWidth={2.2} />
            </a>

            <a href="#contact" className="gst-hero__secondary-button">
              Book Free Consultation
            </a>
          </div>

          {/* Trust Points */}
          <div className="gst-hero__trust">
            <span>
              <CheckCircle2 size={16} />
              10,000+ Businesses Served
            </span>

            <span>
              <CheckCircle2 size={16} />
              Expert CA & CS Team
            </span>

            <span>
              <CheckCircle2 size={16} />
              PAN India Service
            </span>

            <span>
              <CheckCircle2 size={16} />
              Fast Processing
            </span>
          </div>
        </div>

        {/* =========================
            DASHBOARD
        ========================== */}
        <div className="gst-hero__dashboard-wrapper">
          <div className="gst-hero__dashboard-glow" />

          <div className="gst-hero__dashboard">
            {/* Dashboard Header */}
            <div className="gst-hero__dashboard-header">
              <div>
                <small>GST COMPLIANCE DASHBOARD</small>

                <strong>Acme Technologies Pvt. Ltd.</strong>
              </div>

              <span className="gst-hero__dashboard-status">
                Active
              </span>
            </div>

            {/* Dashboard Stats */}
            <div className="gst-hero__dashboard-stats">
              <div className="gst-hero__dashboard-stat">
                <span>GSTIN</span>
                <strong>07AABCA1234A1Z5</strong>
              </div>

              <div className="gst-hero__dashboard-stat">
                <span>Tax Liability</span>
                <strong>₹ 48,250</strong>
              </div>

              <div className="gst-hero__dashboard-stat">
                <span>ITC Available</span>
                <strong>₹ 31,840</strong>
              </div>

              <div className="gst-hero__dashboard-stat">
                <span>Compliance Score</span>
                <strong>94%</strong>
              </div>
            </div>

            {/* Compliance Progress */}
            <div className="gst-hero__progress">
              <div className="gst-hero__progress-header">
                <span>Monthly Compliance</span>
                <strong>94%</strong>
              </div>

              <div className="gst-hero__progress-track">
                <span className="gst-hero__progress-fill" />
              </div>
            </div>

            {/* Compliance Rows */}
            <div className="gst-hero__compliance-list">
              <div className="gst-hero__compliance-row">
                <span>
                  <FileCheck2 size={16} />
                  GSTR-1 Filing
                </span>

                <strong className="gst-hero__status-success">
                  Completed
                </strong>
              </div>

              <div className="gst-hero__compliance-row">
                <span>
                  <FileCheck2 size={16} />
                  GSTR-3B Filing
                </span>

                <strong className="gst-hero__status-warning">
                  Due in 8 days
                </strong>
              </div>

              <div className="gst-hero__compliance-row">
                <span>
                  <ShieldCheck size={16} />
                  Business Compliance
                </span>

                <strong className="gst-hero__status-success">
                  Healthy
                </strong>
              </div>
            </div>
          </div>

          {/* Floating Late Fee Card */}
          <div className="gst-hero__late-fee">
            <strong>₹0</strong>
            <small>Late Fee</small>
          </div>
        </div>
      </div>
    </section>
  );
}