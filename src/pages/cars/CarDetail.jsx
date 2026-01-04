import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight, Link, Block, f7 } from 'framework7-react';
import { useStore } from 'framework7-react';
import CarDetailHero from '../../components/cars/CarDetailHero';
import CarSpecifications from '../../components/cars/CarSpecifications';
import CarReviews from '../../components/cars/CarReviews';
import Badge from '../../components/ui/Badge';
import RatingStars from '../../components/ui/RatingStars';
import PriceDisplay from '../../components/ui/PriceDisplay';

const CarDetail = ({ f7route }) => {
  const { carId } = f7route.params;
  const cars = useStore('cars');
  const car = cars.find(c => c.id === carId);
  const comparisonCars = useStore('comparisonCars');

  if (!car) {
    return (
      <Page name="car-detail">
        <Navbar>
          <NavLeft>
            <Link iconF7="chevron_left" back />
          </NavLeft>
          <NavTitle>Car Not Found</NavTitle>
        </Navbar>
        <Block className="cr-error-state">
          <div className="cr-error-content">
            <i className="f7-icons">xmark_circle_fill</i>
            <h2>Car Not Found</h2>
            <p>The car you're looking for doesn't exist.</p>
            <Link href="/cars/" className="cr-btn cr-btn-primary">
              Browse All Cars
            </Link>
          </div>

          <style jsx>{`
            .cr-error-content {
              text-align: center;
              padding: var(--space-16) var(--space-4);
            }

            .cr-error-content i {
              font-size: 80px;
              color: var(--gray-300);
              margin-bottom: var(--space-4);
            }

            .cr-error-content h2 {
              font-family: var(--font-heading);
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-bold);
              color: var(--gray-900);
              margin: 0 0 var(--space-2);
            }

            .cr-error-content p {
              color: var(--gray-600);
              margin: 0 0 var(--space-6);
            }
          `}</style>
        </Block>
      </Page>
    );
  }

  const isInComparison = comparisonCars.find(c => c.id === car.id);

  const handleBookNow = () => {
    f7.views.main.router.navigate(`/booking/${car.id}/`);
  };

  const handleCompare = () => {
    if (isInComparison) {
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

  return (
    <Page name="car-detail" className="cr-car-detail-page">
      <Navbar>
        <NavLeft>
          <Link iconF7="chevron_left" back />
        </NavLeft>
        <NavTitle>{car.name}</NavTitle>
        <NavRight>
          <Link iconF7="heart" />
        </NavRight>
      </Navbar>

      <div className="cr-car-detail-container">
        {/* Hero Section with Images */}
        <CarDetailHero car={car} />

        {/* Car Info Header */}
        <div className="cr-car-header">
          <div className="cr-car-header-left">
            <div className="cr-car-badges">
              <Badge text={car.category} color="gray" size="small" />
              {car.popular && <Badge text="Popular" color="accent" size="small" />}
            </div>
            <h1 className="cr-car-name">{car.name}</h1>
            <div className="cr-car-rating">
              <RatingStars rating={car.rating} size="medium" showNumber />
              <span className="cr-review-count">({car.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="cr-car-header-right">
            <PriceDisplay price={car.pricePerDay} period="day" size="xlarge" />
          </div>
        </div>

        {/* Description */}
        {car.description && (
          <div className="cr-car-description">
            <h3>About This Car</h3>
            <p>{car.description}</p>
          </div>
        )}

        {/* Specifications */}
        <CarSpecifications car={car} />

        {/* Reviews */}
        <CarReviews carId={car.id} />

        {/* Sticky Bottom Bar */}
        <div className="cr-detail-bottom-bar">
          <div className="cr-bottom-bar-content">
            <div className="cr-bottom-bar-left">
              <PriceDisplay price={car.pricePerDay} period="day" size="large" />
            </div>
            <div className="cr-bottom-bar-right">
              <button
                className={`cr-btn ${isInComparison ? 'cr-btn-outline-secondary' : 'cr-btn-ghost'}`}
                onClick={handleCompare}
              >
                <i className="f7-icons">arrow_left_arrow_right</i>
                {isInComparison ? 'Remove' : 'Compare'}
              </button>
              <button className="cr-btn cr-btn-primary" onClick={handleBookNow}>
                <i className="f7-icons">calendar</i>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cr-car-detail-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-4) var(--space-4) 100px;
        }

        .cr-car-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--space-6);
          margin-bottom: var(--space-6);
          padding: var(--space-6);
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .cr-car-header-left {
          flex: 1;
        }

        .cr-car-badges {
          display: flex;
          gap: var(--space-2);
          margin-bottom: var(--space-3);
        }

        .cr-car-name {
          font-family: var(--font-heading);
          font-size: var(--text-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--gray-900);
          margin: 0 0 var(--space-3);
        }

        .cr-car-rating {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .cr-review-count {
          font-size: var(--text-sm);
          color: var(--gray-500);
        }

        .cr-car-header-right {
          text-align: right;
        }

        .cr-car-description {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
          margin-bottom: var(--space-6);
        }

        .cr-car-description h3 {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          color: var(--gray-900);
          margin: 0 0 var(--space-3);
        }

        .cr-car-description p {
          margin: 0;
          color: var(--gray-700);
          line-height: 1.7;
        }

        :global(.cr-car-detail-page .cr-car-specifications),
        :global(.cr-car-detail-page .cr-car-reviews) {
          margin-bottom: var(--space-6);
        }

        .cr-detail-bottom-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--white);
          border-top: 1px solid var(--gray-200);
          box-shadow: var(--shadow-lg);
          z-index: 100;
        }

        .cr-bottom-bar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-4);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-4);
        }

        .cr-bottom-bar-left {
          flex-shrink: 0;
        }

        .cr-bottom-bar-right {
          display: flex;
          gap: var(--space-3);
        }

        .cr-bottom-bar-right button {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .cr-bottom-bar-right button i {
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .cr-car-detail-container {
            padding: var(--space-3) var(--space-3) 120px;
          }

          .cr-car-header {
            flex-direction: column;
            padding: var(--space-4);
          }

          .cr-car-header-right {
            width: 100%;
            text-align: left;
          }

          .cr-car-name {
            font-size: var(--text-2xl);
          }

          .cr-car-description {
            padding: var(--space-4);
          }

          .cr-bottom-bar-content {
            flex-direction: column;
            align-items: stretch;
          }

          .cr-bottom-bar-right {
            width: 100%;
          }

          .cr-bottom-bar-right button {
            flex: 1;
          }
        }
      `}</style>
    </Page>
  );
};

export default CarDetail;
