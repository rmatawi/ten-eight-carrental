import React from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'framework7-react';
import RatingStars from '../ui/RatingStars';

const CarReviews = ({ carId }) => {
  const reviewsByCarId = useStore('reviewsByCarId');
  const reviews = reviewsByCarId ? reviewsByCarId(carId) : [];

  if (!reviews || reviews.length === 0) {
    return (
      <div className="cr-car-reviews">
        <h3 className="cr-reviews-title">Customer Reviews</h3>
        <div className="cr-no-reviews">
          <i className="f7-icons">chat_bubble_2</i>
          <p>No reviews yet. Be the first to review this car!</p>
        </div>

        <style jsx>{`
          .cr-car-reviews {
            background: var(--white);
            border-radius: var(--radius-lg);
            padding: var(--space-6);
            box-shadow: var(--shadow-sm);
          }

          .cr-reviews-title {
            font-family: var(--font-heading);
            font-size: var(--text-xl);
            font-weight: var(--font-weight-bold);
            color: var(--gray-900);
            margin: 0 0 var(--space-4);
          }

          .cr-no-reviews {
            text-align: center;
            padding: var(--space-8) var(--space-4);
            color: var(--gray-500);
          }

          .cr-no-reviews i {
            font-size: 48px;
            margin-bottom: var(--space-3);
            color: var(--gray-300);
          }

          .cr-no-reviews p {
            margin: 0;
            font-size: var(--text-base);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="cr-car-reviews">
      <h3 className="cr-reviews-title">
        Customer Reviews ({reviews.length})
      </h3>

      <div className="cr-reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="cr-review-item">
            <div className="cr-review-header">
              <div className="cr-review-user">
                <div className="cr-user-avatar">
                  {review.userName.charAt(0)}
                </div>
                <div className="cr-user-info">
                  <div className="cr-user-name">
                    {review.userName}
                    {review.verified && (
                      <i className="f7-icons cr-verified-badge">checkmark_seal_fill</i>
                    )}
                  </div>
                  <div className="cr-review-date">{review.date}</div>
                </div>
              </div>
              <div className="cr-review-rating">
                <RatingStars rating={review.rating} size="small" showNumber />
              </div>
            </div>

            <div className="cr-review-content">
              <p>{review.comment}</p>
            </div>

            {review.helpful > 0 && (
              <div className="cr-review-footer">
                <button className="cr-helpful-btn">
                  <i className="f7-icons">hand_thumbsup</i>
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .cr-car-reviews {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
        }

        .cr-reviews-title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          color: var(--gray-900);
          margin: 0 0 var(--space-6);
        }

        .cr-reviews-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .cr-review-item {
          padding-bottom: var(--space-5);
          border-bottom: 1px solid var(--gray-200);
        }

        .cr-review-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .cr-review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-3);
          gap: var(--space-3);
        }

        .cr-review-user {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .cr-user-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-light), var(--primary));
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-lg);
          font-weight: var(--font-weight-bold);
          flex-shrink: 0;
        }

        .cr-user-info {
          flex: 1;
        }

        .cr-user-name {
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .cr-verified-badge {
          font-size: 16px;
          color: var(--primary);
        }

        .cr-review-date {
          font-size: var(--text-sm);
          color: var(--gray-500);
          margin-top: var(--space-1);
        }

        .cr-review-rating {
          flex-shrink: 0;
        }

        .cr-review-content {
          margin: var(--space-3) 0;
        }

        .cr-review-content p {
          margin: 0;
          color: var(--gray-700);
          line-height: 1.6;
        }

        .cr-review-footer {
          margin-top: var(--space-3);
        }

        .cr-helpful-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-3);
          background: var(--gray-100);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          color: var(--gray-700);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cr-helpful-btn:hover {
          background: var(--gray-200);
        }

        .cr-helpful-btn i {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .cr-car-reviews {
            padding: var(--space-4);
          }

          .cr-review-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .cr-user-avatar {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

CarReviews.propTypes = {
  carId: PropTypes.string.isRequired
};

export default CarReviews;
