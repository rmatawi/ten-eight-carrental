import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'framework7-react';
import Badge from '../ui/Badge';
import RatingStars from '../ui/RatingStars';
import PriceDisplay from '../ui/PriceDisplay';

const CarComparison = ({ cars, onRemove }) => {
  if (!cars || cars.length === 0) {
    return null;
  }

  const specRows = [
    { label: 'Price Per Day', key: 'pricePerDay', type: 'price' },
    { label: 'Category', key: 'category', type: 'text' },
    { label: 'Brand', key: 'brand', type: 'text' },
    { label: 'Rating', key: 'rating', type: 'rating' },
    { label: 'Passengers', key: 'specifications.passengers', type: 'number' },
    { label: 'Luggage', key: 'specifications.luggage', type: 'text', suffix: ' Bags' },
    { label: 'Transmission', key: 'specifications.transmission', type: 'text' },
    { label: 'Fuel Type', key: 'specifications.fuelType', type: 'text' },
    { label: 'MPG', key: 'specifications.mpg', type: 'number', suffix: ' MPG' },
    { label: 'Engine', key: 'specifications.engine', type: 'text' },
    { label: 'Horsepower', key: 'specifications.horsepower', type: 'number', suffix: ' HP' }
  ];

  const getValue = (car, key) => {
    const keys = key.split('.');
    let value = car;
    for (const k of keys) {
      value = value?.[k];
    }
    return value;
  };

  return (
    <div className="cr-car-comparison">
      <div className="cr-comparison-table">
        {/* Header Row - Car Images and Names */}
        <div className="cr-comparison-row cr-comparison-header">
          <div className="cr-comparison-cell cr-label-cell">
            <div className="cr-comparison-label">Compare</div>
          </div>
          {cars.map((car) => (
            <div key={car.id} className="cr-comparison-cell cr-car-cell">
              <div className="cr-car-card">
                <button
                  className="cr-remove-btn"
                  onClick={() => onRemove(car.id)}
                  aria-label="Remove car"
                >
                  <i className="f7-icons">xmark_circle_fill</i>
                </button>
                <div className="cr-car-image">
                  <img src={car.thumbnail} alt={car.name} />
                  {car.popular && (
                    <div className="cr-car-badge">
                      <Badge text="Popular" color="accent" size="small" />
                    </div>
                  )}
                </div>
                <div className="cr-car-info">
                  <Badge text={car.category} color="gray" size="small" />
                  <h3 className="cr-car-name">{car.name}</h3>
                  <Link href={`/cars/${car.id}/`} className="cr-view-link">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specification Rows */}
        {specRows.map((spec, index) => (
          <div key={index} className="cr-comparison-row">
            <div className="cr-comparison-cell cr-label-cell">
              <div className="cr-comparison-label">{spec.label}</div>
            </div>
            {cars.map((car) => {
              const value = getValue(car, spec.key);
              return (
                <div key={car.id} className="cr-comparison-cell cr-value-cell">
                  {spec.type === 'price' && <PriceDisplay price={value} size="medium" />}
                  {spec.type === 'rating' && <RatingStars rating={value} size="small" showNumber />}
                  {spec.type === 'text' && <span>{value}{spec.suffix || ''}</span>}
                  {spec.type === 'number' && <span>{value}{spec.suffix || ''}</span>}
                </div>
              );
            })}
          </div>
        ))}

        {/* Action Row */}
        <div className="cr-comparison-row cr-comparison-footer">
          <div className="cr-comparison-cell cr-label-cell"></div>
          {cars.map((car) => (
            <div key={car.id} className="cr-comparison-cell cr-action-cell">
              <Link href={`/booking/${car.id}/`} className="cr-btn cr-btn-primary cr-btn-block">
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cr-car-comparison {
          overflow-x: auto;
        }

        .cr-comparison-table {
          min-width: 800px;
        }

        .cr-comparison-row {
          display: grid;
          grid-template-columns: 200px repeat(${cars.length}, 1fr);
          border-bottom: 1px solid var(--gray-200);
        }

        .cr-comparison-row:last-child {
          border-bottom: none;
        }

        .cr-comparison-cell {
          padding: var(--space-4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cr-label-cell {
          background: var(--gray-50);
          border-right: 1px solid var(--gray-200);
          justify-content: flex-start;
          position: sticky;
          left: 0;
          z-index: 10;
        }

        .cr-comparison-label {
          font-size: var(--text-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-700);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cr-car-cell {
          padding: var(--space-6) var(--space-4);
        }

        .cr-car-card {
          position: relative;
          width: 100%;
        }

        .cr-remove-btn {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--white);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: var(--shadow-sm);
        }

        .cr-remove-btn i {
          font-size: 24px;
          color: var(--error);
        }

        .cr-car-image {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: var(--space-3);
        }

        .cr-car-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cr-car-badge {
          position: absolute;
          top: var(--space-2);
          left: var(--space-2);
        }

        .cr-car-info {
          text-align: center;
        }

        .cr-car-name {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
          margin: var(--space-2) 0;
        }

        .cr-view-link {
          display: inline-block;
          font-size: var(--text-sm);
          color: var(--primary);
          text-decoration: none;
          margin-top: var(--space-2);
        }

        .cr-value-cell {
          font-size: var(--text-base);
          color: var(--gray-900);
          font-weight: var(--font-weight-medium);
        }

        .cr-action-cell {
          padding: var(--space-6) var(--space-4);
        }

        @media (max-width: 1024px) {
          .cr-comparison-row {
            grid-template-columns: 150px repeat(${cars.length}, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cr-comparison-table {
            min-width: 600px;
          }

          .cr-comparison-row {
            grid-template-columns: 120px repeat(${cars.length}, 1fr);
          }

          .cr-car-image {
            height: 120px;
          }

          .cr-car-name {
            font-size: var(--text-base);
          }

          .cr-comparison-cell {
            padding: var(--space-3);
          }

          .cr-value-cell {
            font-size: var(--text-sm);
          }
        }
      `}</style>
    </div>
  );
};

CarComparison.propTypes = {
  cars: PropTypes.array.isRequired,
  onRemove: PropTypes.func
};

export default CarComparison;
