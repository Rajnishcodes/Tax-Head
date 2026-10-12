import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Navbar.css";


/* =========================================================
   NAVBAR LINKS
   ========================================================= */

const navbarLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
    dropdown: true,
  },
  {
    label: "GST Solutions",
    href: "#gst-calculator",
  },
  {
    label: "Resources",
    href: "#faq",
    dropdown: true,
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "About Us",
    href: "#why-us",
  },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  /* =========================================================
     HANDLE SCROLL
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /* =========================================================
     HANDLE WINDOW RESIZE
     Close mobile navigation when returning to desktop.
     ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  /* =========================================================
     HANDLE NAVIGATION
     ========================================================= */

  const handleNavigation = () => {
    setMenuOpen(false);
  };


  /* =========================================================
     TOGGLE MOBILE MENU
     ========================================================= */

  const handleMenuToggle = () => {
    setMenuOpen((previousState) => !previousState);
  };


  return (
    <header
      className={`gst-navbar ${
        isScrolled ? "gst-navbar--scrolled" : ""
      }`}
    >

      <div className="gst-navbar__container">

        {/* =================================================
            BRAND / LOGO
            Logo is loaded from /public/logo.png
            ================================================= */}

        <a
          href="#home"
          className="gst-navbar__brand"
          onClick={handleNavigation}
          aria-label="GST Site Home"
        >
          <img
            src="/logo.png"
            alt="GST Site Logo"
            className="gst-navbar__logo"
          />
        </a>


        {/* =================================================
            NAVIGATION MENU
            ================================================= */}

        <nav
          className={`gst-navbar__menu ${
            menuOpen ? "gst-navbar__menu--open" : ""
          }`}
          aria-label="Main navigation"
        >

          {navbarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="gst-navbar__link"
              onClick={handleNavigation}
            >

              <span>
                {link.label}
              </span>

              {link.dropdown && (
                <ChevronDown
                  className="gst-navbar__link-icon"
                  size={14}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )}

            </a>
          ))}


          {/* =================================================
              NAVBAR CTA
              ================================================= */}

          <a
            href="#contact"
            className="gst-navbar__cta"
            onClick={handleNavigation}
          >
            Talk to Expert
          </a>

        </nav>


        {/* =================================================
            MOBILE MENU BUTTON
            ================================================= */}

        <button
          type="button"
          className="gst-navbar__toggle"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="gst-navbar-menu"
          onClick={handleMenuToggle}
        >

          {menuOpen ? (
            <X
              size={23}
              strokeWidth={2}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={23}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}

        </button>

      </div>

    </header>
  );
}