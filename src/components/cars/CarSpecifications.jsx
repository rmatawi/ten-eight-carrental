import React from 'react';
import PropTypes from 'prop-types';

const CarSpecifications = ({ car }) => {
  const specs = [
    {
      icon: 'person_2_fill',
      label: 'Passengers',
      value: car.specifications.passengers
    },
    {
      icon: 'bag_fill',
      label: 'Luggage',
      value: `${car.specifications.luggage} Bags`
    },
    {
      icon: 'gear_alt_fill',
      label: 'Transmission',
      value: car.specifications.transmission
    },
    {
      icon: 'bolt_fill',
      label: 'Fuel Type',
      value: car.specifications.fuelType
    },
    {
      icon: 'speedometer',
      label: 'MPG',
      value: `${car.specifications.mpg} MPG`
    },
    {
      icon: 'car_fill',
      label: 'Engine',
      value: car.specifications.engine
    },
    {
      icon: 'gauge',
      label: 'Horsepower',
      value: `${car.specifications.horsepower} HP`
    }
  ];

  return (
    <div className="cr-car-specifications">
      <h3 className="cr-spec-title">Specifications</h3>

      <div className="cr-spec-grid">
        {specs.map((spec, index) => (
          <div key={index} className="cr-spec-item">
            <div className="cr-spec-icon">
              <i className="f7-icons">{spec.icon}</i>
            </div>
            <div className="cr-spec-content">
              <div className="cr-spec-label">{spec.label}</div>
              <div className="cr-spec-value">{spec.value}</div>
            </div>
          </div>
        ))}
      </div>

      {car.features && car.features.length > 0 && (
        <>
          <h3 className="cr-features-title">Features & Amenities</h3>
          <div className="cr-features-list">
            {car.features.map((feature, index) => (
              <div key={index} className="cr-feature-item">
                <i className="f7-icons">checkmark_circle_fill</i>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </>
      )}

      <style jsx>{`
        .cr-car-specifications {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
        }

        .cr-spec-title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          color: var(--gray-900);
          margin: 0 0 var(--space-4);
        }

        .cr-spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
          margin-bottom: var(--space-6);
        }

        .cr-spec-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3);
          background: var(--gray-50);
          border-radius: var(--radius-md);
          border: 1px solid var(--gray-200);
        }

        .cr-spec-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--primary-light), var(--primary));
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .cr-spec-icon i {
          font-size: 22px;
          color: var(--white);
        }

        .cr-spec-content {
          flex: 1;
        }

        .cr-spec-label {
          font-size: var(--text-xs);
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--space-1);
        }

        .cr-spec-value {
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
        }

        .cr-features-title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          color: var(--gray-900);
          margin: 0 0 var(--space-4);
          padding-top: var(--space-4);
          border-top: 1px solid var(--gray-200);
        }

        .cr-features-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: var(--space-3);
        }

        .cr-feature-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--gray-700);
        }

        .cr-feature-item i {
          font-size: 18px;
          color: var(--primary);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .cr-car-specifications {
            padding: var(--space-4);
          }

          .cr-spec-grid {
            grid-template-columns: 1fr;
          }

          .cr-features-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

CarSpecifications.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarSpecifications;
