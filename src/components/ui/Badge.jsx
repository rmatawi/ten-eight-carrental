import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({
  text,
  color = 'primary',
  outlined = false,
  size = 'medium',
  className = ''
}) => {
  const colorClass = outlined ? `cr-badge-outlined cr-badge-${color}-outlined` : `cr-badge-${color}`;
  const sizeClass = `cr-badge-${size}`;

  return (
    <span className={`cr-badge ${colorClass} ${sizeClass} ${className}`}>
      {text}

      <style jsx>{`
        .cr-badge {
          display: inline-block;
          font-weight: var(--font-weight-semibold);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wide);
          border-radius: var(--radius-full);
          line-height: 1;
          white-space: nowrap;
        }

        /* Sizes */
        .cr-badge-small {
          font-size: 10px;
          padding: 3px 8px;
        }

        .cr-badge-medium {
          font-size: var(--text-xs);
          padding: var(--space-1) var(--space-3);
        }

        .cr-badge-large {
          font-size: var(--text-sm);
          padding: var(--space-2) var(--space-4);
        }

        /* Solid Colors */
        .cr-badge-primary {
          background-color: var(--primary);
          color: var(--white);
        }

        .cr-badge-secondary {
          background-color: var(--secondary);
          color: var(--white);
        }

        .cr-badge-accent {
          background-color: var(--accent);
          color: var(--white);
        }

        .cr-badge-success {
          background-color: var(--success);
          color: var(--white);
        }

        .cr-badge-warning {
          background-color: var(--warning);
          color: var(--white);
        }

        .cr-badge-error {
          background-color: var(--error);
          color: var(--white);
        }

        .cr-badge-info {
          background-color: var(--info);
          color: var(--white);
        }

        .cr-badge-gray {
          background-color: var(--gray-200);
          color: var(--gray-700);
        }

        /* Outlined */
        .cr-badge-outlined {
          background-color: transparent;
          border: 1.5px solid currentColor;
        }

        .cr-badge-primary-outlined {
          color: var(--primary);
        }

        .cr-badge-secondary-outlined {
          color: var(--secondary);
        }

        .cr-badge-accent-outlined {
          color: var(--accent);
        }

        .cr-badge-success-outlined {
          color: var(--success);
        }

        .cr-badge-warning-outlined {
          color: var(--warning);
        }

        .cr-badge-error-outlined {
          color: var(--error);
        }

        .cr-badge-info-outlined {
          color: var(--info);
        }

        .cr-badge-gray-outlined {
          color: var(--gray-600);
        }
      `}</style>
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info', 'gray']),
  outlined: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
};

export default Badge;
