import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="gst-container">
        <div className="site-footer__main">

          {/* Brand */}
          <div className="site-footer__brand">
            <a href="#home" className="navbar-brand">
              <span className="navbar-brand__mark">G</span>

              <span>
                <strong>GST</strong>
                <small>Site</small>
              </span>
            </a>

            <p>
              Register, file, protect and grow — your compliance partner
              for every stage of business in India.
            </p>

            {/* Social Links */}
            <div className="site-footer__social">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="site-footer__col">
            <h4>Services</h4>

            <a href="#services">Private Limited</a>
            <a href="#services">LLP Registration</a>
            <a href="#services">GST Registration</a>
            <a href="#services">Trademark</a>
            <a href="#services">ISO Certification</a>
          </div>

          {/* Company */}
          <div className="site-footer__col">
            <h4>Company</h4>

            <a href="#why-us">About Us</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQs</a>

            <a href="#home">
              Careers
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Resources */}
          <div className="site-footer__col">
            <h4>Resources</h4>

            <a href="#faq">Help Center</a>
            <a href="#gst-calculator">GST Calculator</a>
            <a href="#faq">Compliance Guide</a>
            <a href="#faq">Due Date Support</a>
            <a href="#contact">Talk to Expert</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="site-footer__bottom">

          <span>
            © 2026 GST Site. All rights reserved.
          </span>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Refund Policy</a>
          </div>

          <span className="site-footer__secure">
            <ShieldCheck size={14} />
            Secure & Confidential
          </span>

        </div>
      </div>
    </footer>
  );
}
