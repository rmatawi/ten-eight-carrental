import React from 'react';
import PropTypes from 'prop-types';

const RatingStars = ({ rating, size = 'medium', showNumber = false, className = '' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClasses = {
    small: 'cr-rating-small',
    medium: 'cr-rating-medium',
    large: 'cr-rating-large'
  };

  return (
    <div className={`cr-rating ${sizeClasses[size]} ${className}`}>
      <div className="cr-rating-stars">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="f7-icons cr-rating-star cr-rating-star-full">star_fill</i>
        ))}

        {/* Half star */}
        {hasHalfStar && (
          <i className="f7-icons cr-rating-star cr-rating-star-half">star_lefthalf_fill</i>
        )}

        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="f7-icons cr-rating-star cr-rating-star-empty">star</i>
        ))}
      </div>

      {showNumber && (
        <span className="cr-rating-number">{rating.toFixed(1)}</span>
      )}

      <style jsx>{`
        .cr-rating {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
        }

        .cr-rating-stars {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .cr-rating-star {
          color: var(--gray-300);
        }

        .cr-rating-star-full,
        .cr-rating-star-half {
          color: var(--accent);
        }

        /* Sizes */
        .cr-rating-small .cr-rating-star {
          font-size: 14px;
        }

        .cr-rating-medium .cr-rating-star {
          font-size: 18px;
        }

        .cr-rating-large .cr-rating-star {
          font-size: 24px;
        }

        .cr-rating-number {
          font-size: var(--text-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-700);
          margin-left: var(--space-1);
        }

        .cr-rating-small .cr-rating-number {
          font-size: var(--text-xs);
        }

        .cr-rating-large .cr-rating-number {
          font-size: var(--text-base);
        }
      `}</style>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showNumber: PropTypes.bool,
  className: PropTypes.string
};

export default RatingStars;
