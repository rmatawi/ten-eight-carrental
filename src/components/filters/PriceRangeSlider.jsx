import React from 'react';
import PropTypes from 'prop-types';
import { Range } from 'framework7-react';

const PriceRangeSlider = ({ value = [0, 300], onChange, min = 0, max = 300 }) => {
  return (
    <div className="cr-price-range">
      <div className="cr-price-range-labels">
        <span className="cr-price-range-label">
          ${value[0]}
        </span>
        <span className="cr-price-range-label">
          ${value[1]}
        </span>
      </div>

      <Range
        min={min}
        max={max}
        step={10}
        value={value}
        dual={true}
        onRangeChange={onChange}
        color="primary"
      />

      <style jsx>{`
        .cr-price-range {
          padding: var(--space-2) 0;
        }

        .cr-price-range-labels {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--space-3);
        }

        .cr-price-range-label {
          font-size: var(--text-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

PriceRangeSlider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number
};

export default PriceRangeSlider;
