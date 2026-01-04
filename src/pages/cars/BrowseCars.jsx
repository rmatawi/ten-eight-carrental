import React, { useEffect } from 'react';
import { Page, Navbar, NavTitle, Link, Block, f7 } from 'framework7-react';
import { useStore } from 'framework7-react';
import FilterPanel from '../../components/filters/FilterPanel';
import FilterChip from '../../components/filters/FilterChip';
import SortOptions from '../../components/filters/SortOptions';
import CarCardGrid from '../../components/cars/CarCardGrid';
import CarCardList from '../../components/cars/CarCardList';

const BrowseCars = () => {
  const filteredCars = useStore('filteredCars');
  const filters = useStore('filters');
  const viewMode = useStore('viewMode');
  const sortBy = useStore('sortBy');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const handleFilterChange = (filterName, value) => {
    f7.store.dispatch('setFilter', { filterName, value });
  };

  const handleClearAll = () => {
    f7.store.dispatch('clearFilters');
  };

  const handleRemoveFilter = (filterName, value) => {
    if (filterName === 'priceRange') {
      handleFilterChange('priceRange', [0, 300]);
    } else if (filterName === 'transmission' || filterName === 'seating') {
      handleFilterChange(filterName, null);
    } else {
      const currentValues = filters[filterName] || [];
      const newValues = currentValues.filter(v => v !== value);
      handleFilterChange(filterName, newValues);
    }
  };

  const handleSortChange = (sortValue) => {
    f7.store.dispatch('setSortBy', sortValue);
  };

  const handleViewModeToggle = () => {
    f7.store.dispatch('setViewMode', viewMode === 'grid' ? 'list' : 'grid');
  };

  const handleCompare = (car) => {
    const comparisonCars = f7.store.getters.comparisonCars.value;

    if (comparisonCars.find(c => c.id === car.id)) {
      f7.store.dispatch('removeFromComparison', car.id);
      f7.toast.create({
        text: `${car.name} removed from comparison`,
        closeTimeout: 2000,
        position: 'center'
      }).open();
    } else if (comparisonCars.length >= 3) {
      f7.toast.create({
        text: 'You can compare up to 3 cars only',
        closeTimeout: 2000,
        position: 'center'
      }).open();
    } else {
      f7.store.dispatch('addToComparison', car);
      f7.toast.create({
        text: `${car.name} added to comparison`,
        closeTimeout: 2000,
        position: 'center'
      }).open();
    }
  };

  const getActiveFilters = () => {
    const active = [];

    // Category filters
    if (filters.category?.length > 0) {
      filters.category.forEach(cat => {
        active.push({ type: 'category', label: cat, value: cat });
      });
    }

    // Brand filters
    if (filters.brand?.length > 0) {
      filters.brand.forEach(brand => {
        active.push({ type: 'brand', label: brand, value: brand });
      });
    }

    // Transmission filter
    if (filters.transmission) {
      active.push({ type: 'transmission', label: filters.transmission, value: filters.transmission });
    }

    // Fuel type filters
    if (filters.fuelType?.length > 0) {
      filters.fuelType.forEach(fuel => {
        active.push({ type: 'fuelType', label: fuel, value: fuel });
      });
    }

    // Seating filter
    if (filters.seating) {
      active.push({ type: 'seating', label: `${filters.seating}+ Seats`, value: filters.seating });
    }

    // Price range filter
    if (filters.priceRange && (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 300)) {
      active.push({
        type: 'priceRange',
        label: `$${filters.priceRange[0]} - $${filters.priceRange[1]}`,
        value: filters.priceRange
      });
    }

    return active;
  };

  const activeFilters = getActiveFilters();
  const hasActiveFilters = activeFilters.length > 0;

  return (
    <Page name="browse-cars" className="cr-browse-page">
      <Navbar>
        <NavTitle>Browse Cars</NavTitle>
        <Link slot="nav-right" iconF7="square_grid_2x2" onClick={handleViewModeToggle} />
      </Navbar>

      <div className="cr-browse-container">
        {/* Filter Sidebar */}
        <aside className="cr-browse-sidebar">
          <FilterPanel
            onFilterChange={handleFilterChange}
            onClearAll={handleClearAll}
          />
        </aside>

        {/* Main Content */}
        <main className="cr-browse-main">
          {/* Active Filters & Sort */}
          <div className="cr-browse-toolbar">
            <div className="cr-browse-toolbar-left">
              <h2 className="cr-browse-results-count">
                {filteredCars.length} {filteredCars.length === 1 ? 'Car' : 'Cars'} Available
              </h2>
              {hasActiveFilters && (
                <div className="cr-active-filters">
                  {activeFilters.map((filter, index) => (
                    <FilterChip
                      key={`${filter.type}-${index}`}
                      label={filter.label}
                      onRemove={() => handleRemoveFilter(filter.type, filter.value)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="cr-browse-toolbar-right">
              <SortOptions value={sortBy} onChange={handleSortChange} />
            </div>
          </div>

          {/* Car List/Grid */}
          <div className="cr-browse-results">
            {viewMode === 'grid' ? (
              <CarCardGrid
                cars={filteredCars}
                showCompareButton={true}
                onCompare={handleCompare}
              />
            ) : (
              <CarCardList
                cars={filteredCars}
                showCompareButton={true}
                onCompare={handleCompare}
              />
            )}
          </div>
        </main>
      </div>

      <style jsx>{`
        .cr-browse-container {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: var(--space-8);
          max-width: 1400px;
          margin: 0 auto;
          padding: var(--space-6) var(--space-4);
        }

        .cr-browse-sidebar {
          position: relative;
        }

        .cr-browse-main {
          min-width: 0;
        }

        .cr-browse-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--space-4);
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
        }

        .cr-browse-toolbar-left {
          flex: 1;
          min-width: 250px;
        }

        .cr-browse-results-count {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: var(--font-weight-bold);
          color: var(--gray-900);
          margin: 0 0 var(--space-3);
        }

        .cr-active-filters {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .cr-browse-toolbar-right {
          flex-shrink: 0;
        }

        .cr-browse-results {
          margin-top: var(--space-4);
        }

        /* Tablet - Hide sidebar, show filter button */
        @media (max-width: 1024px) {
          .cr-browse-container {
            grid-template-columns: 1fr;
            padding: var(--space-4);
          }

          .cr-browse-sidebar {
            display: none;
          }

          .cr-browse-results-count {
            font-size: var(--text-xl);
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .cr-browse-container {
            padding: var(--space-3);
            gap: var(--space-4);
          }

          .cr-browse-toolbar {
            flex-direction: column;
            align-items: stretch;
            gap: var(--space-3);
          }

          .cr-browse-toolbar-left {
            min-width: auto;
          }

          .cr-browse-results-count {
            font-size: var(--text-lg);
            margin-bottom: var(--space-2);
          }

          .cr-browse-toolbar-right {
            width: 100%;
          }
        }
      `}</style>
    </Page>
  );
};

export default BrowseCars;
