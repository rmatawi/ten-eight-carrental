import React from 'react';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`cr-feature-card ${className}`}>
      <div className="cr-feature-icon">
        <i className={`f7-icons`}>{icon}</i>
      </div>
      <h3 className="cr-feature-title">{title}</h3>
      <p className="cr-feature-description">{description}</p>

      <style jsx>{`
        .cr-feature-card {
          text-align: center;
          padding: var(--space-6);
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
        }

        .cr-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .cr-feature-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto var(--space-4);
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }

        .cr-feature-icon i {
          font-size: 32px;
        }

        .cr-feature-title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .cr-feature-description {
          font-size: var(--text-sm);
          color: var(--gray-600);
          line-height: var(--leading-relaxed);
          margin: 0;
        }
      `}</style>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default FeatureCard;
