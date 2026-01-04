import React from 'react';
import { Link } from 'framework7-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cr-footer">
      <div className="cr-footer-main">
        <div className="cr-container">
          <div className="cr-footer-grid">
            {/* About Section */}
            <div className="cr-footer-column">
              <h3 className="cr-footer-title">Car Rental</h3>
              <p className="cr-footer-description">
                Your trusted partner for quality car rentals. Experience the freedom of the road with our diverse fleet and exceptional service.
              </p>
              <div className="cr-footer-social">
                <a href="#" className="cr-footer-social-link" aria-label="Facebook">
                  <i className="f7-icons">logo_facebook</i>
                </a>
                <a href="#" className="cr-footer-social-link" aria-label="Twitter">
                  <i className="f7-icons">logo_twitter</i>
                </a>
                <a href="#" className="cr-footer-social-link" aria-label="Instagram">
                  <i className="f7-icons">logo_instagram</i>
                </a>
                <a href="#" className="cr-footer-social-link" aria-label="LinkedIn">
                  <i className="f7-icons">logo_linkedin</i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="cr-footer-column">
              <h4 className="cr-footer-heading">Quick Links</h4>
              <ul className="cr-footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/cars/">Browse Cars</Link></li>
                <li><Link href="/about/">About Us</Link></li>
                <li><Link href="/contact/">Contact</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="cr-footer-column">
              <h4 className="cr-footer-heading">Vehicle Categories</h4>
              <ul className="cr-footer-links">
                <li><Link href="/cars/?category=Sedan">Sedans</Link></li>
                <li><Link href="/cars/?category=SUV">SUVs</Link></li>
                <li><Link href="/cars/?category=Luxury">Luxury</Link></li>
                <li><Link href="/cars/?category=Electric">Electric</Link></li>
                <li><Link href="/cars/?category=Van">Vans</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="cr-footer-column">
              <h4 className="cr-footer-heading">Contact Us</h4>
              <ul className="cr-footer-contact">
                <li>
                  <i className="f7-icons">phone_fill</i>
                  <span>1-800-CAR-RENT</span>
                </li>
                <li>
                  <i className="f7-icons">envelope_fill</i>
                  <span>support@carrental.com</span>
                </li>
                <li>
                  <i className="f7-icons">location_fill</i>
                  <span>Available at 18+ locations</span>
                </li>
                <li>
                  <i className="f7-icons">clock_fill</i>
                  <span>24/7 Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="cr-footer-bottom">
        <div className="cr-container">
          <div className="cr-footer-bottom-content">
            <p className="cr-footer-copyright">
              &copy; {currentYear} Car Rental. All rights reserved.
            </p>
            <div className="cr-footer-legal">
              <Link href="#">Privacy Policy</Link>
              <span className="cr-footer-divider">|</span>
              <Link href="#">Terms of Service</Link>
              <span className="cr-footer-divider">|</span>
              <Link href="#">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cr-footer {
          background-color: var(--gray-900);
          color: var(--gray-300);
          margin-top: auto;
        }

        .cr-footer-main {
          padding: var(--space-12) 0 var(--space-8);
        }

        .cr-footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
        }

        .cr-footer-column {
          display: flex;
          flex-direction: column;
        }

        .cr-footer-title {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: var(--font-weight-bold);
          color: var(--white);
          margin-bottom: var(--space-4);
        }

        .cr-footer-description {
          font-size: var(--text-sm);
          line-height: var(--leading-relaxed);
          color: var(--gray-400);
          margin-bottom: var(--space-4);
        }

        .cr-footer-social {
          display: flex;
          gap: var(--space-3);
        }

        .cr-footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: var(--gray-800);
          color: var(--gray-300);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          text-decoration: none;
        }

        .cr-footer-social-link:hover {
          background-color: var(--primary);
          color: var(--white);
          transform: translateY(-2px);
        }

        .cr-footer-social-link i {
          font-size: 20px;
        }

        .cr-footer-heading {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--white);
          margin-bottom: var(--space-4);
        }

        .cr-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cr-footer-links li {
          margin-bottom: var(--space-2);
        }

        .cr-footer-links a {
          color: var(--gray-400);
          font-size: var(--text-sm);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .cr-footer-links a:hover {
          color: var(--primary-light);
        }

        .cr-footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cr-footer-contact li {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-bottom: var(--space-3);
          font-size: var(--text-sm);
          color: var(--gray-400);
        }

        .cr-footer-contact i {
          color: var(--primary-light);
          font-size: 18px;
        }

        .cr-footer-bottom {
          border-top: 1px solid var(--gray-800);
          padding: var(--space-6) 0;
        }

        .cr-footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cr-footer-copyright {
          font-size: var(--text-sm);
          color: var(--gray-500);
          margin: 0;
        }

        .cr-footer-legal {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .cr-footer-legal a {
          font-size: var(--text-sm);
          color: var(--gray-500);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .cr-footer-legal a:hover {
          color: var(--primary-light);
        }

        .cr-footer-divider {
          color: var(--gray-700);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .cr-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cr-footer-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .cr-footer-bottom-content {
            flex-direction: column;
            gap: var(--space-4);
            text-align: center;
          }

          .cr-footer-legal {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
