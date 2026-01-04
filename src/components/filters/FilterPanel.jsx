import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Button } from 'framework7-react';
import { useStore } from 'framework7-react';
import PriceRangeSlider from './PriceRangeSlider';

const FilterPanel = ({ onFilterChange, onClearAll }) => {
  const filters = useStore('filters');
  const allCars = useStore('allCars');

  // Get unique values for filters
  const categories = [...new Set(allCars.map(car => car.category))];
  const brands = [...new Set(allCars.map(car => car.brand))].sort();
  const transmissions = [...new Set(allCars.map(car => car.specifications.transmission))];
  const fuelTypes = [...new Set(allCars.map(car => car.specifications.fuelType))];

  const toggleArrayFilter = (filterName, value) => {
    const currentValues = filters[filterName] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    onFilterChange(filterName, newValues);
  };

  const hasActiveFilters =
    filters.category?.length > 0 ||
    filters.brand?.length > 0 ||
    filters.transmission ||
    filters.fuelType?.length > 0 ||
    filters.seating ||
    (filters.priceRange && (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 300));

  return (
    <div className="cr-filter-panel">
      <div className="cr-filter-header">
        <h3 className="cr-filter-title">Filters</h3>
        {hasActiveFilters && (
          <Button small onClick={onClearAll} className="cr-clear-filters">
            Clear All
          </Button>
        )}
      </div>

      {/* Price Range */}
      <div className="cr-filter-section">
        <h4 className="cr-filter-section-title">Price Per Day</h4>
        <PriceRangeSlider
          value={filters.priceRange || [0, 300]}
          onChange={(value) => onFilterChange('priceRange', value)}
        />
      </div>

      {/* Category */}
      <div className="cr-filter-section">
        <h4 className="cr-filter-section-title">Vehicle Type</h4>
        <List className="cr-filter-list">
          {categories.map(category => (
            <ListItem
              key={category}
              checkbox
              title={category}
              checked={filters.category?.includes(category)}
              onChange={() => toggleArrayFilter('category', category)}
            />
          ))}
        </List>
      </div>

      {/* Brand */}
      <div className="cr-filter-section">
        <h4 className="cr-filter-section-title">Brand</h4>
        <List className="cr-filter-list">
          {brands.slice(0, 8).map(brand => (
            <ListItem
              key={brand}
              checkbox
              title={brand}
              checked={filters.brand?.includes(brand)}
              onChange={() => toggleArrayFilter('brand', brand)}
            />
          ))}
        </List>
      </div>

      {/* Transmission */}
      <div className="cr-filter-section">
        <h4 className="cr-filter-section-title">Transmission</h4>
        <List className="cr-filter-list">
          {transmissions.map(transmission => (
            <ListItem
              key={transmission}
              radio
              name="transmission"
              title={transmission}
              checked={filters.transmission === transmission}
              onChange={() => onFilterChange('transmission', transmission)}
            />
          ))}
          <ListItem
            radio
            name="transmission"
            title="Any"
            checked={!filters.transmission}
            onChange={() => onFilterChange('transmission', null)}
          />
        </List>
      </div>

      {/* Fuel Type */}
      <div className="cr-filter-section">
        <h4 className="cr-filter-section-title">Fuel Type</h4>
        <List className="cr-filter-list">
          {fuelTypes.map(fuelType => (
            <ListItem
              key={fuelType}
              checkbox
              title={fuelType}
              checked={filters.fuelType?.includes(fuelType)}
              onChange={() => toggleArrayFilter('fuelType', fuelType)}
            />
          ))}
        </List>
      </div>

      {/* Seating Capacity */}
      <div className="cr-filter-section">
        <h4 className="cr-filter-section-title">Minimum Seats</h4>
        <div className="cr-seating-options">
          {[4, 5, 7, 8].map(seats => (
            <button
              key={seats}
              className={`cr-seating-btn ${filters.seating === seats ? 'active' : ''}`}
              onClick={() => onFilterChange('seating', filters.seating === seats ? null : seats)}
            >
              {seats}+
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cr-filter-panel {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
          height: fit-content;
          position: sticky;
          top: var(--space-4);
        }

        .cr-filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-6);
        }

        .cr-filter-title {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: var(--font-weight-bold);
          color: var(--gray-900);
          margin: 0;
        }

        :global(.cr-clear-filters) {
          color: var(--primary) !important;
          font-size: var(--text-sm) !important;
        }

        .cr-filter-section {
          padding-bottom: var(--space-4);
          margin-bottom: var(--space-4);
          border-bottom: 1px solid var(--gray-200);
        }

        .cr-filter-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .cr-filter-section-title {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
          margin: 0 0 var(--space-3);
        }

        :global(.cr-filter-list) {
          margin: 0 !important;
        }

        :global(.cr-filter-list ul) {
          background: transparent !important;
        }

        .cr-seating-options {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-2);
        }

        .cr-seating-btn {
          padding: var(--space-2);
          background: var(--gray-100);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          font-weight: var(--font-weight-medium);
          color: var(--gray-700);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cr-seating-btn:hover {
          background: var(--gray-200);
        }

        .cr-seating-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }

        @media (max-width: 1024px) {
          .cr-filter-panel {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

FilterPanel.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired
};

export default FilterPanel;
