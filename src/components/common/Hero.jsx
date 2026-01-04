import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600',
  height = '600px',
  overlay = true,
  children,
  className = ''
}) => {
  return (
    <div className={`cr-hero ${className}`} style={{ height }}>
      <div
        className="cr-hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {overlay && <div className="cr-hero-overlay" />}

      <div className="cr-hero-content">
        <div className="cr-container">
          {title && <h1 className="cr-hero-title">{title}</h1>}
          {subtitle && <p className="cr-hero-subtitle">{subtitle}</p>}
          {children}
        </div>
      </div>

      <style jsx>{`
        .cr-hero {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: var(--space-12);
        }

        .cr-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .cr-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(142, 0, 0, 0.85),
            rgba(30, 58, 95, 0.75)
          );
        }

        .cr-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: center;
          color: var(--white);
          padding: var(--space-8) 0;
        }

        .cr-hero-title {
          font-family: var(--font-heading);
          font-size: var(--text-6xl);
          font-weight: var(--font-weight-bold);
          color: var(--white);
          margin-bottom: var(--space-4);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          line-height: var(--leading-tight);
        }

        .cr-hero-subtitle {
          font-size: var(--text-xl);
          color: var(--white);
          margin-bottom: var(--space-8);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          opacity: 0.95;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .cr-hero {
            height: auto !important;
            min-height: 500px;
            margin-bottom: var(--space-8);
          }

          .cr-hero-title {
            font-size: var(--text-4xl);
          }

          .cr-hero-subtitle {
            font-size: var(--text-lg);
          }

          .cr-hero-content {
            padding: var(--space-6) 0;
          }
        }
      `}</style>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
  height: PropTypes.string,
  overlay: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Hero;
