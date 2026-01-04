import React from 'react';
import PropTypes from 'prop-types';

const PriceDisplay = ({
  price,
  period = 'day',
  strikethrough = null,
  size = 'medium',
  className = ''
}) => {
  const formatPrice = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const sizeClasses = {
    small: 'cr-price-small',
    medium: 'cr-price-medium',
    large: 'cr-price-large',
    xlarge: 'cr-price-xlarge'
  };

  return (
    <div className={`cr-price ${sizeClasses[size]} ${className}`}>
      {strikethrough && (
        <span className="cr-price-strikethrough">{formatPrice(strikethrough)}</span>
      )}
      <span className="cr-price-amount">{formatPrice(price)}</span>
      {period && (
        <span className="cr-price-period">/{period}</span>
      )}

      <style jsx>{`
        .cr-price {
          display: inline-flex;
          align-items: baseline;
          gap: var(--space-1);
          font-family: var(--font-heading);
        }

        .cr-price-strikethrough {
          color: var(--gray-400);
          text-decoration: line-through;
          font-weight: var(--font-weight-normal);
        }

        .cr-price-amount {
          color: var(--primary);
          font-weight: var(--font-weight-bold);
        }

        .cr-price-period {
          color: var(--gray-600);
          font-weight: var(--font-weight-normal);
        }

        /* Sizes */
        .cr-price-small .cr-price-strikethrough {
          font-size: var(--text-sm);
        }

        .cr-price-small .cr-price-amount {
          font-size: var(--text-lg);
        }

        .cr-price-small .cr-price-period {
          font-size: var(--text-sm);
        }

        .cr-price-medium .cr-price-strikethrough {
          font-size: var(--text-base);
        }

        .cr-price-medium .cr-price-amount {
          font-size: var(--text-2xl);
        }

        .cr-price-medium .cr-price-period {
          font-size: var(--text-base);
        }

        .cr-price-large .cr-price-strikethrough {
          font-size: var(--text-lg);
        }

        .cr-price-large .cr-price-amount {
          font-size: var(--text-3xl);
        }

        .cr-price-large .cr-price-period {
          font-size: var(--text-lg);
        }

        .cr-price-xlarge .cr-price-strikethrough {
          font-size: var(--text-xl);
        }

        .cr-price-xlarge .cr-price-amount {
          font-size: var(--text-5xl);
        }

        .cr-price-xlarge .cr-price-period {
          font-size: var(--text-xl);
        }
      `}</style>
    </div>
  );
};

PriceDisplay.propTypes = {
  price: PropTypes.number.isRequired,
  period: PropTypes.string,
  strikethrough: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  className: PropTypes.string
};

export default PriceDisplay;
