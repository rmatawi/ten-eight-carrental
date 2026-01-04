import React from 'react';
import PropTypes from 'prop-types';
import { f7 } from 'framework7-react';

const SortOptions = ({ value, onChange, className = '' }) => {
  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'priceLowToHigh', label: 'Price: Low to High' },
    { value: 'priceHighToLow', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const currentLabel = sortOptions.find(opt => opt.value === value)?.label || 'Sort By';

  const handleClick = () => {
    const buttons = sortOptions.map(option => ({
      text: option.label,
      onClick: () => onChange(option.value)
    }));

    f7.actions.create({
      buttons: [buttons, [{ text: 'Cancel', color: 'red' }]]
    }).open();
  };

  return (
    <button className={`cr-sort-button ${className}`} onClick={handleClick}>
      <i className="f7-icons">arrow_up_arrow_down</i>
      <span>{currentLabel}</span>

      <style jsx>{`
        .cr-sort-button {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          background: var(--white);
          border: 1px solid var(--gray-300);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          font-weight: var(--font-weight-medium);
          color: var(--gray-700);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cr-sort-button:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .cr-sort-button i {
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .cr-sort-button span {
            display: none;
          }
        }
      `}</style>
    </button>
  );
};

SortOptions.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default SortOptions;
