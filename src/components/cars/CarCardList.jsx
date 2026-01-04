import React from 'react';
import PropTypes from 'prop-types';
import CarCard from './CarCard';
import { CarCardSkeleton } from '../ui/Skeleton';

const CarCardList = ({ cars, loading = false, showCompareButton = false, onCompare }) => {
  if (loading) {
    return (
      <div className="cr-car-list">
        {[...Array(4)].map((_, i) => (
          <CarCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="cr-empty-state">
        <i className="f7-icons">car</i>
        <h3>No cars found</h3>
        <p>Try adjusting your filters to see more results</p>
      </div>
    );
  }

  return (
    <div className="cr-car-list">
      {cars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          viewMode="list"
          showCompareButton={showCompareButton}
          onCompare={onCompare}
        />
      ))}

      <style jsx>{`
        .cr-car-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .cr-empty-state {
          text-align: center;
          padding: var(--space-16) var(--space-4);
        }

        .cr-empty-state i {
          font-size: 80px;
          color: var(--gray-300);
          margin-bottom: var(--space-4);
        }

        .cr-empty-state h3 {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-700);
          margin-bottom: var(--space-2);
        }

        .cr-empty-state p {
          color: var(--gray-500);
          margin: 0;
        }
      `}</style>
    </div>
  );
};

CarCardList.propTypes = {
  cars: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  showCompareButton: PropTypes.bool,
  onCompare: PropTypes.func
};

export default CarCardList;
