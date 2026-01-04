import React from 'react';
import PropTypes from 'prop-types';

const FilterChip = ({ label, onRemove, className = '' }) => {
  return (
    <div className={`cr-filter-chip ${className}`}>
      <span className="cr-filter-chip-label">{label}</span>
      <button
        className="cr-filter-chip-remove"
        onClick={onRemove}
        aria-label={`Remove ${label} filter`}
      >
        <i className="f7-icons">xmark</i>
      </button>

      <style jsx>{`
        .cr-filter-chip {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background-color: var(--primary-light);
          color: var(--white);
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: var(--font-weight-medium);
          transition: background-color var(--transition-fast);
        }

        .cr-filter-chip:hover {
          background-color: var(--primary-dark);
        }

        .cr-filter-chip-label {
          line-height: 1;
        }

        .cr-filter-chip-remove {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          padding: 0;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          color: var(--white);
          cursor: pointer;
          transition: background-color var(--transition-fast);
        }

        .cr-filter-chip-remove:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .cr-filter-chip-remove i {
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

FilterChip.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default FilterChip;
