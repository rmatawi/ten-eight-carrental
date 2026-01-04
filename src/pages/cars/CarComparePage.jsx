import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, Link, Block, f7 } from 'framework7-react';
import { useStore } from 'framework7-react';
import CarComparison from '../../components/cars/CarComparison';

const CarComparePage = () => {
  const comparisonCars = useStore('comparisonCars');

  const handleRemove = (carId) => {
    f7.store.dispatch('removeFromComparison', carId);

    // If no cars left, go back
    const remaining = f7.store.getters.comparisonCars.value;
    if (remaining.length === 0) {
      f7.views.main.router.back();
    }
  };

  const handleClearAll = () => {
    f7.dialog.confirm(
      'Are you sure you want to clear all cars from comparison?',
      'Clear Comparison',
      () => {
        f7.store.dispatch('clearComparison');
        f7.views.main.router.back();
      }
    );
  };

  if (!comparisonCars || comparisonCars.length === 0) {
    return (
      <Page name="car-compare">
        <Navbar>
          <NavLeft>
            <Link iconF7="chevron_left" back />
          </NavLeft>
          <NavTitle>Compare Cars</NavTitle>
        </Navbar>

        <Block className="cr-empty-comparison">
          <div className="cr-empty-content">
            <i className="f7-icons">arrow_left_arrow_right_circle</i>
            <h2>No Cars to Compare</h2>
            <p>Add cars to comparison from the browse page to see them side by side.</p>
            <Link href="/cars/" className="cr-btn cr-btn-primary">
              Browse Cars
            </Link>
          </div>

          <style jsx>{`
            .cr-empty-content {
              text-align: center;
              padding: var(--space-16) var(--space-4);
            }

            .cr-empty-content i {
              font-size: 80px;
              color: var(--gray-300);
              margin-bottom: var(--space-4);
            }

            .cr-empty-content h2 {
              font-family: var(--font-heading);
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-bold);
              color: var(--gray-900);
              margin: 0 0 var(--space-2);
            }

            .cr-empty-content p {
              color: var(--gray-600);
              margin: 0 0 var(--space-6);
            }
          `}</style>
        </Block>
      </Page>
    );
  }

  return (
    <Page name="car-compare" className="cr-compare-page">
      <Navbar>
        <NavLeft>
          <Link iconF7="chevron_left" back />
        </NavLeft>
        <NavTitle>Compare Cars ({comparisonCars.length})</NavTitle>
        {comparisonCars.length > 0 && (
          <Link slot="nav-right" onClick={handleClearAll}>
            Clear All
          </Link>
        )}
      </Navbar>

      <div className="cr-compare-container">
        <div className="cr-compare-header">
          <h1>Compare Cars Side by Side</h1>
          <p>Compare specifications, features, and prices to make the best choice.</p>
        </div>

        <div className="cr-comparison-wrapper">
          <CarComparison cars={comparisonCars} onRemove={handleRemove} />
        </div>

        {comparisonCars.length < 3 && (
          <div className="cr-add-more">
            <div className="cr-add-more-content">
              <i className="f7-icons">plus_circle_fill</i>
              <div>
                <h3>Add More Cars</h3>
                <p>You can compare up to 3 cars at once. Add {3 - comparisonCars.length} more to compare.</p>
              </div>
              <Link href="/cars/" className="cr-btn cr-btn-outline-primary">
                Browse Cars
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .cr-compare-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: var(--space-4);
        }

        .cr-compare-header {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .cr-compare-header h1 {
          font-family: var(--font-heading);
          font-size: var(--text-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--gray-900);
          margin: 0 0 var(--space-2);
        }

        .cr-compare-header p {
          font-size: var(--text-lg);
          color: var(--gray-600);
          margin: 0;
        }

        .cr-comparison-wrapper {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          margin-bottom: var(--space-6);
        }

        .cr-add-more {
          background: var(--gray-50);
          border: 2px dashed var(--gray-300);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
        }

        .cr-add-more-content {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          justify-content: space-between;
        }

        .cr-add-more-content i {
          font-size: 48px;
          color: var(--primary);
          flex-shrink: 0;
        }

        .cr-add-more-content > div {
          flex: 1;
        }

        .cr-add-more-content h3 {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
          margin: 0 0 var(--space-1);
        }

        .cr-add-more-content p {
          margin: 0;
          color: var(--gray-600);
          font-size: var(--text-sm);
        }

        @media (max-width: 768px) {
          .cr-compare-container {
            padding: var(--space-3);
          }

          .cr-compare-header h1 {
            font-size: var(--text-2xl);
          }

          .cr-compare-header p {
            font-size: var(--text-base);
          }

          .cr-add-more-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </Page>
  );
};

export default CarComparePage;
