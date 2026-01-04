import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'framework7-react';
import Badge from '../ui/Badge';
import RatingStars from '../ui/RatingStars';
import PriceDisplay from '../ui/PriceDisplay';

const CarCard = ({ car, viewMode = 'grid', showCompareButton = false, onCompare }) => {
  if (viewMode === 'list') {
    return (
      <Link href={`/cars/${car.id}/`} className="cr-car-card-list-link">
        <div className="cr-car-card-list">
          <div className="cr-car-card-list-image">
            <img src={car.thumbnail} alt={car.name} />
            {car.popular && (
              <div className="cr-car-badge-overlay">
                <Badge text="Popular" color="accent" size="small" />
              </div>
            )}
          </div>

          <div className="cr-car-card-list-content">
            <div className="cr-car-card-list-header">
              <div>
                <Badge text={car.category} color="gray" size="small" className="cr-mb-2" />
                <h3 className="cr-car-card-list-name">{car.name}</h3>
                <div className="cr-car-card-list-rating">
                  <RatingStars rating={car.rating} size="small" showNumber />
                  <span className="cr-car-reviews">({car.reviewCount} reviews)</span>
                </div>
              </div>
              <PriceDisplay price={car.pricePerDay} period="day" size="large" />
            </div>

            <div className="cr-car-card-list-specs">
              <div className="cr-car-spec-item">
                <i className="f7-icons">person_2_fill</i>
                <span>{car.specifications.passengers} Passengers</span>
              </div>
              <div className="cr-car-spec-item">
                <i className="f7-icons">bag_fill</i>
                <span>{car.specifications.luggage} Bags</span>
              </div>
              <div className="cr-car-spec-item">
                <i className="f7-icons">gear_alt_fill</i>
                <span>{car.specifications.transmission}</span>
              </div>
              <div className="cr-car-spec-item">
                <i className="f7-icons">bolt_fill</i>
                <span>{car.specifications.fuelType}</span>
              </div>
            </div>

            <div className="cr-car-card-list-footer">
              <button className="cr-btn cr-btn-primary">
                View Details
              </button>
              {showCompareButton && (
                <button
                  className="cr-btn cr-btn-outline-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    onCompare(car);
                  }}
                >
                  <i className="f7-icons">arrow_left_arrow_right</i>
                  Compare
                </button>
              )}
            </div>
          </div>

          <style jsx>{`
            .cr-car-card-list {
              display: flex;
              gap: var(--space-6);
              background: var(--white);
              border-radius: var(--radius-lg);
              overflow: hidden;
              box-shadow: var(--shadow-md);
              transition: all var(--transition-base);
              padding: var(--space-4);
            }

            .cr-car-card-list:hover {
              box-shadow: var(--shadow-lg);
            }

            .cr-car-card-list-image {
              position: relative;
              width: 280px;
              height: 200px;
              flex-shrink: 0;
              border-radius: var(--radius-md);
              overflow: hidden;
            }

            .cr-car-card-list-image img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .cr-car-badge-overlay {
              position: absolute;
              top: var(--space-2);
              right: var(--space-2);
            }

            .cr-car-card-list-content {
              flex: 1;
              display: flex;
              flex-direction: column;
              gap: var(--space-4);
            }

            .cr-car-card-list-header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
            }

            .cr-car-card-list-name {
              font-family: var(--font-heading);
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-semibold);
              color: var(--gray-900);
              margin: 0 0 var(--space-2);
            }

            .cr-car-card-list-rating {
              display: flex;
              align-items: center;
              gap: var(--space-2);
            }

            .cr-car-reviews {
              font-size: var(--text-xs);
              color: var(--gray-500);
            }

            .cr-car-card-list-specs {
              display: flex;
              gap: var(--space-6);
              padding: var(--space-3) 0;
              border-top: 1px solid var(--gray-200);
              border-bottom: 1px solid var(--gray-200);
            }

            .cr-car-spec-item {
              display: flex;
              align-items: center;
              gap: var(--space-2);
              font-size: var(--text-sm);
              color: var(--gray-600);
            }

            .cr-car-spec-item i {
              font-size: 18px;
              color: var(--gray-500);
            }

            .cr-car-card-list-footer {
              display: flex;
              gap: var(--space-3);
              margin-top: auto;
            }

            @media (max-width: 768px) {
              .cr-car-card-list {
                flex-direction: column;
              }

              .cr-car-card-list-image {
                width: 100%;
              }

              .cr-car-card-list-header {
                flex-direction: column;
                gap: var(--space-3);
              }

              .cr-car-card-list-specs {
                flex-wrap: wrap;
                gap: var(--space-3);
              }

              .cr-car-card-list-footer {
                flex-direction: column;
              }
            }
          `}</style>
        </div>
      </Link>
    );
  }

  // Grid view (default)
  return (
    <Link href={`/cars/${car.id}/`} className="cr-car-card-link">
      <div className="cr-car-card-grid">
        <div className="cr-car-card-grid-image">
          <img src={car.thumbnail} alt={car.name} />
          {car.popular && (
            <div className="cr-car-badge-top">
              <Badge text="Popular" color="accent" />
            </div>
          )}
        </div>

        <div className="cr-car-card-grid-content">
          <Badge text={car.category} color="gray" size="small" className="cr-mb-2" />
          <h3 className="cr-car-card-grid-name">{car.name}</h3>

          <div className="cr-car-card-grid-rating">
            <RatingStars rating={car.rating} size="small" showNumber />
            <span className="cr-car-reviews">({car.reviewCount})</span>
          </div>

          <div className="cr-car-card-grid-specs">
            <div className="cr-car-spec">
              <i className="f7-icons">person_2_fill</i>
              <span>{car.specifications.passengers}</span>
            </div>
            <div className="cr-car-spec">
              <i className="f7-icons">bag_fill</i>
              <span>{car.specifications.luggage}</span>
            </div>
            <div className="cr-car-spec">
              <i className="f7-icons">gear_alt_fill</i>
              <span>{car.specifications.transmission}</span>
            </div>
          </div>

          <div className="cr-car-card-grid-footer">
            <PriceDisplay price={car.pricePerDay} period="day" size="medium" />
            <button className="cr-btn cr-btn-primary cr-btn-sm">
              Book Now
            </button>
          </div>

          {showCompareButton && (
            <button
              className="cr-btn cr-btn-ghost cr-btn-sm cr-btn-block cr-mt-2"
              onClick={(e) => {
                e.preventDefault();
                onCompare(car);
              }}
            >
              <i className="f7-icons">arrow_left_arrow_right</i>
              Compare
            </button>
          )}
        </div>

        <style jsx>{`
          .cr-car-card-grid {
            background: var(--white);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            transition: all var(--transition-base);
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .cr-car-card-grid:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-xl);
          }

          .cr-car-card-grid-image {
            position: relative;
            width: 100%;
            height: 200px;
            overflow: hidden;
          }

          .cr-car-card-grid-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .cr-car-badge-top {
            position: absolute;
            top: var(--space-3);
            right: var(--space-3);
          }

          .cr-car-card-grid-content {
            padding: var(--space-4);
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .cr-car-card-grid-name {
            font-family: var(--font-heading);
            font-size: var(--text-lg);
            font-weight: var(--font-weight-semibold);
            color: var(--gray-900);
            margin: 0 0 var(--space-2);
          }

          .cr-car-card-grid-rating {
            display: flex;
            align-items: center;
            gap: var(--space-2);
            margin-bottom: var(--space-3);
          }

          .cr-car-reviews {
            font-size: var(--text-xs);
            color: var(--gray-500);
          }

          .cr-car-card-grid-specs {
            display: flex;
            gap: var(--space-4);
            padding: var(--space-3) 0;
            border-top: 1px solid var(--gray-200);
            border-bottom: 1px solid var(--gray-200);
            margin-bottom: var(--space-4);
          }

          .cr-car-spec {
            display: flex;
            align-items: center;
            gap: var(--space-1);
            font-size: var(--text-sm);
            color: var(--gray-600);
          }

          .cr-car-spec i {
            font-size: 16px;
            color: var(--gray-500);
          }

          .cr-car-card-grid-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
          }
        `}</style>
      </div>
    </Link>
  );
};

CarCard.propTypes = {
  car: PropTypes.object.isRequired,
  viewMode: PropTypes.oneOf(['grid', 'list']),
  showCompareButton: PropTypes.bool,
  onCompare: PropTypes.func
};

export default CarCard;
